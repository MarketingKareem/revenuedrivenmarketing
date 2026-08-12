// Generates the static, per-pillar OG/hero images in public/og/.
// Run manually and commit the output — this is NOT part of `npm run build`,
// since it renders SVG text via sharp/libvips, which depends on fonts being
// installed on whatever machine runs it. Rendering once locally and shipping
// the resulting PNGs avoids depending on font availability in Cloudflare's
// build container.
//
// Usage: node scripts/generate-og-images.mjs

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/og');

const COLORS = {
	bg: '#ffffff',
	bgSubtle: '#f6f7fb',
	text: '#12131a',
	textMuted: '#565a6e',
	accent: '#1d4ed8',
	border: '#e3e5ee',
};

const FONT_STACK = '-apple-system, "Segoe UI", Helvetica, Arial, sans-serif';

const pillars = [
	{ slug: 'google-ads', label: 'Google Ads' },
	{ slug: 'meta-ads', label: 'Meta Ads' },
	{ slug: 'attribution', label: 'Attribution' },
	{ slug: 'case-study', label: 'Case Study' },
	{ slug: 'general', label: 'General' },
];

// Three short attribution-path "chains" of connected touchpoint nodes,
// each ending in a solid, larger endpoint -- a visual echo of the
// touchpoint-timeline diagrams used inside posts, and a literal picture
// of what "revenue attribution" means: touchpoints connecting to an outcome.
const chains = [
	[
		{ x: 760, y: 130 },
		{ x: 855, y: 95 },
		{ x: 955, y: 150, endpoint: true },
	],
	[
		{ x: 735, y: 330 },
		{ x: 815, y: 395 },
		{ x: 935, y: 350, endpoint: true },
	],
	[
		{ x: 775, y: 525 },
		{ x: 890, y: 565 },
		{ x: 1015, y: 505, endpoint: true },
	],
];

const dust = [
	{ x: 700, y: 240, r: 3 },
	{ x: 1060, y: 220, r: 4 },
	{ x: 1090, y: 380, r: 3 },
	{ x: 680, y: 460, r: 3 },
	{ x: 1000, y: 90, r: 3 },
	{ x: 1120, y: 480, r: 4 },
];

function escapeXml(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function chainSvg(chain) {
	const lines = chain
		.slice(1)
		.map(
			(node, i) =>
				`<line x1="${chain[i].x}" y1="${chain[i].y}" x2="${node.x}" y2="${node.y}" stroke="${COLORS.accent}" stroke-opacity="0.28" stroke-width="1.5" />`
		)
		.join('\n\t');
	const nodes = chain
		.map((node) =>
			node.endpoint
				? `<circle cx="${node.x}" cy="${node.y}" r="9" fill="${COLORS.accent}" stroke="${COLORS.bg}" stroke-width="3" />`
				: `<circle cx="${node.x}" cy="${node.y}" r="5" fill="${COLORS.accent}" fill-opacity="0.35" />`
		)
		.join('\n\t');
	return `${lines}\n\t${nodes}`;
}

function cardSvg(label) {
	const width = 1200;
	const height = 630;

	const chainsMarkup = chains.map(chainSvg).join('\n\t');
	const dustMarkup = dust
		.map((d) => `<circle cx="${d.x}" cy="${d.y}" r="${d.r}" fill="${COLORS.accent}" fill-opacity="0.18" />`)
		.join('\n\t');

	return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="bg" x1="0" y1="0" x2="${width}" y2="${height}" gradientUnits="userSpaceOnUse">
			<stop offset="0" stop-color="${COLORS.bg}" />
			<stop offset="1" stop-color="${COLORS.bgSubtle}" />
		</linearGradient>
		<radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
			<stop offset="0" stop-color="${COLORS.accent}" stop-opacity="0.10" />
			<stop offset="1" stop-color="${COLORS.accent}" stop-opacity="0" />
		</radialGradient>
	</defs>

	<rect width="${width}" height="${height}" fill="url(#bg)" />
	<circle cx="920" cy="320" r="380" fill="url(#glow)" />

	${dustMarkup}
	${chainsMarkup}

	<text x="80" y="112" font-family='${FONT_STACK}' font-size="21" font-weight="700" letter-spacing="3" fill="${COLORS.textMuted}">REVENUE DRIVEN MARKETING</text>
	<rect x="80" y="150" width="56" height="5" rx="2.5" fill="${COLORS.accent}" />

	<text x="76" y="290" font-family='${FONT_STACK}' font-size="98" font-weight="800" letter-spacing="-3" fill="${COLORS.text}">${escapeXml(label)}</text>

	<text x="80" y="546" font-family='${FONT_STACK}' font-size="28" font-weight="800" letter-spacing="-0.5" fill="${COLORS.text}">Revenue<tspan fill="${COLORS.accent}">Driven</tspan>Marketing</text>
</svg>`.trim();
}

async function main() {
	await mkdir(outDir, { recursive: true });

	for (const { slug, label } of pillars) {
		const svg = cardSvg(label);
		const outPath = path.join(outDir, `${slug}.png`);
		await sharp(Buffer.from(svg)).png().toFile(outPath);
		console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

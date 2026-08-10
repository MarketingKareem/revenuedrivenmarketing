// Generates the static, per-pillar OG/hero images in public/og/.
// Run manually and commit the output — this is NOT part of `npm run build`,
// since it renders SVG text via sharp/libvips, which depends on fonts being
// installed on whatever machine runs it. Rendering once locally and shipping
// the resulting PNGs avoids depending on font availability in Cloudflare's
// build container.
//
// Usage: node scripts/generate-og-images.mjs

import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/og');

const COLORS = {
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

function escapeXml(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

function cardSvg(label) {
	const width = 1200;
	const height = 630;
	// Accent panel is a full-bleed angled shape on the right third.
	const cut = width * 0.68;

	return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
	<rect width="${width}" height="${height}" fill="${COLORS.bgSubtle}" />
	<polygon points="${cut},0 ${width},0 ${width},${height} ${cut - 120},${height}" fill="${COLORS.accent}" />

	<text x="80" y="120" font-family='${FONT_STACK}' font-size="22" font-weight="700" letter-spacing="3" fill="${COLORS.textMuted}">REVENUE DRIVEN MARKETING</text>

	<rect x="80" y="160" width="64" height="6" rx="3" fill="${COLORS.accent}" />

	<text x="80" y="300" font-family='${FONT_STACK}' font-size="96" font-weight="800" letter-spacing="-2" fill="${COLORS.text}">${escapeXml(label)}</text>

	<text x="80" y="540" font-family='${FONT_STACK}' font-size="30" font-weight="800" letter-spacing="-0.5" fill="${COLORS.text}">Revenue<tspan fill="${COLORS.accent}">Driven</tspan>Marketing</text>
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

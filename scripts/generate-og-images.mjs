// Generates the static, per-pillar OG/hero images in public/og/.
// Run manually and commit the output — this is NOT part of `npm run build`,
// since it renders SVG text via sharp/libvips, which depends on fonts being
// installed on whatever machine runs it. Rendering once locally and shipping
// the resulting PNGs avoids depending on font availability in Cloudflare's
// build container.
//
// Design system: "Ledger" — grounded in what this brand actually does
// (reconciling what ad platforms report against what actually happened
// financially). Warm paper + ruled lines + a torn statement stub, instead
// of the generic blue/white SaaS-card look.
//
// Usage: node scripts/generate-og-images.mjs

import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/og');

const COLORS = {
	ink: '#16150F',
	paper: '#F6F1E7',
	paperWhite: '#FFFDF9',
	rule: '#DDD3BE',
	navy: '#16204A',
	signal: '#3355FF',
	muted: '#8C8368',
};

const DISPLAY = 'Avenir Next Condensed';
const BODY = 'Helvetica Neue';
const DATA = 'Menlo';

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

// Ruled "ledger paper" lines across the full card, subtle.
function ruledLines(width, height, step) {
	const lines = [];
	for (let y = 96; y < height; y += step) {
		lines.push(
			`<line x1="0" y1="${y}" x2="${width}" y2="${y}" stroke="${COLORS.rule}" stroke-opacity="0.55" stroke-width="1" />`
		);
	}
	return lines.join('\n\t');
}

// The signature element: a torn statement stub, rotated, showing the
// brand's actual thesis (reported vs. actual) in miniature -- the same
// idea on every card, since that reconciliation is the constant across
// every pillar this site writes about.
function statementStub() {
	const w = 348;
	const h = 234;
	const teeth = 14;
	const toothWidth = w / teeth;
	let top = `M0,10`;
	for (let i = 0; i < teeth; i++) {
		const x = (i + 1) * toothWidth;
		const peak = i % 2 === 0 ? 0 : 10;
		top += ` L${x - toothWidth / 2},${peak} L${x},10`;
	}
	const torn = `${top} L${w},${h} L0,${h} Z`;

	return `
	<g transform="translate(792,318) rotate(-4)">
		<path d="${torn}" transform="translate(10,12)" fill="${COLORS.ink}" opacity="0.14" />
		<path d="${torn}" fill="${COLORS.paperWhite}" stroke="${COLORS.rule}" stroke-width="1.5" />

		<text x="24" y="46" font-family="${BODY}" font-weight="700" font-size="14" letter-spacing="2" fill="${COLORS.muted}">RECONCILED CHECK</text>
		<line x1="24" y1="58" x2="${w - 24}" y2="58" stroke="${COLORS.rule}" stroke-width="1" />

		<text x="24" y="94" font-family="${BODY}" font-weight="500" font-size="14" fill="${COLORS.muted}">REPORTED</text>
		<text x="${w - 24}" y="100" text-anchor="end" font-family="${DATA}" font-size="28" fill="${COLORS.muted}">$1,240</text>
		<line x1="${w - 130}" y1="94" x2="${w - 24}" y2="94" stroke="${COLORS.muted}" stroke-width="1.5" />

		<text x="24" y="150" font-family="${BODY}" font-weight="700" font-size="14" fill="${COLORS.navy}">ACTUAL</text>
		<text x="${w - 24}" y="158" text-anchor="end" font-family="${DATA}" font-weight="bold" font-size="38" fill="${COLORS.signal}">$860</text>
		<line x1="${w - 150}" y1="168" x2="${w - 24}" y2="168" stroke="${COLORS.signal}" stroke-width="2" />

		<text x="24" y="204" font-family="${BODY}" font-weight="500" font-size="13" fill="${COLORS.muted}">The gap is the story.</text>
	</g>`;
}

function cardSvg(label) {
	const width = 1200;
	const height = 630;

	return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
	<rect width="${width}" height="${height}" fill="${COLORS.paper}" />
	${ruledLines(width, height, 44)}

	<text x="72" y="98" font-family="${BODY}" font-weight="700" font-size="20" letter-spacing="3" fill="${COLORS.muted}">REVENUE DRIVEN MARKETING</text>
	<rect x="72" y="122" width="52" height="5" rx="2.5" fill="${COLORS.signal}" />

	<text x="66" y="332" font-family="${DISPLAY}" font-weight="800" font-size="150" letter-spacing="-2" fill="${COLORS.navy}">${escapeXml(label)}</text>

	${statementStub()}

	<text x="72" y="556" font-family="${DISPLAY}" font-weight="700" font-size="30" letter-spacing="-0.3" fill="${COLORS.ink}">Revenue<tspan fill="${COLORS.signal}">Driven</tspan>Marketing</text>
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

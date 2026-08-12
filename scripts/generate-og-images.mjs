// Generates a hero/OG image per blog post in public/og/.
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
// One image per post (not per pillar) so the card can show that post's own
// publish date and title, not just its category. Run this after drafting or
// editing any post.
//
// Usage: node scripts/generate-og-images.mjs

import sharp from 'sharp';
import { mkdir, readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../public/og');
const postsDir = path.join(__dirname, '../src/content/blog');

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

const PILLAR_LABELS = {
	'google-ads': 'Google Ads',
	'meta-ads': 'Meta Ads',
	attribution: 'Attribution',
	'case-study': 'Case Study',
	general: 'General',
};

const MONTHS = [
	'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

function escapeXml(value) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&apos;');
}

// Minimal frontmatter parser -- this schema is flat scalars only
// (title/description/pubDate/pillar/draft), so a hand-rolled parser avoids
// depending on an undeclared transitive package for something this simple.
function parseFrontmatter(raw) {
	const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
	if (!match) return null;
	const data = {};
	for (const line of match[1].split(/\r?\n/)) {
		const m = line.match(/^([a-zA-Z]+):\s*(.*)$/);
		if (!m) continue;
		let value = m[2].trim();
		if (
			(value.startsWith("'") && value.endsWith("'")) ||
			(value.startsWith('"') && value.endsWith('"'))
		) {
			value = value.slice(1, -1).replace(/''/g, "'");
		}
		data[m[1]] = value;
	}
	return data;
}

async function loadPosts() {
	const files = (await readdir(postsDir)).filter((f) => f.endsWith('.md'));
	const posts = [];
	for (const file of files) {
		const raw = await readFile(path.join(postsDir, file), 'utf-8');
		const data = parseFrontmatter(raw);
		if (!data || !data.title) continue;
		posts.push({ slug: file.replace(/\.md$/, ''), ...data });
	}
	return posts;
}

function formatDate(pubDate) {
	const d = new Date(pubDate);
	if (Number.isNaN(d.getTime())) return '';
	return `${MONTHS[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
}

// Greedy word-wrap by estimated character width -- there's no real text
// measurement available when building an SVG string, so this is a heuristic
// (Barlow-ish average glyph width) rather than exact. Good enough at these
// sizes; verify visually for any title that runs unusually long.
function wrapText(text, maxCharsPerLine, maxLines) {
	const words = text.split(' ');
	const lines = [];
	let current = '';
	for (const word of words) {
		const candidate = current ? `${current} ${word}` : word;
		if (candidate.length > maxCharsPerLine && current) {
			lines.push(current);
			current = word;
		} else {
			current = candidate;
		}
	}
	if (current) lines.push(current);
	if (lines.length > maxLines) {
		const truncated = lines.slice(0, maxLines);
		truncated[maxLines - 1] = truncated[maxLines - 1].replace(/\s*\S*$/, '') + '…';
		return truncated;
	}
	return lines;
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

function cardSvg(post) {
	const width = 1200;
	const height = 630;
	const pillarLabel = PILLAR_LABELS[post.pillar] || post.pillar;
	const dateLabel = formatDate(post.pubDate);

	const titleLines = wrapText(post.title, 48, 2);
	const titleMarkup = titleLines
		.map((line, i) => `<tspan x="66" dy="${i === 0 ? 0 : 40}">${escapeXml(line)}</tspan>`)
		.join('');

	return `
<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
	<rect width="${width}" height="${height}" fill="${COLORS.paper}" />
	${ruledLines(width, height, 44)}

	<text x="72" y="98" font-family="${BODY}" font-weight="700" font-size="20" letter-spacing="3" fill="${COLORS.muted}">${escapeXml(dateLabel)}</text>
	<rect x="72" y="122" width="52" height="5" rx="2.5" fill="${COLORS.signal}" />

	<text x="66" y="248" font-family="${DISPLAY}" font-weight="800" font-size="110" letter-spacing="-2" fill="${COLORS.navy}">${escapeXml(pillarLabel)}</text>

	<text y="312" font-family="${BODY}" font-weight="500" font-size="32" fill="${COLORS.ink}">${titleMarkup}</text>

	${statementStub()}

	<text x="72" y="556" font-family="${DISPLAY}" font-weight="700" font-size="30" letter-spacing="-0.3" fill="${COLORS.ink}">Revenue<tspan fill="${COLORS.signal}">Driven</tspan>Marketing</text>
</svg>`.trim();
}

async function main() {
	await mkdir(outDir, { recursive: true });
	const posts = await loadPosts();

	if (posts.length === 0) {
		console.log('No posts found in src/content/blog -- nothing to generate.');
		return;
	}

	for (const post of posts) {
		const svg = cardSvg(post);
		const outPath = path.join(outDir, `${post.slug}.png`);
		await sharp(Buffer.from(svg)).png().toFile(outPath);
		console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});

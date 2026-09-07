---
title: 'The Real Google Ads Audit Checklist (Not Impression Share)'
description: 'A real Google Ads audit checklist: conversion tracking, account structure, wasted spend, and the checks most "audits" skip entirely.'
pubDate: 2026-09-06
pillar: google-ads
draft: false
---

Most things called a "Google Ads audit" are a five-minute scroll through the campaigns tab: check impression share, glance at Quality Scores, maybe skim the search terms report if there's time. That's not an audit. That's a status check.

**In short:** a real Google Ads audit checklist has eleven parts: conversion tracking accuracy, account structure, Quality Score diagnostics, the search term report, ad copy and asset quality, Performance Max vs. brand search cannibalization, shared library settings, audience signal freshness, bid strategy fit, budget pacing and device/location waste, and ad-to-landing-page match, ending in a findings list ranked by dollar impact. Skip the first one and every later finding is unreliable, since it's built on data you haven't confirmed is real.

A real audit starts from a different question: is this account's data even trustworthy, and is its structure built around how customers actually buy? Here's what that actually involves.

## Start With Conversion Tracking, Not Campaigns

If conversion tracking is wrong, every other finding in the audit is built on a bad foundation. Before looking at a single campaign, check:

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> Each conversion action fires once per real conversion, not multiple times through duplicate tags or a GA4 import stacked on top of a native tag</label></li>
	<li><label><input type="checkbox" /> "Primary" conversions are actual business outcomes (purchases, qualified leads), not page views, scroll events, or button clicks that Smart Bidding will happily over-optimize toward</label></li>
	<li><label><input type="checkbox" /> Conversion values are set accurately, since Target ROAS bidding is only as good as the dollar values feeding it</label></li>
</ul>

<style>
	.audit-checklist {
		list-style: none;
		margin: 1.5rem 0;
		padding: 0;
		border-top: 1px solid var(--ledger-rule);
	}
	.audit-checklist li {
		border-bottom: 1px solid var(--ledger-rule);
	}
	.audit-checklist label {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.85rem 0.25rem;
		cursor: pointer;
		font-size: 1rem;
		line-height: 1.5;
		color: var(--ledger-ink);
	}
	.audit-checklist input[type='checkbox'] {
		flex-shrink: 0;
		width: 1.1rem;
		height: 1.1rem;
		margin-top: 0.2rem;
		accent-color: var(--ledger-signal);
		cursor: pointer;
	}
	.audit-checklist li:has(input:checked) label {
		color: var(--ledger-muted);
		text-decoration: line-through;
		text-decoration-color: var(--ledger-rule);
	}
</style>

This step alone regularly turns up the single biggest issue in an account, and it's the one most "audits" skip because it's not visible from the campaigns tab.

Here's what it looks like in practice. A 40-location home services client came to us reporting 62 leads last month in Google Ads. Their CRM showed 31 booked jobs. Both numbers were technically accurate. The gap was a native "Submit Lead Form" conversion action counting every form submission, stacked on top of a GA4 event import counting the same submissions again through a different tag, on a form that also fired once on page load due to a JavaScript bug that re-triggered the event for anyone who refreshed the confirmation page. Three separate counting paths, one real lead. Target CPA bidding had spent three months optimizing toward a cost-per-lead number that was roughly half of reality, which meant it had been bidding up on the wrong signal the entire time.

None of that is visible from the campaigns tab. It only shows up when you open Conversions > Summary, check the "counting" column on each action, and cross-reference the resulting number against a source of truth the ad platform doesn't control.

## Review Account Structure Against Real Customer Behavior

Campaign and ad group structure often reflects how the account happened to get built, not how customers actually search and buy. An account that launched with three broad campaigns because that was fast to set up, then had ad groups bolted on over two years as new products launched, usually has keywords competing against each other for the same auction and Smart Bidding signals diluted across ad groups that should have been split apart. Check whether:

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> Campaigns are organized around distinct business goals or budgets, not arbitrary groupings</label></li>
	<li><label><input type="checkbox" /> Match types and keyword themes reflect genuine search intent rather than maximum possible reach</label></li>
	<li><label><input type="checkbox" /> Negative keyword lists have been maintained on an ongoing basis, not set once at launch and forgotten</label></li>
	<li><label><input type="checkbox" /> Ad groups are tightly themed (5-15 closely related keywords), not broad grab-bags forcing one generic ad to serve unrelated searches</label></li>
</ul>

A quick diagnostic: pull the "Auction insights" report at the ad group level. If two ad groups in the same account show up competing against each other in the same auctions, that's internal cannibalization; you're bidding against yourself and paying the auction's second-price mechanism to do it.

## Audit Quality Score and What's Actually Driving It

Quality Score is a 1-10 diagnostic estimate, not a bidding lever you can set directly, but it's the clearest signal Google gives you for why a CPC is higher than it should be. It's built from three components, each rated below average, average, or above average: expected click-through rate, ad relevance, and landing page experience. A "below average" landing page experience rating alone can mean paying 20-30% more per click than a competitor bidding on the identical keyword with a better-rated page.

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> Keywords with Quality Score 5 or below are identified and their specific weak component (CTR, relevance, or landing page) is diagnosed, not just noted</label></li>
	<li><label><input type="checkbox" /> Landing page experience issues are checked against actual page load speed and mobile usability, not assumed</label></li>
	<li><label><input type="checkbox" /> Expected CTR issues are checked against whether the ad copy and headline actually match the specific keyword, not a generic ad serving twenty keywords</label></li>
</ul>

The account-wide average Quality Score is close to useless as a metric; it hides the handful of expensive, high-volume keywords stuck at a 3 or 4 dragging real budget down with them.

## Pull the Search Term Report, Not Just the Keyword List

The keywords you bid on and the searches that actually trigger your ads are two different lists. The search term report is where wasted spend hides, especially with broad match and Performance Max, both of which can match to queries with no real connection to your business.

Look for a pattern, not just individual bad terms: is a specific match type or campaign consistently pulling in irrelevant traffic, or is it isolated?

<div class="audit-receipt">
	<p class="audit-receipt-label">What Broad Match on "google ads" Actually Triggered, One Week</p>
	<div class="audit-receipt-rows">
		<div class="audit-receipt-row is-bad">
			<span class="audit-receipt-term">"free google ads tutorial"</span>
			<span class="audit-receipt-verdict">Wasted &mdash; no purchase intent</span>
		</div>
		<div class="audit-receipt-row is-good">
			<span class="audit-receipt-term">"google ads management company"</span>
			<span class="audit-receipt-verdict">Relevant</span>
		</div>
		<div class="audit-receipt-row is-bad">
			<span class="audit-receipt-term">"how much does google ads cost"</span>
			<span class="audit-receipt-verdict">Wasted &mdash; research, not ready to buy</span>
		</div>
		<div class="audit-receipt-row is-good">
			<span class="audit-receipt-term">"google ads agency for lawyers"</span>
			<span class="audit-receipt-verdict">Relevant</span>
		</div>
		<div class="audit-receipt-row is-bad">
			<span class="audit-receipt-term">"google ads certification exam"</span>
			<span class="audit-receipt-verdict">Wasted &mdash; job seeker, not a client</span>
		</div>
	</div>
	<p class="audit-receipt-total">3 of 5 real queries that week had zero business connection to what's actually being sold &mdash; and every one of them was a legitimate match under broad match rules. That's not a tracking error. That's the match type doing exactly what it's built to do.</p>
</div>

<style>
	.audit-receipt {
		margin: 2rem 0;
		padding: 1.75rem 2rem 2rem;
		background-color: var(--ledger-paper);
		border: 1px solid var(--ledger-rule);
		border-radius: 14px;
		box-shadow:
			0 1px 2px rgba(22, 21, 15, 0.05),
			0 12px 32px rgba(22, 21, 15, 0.07);
	}
	.audit-receipt-label {
		margin: 0 0 1.25rem;
		font-family: var(--ledger-data);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ledger-muted);
	}
	.audit-receipt-rows {
		display: flex;
		flex-direction: column;
	}
	.audit-receipt-row {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: baseline;
		gap: 0.35rem 1rem;
		padding: 0.65rem 0;
		border-top: 1px dashed var(--ledger-rule);
	}
	.audit-receipt-term {
		flex: 1 1 auto;
		min-width: 0;
	}
	@media (max-width: 480px) {
		.audit-receipt-row {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.25rem;
		}
	}
	.audit-receipt-row:first-child {
		border-top: none;
	}
	.audit-receipt-term {
		font-family: var(--ledger-data);
		font-size: 0.88rem;
		color: var(--ledger-ink);
	}
	.audit-receipt-verdict {
		font-size: 0.82rem;
		white-space: nowrap;
		font-weight: 600;
	}
	.audit-receipt-row.is-bad .audit-receipt-verdict {
		color: var(--ledger-bad);
	}
	.audit-receipt-row.is-good .audit-receipt-verdict {
		color: var(--ledger-good);
	}
	.audit-receipt-total {
		margin: 1.5rem 0 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--ledger-rule);
		font-size: 0.9rem;
		color: var(--ledger-muted);
	}
</style>

## Review Ad Copy and Asset Quality, Not Just Whether Ads Exist

Responsive Search Ads grade themselves with an "Ad strength" label (Poor, Average, Good, Excellent), and it's common to find an account where every ad group sits at "Average" because headlines were written once, at launch, and never touched again. Ad strength isn't vanity; it's a real input into the ad relevance component of Quality Score.

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> Headlines are pinned only where there's a real legal or brand reason to, since over-pinning collapses an RSA back into a static ad and blocks Google's combination testing</label></li>
	<li><label><input type="checkbox" /> Each ad group has at least 8-10 distinct headlines and 3-4 descriptions, not the platform minimum of 3 headlines copy-pasted across ad groups</label></li>
	<li><label><input type="checkbox" /> Sitelinks, callouts, structured snippets, and (where relevant) image or promotion extensions are populated and current, not left at whatever was set up at launch</label></li>
	<li><label><input type="checkbox" /> At least one headline in each ad group actually contains the specific keyword theme for that ad group, not just the brand name and a generic offer</label></li>
</ul>

Thin ad copy is one of the few audit findings that's nearly free to fix and shows up in Quality Score within days, which makes it worth checking even in accounts that otherwise look well-managed.

## Check Whether Performance Max Is Cannibalizing Brand Search

Performance Max can be a genuine growth channel or a quiet way to start paying for branded traffic that was already converting for free through organic search. PMax doesn't make this easy to see by default, since it doesn't report search terms the way standard Search campaigns do. You have to look at:

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> A separate branded search campaign exists and is excluded from PMax's targeting</label></li>
	<li><label><input type="checkbox" /> The asset group and search theme settings don't include wording resembling your brand terms</label></li>
	<li><label><input type="checkbox" /> Performance improvements in PMax don't correlate with declines in an existing brand campaign</label></li>
	<li><label><input type="checkbox" /> The "Insights" tab's search categories are reviewed for brand-term volume PMax is quietly absorbing</label></li>
</ul>

If a brand campaign's impressions or conversions drop the same month PMax's numbers climb, that's not a coincidence worth ignoring, that's PMax buying traffic that was already free. A real example: an e-commerce client's branded search campaign showed 1,400 monthly clicks converting at 8% before their PMax campaign launched. Three months later, the brand campaign was down to 900 clicks, PMax was showing 600 conversions attributed to brand-adjacent search terms in the Insights tab, and total branded-intent spend had gone up 40% for roughly the same number of actual branded purchases. PMax hadn't grown the pie. It had started charging for a slice that used to be free.

## Check the Shared Library for Settings Applied Inconsistently

Negative keyword lists, audience lists, and portfolio bid strategies can all live in the account's shared library and get applied across multiple campaigns at once, which is efficient when it's intentional and a quiet source of waste when it isn't.

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> Shared negative keyword lists are actually applied to every campaign that should have them, not just the campaign that was open when the list was created</label></li>
	<li><label><input type="checkbox" /> Portfolio bid strategies aren't silently pooling budget signal across campaigns with genuinely different goals or margins</label></li>
	<li><label><input type="checkbox" /> Account-level negative keywords haven't accidentally blocked a converting search term for one campaign to fix a problem in another</label></li>
</ul>

## Review Audience Signals, Not Just Keywords

Smart Bidding uses audience signals as an input even on Search campaigns, and a stale or wrong signal quietly biases who the algorithm shows ads to. Check whether first-party remarketing and customer-match lists are still being refreshed with real recent data, not a static list uploaded once two years ago. Check whether observation-mode audiences (the ones only providing data, not restricting reach) reflect the account's actual customer base, since a mismatched signal here can push spend toward people who look right on paper but don't convert.

## Test Whether Bid Strategy Matches the Actual Goal

Smart Bidding strategies (Target CPA, Target ROAS, Maximize Conversions) are not interchangeable, and picking the wrong one for the account's actual goal is a common, quiet source of underperformance. A Maximize Conversions strategy with no target set will happily drive volume at any cost, which looks great in a "conversions" report and terrible in a margin report. A Target ROAS strategy is only reliable if the conversion values behind it are accurate, which loops back to the tracking check at the start of the audit; feed it wrong values and it will optimize toward the wrong customers with complete confidence.

A useful check: has the bid strategy been left alone long enough to exit the learning period (roughly 2 weeks or 30 conversions, whichever is later) before anyone judged its performance? Accounts get bounced between bid strategies every few weeks by someone chasing a bad week, which resets the learning period each time and guarantees the account never actually stabilizes.

## Check Budget Pacing, Device, and Location Waste

Pull the "Lost impression share (budget)" metric at the campaign level. A campaign consistently losing 20-30% of available impressions to budget caps is a campaign where the account owner is choosing, whether they realize it or not, to fund a different campaign instead of this one's best-performing hours. Check whether:

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> Budget allocation across campaigns roughly matches each campaign's share of actual conversions and revenue, not just historical habit</label></li>
	<li><label><input type="checkbox" /> Device bid adjustments reflect real conversion rate differences by device, not a guess made at launch</label></li>
	<li><label><input type="checkbox" /> Location targeting excludes areas the business can't actually service, and bid adjustments favor the geographies that convert best</label></li>
	<li><label><input type="checkbox" /> Ad scheduling (dayparting) reflects when the business can actually respond to leads, especially for call-based accounts</label></li>
</ul>

## Confirm the Landing Page Matches the Ad

An ad that promises one thing and lands on a page that delivers something else will underperform regardless of how well the campaign is built. A "20% Off Roof Inspections" ad landing on a general home page, forcing the visitor to hunt for that offer themselves, will lose a meaningful share of clicks before they ever see the offer that made them click.

<ul class="audit-checklist">
	<li><label><input type="checkbox" /> The page traffic lands on matches the specific offer, product, or promise in the ad copy, not the general website homepage</label></li>
	<li><label><input type="checkbox" /> The page loads fast enough on mobile to not lose the click before it renders, since page speed is also a direct Quality Score input</label></li>
	<li><label><input type="checkbox" /> The conversion action (form, call button, checkout) is visible without scrolling on a phone screen, not buried below a full-width hero image</label></li>
</ul>

## Turn Findings Into a Ranked List, Not a Report Nobody Reads

The output of an audit should be a short list of issues ranked by estimated dollar impact, not a 40-point checklist with no prioritization. "Fix conversion tracking first" and "this negative keyword list is missing obvious terms" are not equally urgent, even though both are real findings.

<div class="audit-rank">
	<p class="audit-rank-label">What a Properly Ranked Output Actually Looks Like</p>
	<div class="audit-rank-rows">
		<div class="audit-rank-row">
			<span class="audit-rank-num">01</span>
			<span class="audit-rank-name">Conversion tracking is double-counting leads</span>
			<span class="audit-rank-impact">~$3,200/mo</span>
		</div>
		<div class="audit-rank-row">
			<span class="audit-rank-num">02</span>
			<span class="audit-rank-name">Broad match matching unrelated searches</span>
			<span class="audit-rank-impact">~$1,100/mo</span>
		</div>
		<div class="audit-rank-row">
			<span class="audit-rank-num">03</span>
			<span class="audit-rank-name">Performance Max cannibalizing brand search</span>
			<span class="audit-rank-impact">~$800/mo</span>
		</div>
		<div class="audit-rank-row">
			<span class="audit-rank-num">04</span>
			<span class="audit-rank-name">Negative keyword list hasn't been updated since launch</span>
			<span class="audit-rank-impact">~$400/mo</span>
		</div>
	</div>
	<p class="audit-rank-caption">Same four findings a 40-point checklist would also surface &mdash; ranked, this tells you to fix tracking this week and the negative list whenever there's time. Unranked, all four look equally urgent.</p>
</div>

<style>
	.audit-rank {
		margin: 2rem 0;
		padding: 1.75rem 2rem 2rem;
		background-color: var(--ledger-paper);
		border: 1px solid var(--ledger-rule);
		border-radius: 14px;
		box-shadow:
			0 1px 2px rgba(22, 21, 15, 0.05),
			0 12px 32px rgba(22, 21, 15, 0.07);
	}
	.audit-rank-label {
		margin: 0 0 1.5rem;
		font-family: var(--ledger-data);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ledger-muted);
	}
	.audit-rank-rows {
		display: flex;
		flex-direction: column;
	}
	.audit-rank-row {
		display: grid;
		grid-template-columns: 2.5rem 1fr auto;
		align-items: center;
		gap: 1rem;
		padding: 0.85rem 0;
		border-top: 1px solid var(--ledger-rule);
	}
	.audit-rank-row:first-child {
		border-top: none;
	}
	.audit-rank-num {
		font-family: var(--ledger-display);
		font-weight: 800;
		font-size: 1.5rem;
		color: rgba(22, 32, 74, 0.15);
	}
	.audit-rank-name {
		font-size: 0.92rem;
		color: var(--ledger-ink);
	}
	.audit-rank-impact {
		font-family: var(--ledger-data);
		font-weight: 700;
		font-size: 0.88rem;
		color: var(--ledger-signal);
		white-space: nowrap;
	}
	.audit-rank-caption {
		margin: 1.5rem 0 0;
		padding-top: 1.25rem;
		border-top: 1px solid var(--ledger-rule);
		font-size: 0.85rem;
		color: var(--ledger-muted);
	}
</style>

## What's Actually Worth Using to Do This

Most of this checklist can be done with tools already inside the account, and it's worth being honest about which paid tools are worth the cost versus which just repackage a report you already have access to for free.

**Google Tag Assistant** (a free Chrome extension) shows exactly which tags fire on a page and in what order, which is the fastest way to catch the duplicate-tag problem from the tracking section without needing to read raw code. **GA4's DebugView** does the same thing for GA4 events specifically, in real time, as you click through the site yourself.

Third-party platforms like **Optmyzr** and **Adalysis** are genuinely useful for accounts complex enough to need ongoing, automated rule-based checks (dozens of campaigns, frequent structural changes), but for a one-time audit on a small-to-midsize account, they're mostly automating checks this checklist already walks through manually, at a monthly cost that isn't justified for a single pass. They earn their keep on the ongoing management side, not the audit itself.

The one built-in report worth trusting less than its name suggests is Google's own "Recommendations" tab. Google's recommendations are generated to move account-level metrics Google benefits from too (spend, reach), not necessarily your specific margin or CPA target, so treat each one as a suggestion to evaluate against your own numbers, not an instruction to apply.

If you want a second set of eyes on your own account using this exact checklist, that's what our [free account audit](/account-audits/) does, alongside a full [Google Ads management](/google-ads-management/) engagement if the account needs ongoing work after that.

---
title: 'The Real Google Ads Audit Checklist (Not Impression Share)'
description: 'A real Google Ads audit checklist: conversion tracking, account structure, wasted spend, and the checks most "audits" skip entirely.'
pubDate: 2026-09-06
pillar: google-ads
draft: false
---

Most things called a "Google Ads audit" are a five-minute scroll through the campaigns tab: check impression share, glance at Quality Scores, maybe skim the search terms report if there's time. That's not an audit. That's a status check.

**In short:** a real Google Ads audit checklist has seven parts, in this order: conversion tracking accuracy, account structure against real customer behavior, the search term report (not just the keyword list), Performance Max vs. brand search cannibalization, bid strategy fit, ad-to-landing-page match, and a findings list ranked by dollar impact. Skip the first one and every later finding is unreliable, since it's built on data you haven't confirmed is real.

A real audit starts from a different question: is this account's data even trustworthy, and is its structure built around how customers actually buy? Here's what that actually involves.

## Start With Conversion Tracking, Not Campaigns

If conversion tracking is wrong, every other finding in the audit is built on a bad foundation. Before looking at a single campaign, check:

- Whether each conversion action fires once per real conversion, not multiple times through duplicate tags or a GA4 import stacked on top of a native tag
- Whether "primary" conversions are actual business outcomes (purchases, qualified leads) rather than page views, scroll events, or button clicks that Smart Bidding will happily over-optimize toward
- Whether conversion values are set accurately, since Target ROAS bidding is only as good as the dollar values feeding it

This step alone regularly turns up the single biggest issue in an account, and it's the one most "audits" skip because it's not visible from the campaigns tab.

## Review Account Structure Against Real Customer Behavior

Campaign and ad group structure often reflects how the account happened to get built, not how customers actually search and buy. Check whether:

- Campaigns are organized around distinct business goals or budgets, not arbitrary groupings
- Match types and keyword themes reflect genuine search intent rather than maximum possible reach
- Negative keyword lists have been maintained on an ongoing basis, not set once at launch and forgotten

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

## Check Whether Performance Max Is Cannibalizing Brand Search

Performance Max can be a genuine growth channel or a quiet way to start paying for branded traffic that was already converting for free through organic search. PMax doesn't make this easy to see by default. You have to look at:

- Whether a separate branded search campaign exists and is excluded from PMax's targeting
- The asset group and search theme settings for wording resembling your brand terms
- Whether performance improvements in PMax correlate with declines in an existing brand campaign

## Test Whether Bid Strategy Matches the Actual Goal

Smart Bidding strategies (Target CPA, Target ROAS, Maximize Conversions) are not interchangeable, and picking the wrong one for the account's actual goal is a common, quiet source of underperformance. A Maximize Conversions strategy will happily drive volume at any cost if there's no target set. A Target ROAS strategy is only reliable if the conversion values behind it are accurate, which loops back to the tracking check at the start of the audit.

## Confirm the Landing Page Matches the Ad

An ad that promises one thing and lands on a page that delivers something else will underperform regardless of how well the campaign is built. Check that the page traffic lands on actually matches the specific offer, product, or promise in the ad copy, not just the general website homepage.

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

If you want a second set of eyes on your own account using this exact checklist, that's what our [free account audit](/account-audits/) does, alongside a full [Google Ads management](/google-ads-management/) engagement if the account needs ongoing work after that.

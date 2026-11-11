---
title: 'Performance Max Brand Search Cannibalization: How to Test It'
description: 'Performance Max brand search cannibalization: which campaign Google serves, five checks for your account, and a four-week test with a worked example.'
pubDate: 2026-11-11
pillar: google-ads
draft: false
---

Performance Max brand search cannibalization is what it looks like when your Performance Max campaign (often called PMax) reports strong results while your brand Search campaign quietly loses clicks to it. Some accounts really are being misled by it. Others are fine and about to break something by "fixing" it, because the quick fix, exclude your brand from Performance Max and move on, skips the part that decides whether it costs you anything.

What decides it is which campaign Google actually picks for a brand search, what each campaign reports afterward, and whether the leads Performance Max claims are new or just relabeled. This post covers all three, with a worked example you can check on a calculator and a test you can run in your own account.

**In short:** Performance Max brand search cannibalization happens when Performance Max serves, and takes credit for, brand searches your Search campaign would have won anyway. Google doesn't run a bidding war between campaigns in one account, so the damage usually isn't a higher price per click. It is a Performance Max report that overstates what it added, and a brand Search campaign that loses queries because it is out of budget or has no keyword that matches the search. To check, split Performance Max's search terms into brand and non-brand, then judge any change on account totals before and after, not on what Performance Max reports about itself.

## What Performance Max Brand Search Cannibalization Actually Means

People use "cannibalization" for three different problems, and mixing them up is how accounts end up with the wrong fix.

**Overlap** means both campaigns could serve the same search. It is nearly universal, and on its own it doesn't tell you the cost. Optmyzr's study of 511 accounts, using February 2025 data, found search term overlap between Performance Max and Search in about 97 percent of them. Both big overlap studies found Search more often the better converter when the two differed, but neither had cost data.

**Credit Stealing** means Performance Max reports conversions your brand campaign would have produced anyway. Nothing breaks in the auction, but the report now says Performance Max added leads it only relabeled. This is a measurement problem, and it is the one this post helps you test for.

**Wasted Money** means you pay more for the same customers. Google's help page on [how Performance Max interacts with other campaigns](https://support.google.com/google-ads/answer/13810170) says campaigns in the same account "don't compete against each other to drive up bids." The campaign with the best Ad Rank serves. Brand clicks are not free, and Google's pages don't say what a brand click costs when Performance Max wins instead of Search. The studies below had no cost data either, so check it in your own account.

So where does the real damage come from? Four places:

- **A Flattered Cost per Lead.** Brand searchers convert cheaply, so they pull Performance Max's reported cost per lead down, and you scale it on a number it didn't earn.
- **Bidding That Learns From Warm Traffic.** Smart Bidding sees conversions from people who already know you and can drift away from finding new customers.
- **A Starved Brand Campaign.** When your Search campaign is out of budget or ineligible, you lose the control a dedicated campaign gives you over ad copy and landing page.
- **A Blended Read.** Brand and non-brand results sit in one campaign report, so you have to split them yourself to judge the prospecting half.

## Which Campaign Wins When Both Can Serve

Google publishes the rule, and it explains much of what looks like cannibalization. Its help page on [ad group and asset group prioritization](https://support.google.com/google-ads/answer/2756257) lists four tiers, checked in order. The diagram shows them, followed by five searches for a fictional practice so you can see how they play out.

<figure class="pm-fig" aria-labelledby="pm-l1">
	<p class="pm-label" id="pm-l1">Who Serves a Brand Search? Google's Priority Order</p>
	<ol class="pm-ladder" role="list">
		<li><span class="pm-rank">1</span><div><strong>Identical Exact-Match Keyword</strong><span>Beats broad and phrase keywords and beats Performance Max. A spell-corrected search counts as identical.</span></div></li>
		<li><span class="pm-rank">2</span><div><strong>Identical Phrase or Broad Keyword, or Search Theme</strong><span>Phrase and broad keywords and Performance Max search themes that are identical to the search term share this tier.</span></div></li>
		<li><span class="pm-rank">3</span><div><strong>Relevance</strong><span>Google's AI picks the ad group or asset group that fits the search best.</span></div></li>
		<li><span class="pm-rank">4</span><div><strong>Ad Rank</strong><span>When everything above is equal, the highest Ad Rank serves.</span></div></li>
	</ol>
	<p class="pm-sublabel">Reasons Google May Skip Your Search Keyword</p>
	<ul class="pm-chips" role="list">
		<li>Budget Limited</li>
		<li>Low Search Volume Status</li>
		<li>All Ads or Landing Pages Disapproved</li>
		<li>Targeting Doesn't Match</li>
	</ul>
	<p class="pm-sublabel pm-sublabel-gap">Five Searches for a Fictional Practice, Acme Dental, With One Exact-Match Keyword: [acme dental]</p>
	<div class="pm-receipt" role="table" aria-label="Five Example Searches and Who Serves Them">
		<div class="pm-receipt-row" role="row"><span class="pm-q" role="cell">acme dental</span><span class="pm-who is-search" role="cell">Brand Search Serves</span><span class="pm-why" role="cell">Identical to the exact-match keyword.</span></div>
		<div class="pm-receipt-row" role="row"><span class="pm-q" role="cell">acme dentl</span><span class="pm-who is-search" role="cell">Brand Search Serves</span><span class="pm-why" role="cell">A spell-corrected search counts as identical.</span></div>
		<div class="pm-receipt-row" role="row"><span class="pm-q" role="cell">acme dental reviews</span><span class="pm-who is-rank" role="cell">Depends on Keyword Coverage</span><span class="pm-why" role="cell">Not identical to your keyword. If no Search keyword matches, Performance Max can serve it.</span></div>
		<div class="pm-receipt-row" role="row"><span class="pm-q" role="cell">acme dental near me</span><span class="pm-who is-rank" role="cell">Depends on Keyword Coverage</span><span class="pm-why" role="cell">Same: tiers 3 and 4 only rank keywords that match the search.</span></div>
		<div class="pm-receipt-row" role="row"><span class="pm-q" role="cell">acme dental, 2 PM, brand budget spent</span><span class="pm-who is-pmax" role="cell">Performance Max Can Serve</span><span class="pm-why" role="cell">Google says a budget-limited keyword won't always trigger an ad.</span></div>
	</div>
	<figcaption class="pm-caption">Hypothetical searches, real rules. Source: Google Ads Help pages 2756257 and 13810170, checked November 11, 2026.</figcaption>
</figure>

Four details change how you read that ladder:

- **Exact Match Is the Safest Bet.** Google's priority table names Performance Max as the loser only in tier one. Its interaction page also says a Search keyword that matches the query exactly "across keyword match types" is preferred, and Optmyzr reads that to include identical phrase and broad keywords. Google doesn't spell out how tier two plays out against a Performance Max asset group with no search themes, so make your brand keywords exact match instead of relying on the gap.
- **"Identical" Is Narrow.** It includes spell-corrected searches. It does not include plurals or synonyms.
- **Eligibility Comes First.** Low search volume status, disapproved ads, and mismatched targeting can each take your Search keyword out of the contest, and Google says a keyword in a budget-restricted campaign "won't always" trigger an ad. Optmyzr's study says ineligibility may explain some of the overlap it found, and it didn't check.
- **Some Surfaces Sit Outside the Rules.** Google says the preference rules don't apply to Shopping, and that for searches through Lens, AI Mode, AI Overviews, or autocomplete, keywords may not automatically be prioritized.

To see why a specific search went one way, Google points to the Ad preview and diagnosis tool, which shows when an ad group lost to a more relevant or identical candidate.

One dated note. Several outlets, including [Search Engine Roundtable](https://www.seroundtable.com/google-ads-pmax-brand-queries-42438.html), reported on November 2 to 4, 2026 that Google added a paragraph to the interaction page saying Performance Max may filter out navigational or brand-specific queries so dedicated Search campaigns can serve them, and suggesting you give those campaigns enough budget and consider adding search themes to Performance Max. We checked the live page on November 11, 2026 and did not find that paragraph, so we can't tell whether it is rolling out, regional, or reversed. Nothing below depends on it, and the advice here, fund an eligible brand Search campaign, is also what the reported paragraph recommends.

## What the Published Data Does and Does Not Show

We looked for a study measuring what share of Performance Max conversions come from brand searches and did not find a credible one. The brand-share percentages we found in agency posts, such as [one claiming 40 to 60 percent](https://shopiator.com/blog/performance-max-cannibalizing-brand-traffic), rest on the agency's own unnamed client audits. What does exist measures neighboring questions:

<div class="pm-table-wrap" tabindex="0" role="region" aria-label="Study Comparison">
	<table class="pm-table">
		<thead>
			<tr><th scope="col">Study</th><th scope="col">What It Measured</th><th scope="col">What It Can't Tell You</th></tr>
		</thead>
		<tbody>
			<tr>
				<td><a href="https://www.optmyzr.com/blog/is-pmax-cannibalizing-search/">Optmyzr</a><br />February 2025 data, 511 accounts</td>
				<td>Search term overlap between Performance Max and Search: about 97% of accounts had it. On 88% of overlapping terms, conversion rates showed no meaningful gap, and where they did differ, Search was better more often (7.7% of terms against 4.3%).</td>
				<td>Nothing brand specific. No cost data. A separate test of terms identical to a Search keyword found overlap in 91% of 503 accounts, and Optmyzr says Search ineligibility could explain that and that it didn't analyze it.</td>
			</tr>
			<tr>
				<td><a href="https://adalysis.com/blog/is-performance-max-cannibalizing-your-search-ads-a-deep-dive-into-search-term-overlap/">Adalysis</a><br />December 2024, 3,300+ non-retail campaigns</td>
				<td>67% of Performance Max campaigns overlapped with Search on at least one term, but its ads showed for terms already in Search as keywords only 2.8% of the time.</td>
				<td>Non-retail only. No cost data. Overlap is not the same as lost brand traffic.</td>
			</tr>
			<tr>
				<td><a href="https://www.haus.io/blog/pmax-experiments-including-excluding-branded-search-terms">Haus</a><br />August 2024, geo experiments</td>
				<td>Whether including or excluding brand terms drove more incremental revenue. Excluding won in half the tests and averaged 24% more incremental revenue across all tests. It also acquired new customers more efficiently in the tests that tracked them (19% to 60% lower acquisition cost). Brands with average order value above $238 did better keeping brand.</td>
				<td>Ecommerce brands. Haus sells incrementality testing and doesn't publish the number of experiments.</td>
			</tr>
		</tbody>
	</table>
</div>

Three conclusions follow. Overlap alone is not a diagnosis, because it shows up in almost every account. Eligibility matters, and Optmyzr's study did not check for it. And the one study that tested outcomes, Haus, found the answer varies by business, which is why the rest of this post is about testing instead of rules. All three use data from 2024 and early 2025, so check whether the rules have moved since.

## How to Tell If It Is Happening in Your Account

This takes an afternoon and changes nothing in your account. If you would rather hand it off, our [account audits](/account-audits/) cover Performance Max overlap.

**Step 1: Open the Performance Max Search Terms Report.** Performance Max now has its own search terms report that lists individual terms, which older advice online still gets wrong. Google calls the view "Search terms and landing pages for Performance Max," and its data starts in March 2023. Segment it by Ad format to separate Text ads from Shopping ads, a split Google says helps you analyze the impact of brand exclusions. Menu paths shift between interface updates, so confirm the route in your own account.

**Step 2: Sort the Terms Into Five Buckets.** Pure brand (acme dental), brand plus a service (acme dental implants), brand plus a qualifier (acme dental reviews), brand plus a competitor, and non-brand. The method is adapted from [PPC Hero's brand leak audit](https://ppchero.com/performance-max-brand-leak-audit/). The qualifier bucket matters because those searches aren't identical to your exact-match keyword, so they follow different priority rules.

**Step 3: Total the Conversions by Bucket.** If your view also shows cost by term, total that too. Brand's share of Performance Max conversions is the number that tells you how much of the campaign's reported result is brand. The report lists search queries, so it can't show brand exposure on other surfaces such as YouTube or Display, and brand's share of the visible terms isn't exactly brand's share of the whole campaign.

**Step 4: Run the Five Checks Below.** Tick a box only when the Looks Like Cannibalization description matches what you see. These column names and menus are the ones we expect, so confirm them in your account.

<figure class="pm-fig" aria-labelledby="pm-l2">
	<p class="pm-label" id="pm-l2">Five Places to Look in Your Own Account</p>
	<ol class="pm-checks" role="list">
		<li>
			<label class="pm-check-head"><input type="checkbox" class="pm-tick" aria-describedby="pm-d1" /><span><strong>Brand Terms in the Performance Max Search Terms Report</strong><small>Search Terms Report, Performance Max View</small></span></label>
			<div class="pm-pair" id="pm-d1">
				<p class="pm-bad"><b>Looks Like Cannibalization</b>Brand terms drive a large share of Performance Max's conversions.</p>
				<p class="pm-ok"><b>Probably Innocent</b>Brand terms are a small slice of conversions.</p>
			</div>
		</li>
		<li>
			<label class="pm-check-head"><input type="checkbox" class="pm-tick" aria-describedby="pm-d2" /><span><strong>Brand Search Impression Share Before and After Launch</strong><small>Search Lost IS (Rank) and Search Lost IS (Budget) Columns</small></span></label>
			<div class="pm-pair" id="pm-d2">
				<p class="pm-bad"><b>Looks Like Cannibalization</b>Lost impression share rose after Performance Max launched.</p>
				<p class="pm-ok"><b>Probably Innocent</b>Impression share held steady.</p>
			</div>
		</li>
		<li>
			<label class="pm-check-head"><input type="checkbox" class="pm-tick" aria-describedby="pm-d3" /><span><strong>Brand Search Conversions Around the Launch Date</strong><small>Brand Campaign, Daily or Weekly View</small></span></label>
			<div class="pm-pair" id="pm-d3">
				<p class="pm-bad"><b>Looks Like Cannibalization</b>Conversions dropped within weeks of the launch.</p>
				<p class="pm-ok"><b>Probably Innocent</b>Conversions stayed flat or grew.</p>
			</div>
		</li>
		<li>
			<label class="pm-check-head"><input type="checkbox" class="pm-tick" aria-describedby="pm-d4" /><span><strong>Blended Conversions Across Search and Performance Max</strong><small>All Campaigns, Same Period as Above</small></span></label>
			<div class="pm-pair" id="pm-d4">
				<p class="pm-bad"><b>Looks Like Cannibalization</b>The total stayed flat while Performance Max's own count climbed.</p>
				<p class="pm-ok"><b>Probably Innocent</b>The total rose by roughly what Performance Max reports.</p>
			</div>
		</li>
		<li>
			<label class="pm-check-head"><input type="checkbox" class="pm-tick" aria-describedby="pm-d5" /><span><strong>Brand Impressions in Search Console</strong><small>Performance Report, Query Contains Your Brand Name</small></span></label>
			<div class="pm-pair" id="pm-d5">
				<p class="pm-bad"><b>Looks Like Cannibalization</b>Brand impressions stayed flat while Performance Max's brand conversions grew.</p>
				<p class="pm-ok"><b>Probably Innocent</b>Brand impressions grew too, so demand for your name rose.</p>
			</div>
		</li>
	</ol>
	<p class="pm-score" role="status"><span class="pm-score-count"><span id="pm-count">0</span> of 5 Ticked</span><span id="pm-verdict">Keep watching. One signal alone is rarely enough to act on.</span></p>
	<figcaption class="pm-caption">The thresholds are our rule of thumb, not Google's: zero or one ticked, keep watching; two or more, run the test below before changing anything.</figcaption>
</figure>

## How to Test Whether the Brand Traffic Is Incremental

Diagnosis tells you brand traffic is inside Performance Max. It doesn't tell you whether removing it helps. For that, judge **account totals**, not the campaign report. Here is why.

This is an illustrative example with hypothetical numbers, not a client account. A dental practice runs lead generation. Over the 30 days before Performance Max launches, brand Search produces 120 leads on $1,800 ($15 each), and non-brand Search produces 80 leads on $8,000 ($100 each). That is 200 leads on $9,800, or $49 per lead.

Thirty days after launch, brand Search is down to 70 leads on $1,050, non-brand Search is unchanged, and Performance Max reports 100 leads on $6,000, or $60 each. The search terms report shows 50 of those leads came from brand terms, and the other 50 came from everything else. Assume Performance Max paid the same $15 per brand lead as brand Search ($750 for those 50), so the other $5,250 bought its 50 other leads, and assume non-brand Search wasn't affected.

<figure class="pm-fig" aria-labelledby="pm-l3">
	<p class="pm-label" id="pm-l3">Illustrative Example, Not Client Data: Leads Before and After Performance Max</p>
	<div class="pm-bar-row">
		<p class="pm-bar-head"><span>Before Performance Max</span><span>200 Leads</span></p>
		<div class="pm-bar" role="img" aria-label="Before: 120 brand Search leads plus 80 non-brand Search leads, 200 in total.">
			<span class="pm-seg is-brand" style="width: 48%;">120</span>
			<span class="pm-seg is-nonbrand" style="width: 32%;">80</span>
		</div>
	</div>
	<div class="pm-bar-row">
		<p class="pm-bar-head"><span>After Performance Max</span><span>250 Leads</span></p>
		<div class="pm-bar" role="img" aria-label="After: 70 brand Search leads, 80 non-brand Search leads, 50 Performance Max leads on brand terms, 50 Performance Max leads from everything else, 250 in total.">
			<span class="pm-seg is-brand" style="width: 28%;">70</span>
			<span class="pm-seg is-nonbrand" style="width: 32%;">80</span>
			<span class="pm-seg is-pmax-brand" style="width: 20%;"><i>50</i></span>
			<span class="pm-seg is-pmax-new" style="width: 20%;">50</span>
		</div>
	</div>
	<ul class="pm-legend" role="list">
		<li><i class="pm-swatch is-brand"></i>Brand Search</li>
		<li><i class="pm-swatch is-nonbrand"></i>Non-Brand Search</li>
		<li><i class="pm-swatch is-pmax-brand"></i>Performance Max, Brand Terms</li>
		<li><i class="pm-swatch is-pmax-new"></i>Performance Max, Everything Else</li>
	</ul>
	<div class="pm-stats">
		<div><b>100</b><span>Leads Performance Max Reports, at $60 Each</span></div>
		<div><b>50</b><span>Leads the Account Actually Gained</span></div>
		<div><b>$105</b><span>Spend per Added Lead ($5,250 for 50)</span></div>
	</div>
	<figcaption class="pm-caption">In this example, brand leads total 120 in both months (70 + 50), so the 50 brand leads Performance Max reports were moved from brand Search, not added.</figcaption>
</figure>

Performance Max reported 100 leads at $60. The account gained 50 leads and paid $105 for each of them: total spend rose from $9,800 to $15,050, and $5,250 more bought 50 more leads. The other 50 leads were brand searchers brand Search already had. Its leads fell from 120 to 70 while Performance Max's brand-term leads rose by 50.

The other half was real growth, at $105 per lead against $100 for non-brand Search. That is the number to judge Performance Max by. This example also assumes brand demand stayed at 120 leads. In a real account you can't see that directly, which is the reason for the test:

1. **Write Down Your Prediction First.** For example: "Excluding brand will cut Performance Max leads by about 50 and total leads by 10 or fewer." Without a prediction on paper, any result can be explained away afterward.
2. **Make Sure Brand Search Is Ready.** It needs an exact-match brand keyword, approved ads, and a budget it doesn't exhaust. Skip this and you are testing an empty room.
3. **Record Four Weeks of Baseline Totals.** Use spend and qualified leads or revenue from your CRM, not platform-reported conversions. Platform numbers are the thing under test, as covered in [why Google Ads and Meta Ads conversions don't match your revenue](/blog/why-meta-and-google-ads-numbers-dont-match/).
4. **Add the Brand Exclusion and Change Nothing Else.** Run it at least four weeks. Google's own [guidance for experiments](https://support.google.com/google-ads/answer/13826584) is at least four to six weeks, or longer with a long conversion delay, and that is a sensible floor here too.
5. **Compare Totals.** If total leads hold and spend falls, brand spend was buying leads you already had, so keep the exclusion. If total leads fall by about the brand leads you removed, those leads needed the ad, so put brand back or move it into its own funded campaign on purpose. If the result sits in between, treat it as partial and repeat.

The outcome rules in step 5, and the idea of checking Search Console for brand demand, follow [PPC Hero's brand leak audit](https://ppchero.com/performance-max-brand-leak-audit/).

A geo experiment, where regions are split so one group sees Performance Max with brand and another without, is the rigorous version. It needs volume and usually a tool, so most small accounts use the before-and-after above and accept its limits: seasonality and anything else that changed in those weeks can blur the read.

Lead generation adds one wrinkle. People searching your name are often people who found you another way, such as a referral or a map listing, so an extra form fill from them isn't a new customer. That is why the test judges qualified leads from your CRM, which is the kind of tracking our [revenue attribution](/revenue-attribution/) work sets up.

## When Brand Traffic Inside Performance Max Is Fine

Cleaning this up is not always worth it. Leave it alone, but report it separately, when:

- **Brand Volume Is Tiny** and you have no brand campaign yet. The fix costs more attention than it returns.
- **Conversion Volume Is Low.** Haus found brands with higher order values did better with brand included and pointed to a possible data shortage, citing an estimate from Smarter Ecommerce that Smart Bidding needs roughly 300 to 1,000 monthly conversions for a stable signal.
- **Performance Max Is Creating the Demand.** Its YouTube and Display ads can make people search your name later. That would show up as brand growth in Search Console, the fifth check above.

In all three cases, break brand out in your reporting so Performance Max's cost per lead isn't read as one number.

## How to Stop It: Brand Exclusions, Negative Keywords, and a Brand Search Campaign

If the test says brand traffic should come out of Performance Max, you have three tools. Know their limits before you rely on them.

**Brand Exclusions.** Google calls [brand exclusions](https://support.google.com/google-ads/answer/16669487) the most effective way to control how ads appear on searches for your brand, covering the name, common misspellings, and related subsidiary brands. Some specifics:

- Brand lists are built once in the Shared library and applied per campaign, or in bulk from the Campaigns table. There is no single account-wide switch. Google's [limits page](https://support.google.com/google-ads/answer/6372658) allows 10 brand lists per campaign and 5,000 brands per list.
- For Performance Max, Google's pages describe exclusions as covering Search and Shopping inventory, and one adds YouTube search. They can't touch brand exposure on other surfaces.
- The checkbox "Allow Shopping ads on searches that mention excluded brands" only matters if you run a product feed. Lead generation accounts can ignore it.
- Exclusions only block searches that clearly refer to the brand. Google's [2023 announcement](https://support.google.com/google-ads/answer/13311048) of brand exclusions gave a browser brand named Chrome as the example: the search "chrome exhaust tips" is not blocked, because it doesn't clearly refer to the brand. If your business name is also a common word, expect some searches to slip through.

**Small Businesses Hit a Catch.** A brand has to exist in Google's brand library. If yours isn't there, you use Request a brand under Tools, Shared library, Brand lists, and Google says [requests get a response within 3 to 6 weeks](https://support.google.com/google-ads/answer/14453044). The brand is usable while pending, but its reach may be limited. Google's brand definition does include a business name for small and medium-sized businesses, but a request can be rejected, in which case the brand shows as Not eligible. Until a request is approved, lean on exact-match brand keywords in Search and negative keywords in Performance Max.

**Negative Keywords.** Performance Max accepts negative keywords at the campaign level, up to 10,000 per campaign, and they apply to Search and Shopping inventory only. They are literal where brand exclusions are semantic. One trap: [account-level negative keywords](https://support.google.com/google-ads/answer/11396330) apply to all search and shopping inventory in Search and Performance Max campaigns alike, which includes your brand Search campaign. Don't put your brand name in an account-level list.

**An Exact-Match Brand Search Campaign.** This is the part that makes the rest work. Fund it so it doesn't run out of budget mid-day, because as the diagram showed, a budget-limited campaign is exactly when Performance Max can step in. Optmyzr also recommends adding branded misspellings as exact-match keywords even with exclusions on, since exclusions can still let fuzzy matches through. We found no published test measuring how often, so verify in the search terms report a few weeks after the change. If you would rather not manage this yourself, [Google Ads management](/google-ads-management/) covers it.

## What Changes After You Exclude Brand

- **Performance Max Will Look Worse, and That Is Correct.** It loses the cheap brand conversions that were flattering its numbers. Compare it to the non-brand cost per lead you worked out ($105 in the example), not the old $60.
- **Reset the Targets.** A target CPA or ROAS set while brand was included was calibrated to a blended number. If you leave it, bidding may throttle volume trying to hit a figure the non-brand traffic can't reach.
- **Give It Time.** Expect a learning period and judge after four weeks, not four days.
- **Know What a Bad Result Looks Like.** Total leads fall by about the brand leads removed and brand Search didn't absorb them, which you can check in its lost impression share (budget). To roll back, remove the exclusion from the campaign's settings, and you are back where you started.

## Common Questions About Performance Max and Brand Search

### Does Performance Max Cannibalize Brand Search?

Sometimes. Performance Max can serve, and take credit for, brand searches your Search campaign would have won. Google serves the campaign with the highest Ad Rank, and a Search keyword that matches the query exactly is preferred over Performance Max. What Google's rules point to is a flattered Performance Max report and a brand campaign that loses searches when it isn't eligible, not a bidding war. The test above tells you which case you are in.

### Does Performance Max Bid Against My Brand Campaign?

No, not in the way people fear. Google says campaigns in the same account don't compete to drive up bids, and the one with the best Ad Rank serves. The exception is a Search campaign with a keyword that exactly matches the search, or a spell-corrected version of it, which is preferred over Performance Max. The question is whether your brand campaign is eligible and has a keyword that matches the search.

### Do Brand Exclusions Block Every Brand Search in Performance Max?

No. Google says exclusions block your brand name, common misspellings, and related brands on search inventory. Optmyzr warns that fuzzy matches can still trigger ads, and we found no published test of how often. Treat exclusions as strong, not airtight.

### How Do I Exclude My Brand From Performance Max?

Create a brand list under Tools, Shared library, Brand lists. Then go to Campaigns, open the Settings tab, select the Performance Max campaign, scroll to Additional settings, click Brand exclusions, and choose your list or click New brand list. To apply a list to several campaigns at once, select them and use Edit, then Change brands. Menu names change, so confirm them in your account.

### Should I Turn Off Performance Max to Protect Brand Search?

No, not as a first move. Excluding brand and judging account totals shows whether the rest of the campaign pays for itself. In this post's illustrative example, the rest of Performance Max added 50 leads at $105 each, against $100 for non-brand Search.

### How Long Should the Test Run?

At least four weeks, and longer if your leads take weeks to qualify, with nothing else changing. Google's current [guidance for experiments](https://support.google.com/google-ads/answer/13826584) is at least four to six weeks and one to two conversion cycles.

### Does This Matter for Lead Generation Accounts?

Yes, with a different lens. Haus tested ecommerce brands, Adalysis looked at non-retail campaigns, and none of the three studies tested lead generation outcomes. For lead generation, judge the test on qualified leads from your CRM, not form fills.

## Next Step: Check It in Your Own Account

If you want someone to run this against your numbers, [PPC management](/ppc-management/) is the place to start, or [get in touch](/contact/) and we'll look at your account with you. For the wider checklist this fits into, see [the Google Ads audit checklist](/blog/how-to-audit-a-google-ads-account/).

<script>
	(function () {
		var boxes = document.querySelectorAll('.pm-tick');
		var count = document.getElementById('pm-count');
		var verdict = document.getElementById('pm-verdict');
		if (!boxes.length || !count || !verdict) return;
		function render() {
			var n = 0;
			boxes.forEach(function (b) {
				if (b.checked) n++;
			});
			count.textContent = n;
			verdict.textContent =
				n >= 2
					? 'Worth testing. Run the before-and-after test below before you change anything.'
					: 'Keep watching. One signal alone is rarely enough to act on.';
		}
		boxes.forEach(function (b) {
			b.addEventListener('change', render);
		});
		render();
	})();
</script>

<style>
	.pm-fig,
	.pm-table-wrap {
		--pm-soft: #5f5946;
	}
	.pm-fig {
		margin: 2rem 0;
		padding: 1.5rem 1.75rem 1.75rem;
		background-color: var(--ledger-paper);
		border: 1px solid var(--ledger-rule);
		border-radius: 14px;
		box-shadow:
			0 1px 2px rgba(22, 21, 15, 0.05),
			0 12px 32px rgba(22, 21, 15, 0.07);
	}
	.pm-fig .pm-label,
	.pm-fig .pm-sublabel {
		margin: 0 0 1rem;
		font-family: var(--ledger-data);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--pm-soft);
		line-height: 1.5;
	}
	.pm-fig .pm-sublabel {
		margin: 1.4rem 0 0.7rem;
	}
	.pm-fig .pm-sublabel-gap {
		margin-top: 1.75rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--ledger-rule);
	}
	.pm-caption {
		margin: 1.4rem 0 0;
		padding-top: 1rem;
		border-top: 1px solid var(--ledger-rule);
		font-size: 0.85rem;
		line-height: 1.55;
		color: var(--pm-soft);
	}
	.pm-ladder {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-direction: column;
	}
	.pm-ladder li {
		display: grid;
		grid-template-columns: 2.25rem 1fr;
		gap: 0.9rem;
		align-items: start;
		padding: 0.8rem 0;
		border-top: 1px dashed var(--ledger-rule);
	}
	.pm-ladder li:first-child {
		border-top: none;
		padding-top: 0;
	}
	.pm-ladder strong {
		display: block;
		font-family: var(--ledger-display);
		font-size: 1.1rem;
		line-height: 1.25;
		color: var(--ledger-ink);
	}
	.pm-ladder div span {
		display: block;
		margin-top: 0.2rem;
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--pm-soft);
	}
	.pm-rank {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2.25rem;
		height: 2.25rem;
		border-radius: 50%;
		background: var(--ledger-navy);
		color: var(--ledger-paper-white);
		font-family: var(--ledger-data);
		font-weight: 700;
		font-size: 0.9rem;
	}
	.pm-chips {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}
	.pm-chips li {
		padding: 0.3rem 0.7rem;
		border: 1px solid var(--ledger-bad);
		border-radius: 999px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--ledger-bad);
		background: var(--ledger-paper-white);
	}
	.pm-receipt {
		display: flex;
		flex-direction: column;
	}
	.pm-receipt-row {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr) minmax(0, 1.5fr);
		gap: 0.35rem 1rem;
		align-items: baseline;
		padding: 0.65rem 0;
		border-top: 1px dashed var(--ledger-rule);
	}
	.pm-receipt-row:first-child {
		border-top: none;
	}
	.pm-q {
		font-family: var(--ledger-data);
		font-size: 0.84rem;
		color: var(--ledger-ink);
		overflow-wrap: anywhere;
	}
	.pm-who {
		font-size: 0.84rem;
		font-weight: 700;
	}
	.pm-who.is-search {
		color: var(--ledger-good);
	}
	.pm-who.is-rank {
		color: var(--ledger-navy);
	}
	.pm-who.is-pmax {
		color: var(--ledger-signal);
	}
	.pm-why {
		font-size: 0.84rem;
		line-height: 1.45;
		color: var(--pm-soft);
	}
	@media (max-width: 560px) {
		.pm-fig {
			padding: 1.25rem 1.1rem 1.4rem;
		}
		.pm-receipt-row {
			grid-template-columns: 1fr;
			gap: 0.2rem;
		}
	}
	.pm-table-wrap {
		margin: 1.75rem 0;
		overflow-x: auto;
		border: 1px solid var(--ledger-rule);
		border-radius: 14px;
	}
	.pm-table {
		width: 100%;
		min-width: 600px;
		border-collapse: collapse;
		font-size: 0.9rem;
		line-height: 1.5;
	}
	.pm-table th {
		padding: 0.8rem 1rem;
		text-align: left;
		font-family: var(--ledger-data);
		font-size: 0.72rem;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		font-weight: 400;
		color: var(--pm-soft);
		background: var(--ledger-paper);
		border-bottom: 1px solid var(--ledger-rule);
	}
	.pm-table td {
		padding: 0.9rem 1rem;
		vertical-align: top;
		border-top: 1px solid var(--ledger-rule);
		color: var(--ledger-ink);
	}
	.pm-table tbody tr:first-child td {
		border-top: none;
	}
	.pm-table th:nth-child(1) {
		width: 24%;
	}
	.pm-table th:nth-child(2) {
		width: 40%;
	}
	.pm-table th:nth-child(3) {
		width: 36%;
	}
	.pm-checks {
		list-style: none;
		margin: 0;
		padding: 0;
		border-top: 1px solid var(--ledger-rule);
	}
	.pm-checks > li {
		padding: 0.9rem 0.5rem 1rem;
		border-bottom: 1px solid var(--ledger-rule);
	}
	.pm-checks > li:has(input:checked) {
		background: var(--ledger-paper-white);
	}
	.pm-check-head {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		cursor: pointer;
	}
	.pm-tick {
		flex-shrink: 0;
		width: 1.1rem;
		height: 1.1rem;
		margin-top: 0.2rem;
		accent-color: var(--ledger-signal);
		cursor: pointer;
	}
	.pm-check-head strong {
		display: block;
		font-family: var(--ledger-display);
		font-size: 1.05rem;
		line-height: 1.3;
		color: var(--ledger-ink);
	}
	.pm-check-head small {
		display: block;
		margin-top: 0.15rem;
		font-family: var(--ledger-data);
		font-size: 0.72rem;
		color: var(--pm-soft);
	}
	.pm-pair {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 0.75rem 1.25rem;
		margin: 0.75rem 0 0 1.85rem;
	}
	.pm-pair p {
		margin: 0;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--ledger-ink);
	}
	.pm-pair b {
		display: block;
		margin-bottom: 0.15rem;
		font-family: var(--ledger-data);
		font-size: 0.68rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
	}
	.pm-bad b {
		color: var(--ledger-bad);
	}
	.pm-ok b {
		color: var(--ledger-good);
	}
	.pm-score {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		gap: 0.4rem 1.25rem;
		margin: 1.25rem 0 0;
		font-size: 0.92rem;
		line-height: 1.5;
		color: var(--ledger-ink);
	}
	.pm-score-count {
		font-family: var(--ledger-data);
		font-weight: 700;
		color: var(--ledger-navy);
	}
	@media (max-width: 560px) {
		.pm-pair {
			grid-template-columns: 1fr;
			margin-left: 0;
		}
	}
	.pm-bar-row + .pm-bar-row {
		margin-top: 1.1rem;
	}
	.pm-bar-head {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		gap: 1rem;
		margin: 0 0 0.4rem;
		font-family: var(--ledger-display);
		font-size: 1.05rem;
		font-weight: 700;
		color: var(--ledger-ink);
	}
	.pm-bar-head span:last-child {
		font-family: var(--ledger-data);
		font-size: 0.85rem;
	}
	.pm-bar {
		display: flex;
		height: 46px;
		border: 1px solid var(--ledger-rule);
		border-radius: 8px;
		overflow: hidden;
		background: var(--ledger-paper-white);
	}
	.pm-seg {
		display: flex;
		align-items: center;
		justify-content: center;
		box-sizing: border-box;
		font-family: var(--ledger-data);
		font-size: 0.88rem;
		font-weight: 700;
		border-right: 2px solid var(--ledger-paper);
	}
	.pm-seg:last-child {
		border-right: none;
	}
	.pm-seg i {
		font-style: normal;
		padding: 0.05rem 0.4rem;
		border-radius: 4px;
		background: var(--ledger-paper-white);
		color: var(--ledger-navy);
	}
	.is-brand {
		background: var(--ledger-navy);
		color: var(--ledger-paper-white);
	}
	.is-nonbrand {
		background: var(--ledger-rule);
		color: var(--ledger-ink);
	}
	.is-pmax-brand {
		background: repeating-linear-gradient(
			135deg,
			var(--ledger-signal) 0,
			var(--ledger-signal) 3px,
			#dfe5ff 3px,
			#dfe5ff 8px
		);
	}
	.is-pmax-new {
		background: var(--ledger-signal);
		color: var(--ledger-paper-white);
	}
	.pm-legend {
		list-style: none;
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem 1.25rem;
		margin: 1.1rem 0 0;
		padding: 0;
		font-size: 0.82rem;
		color: var(--ledger-ink);
	}
	.pm-legend li {
		display: flex;
		align-items: center;
		gap: 0.45rem;
	}
	.pm-swatch {
		display: inline-block;
		width: 0.9rem;
		height: 0.9rem;
		border: 1px solid var(--ledger-rule);
		border-radius: 3px;
	}
	.pm-stats {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
		margin-top: 1.5rem;
		padding-top: 1.25rem;
		border-top: 1px solid var(--ledger-rule);
	}
	.pm-stats b {
		display: block;
		font-family: var(--ledger-display);
		font-size: 2.4rem;
		line-height: 1;
		color: var(--ledger-navy);
	}
	.pm-stats span {
		display: block;
		margin-top: 0.4rem;
		font-size: 0.82rem;
		line-height: 1.4;
		color: var(--pm-soft);
	}
	.pm-stats div:nth-child(3) b {
		color: var(--ledger-signal);
	}
	@media (max-width: 560px) {
		.pm-stats {
			grid-template-columns: 1fr;
			gap: 1rem;
		}
	}
</style>

---
title: 'Why Your Google Ads and Meta Ads Conversions Don''t Match Your Actual Revenue'
description: 'Google Ads and Meta Ads conversions don''t match your revenue. Here is why, with a worked example, and how to reconcile the gap.'
pubDate: 2026-08-06
pillar: attribution
draft: true
---

You check your Google Ads or Meta Ads dashboard and the conversion count looks solid. Then you check your CRM, your order platform, or your bank account, and the numbers don't line up. Not a rounding difference. Sometimes 20 to 30 percent apart, sometimes more.

If you've searched for why your Google Ads and Meta Ads conversions don't match your actual revenue, the honest answer is that it's not a tracking bug in the sense of "something broke." It's how attribution on ad platforms is built to work by default, for reasons that have nothing to do with your setup. Once you know the mechanisms, you can decide what to actually trust when you're making budget decisions, instead of guessing.

## Attribution Windows Count Conversions You Might Not Consider Yours

Every ad platform assigns a conversion credit window: a period of time after someone interacts with an ad during which any conversion gets counted as caused by that ad. Meta defaults to a 7-day click and 1-day view window. Google Ads, if you're on data-driven attribution (the default for most accounts now), can pull in conversions from clicks up to 30 days back and spread fractional credit across every interaction in between, not just the last one.

That means a purchase someone was always going to make can still get counted as a conversion, as long as it falls inside the window. The platform isn't lying. It's applying a rule you may not have agreed to, or even known about, and the two platforms aren't using the same rule.

## Google and Meta Can Both Claim the Same Sale

This is the mechanism most explanations skip, and it's the one that does the most damage to a blended revenue number: attribution windows don't just inflate each platform's count in isolation, they let two platforms claim credit for one sale at the same time.

Say a shopper sees your Meta ad on Monday, doesn't click. On Wednesday, they search your brand name and click a Google Ads result. On Friday, they buy, and the order is worth $500.

<div class="mismatch-diagram">
	<div class="diagram-timeline">
		<div class="diagram-point">
			<span class="diagram-day">Mon</span>
			<span class="diagram-event">Sees Meta ad<br />(no click)</span>
		</div>
		<div class="diagram-point">
			<span class="diagram-day">Wed</span>
			<span class="diagram-event">Clicks Google ad<br />(brand search)</span>
		</div>
		<div class="diagram-point diagram-point-final">
			<span class="diagram-day">Fri</span>
			<span class="diagram-event">Buys<br /><strong>$500</strong></span>
		</div>
	</div>
	<div class="diagram-claims">
		<div class="diagram-claim">
			<span class="diagram-claim-label">Meta Ads reports</span>
			<span class="diagram-claim-value">$500</span>
			<span class="diagram-claim-note">view-through conversion</span>
		</div>
		<div class="diagram-claim">
			<span class="diagram-claim-label">Google Ads reports</span>
			<span class="diagram-claim-value">$500</span>
			<span class="diagram-claim-note">click conversion</span>
		</div>
	</div>
	<div class="diagram-bars">
		<div class="diagram-bar-row">
			<span class="diagram-bar-label">Reported (Meta + Google)</span>
			<div class="diagram-bar-track">
				<div class="diagram-bar-fill diagram-bar-muted" style="width: 100%;"></div>
			</div>
			<span class="diagram-bar-value">$1,000</span>
		</div>
		<div class="diagram-bar-row">
			<span class="diagram-bar-label">Actual (CRM)</span>
			<div class="diagram-bar-track">
				<div class="diagram-bar-fill diagram-bar-accent" style="width: 50%;"></div>
			</div>
			<span class="diagram-bar-value">$500</span>
		</div>
	</div>
</div>

<style>
	.mismatch-diagram {
		margin: 2rem 0;
		padding: 1.75rem;
		background: var(--color-bg-subtle);
		border-radius: var(--radius);
	}
	.diagram-timeline {
		display: flex;
		justify-content: space-between;
		position: relative;
		padding-top: 0.5rem;
		margin-bottom: 2rem;
	}
	.diagram-timeline::before {
		content: '';
		position: absolute;
		top: 14px;
		left: 6px;
		right: 6px;
		height: 1px;
		background: var(--color-border);
	}
	.diagram-point {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 30%;
		position: relative;
	}
	.diagram-point::before {
		content: '';
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-text-muted);
		border: 2px solid var(--color-bg-subtle);
		margin-bottom: 0.6rem;
		z-index: 1;
	}
	.diagram-point-final::before {
		background: var(--color-accent);
	}
	.diagram-day {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.04em;
		color: var(--color-text-muted);
		margin-bottom: 0.3rem;
	}
	.diagram-event {
		font-size: 0.85rem;
		color: var(--color-text);
		line-height: 1.35;
	}
	.diagram-event strong {
		color: var(--color-accent);
	}
	.diagram-claims {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
	}
	.diagram-claim {
		flex: 1;
		background: var(--color-bg);
		border: 1px solid var(--color-border);
		border-radius: var(--radius);
		padding: 1rem 1.1rem;
	}
	.diagram-claim-label {
		display: block;
		font-size: 0.8rem;
		color: var(--color-text-muted);
		margin-bottom: 0.3rem;
	}
	.diagram-claim-value {
		display: block;
		font-size: 1.6rem;
		font-weight: 800;
		color: var(--color-text);
		letter-spacing: -0.02em;
	}
	.diagram-claim-note {
		display: block;
		font-size: 0.78rem;
		color: var(--color-text-muted);
		margin-top: 0.15rem;
	}
	.diagram-bars {
		display: flex;
		flex-direction: column;
		gap: 0.9rem;
	}
	.diagram-bar-row {
		display: flex;
		align-items: center;
		gap: 0.85rem;
	}
	.diagram-bar-label {
		flex: 0 0 168px;
		font-size: 0.85rem;
		color: var(--color-text);
	}
	.diagram-bar-track {
		flex: 1;
		height: 22px;
		background: var(--color-border);
		border-radius: 4px;
		overflow: hidden;
	}
	.diagram-bar-fill {
		height: 100%;
		border-radius: 0 4px 4px 0;
	}
	.diagram-bar-muted {
		background: var(--color-text-muted);
	}
	.diagram-bar-accent {
		background: var(--color-accent);
	}
	.diagram-bar-value {
		flex: 0 0 64px;
		text-align: right;
		font-weight: 700;
		font-size: 0.95rem;
		color: var(--color-text);
		font-variant-numeric: tabular-nums;
	}
	@media (max-width: 560px) {
		.diagram-timeline {
			flex-direction: column;
			gap: 1.2rem;
		}
		.diagram-timeline::before {
			display: none;
		}
		.diagram-claims {
			flex-direction: column;
		}
		.diagram-bar-row {
			flex-wrap: wrap;
		}
		.diagram-bar-label {
			flex-basis: 100%;
			margin-bottom: 0.3rem;
		}
	}
</style>

Neither platform did anything wrong by its own rules. Neither platform can see the other one also claiming the sale, because neither has visibility into what happened on the competing platform. If you're summing platform-reported revenue across channels to gut-check blended ROAS, this is very often where the gap comes from, and it gets worse, not better, the more channels you run.

## View-Through Conversions Inflate the Count Further

Separate from the cross-platform overlap above, Meta counts a conversion if someone simply saw an ad, no click required, and converted within its view-through window. That's a real signal for brand awareness, and it's also a much looser definition of "this ad worked" than most people assume when they read a conversions number.

Google's display and YouTube inventory does the same thing: view-through conversions count toward the total, even though nothing was clicked and GA4 has no way to detect an ad impression that never resulted in a session. If your dashboard is blending view-through and click conversions into one total without labeling which is which, the headline number is doing more work than it should.

## Cross-Device Journeys Break the Chain Entirely

None of the mechanisms above require a device change to cause a mismatch, but device switching makes all of them worse. Someone clicks your Google ad on their phone during lunch, then finishes the purchase on their laptop that night. Google can often stitch that together if the person is logged into a Google account on both devices. Your CRM sees one transaction. But if that same person clicked a Meta ad on mobile first, Meta's ability to connect the mobile click to a desktop purchase depends entirely on its own probabilistic modeling, not a shared login, and it will confidently report a conversion either way.

Neither platform tells you which of its reported conversions involved a device switch versus which were a clean single-device path. They're treated identically in the total, even though the confidence behind each one is very different.

## Modeled Conversions Fill Gaps With Estimates

Since iOS privacy changes and cookie restrictions started limiting what platforms can directly observe, both Google and Meta increasingly rely on modeled data: statistical estimates built from the conversions they can observe, used to fill in the ones they can't. That modeling is layered on top of whatever attribution window and click/view logic is already running, and on top of whatever double-counting is already happening across platforms.

The result is a platform-reported number that reflects a model of what probably happened, not a confirmed record of what did happen. Your CRM or backend revenue data doesn't have that problem, since it's recording actual transactions, not estimating them.

## Time Zone Settings Shift the Daily Numbers

Meta reports based on your ad account's time zone. GA4 uses whatever time zone your property is configured with. A conversion at 11:30 PM can land on different calendar days depending on which system is counting it, which shows up as a 10 to 15 percent swing in daily numbers even when the weekly totals roughly agree. It's a small thing on its own, but stacked on top of attribution windows, cross-platform overlap, and modeled conversions, it's one more reason a single day's dashboard number is a bad thing to make decisions off of.

## How to Actually Reconcile the Numbers

Not by trusting the raw platform number on its own, and not by trying to get Google and Meta to agree with each other, since structurally they can't. Here's what actually holds up:

- **Use your CRM or backend revenue data as ground truth.** Ad platforms report what they think happened. Your CRM reports what actually got paid for. Every other number gets checked against this one, not the other way around.
- **Run the reconciliation once, with real numbers.** Pull last month's reported conversion value from Google Ads and from Meta Ads, add them together, and compare that total to your actual CRM revenue for the same period. The dollar gap between the two is your real double-counted and modeled amount, not a guess, and it's usually a bigger number than people expect the first time they run it.
- **Compare trends, not absolute counts.** If platform-reported conversions are up 20 percent week over week and your CRM shows a similar lift, the platform is directionally useful for pacing even if the raw number is inflated.
- **Feed real conversion data back into the platforms**, using Google's enhanced conversions and Meta's Conversions API to pass CRM-confirmed outcomes (not just pixel-fired events) back into each platform. This doesn't fix the reporting gap, but it does make the algorithms optimize toward outcomes that actually happened instead of their own modeled version of one.

## For a More Rigorous Answer, Test Incrementality

The reconciliation above tells you the size of the gap. It doesn't tell you how much of your reported spend is actually driving sales that wouldn't have happened anyway, since someone who searched your brand name on Google might have bought regardless of whether the ad was there. That's a different question, and it takes a different method to answer: incrementality testing.

The basic version is a geo holdout test: pause ads in a handful of comparable markets while running normally everywhere else, then compare the revenue difference against what the platform claimed those markets would have driven. Google and Meta both offer native lift-test tools that do a version of this at the account level. Neither replaces the reconciliation habit above, since incrementality tests take weeks and enough volume to reach significance, but for your largest campaigns, it's the only way to know whether the platform's reported number reflects sales it actually caused or sales it just happened to be standing next to.

Neither Google Ads nor Meta Ads was built to report a number that matches your bank account exactly, and getting them to match each other isn't the right goal either. The question isn't whether the platform number is "right." It's whether you know the size and direction of the gap between it and your actual revenue, and whether you're making budget decisions off the number that's supposed to be right or the one that actually is.

If you want your actual gap sized and a plan to close it, that's exactly what our [revenue attribution](/revenue-attribution/) work does, often alongside a broader [account audit](/account-audits/) if the tracking itself needs fixing first.

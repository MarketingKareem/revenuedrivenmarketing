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

<div class="rdm-diagram">
	<div class="rdm-bars">
		<div class="rdm-bar-row">
			<span class="rdm-bar-label">Meta<br /><span>click + view</span></span>
			<div class="rdm-bar-track">
				<div class="rdm-bar-fill rdm-bar-muted" style="width: 23%;">
					<span class="rdm-bar-inline-value">7-8 days</span>
				</div>
			</div>
		</div>
		<div class="rdm-bar-row">
			<span class="rdm-bar-label">Google Ads<br /><span>data-driven</span></span>
			<div class="rdm-bar-track">
				<div class="rdm-bar-fill rdm-bar-accent" style="width: 100%;">
					<span class="rdm-bar-inline-value">30 days</span>
				</div>
			</div>
		</div>
	</div>
	<p class="rdm-caption">Same purchase, two different lookback windows — Google can still credit an ad more than three weeks after Meta already stopped counting the same click.</p>
</div>

<style>
	.rdm-diagram {
		margin: 2rem 0;
		padding: 1.75rem 2rem 2rem;
		background-color: var(--ledger-paper);
		border: 1px solid var(--ledger-rule);
		border-radius: 14px;
		box-shadow:
			0 1px 2px rgba(22, 21, 15, 0.05),
			0 12px 32px rgba(22, 21, 15, 0.07);
	}
	.rdm-caption {
		margin: 28px 0 0;
		font-family: var(--ledger-body);
		font-size: 0.85rem;
		color: var(--ledger-muted);
		line-height: 28px;
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	.rdm-bars {
		display: flex;
		flex-direction: column;
		gap: 12px;
	}
	.rdm-bar-row {
		display: flex;
		align-items: flex-end;
		gap: 1.1rem;
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	.rdm-bar-label {
		flex: 0 0 130px;
		font-family: var(--ledger-display);
		font-size: 1rem;
		font-weight: 700;
		color: var(--ledger-ink);
		line-height: 28px;
	}
	.rdm-bar-label span {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.72rem;
		font-weight: 500;
		color: var(--ledger-muted);
		line-height: 28px;
	}
	.rdm-bar-track {
		flex: 1;
		height: 40px;
		background: var(--ledger-paper-white);
		border: 1px solid var(--ledger-rule);
		border-radius: 8px;
		overflow: hidden;
	}
	.rdm-bar-fill {
		height: 100%;
		border-radius: 0 7px 7px 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 0.85rem;
		box-sizing: border-box;
		min-width: fit-content;
	}
	.rdm-bar-muted {
		background: var(--ledger-muted);
	}
	.rdm-bar-accent {
		background: var(--ledger-signal);
	}
	.rdm-bar-inline-value {
		font-family: var(--ledger-data);
		font-weight: 700;
		font-size: 0.9rem;
		color: var(--ledger-paper-white);
		white-space: nowrap;
	}
	.rdm-cards {
		display: flex;
		gap: 1.1rem;
	}
	.rdm-card {
		flex: 1;
		background: var(--ledger-paper-white);
		border: 1px solid var(--ledger-rule);
		border-radius: 12px;
		padding: 1.4rem;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}
	.rdm-card-center {
		align-items: center;
		text-align: center;
	}
	.rdm-card-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		background: var(--ledger-paper);
		border: 1.5px solid var(--ledger-rule);
		color: var(--ledger-navy);
		margin-bottom: 0.9rem;
	}
	.rdm-card-icon svg {
		width: 18px;
		height: 18px;
	}
	.rdm-card-title {
		display: block;
		font-family: var(--ledger-display);
		font-weight: 700;
		font-size: 1.15rem;
		color: var(--ledger-navy);
		margin-bottom: 0.4rem;
	}
	.rdm-card-sub {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.75rem;
		font-weight: 500;
		color: var(--ledger-muted);
		margin-top: 0.15rem;
	}
	.rdm-card-desc {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.85rem;
		color: var(--ledger-muted);
		line-height: 1.45;
		margin-bottom: 0.9rem;
	}
	.rdm-card-tag {
		display: inline-block;
		font-family: var(--ledger-body);
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.03em;
		padding: 0.3rem 0.6rem;
		border-radius: 100px;
	}
	.rdm-card-tag-strong {
		background: rgba(51, 85, 255, 0.12);
		color: var(--ledger-signal);
	}
	.rdm-card-tag-weak {
		background: var(--ledger-rule);
		color: var(--ledger-muted);
	}
	.rdm-card-big {
		display: block;
		font-family: var(--ledger-data);
		font-size: 1.6rem;
		font-weight: 700;
		color: var(--ledger-navy);
		line-height: 1.25;
		margin-top: 0.4rem;
	}
	.rdm-card-big-accent {
		color: var(--ledger-signal);
	}
	.rdm-card-time {
		display: block;
		font-family: var(--ledger-data);
		font-size: 0.8rem;
		color: var(--ledger-muted);
	}
	.rdm-steps {
		display: flex;
		flex-direction: column;
	}
	.rdm-step {
		display: flex;
		align-items: flex-start;
		gap: 1.1rem;
		margin-bottom: 28px;
	}
	.rdm-step-last {
		margin-bottom: 0;
	}
	.rdm-step-num {
		flex: 0 0 28px;
		width: 28px;
		height: 28px;
		margin-top: 2px;
		border-radius: 50%;
		background: var(--ledger-navy);
		color: var(--ledger-paper-white);
		font-family: var(--ledger-display);
		font-weight: 800;
		font-size: 0.9rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.rdm-step-title {
		display: block;
		font-family: var(--ledger-display);
		font-weight: 700;
		font-size: 1.05rem;
		color: var(--ledger-ink);
		line-height: 28px;
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	.rdm-step-desc {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.85rem;
		color: var(--ledger-muted);
		line-height: 28px;
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	@media (max-width: 560px) {
		.rdm-diagram {
			padding: 1.35rem 1.25rem 1.5rem;
		}
		.rdm-cards {
			flex-direction: column;
		}
		.rdm-bar-label {
			flex-basis: 96px;
			font-size: 0.85rem;
		}
		.rdm-bar-inline-value {
			font-size: 0.78rem;
		}
	}
</style>

## Google and Meta Can Both Claim the Same Sale

This is the mechanism most explanations skip, and it's the one that does the most damage to a blended revenue number: attribution windows don't just inflate each platform's count in isolation, they let two platforms claim credit for one sale at the same time.

Say a shopper sees your Meta ad on Monday, doesn't click. On Wednesday, they search your brand name and click a Google Ads result. On Friday, they buy, and the order is worth $500.

<div class="mismatch-diagram">
	<div class="diagram-timeline">
		<div class="diagram-point">
			<span class="diagram-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>
			</span>
			<span class="diagram-day">Mon</span>
			<span class="diagram-event">Sees Meta ad<br />(no click)</span>
		</div>
		<div class="diagram-point">
			<span class="diagram-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3l7.5 17 2.1-6.4L20 11.5 4 3Z"/></svg>
			</span>
			<span class="diagram-day">Wed</span>
			<span class="diagram-event">Clicks Google ad<br />(brand search)</span>
		</div>
		<div class="diagram-point diagram-point-final">
			<span class="diagram-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 12H7L6 8Z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></svg>
			</span>
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
		<div class="diagram-claim-plus" aria-hidden="true">+</div>
		<div class="diagram-claim">
			<span class="diagram-claim-label">Google Ads reports</span>
			<span class="diagram-claim-value">$500</span>
			<span class="diagram-claim-note">click conversion</span>
		</div>
	</div>
	<div class="diagram-bars">
		<div class="diagram-bar-row">
			<span class="diagram-bar-label">Reported<br /><span>Meta + Google</span></span>
			<div class="diagram-bar-track">
				<div class="diagram-bar-fill diagram-bar-muted" style="width: 100%;">
					<span class="diagram-bar-inline-value">$1,000</span>
				</div>
			</div>
		</div>
		<div class="diagram-bar-row">
			<span class="diagram-bar-label">Actual<br /><span>CRM</span></span>
			<div class="diagram-bar-track">
				<div class="diagram-bar-fill diagram-bar-accent" style="width: 50%;">
					<span class="diagram-bar-inline-value">$500</span>
				</div>
			</div>
		</div>
	</div>
	<p class="diagram-gap"><span class="diagram-gap-value">$500</span> reported that never happened — double-claimed by two platforms, zero extra revenue.</p>
</div>

<style>
	.mismatch-diagram {
		margin: 2.5rem 0;
		padding: 1.75rem 2.25rem 2.25rem;
		background-color: var(--ledger-paper);
		border: 1px solid var(--ledger-rule);
		border-radius: 14px;
		box-shadow:
			0 1px 2px rgba(22, 21, 15, 0.05),
			0 12px 32px rgba(22, 21, 15, 0.07);
	}
	.diagram-timeline {
		display: flex;
		justify-content: space-between;
		position: relative;
		margin-bottom: 2.25rem;
	}
	.diagram-point {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 30%;
		position: relative;
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	.diagram-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--ledger-paper-white);
		border: 1.5px solid var(--ledger-rule);
		color: var(--ledger-navy);
		margin-bottom: 0.75rem;
		z-index: 1;
		box-shadow: 0 1px 3px rgba(22, 21, 15, 0.07);
	}
	.diagram-icon svg {
		width: 20px;
		height: 20px;
	}
	.diagram-point-final .diagram-icon {
		background: var(--ledger-signal);
		border-color: var(--ledger-signal);
		color: var(--ledger-paper-white);
		box-shadow: 0 4px 12px rgba(51, 85, 255, 0.35);
	}
	.diagram-day {
		font-family: var(--ledger-body);
		font-size: 0.72rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		color: var(--ledger-muted);
		line-height: 28px;
	}
	.diagram-event {
		font-family: var(--ledger-body);
		font-size: 0.85rem;
		color: var(--ledger-ink);
		line-height: 28px;
	}
	.diagram-event strong {
		font-family: var(--ledger-data);
		color: var(--ledger-signal);
	}
	.diagram-claims {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 2.25rem;
	}
	.diagram-claim {
		flex: 1;
		background: var(--ledger-paper-white);
		border: 1px solid var(--ledger-rule);
		border-radius: 12px;
		padding: 1.15rem 1.25rem;
	}
	.diagram-claim-plus {
		flex: 0 0 auto;
		align-self: flex-start;
		font-family: var(--ledger-display);
		font-size: 1.3rem;
		font-weight: 700;
		line-height: 28px;
		color: var(--ledger-muted);
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	.diagram-claim-label {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.8rem;
		color: var(--ledger-muted);
		margin-bottom: 0.35rem;
	}
	.diagram-claim-value {
		display: block;
		font-family: var(--ledger-data);
		font-size: 1.8rem;
		font-weight: 700;
		color: var(--ledger-navy);
		line-height: 1.1;
	}
	.diagram-claim-note {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.78rem;
		color: var(--ledger-muted);
		margin-top: 0.25rem;
	}
	.diagram-bars {
		display: flex;
		flex-direction: column;
		gap: 0.85rem;
	}
	.diagram-bar-row {
		display: flex;
		align-items: flex-end;
		gap: 1.1rem;
	}
	.diagram-bar-label {
		flex: 0 0 110px;
		font-family: var(--ledger-display);
		font-size: 1rem;
		font-weight: 700;
		color: var(--ledger-ink);
		line-height: 28px;
	}
	.diagram-bar-label span {
		display: block;
		font-family: var(--ledger-body);
		font-size: 0.72rem;
		font-weight: 500;
		color: var(--ledger-muted);
		line-height: 28px;
	}
	.diagram-bar-track {
		flex: 1;
		height: 40px;
		background: var(--ledger-paper-white);
		border: 1px solid var(--ledger-rule);
		border-radius: 8px;
		overflow: hidden;
	}
	.diagram-bar-fill {
		height: 100%;
		border-radius: 0 7px 7px 0;
		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 0.85rem;
		box-sizing: border-box;
	}
	.diagram-bar-muted {
		background: var(--ledger-muted);
	}
	.diagram-bar-accent {
		background: var(--ledger-signal);
	}
	.diagram-bar-inline-value {
		font-family: var(--ledger-data);
		font-weight: 700;
		font-size: 1rem;
		color: var(--ledger-paper-white);
		font-variant-numeric: tabular-nums;
	}
	.diagram-gap {
		margin: 28px 0 0;
		font-family: var(--ledger-body);
		font-size: 0.95rem;
		color: var(--ledger-ink);
		line-height: 28px;
		background-image: repeating-linear-gradient(
			to bottom,
			transparent,
			transparent 27px,
			var(--ledger-rule) 27px,
			var(--ledger-rule) 28px
		);
	}
	.diagram-gap-value {
		font-family: var(--ledger-data);
		font-size: 1.4rem;
		font-weight: 700;
		color: var(--ledger-signal);
	}
	@media (max-width: 560px) {
		.mismatch-diagram {
			padding: 1.5rem 1.25rem 1.75rem;
		}
		.diagram-timeline {
			flex-direction: column;
			align-items: flex-start;
			gap: 1.4rem;
		}
		.diagram-point {
			flex-direction: row;
			width: 100%;
			text-align: left;
			gap: 0.85rem;
		}
		.diagram-icon {
			margin-bottom: 0;
			flex-shrink: 0;
		}
		.diagram-claims {
			flex-direction: column;
		}
		.diagram-claim-plus {
			align-self: center;
		}
		.diagram-bar-label {
			flex-basis: 82px;
			font-size: 0.85rem;
		}
		.diagram-bar-inline-value {
			font-size: 0.85rem;
		}
	}
</style>

Neither platform did anything wrong by its own rules. Neither platform can see the other one also claiming the sale, because neither has visibility into what happened on the competing platform. If you're summing platform-reported revenue across channels to gut-check blended ROAS, this is very often where the gap comes from, and it gets worse, not better, the more channels you run.

## View-Through Conversions Inflate the Count Further

Separate from the cross-platform overlap above, Meta counts a conversion if someone simply saw an ad, no click required, and converted within its view-through window. That's a real signal for brand awareness, and it's also a much looser definition of "this ad worked" than most people assume when they read a conversions number.

Google's display and YouTube inventory does the same thing: view-through conversions count toward the total, even though nothing was clicked and GA4 has no way to detect an ad impression that never resulted in a session. If your dashboard is blending view-through and click conversions into one total without labeling which is which, the headline number is doing more work than it should.

<div class="rdm-diagram">
	<div class="rdm-cards">
		<div class="rdm-card">
			<span class="rdm-card-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 3l7.5 17 2.1-6.4L20 11.5 4 3Z"/></svg>
			</span>
			<span class="rdm-card-title">Click Conversion</span>
			<span class="rdm-card-desc">Someone clicked the ad, then converted.</span>
			<span class="rdm-card-tag rdm-card-tag-strong">Strong intent signal</span>
		</div>
		<div class="rdm-card">
			<span class="rdm-card-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7Z"/><circle cx="12" cy="12" r="3"/></svg>
			</span>
			<span class="rdm-card-title">View-Through Conversion</span>
			<span class="rdm-card-desc">Someone saw the ad, never clicked, converted anyway.</span>
			<span class="rdm-card-tag rdm-card-tag-weak">Weak intent signal</span>
		</div>
	</div>
	<p class="rdm-caption">Both land in the same "conversions" column, with no visual distinction between them in the standard dashboard view.</p>
</div>

## Cross-Device Journeys Break the Chain Entirely

None of the mechanisms above require a device change to cause a mismatch, but device switching makes all of them worse. Someone clicks your Google ad on their phone during lunch, then finishes the purchase on their laptop that night. Google can often stitch that together if the person is logged into a Google account on both devices. Your CRM sees one transaction. But if that same person clicked a Meta ad on mobile first, Meta's ability to connect the mobile click to a desktop purchase depends entirely on its own probabilistic modeling, not a shared login, and it will confidently report a conversion either way.

Neither platform tells you which of its reported conversions involved a device switch versus which were a clean single-device path. They're treated identically in the total, even though the confidence behind each one is very different.

## Modeled Conversions Fill Gaps With Estimates

Since iOS privacy changes and cookie restrictions started limiting what platforms can directly observe, both Google and Meta increasingly rely on modeled data: statistical estimates built from the conversions they can observe, used to fill in the ones they can't. That modeling is layered on top of whatever attribution window and click/view logic is already running, and on top of whatever double-counting is already happening across platforms.

The result is a platform-reported number that reflects a model of what probably happened, not a confirmed record of what did happen. Your CRM or backend revenue data doesn't have that problem, since it's recording actual transactions, not estimating them.

## Time Zone Settings Shift the Daily Numbers

Meta reports based on your ad account's time zone. GA4 uses whatever time zone your property is configured with. A conversion at 11:30 PM can land on different calendar days depending on which system is counting it, which shows up as a 10 to 15 percent swing in daily numbers even when the weekly totals roughly agree. It's a small thing on its own, but stacked on top of attribution windows, cross-platform overlap, and modeled conversions, it's one more reason a single day's dashboard number is a bad thing to make decisions off of.

<div class="rdm-diagram">
	<div class="rdm-cards">
		<div class="rdm-card rdm-card-center">
			<span class="rdm-card-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
			</span>
			<span class="rdm-card-title">Meta<br /><span class="rdm-card-sub">Ad account timezone</span></span>
			<span class="rdm-card-big">Aug 5</span>
			<span class="rdm-card-time">11:30 PM</span>
		</div>
		<div class="rdm-card rdm-card-center">
			<span class="rdm-card-icon" aria-hidden="true">
				<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>
			</span>
			<span class="rdm-card-title">GA4<br /><span class="rdm-card-sub">Property timezone</span></span>
			<span class="rdm-card-big rdm-card-big-accent">Aug 6</span>
			<span class="rdm-card-time">12:14 AM</span>
		</div>
	</div>
	<p class="rdm-caption">The exact same purchase, logged on two different calendar days — depending only on which system's clock is doing the counting.</p>
</div>

## How to Actually Reconcile the Numbers

Not by trusting the raw platform number on its own, and not by trying to get Google and Meta to agree with each other, since structurally they can't. Here's what actually holds up:

<div class="rdm-diagram">
	<div class="rdm-steps">
		<div class="rdm-step">
			<span class="rdm-step-num">1</span>
			<div>
				<span class="rdm-step-title">Use your CRM or backend revenue data as ground truth</span>
				<span class="rdm-step-desc">Ad platforms report what they think happened. Your CRM reports what actually got paid for. Every other number gets checked against this one, not the other way around.</span>
			</div>
		</div>
		<div class="rdm-step">
			<span class="rdm-step-num">2</span>
			<div>
				<span class="rdm-step-title">Run the reconciliation once, with real numbers</span>
				<span class="rdm-step-desc">Pull last month's reported conversion value from Google Ads and Meta Ads, add them together, and compare that total to your actual CRM revenue for the same period. The dollar gap is real, not a guess, and it's usually bigger than people expect the first time they run it.</span>
			</div>
		</div>
		<div class="rdm-step">
			<span class="rdm-step-num">3</span>
			<div>
				<span class="rdm-step-title">Compare trends, not absolute counts</span>
				<span class="rdm-step-desc">If platform-reported conversions are up 20 percent week over week and your CRM shows a similar lift, the platform is directionally useful for pacing even if the raw number is inflated.</span>
			</div>
		</div>
		<div class="rdm-step rdm-step-last">
			<span class="rdm-step-num">4</span>
			<div>
				<span class="rdm-step-title">Feed real conversion data back into the platforms</span>
				<span class="rdm-step-desc">Use Google's enhanced conversions and Meta's Conversions API to pass CRM-confirmed outcomes, not just pixel-fired events, back into each platform. It won't fix the reporting gap, but it makes the algorithms optimize toward what actually happened instead of their own modeled version of one.</span>
			</div>
		</div>
	</div>
</div>

## For a More Rigorous Answer, Test Incrementality

The reconciliation above tells you the size of the gap. It doesn't tell you how much of your reported spend is actually driving sales that wouldn't have happened anyway, since someone who searched your brand name on Google might have bought regardless of whether the ad was there. That's a different question, and it takes a different method to answer: incrementality testing.

The basic version is a geo holdout test: pause ads in a handful of comparable markets while running normally everywhere else, then compare the revenue difference against what the platform claimed those markets would have driven. Google and Meta both offer native lift-test tools that do a version of this at the account level. Neither replaces the reconciliation habit above, since incrementality tests take weeks and enough volume to reach significance, but for your largest campaigns, it's the only way to know whether the platform's reported number reflects sales it actually caused or sales it just happened to be standing next to.

Neither Google Ads nor Meta Ads was built to report a number that matches your bank account exactly, and getting them to match each other isn't the right goal either. The question isn't whether the platform number is "right." It's whether you know the size and direction of the gap between it and your actual revenue, and whether you're making budget decisions off the number that's supposed to be right or the one that actually is.

If you want your actual gap sized and a plan to close it, that's exactly what our [revenue attribution](/revenue-attribution/) work does, often alongside a broader [account audit](/account-audits/) if the tracking itself needs fixing first.

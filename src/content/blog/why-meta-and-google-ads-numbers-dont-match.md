---
title: 'Why Your Ad Platforms Report More Conversions Than Your Revenue Shows'
description: 'Google Ads and Meta Ads both tend to report more conversions than your CRM or bank account confirms. Here is why, and which number to actually trust.'
pubDate: 2026-08-06
pillar: attribution
draft: true
---

You check your Google Ads or Meta Ads dashboard and the conversion count looks solid. Then you check your CRM, your order platform, or your bank account, and the numbers don't line up. Not a rounding difference. Sometimes 20 to 30 percent apart.

This isn't a tracking bug you need to fix in the sense of "something broke." It's how attribution on ad platforms is built to work by default. Once you know why, you can decide what to actually trust when you're making budget decisions, instead of guessing.

## Attribution Windows Count Conversions You Might Not Consider Yours

Every ad platform assigns a conversion credit window: a period of time after someone interacts with an ad during which any conversion gets counted as caused by that ad. Meta defaults to a 7-day click and 1-day view window. Google Ads defaults to 30 days on a click.

That means a purchase someone was always going to make can still get counted as a conversion, as long as it falls inside the window. The platform isn't lying. It's applying a rule you may not have agreed to, or even known about.

## View-Through Conversions Inflate the Count Further

Meta counts a conversion if someone simply saw an ad, no click required, and converted within 24 hours. That's a real signal for brand awareness, and it's also a much looser definition of "this ad worked" than most people assume when they read a conversions number.

If your dashboard is blending view-through and click conversions into one total without labeling which is which, the headline number is doing more work than it should.

## Modeled Conversions Fill Gaps With Estimates

Since iOS privacy changes and cookie restrictions started limiting what platforms can directly observe, both Google and Meta increasingly rely on modeled data to estimate conversions they can't track directly. That modeling is layered on top of whatever attribution window and click/view logic is already running.

The result is a platform-reported number that reflects a model of what probably happened, not a confirmed record of what did happen. Your CRM or backend revenue data doesn't have that problem, since it's recording actual transactions, not estimating them.

## Time Zone Settings Shift the Daily Numbers

Meta reports based on your ad account's time zone. GA4 uses whatever time zone your property is configured with. A conversion at 11:30 PM can land on different calendar days depending on which system is counting it, which shows up as a 10 to 15 percent swing in daily numbers even when the weekly totals roughly agree.

It's a small thing on its own. Combined with attribution windows and modeled conversions, it's one more reason a single day's dashboard number is a bad thing to make decisions off of.

## What to Actually Trust

Not the raw platform number, on its own. Here's what actually holds up:

- **Use your CRM or backend revenue data as ground truth.** Ad platforms report what they think happened. Your CRM reports what actually got paid for.
- **Compare trends, not absolute counts.** If platform-reported conversions are up 20 percent week over week and your CRM shows a similar lift, the platform is directionally useful even if the raw number is inflated.
- **Set up server-side or CRM-based conversion imports where possible**, so the platform is optimizing against a real-world outcome instead of its own modeled version of one.

Neither Google Ads nor Meta Ads was built to report a number that matches your bank account exactly. The question isn't whether the platform number is "right." It's whether you know the size and direction of the gap between it and your actual revenue, and whether you're making budget decisions off the number that's supposed to be right or the one that actually is.

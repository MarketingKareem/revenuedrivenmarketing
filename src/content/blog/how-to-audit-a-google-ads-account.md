---
title: 'How to Actually Audit a Google Ads Account (Not Just Check Impression Share)'
description: 'A real Google Ads audit checklist: conversion tracking, account structure, wasted spend, and the checks most "audits" skip entirely.'
pubDate: 2026-09-06
pillar: google-ads
draft: false
---

Most things called a "Google Ads audit" are a five-minute scroll through the campaigns tab: check impression share, glance at Quality Scores, maybe skim the search terms report if there's time. That's not an audit. That's a status check.

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

If you want a second set of eyes on your own account using this exact checklist, that's what our [free account audit](/account-audits/) does, alongside a full [Google Ads management](/google-ads-management/) engagement if the account needs ongoing work after that.

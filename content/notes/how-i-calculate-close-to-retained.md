---
title: How I Calculate Close-to-Retained
summary: An earlier note argued that standard close rate hides an early-churn problem most operators haven't measured. This is the calculation that surfaces it. Close-to-retained reframes the numerator. Instead of counting signed agreements, you count signed agreements that survive a defined retention window, usually 90 days. The math is one formula. The discipline is making sure the data is clean enough to trust the answer.
date: 2026-04-15
tags: [leads-sales, data-reporting]
pullQuote: The math isn't hard. The data hygiene is.
---

# How I Calculate Close-to-Retained

An earlier note in this publication argued that standard close rate hides an early-churn problem most operators haven't measured. This is the calculation that surfaces it.

A sales manager in an owner meeting is quoting close rate. 28%. The number lands. Decisions get made about ad spend, rep performance, channel allocation. Nobody in the room knows that the 28% is net of an early-churn problem nobody has measured, and that the real number, the one that describes whether the pipeline is actually producing members who stay, is something different. Probably lower. The conversation happens anyway.

Most of what gets written in this publication rests on the gap between what gym sales reports show and what the data would show if it were sliced honestly. That gap is widest at close rate, and the calculation that closes it is close-to-retained.

The contrarian claim is this. Most operators have heard of close-to-retained but few have ever sat down and computed it. The math isn't hard. The data hygiene is.

Here's how it works.

Standard close rate is signed agreements divided by leads. The numerator counts a sale at the moment of signature. The problem is that some percentage of those signed agreements never become real members. They cancel in the first 30 days. Their first real payment fails and they're quietly removed. They sign and never show up. Standard close rate counts all of these as wins, because at the moment the report was pulled, they were still in the system.

Close-to-retained reframes the numerator. Instead of counting signed agreements, you count signed agreements that survive a defined retention window, usually 90 days. The denominator stays the same. The output tells you what percentage of leads turned into members who actually stuck.

To run it, your data needs to give you five things for each lead: when the lead came in, what source it came from, whether the agreement was signed, whether the first real payment cleared, and whether the member is still active as of the report date. The first three are usually clean. The last two are where most gyms fall apart, because the CRM and the POS aren't talking, or cancellations are tagged inconsistently, or "active" lags reality. The data hygiene work is bigger than the math, and it's where the analysis actually lives.

The date logic matters too. You can't pull leads from last month and ask whether they're still active, because the 90-day window hasn't elapsed. Pick a month at least four months in the past. That gives you a clean cohort and a real retention check.

A worked example. The gym generated 200 leads in March of last year. 60 of them signed agreements, producing a standard close rate of 30%. Of those 60, 8 cancelled within the first 30 days, and 5 had their first payment fail and were removed by day 75. By day 90, 47 of the original 60 are still active.

Standard close rate is 60 over 200, or 30%. Close-to-retained is 47 over 200, or 23.5%. The gap is 6.5 percentage points. That's the early-churn drag on the close rate the manager has been quoting. Not catastrophic. Not nothing. Across a year, it's the difference between a gym that thinks its pipeline is healthier than it is and one that knows what it's actually producing.

The gap isn't uniform across the pipeline. Run the same calculation segmented by lead source and the rankings often shift. The channel with the highest standard close rate might not have the highest close-to-retained. Channels that signed aggressively but didn't filter for fit usually drop the most when the retention window is applied. The honest read on which channels are worth investing in lives in the close-to-retained view, not the standard one.

Close-to-retained is the foundational version of this analysis. The same logic extends to source, promo, rep, and tier. The math is one formula. The discipline is making sure the data is clean enough to trust the answer.

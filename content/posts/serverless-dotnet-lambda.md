---
title: "Cold starts, warm feelings: .NET APIs on AWS Lambda"
date: 2026-06-18
tags: [".NET", "AWS", "Serverless"]
categories: ["Engineering"]
description: "Notes on running C# APIs serverless: where cold starts actually hurt, and the three settings that matter before you reach for provisioned concurrency."
---

> Sample post, here to fill out the list page and tag filters. Replace it
> with your own writing.

The standard objection to .NET on Lambda is cold start time. It is a real
cost, but it is paid less often than people assume, and most of it can be
engineered away before you spend money on provisioned concurrency.

## Where cold starts actually hurt

A cold start happens on the first request to a new execution environment.
For a steady-traffic API, that is a tiny fraction of requests. The places it
genuinely hurts:

- spiky traffic that forces parallel environment creation
- latency-sensitive endpoints behind a user click
- cron-style workloads that go cold between runs

## Three settings before provisioned concurrency

### 1. ReadyToRun compilation

Ahead-of-time compiled images skip most JIT work at startup:

```xml
<PropertyGroup>
  <PublishReadyToRun>true</PublishReadyToRun>
</PropertyGroup>
```

### 2. Memory is CPU

Lambda allocates CPU proportional to memory. Bumping 512 MB to 1024 MB often
halves cold start time for a .NET API, and the per-request cost barely moves
because requests finish faster.

### 3. Trim the dependency graph

Every assembly loaded at startup is startup time. The usual suspects are DI
registrations that build clients eagerly. Register lazily, and let the first
handler invocation pay only for what it uses.

## When to stop optimizing

If p99 latency is fine and the remaining cold starts are on background
endpoints, you are done. Provisioned concurrency is for the case where a
human is waiting behind the request and the math above was not enough.

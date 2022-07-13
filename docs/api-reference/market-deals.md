---
sidebar_position: 4
---

# Market & Deals

Todo: Market & Deals's description.

Network Health Dashboard link: https://dashboard.starboard.ventures/market-deals

### Deal States Aggregate Daily

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-active-deal-pib-statistics>

<https://observablehq.com/@starboard/chart-daily-active-deal-count-statistics>

<https://observablehq.com/@starboard/chart-daily-active-deal-tib-change-breakdown>

<https://observablehq.com/@starboard/chart-daily-active-deal-count-change-breakdown>

<https://observablehq.com/@starboard/datafield-dsad_active_deals_regular_provider_collateral>

<https://observablehq.com/@starboard/datafield-dsad_active_deals_verified_provider_collateral>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/deal_states_aggregate_daily`

RESPONSE SCHEMA

| **Variable**                              | **Type** | **Description**                                                            |
| :---------------------------------------- | :------- | :------------------------------------------------------------------------- |
| stat_date                                 | DATE     | Data date, Data of day N will be triggered on day N+1.                     |
| active_deals_regular_bytes                | NUMERIC  | Active normal deal bytes.                                                  |
| active_deals_regular_bytes_increase       | NUMERIC  | active_deals_regular_bytes(day D) - active_deals_regular_bytes(day D-1).   |
| active_deals_verified_bytes               | NUMERIC  | Active verified deal bytes.                                                |
| active_deals_verified_bytes_increase      | NUMERIC  | active_deals_verified_bytes(day D) - active_deals_verified_bytes(day D-1). |
| active_deals_regular_count                | BIGINT   | Active normal deal count.                                                  |
| active_deals_verified_count               | BIGINT   | Active verified deal count.                                                |
| activated_deals_regular_bytes             | NUMERIC  | Activate normal deal bytes.                                                |
| activated_deals_verified_bytes            | NUMERIC  | Activate verified deal bytes.                                              |
| activated_deals_regular_count             | BIGINT   | Activate normal deal count.                                                |
| activated_deals_verified_count            | BIGINT   | Activate verified deal count.                                              |
| new_deals_regular_bytes                   | NUMERIC  | New normal deal bytes.                                                     |
| new_deals_verified_bytes                  | NUMERIC  | New verified deal bytes.                                                   |
| new_deals_regular_count                   | BIGINT   | New normal deal count.                                                     |
| new_deals_verified_count                  | BIGINT   | New verified deal count.                                                   |
| slashed_deals_regular_bytes               | NUMERIC  | Slashed normal deal bytes.                                                 |
| slashed_deals_verified_bytes              | NUMERIC  | Slashed verified deal bytes.                                               |
| slashed_deals_regular_count               | BIGINT   | Slashed normal deal count.                                                 |
| slashed_deals_verified_count              | BIGINT   | Slashed verified deal count.                                               |
| expired_deals_regular_bytes               | NUMERIC  | Expired normal deal bytes.                                                 |
| expired_deals_verified_bytes              | NUMERIC  | Expired verified deal bytes.                                               |
| expired_deals_regular_count               | BIGINT   | Expired normal deal count.                                                 |
| expired_deals_verified_count              | BIGINT   | Expired verified deal count.                                               |
| active_deals_regular_provider_collateral  | NUMERIC  | Provider collateral in active normal deals.                                |
| active_deals_verified_provider_collateral | NUMERIC  | Provider collateral in active verified deals.                              |

RESPONSE EXAMPLES


### Daily Deal Summary Statistics 

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-dssd_latest>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/deal_summary_statistics_daily`

RESPONSE SCHEMA

| **Variable**                            | **Type** | **Description**                                                                                    |
| :-------------------------------------- | :------- | :------------------------------------------------------------------------------------------------- |
| stat_date                               | DATE     | Data date, Data of day N will be triggered on day N+1.                                             |
| new_deal_bytes_regular_last_week        | NUMERIC  | 七天内的new regular deal bytes (out of new deal)                                                   |
| new_deal_bytes_verified_last_week       | NUMERIC  | 七天内的new verified deal bytes (out of new deal)                                                  |
| max_regular_deal_price_last_week        | NUMERIC  | 七天内最贵的regular deal price in FIL (out of new deal)                                            |
| max_verified_deal_price_last_week       | NUMERIC  | 七天内最贵的 verified deal price in FIL (out of new deal)                                          |
| min_regular_deal_price_last_week        | NUMERIC  | 七天内最便宜的regular deal price  in FIL (out of new deal)                                         |
| min_verified_deal_price_last_week       | NUMERIC  | 七天内最便宜的verified deal price in FIL (out of new deal)                                         |
| total_regular_deal_count                | BIGINT   | 截至当日的 normal deal 的 deal_id 数量 (out of new deal)                                           |
| total_verified_deal_count               | BIGINT   | 截至当日的 verified deal 的 deal_id 数量 (out of new deal)                                         |
| total_regular_deal_bytes                | NUMERIC  | 截至当日的 regular deal size in bytes (out of new deal)                                            |
| total_verified_deal_bytes               | NUMERIC  | 截至当日的 verified deal size in bytes (out of new deal)                                           |
| avg_regular_deal_bytes                  | NUMERIC  | 截至当日的平均 regular deal size in bytes (out of new deal)                                        |
| avg_verified_deal_bytes                 | NUMERIC  | 截至当日的平均 verified deal size in bytes (out of new deal)                                       |
| total_regular_deal_duration             | NUMERIC  | 截至当日的 regular deal duration (out of new deal)                                                 |
| total_verified_deal_duration            | NUMERIC  | 截至当日的 verified deal duration (out of new deal)                                                |
| avg_regular_deal_duration_days          | NUMERIC  | 截至当日的平均 regular deal duration in days (out of new deal)                                     |
| avg_verified_deal_duration_days         | NUMERIC  | 截至当日的平均 verified deal duration in days (out of new deal)                                    |
| total_regular_deal_provider_collateral  | NUMERIC  | 截至当日的 regular deal provider collateral in FIL(out of new deal)                                |
| total_verified_deal_provider_collateral | NUMERIC  | 截至当日的 verified deal provider collateral in FIL(out of new deal)                               |
| avg_regular_deal_provider_collateral    | BIGINT   | 截至当日的平均 regular deal provider collateral in FIL(out of new deal)                            |
| avg_verified_deal_provider_collateral   | BIGINT   | 截至当日的平均 verified deal provider collateral in FIL(out of new deal)                           |
| percent_regular_deal_free               | NUMERIC  | 截至当日的免 storage_price_per_epoch 的 regular deal 占全部 regular deal 比值。(out of new deal)   |
| percent_verified_deal_free              | NUMERIC  | 截至当日的免 storage_price_per_epoch 的 verified deal 占全部 verified deal 比值。(out of new deal) |
| median_regular_deal_price               | BIGINT   | 截至当日的 regular deal storage price per tib month in FIL 中位数。(out of new deal)               |
| median_verified_deal_price              | BIGINT   | 截至当日的 verified deal storage price per tib month in FIL 中位数。(out of new deal)              |
| RESPONSE EXAMPLES                       |          |                                                                                                    |

### Top 10 Client by Active Deals Bytes

DESCRPITION

Top 10 active clients on Filecoin based on deal size.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-active-deal-byte>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_clients_by_active_deal_bytes`

RESPONSE SCHEMA

| **Variable**      | **Type** | **Description**                                        |
| :---------------- | :------- | :----------------------------------------------------- |
| stat_date         | DATE     | Data date, Data of day N will be triggered on day N+1. |
| client_id         | TEXT     | Client ID. "others" is a fake id.                      |
| client_rank       | INTEGER  | Client rank.                                           |
| active_deal_bytes | NUMERIC  | Client active deal bytes in the past day.              |

RESPONSE EXAMPLES

### Top 10 Client by Active Deals Count

DESCRPITION

Top 10 active clients on Filecoin based on deal count.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-active-deal-count>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_clients_by_active_deal_count`

RESPONSE SCHEMA

| **Variable**      | **Type** | **Description**                                        |
| :---------------- | :------- | :----------------------------------------------------- |
| stat_date         | DATE     | Data date, Data of day N will be triggered on day N+1. |
| client_id         | TEXT     | Client ID. "others" is a fake id.                      |
| client_rank       | INTEGER  | Client rank.                                           |
| active_deal_count | BIGINT   | Client active deal count in the past day.              |

RESPONSE EXAMPLES


### Top 10 Client by New Deals Bytes

DESCRPITION

Top 10 clients on Filecoin based on newly committed sector deal size during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-newly-committed-byte>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_clients_by_new_deal_bytes`

RESPONSE SCHEMA

| **Variable**   | **Type** | **Description**                                        |
| :------------- | :------- | :----------------------------------------------------- |
| stat_date      | DATE     | Data date, Data of day N will be triggered on day N+1. |
| client_id      | TEXT     | Client ID. "others" is a fake id.                      |
| client_rank    | INTEGER  | Client rank.                                           |
| new_deal_bytes | NUMERIC  | Client new deal bytes in the past week.                |

RESPONSE EXAMPLES

### Top 10 Client by New Deals Count

DESCRPITION

Top 10 clients on Filecoin based on newly committed sector deal count during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-newly-committed-count>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_clients_by_new_deal_count`

RESPONSE SCHEMA

| **Variable**   | **Type** | **Description**                                        |
| :------------- | :------- | :----------------------------------------------------- |
| stat_date      | DATE     | Data date, Data of day N will be triggered on day N+1. |
| client_id      | TEXT     | Client ID. "others" is a fake id.                      |
| client_rank    | INTEGER  | Client rank.                                           |
| new_deal_count | BIGINT   | Client new deal count in the past week.                |

RESPONSE EXAMPLES

### Top 10 Storage Provider by Active Deals Bytes

DESCRPITION

Top 10 active storage providers on Filecoin based on deal size.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-storage-provider-by-active-deal-byte>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_providers_by_active_deal_bytes`

RESPONSE SCHEMA

| **Variable**      | **Type** | **Description**                                        |
| :---------------- | :------- | :----------------------------------------------------- |
| stat_date         | DATE     | Data date, Data of day N will be triggered on day N+1. |
| provider_id       | TEXT     | Storage provider ID. "others" is a fake id.            |
| provider_rank     | INTEGER  | Storage provider rank.                                 |
| active_deal_bytes | NUMERIC  | Storage provider active deal bytes in the past day.    |

RESPONSE EXAMPLES

### Top 10 Storage Provider by Active Deals Count

DESCRPITION

Top 10 active storage providers on Filecoin based on deal count.

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-tpbadc_latest>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_providers_by_active_deal_count`

RESPONSE SCHEMA

| **Variable**      | **Type** | **Description**                                        |
| :---------------- | :------- | :----------------------------------------------------- |
| stat_date         | DATE     | Data date, Data of day N will be triggered on day N+1. |
| provider_id       | TEXT     | Storage provider ID. "others" is a fake id.            |
| provider_rank     | INTEGER  | Storage provider rank.                                 |
| active_deal_count | BIGINT   | Storage provider active deal count in the past day.    |

RESPONSE EXAMPLES


### Top 10 Storage Provider by New Deals Bytes

DESCRPITION

Top 10 storage provider on Filecoin based on newly committed sector deal size during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-tpbndb_latest>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_providers_by_new_deal_bytes`

RESPONSE SCHEMA

| **Variable**   | **Type** | **Description**                                        |
| :------------- | :------- | :----------------------------------------------------- |
| stat_date      | DATE     | Data date, Data of day N will be triggered on day N+1. |
| provider_id    | TEXT     | Storage provider ID. "others" is a fake id.            |
| provider_rank  | INTEGER  | Storage provider rank.                                 |
| new_deal_bytes | NUMERIC  | Storage provider new deal bytes in the past week.      |

RESPONSE EXAMPLES

### Top 10 Storage Provider by New Deals Count

DESCRPITION

Top 10 storage provider on Filecoin based on newly committed sector deal count during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-tpbndc_latest>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/top10_providers_by_new_deal_count`

RESPONSE SCHEMA

| **Variable**   | **Type** | **Description**                                        |
| :------------- | :------- | :----------------------------------------------------- |
| stat_date      | DATE     | Data date, Data of day N will be triggered on day N+1. |
| provider_id    | TEXT     | Storage provider ID. "others" is a fake id.            |
| provider_rank  | INTEGER  | Storage provider rank.                                 |
| new_deal_count | BIGINT   | Storage provider new deal count in the past week.      |

RESPONSE EXAMPLES


### New Deals

DESCRPITION


QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/new_deals`

RESPONSE SCHEMA

| **Variable**            | **Type** | **Description**                                        |
| :---------------------- | :------- | :----------------------------------------------------- |
| stat_date               | DATE     | Data date, Data of day N will be triggered on day N+1. |
| regular_deals_count     | BIGINT   | New Regular Deals Count.                               |
| regular_deals_bytes_tb  | NUMERIC  | New Regular Deal Bytes.                                |
| verified_deals_count    | BIGINT   | New Verified Deals Count.                              |
| verified_deals_bytes_tb | NUMERIC  | New Verified Deal Bytes.                               |

RESPONSE EXAMPLES


### Client Headcount

DESCRPITION


QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/market-deals/deal_client_headcount`

RESPONSE SCHEMA

| **Variable**                       | **Type** | **Description**                                                               |
| :--------------------------------- | :------- | :---------------------------------------------------------------------------- |
| stat_date                          | DATE     | Data date, Data of day N will be triggered on day N+1.                        |
| <p>total_clients</p><p></p><p></p> | BIGINT   | Total client number until the 1st height of data date.                        |
| total_clients_verified             | BIGINT   | Total client number, which has fil+ deals, until the 1st height of data date. |
| total_clients_verified_ratio       | NUMERIC  | total_clients_verified / total_clients                                        |

RESPONSE EXAMPLES
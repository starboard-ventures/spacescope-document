---
sidebar_position: 5
---

# Transactions & Usage

Todo: Transactions & Usage's description.

Network Health Dashboard link: https://dashboard.starboard.ventures/transactions-usage

### Daily Gas Fee Overview

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-gfod_gas_sector_sealing>

<https://observablehq.com/@starboard/datafield-gfod_gas_storage_deal_publishing>

<https://observablehq.com/@starboard/datafield-gfod_provecommit_cost>

<https://observablehq.com/@starboard/datafield-gfod_provecommit_batch_cost>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_fee_overview_d`

RESPONSE SCHEMA

| **Variable**                | **Type** | **Description**                                                                                            |
| :-------------------------- | :------- | :--------------------------------------------------------------------------------------------------------- |
| stat_date                   | DATE     | Data date, Data of day N will be triggered on day N+1.                                                     |
| gas_sector_sealing          | NUMERIC  | The average gas cost of sealing a sector in the past 24 hours.                                             |
| gas_storage_deal_publishing | NUMERIC  | The average gas cost of publishing a storage deal in the past 24 hours.                                    |
| overestimation              | NUMERIC  | Average Overestimation.                                                                                    |
| miner_tip_per_message       | NUMERIC  | The average amount of FIL the miner receives for executing the message.                                    |
| precommit_cost              | NUMERIC  | The average cost of PreCommitSector method in the past 24 hours.                                           |
| provecommit_cost            | NUMERIC  | The average cost of ProveCommitSector method in the past 24 hours.                                         |
| precommit_batch_cost        | NUMERIC  | The average cost of PreCommitSecotorBatch method, including corresponding batch fees in the past 24 hours. |
| provecommit_batch_cost      | NUMERIC  | The average cost of ProveCommitAggregate method, including corresponding batch fees in the past 24 hours.  |
| avg_pre_agg_count           | NUMERIC  | Average PreCommitSectorBatch count of last day.                                                            |
| avg_prove_agg_count         | NUMERIC  | Average ProveCommitAggregate count of last day.                                                            |

RESPONSE EXAMPLES

### Hourly Gas Fee Overview

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-network-basefee>

<https://observablehq.com/@starboard/chart-precommit-cost-per-sector>

<https://observablehq.com/@starboard/chart-provecommit-sector-cost-per-sector>

QUERY PARAMETERS

| **Variable** | **Type**    | **Description** |
| :----------- | :---------- | :-------------- |
| start_date   | DATE        | Optional        |
| end_date     | DATE        | Optional        |
| start_hour   | TIMESTAMPTZ | Optional        |
| end_hour     | TIMESTAMPTZ | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_fee_overview_h`

RESPONSE SCHEMA

| **Variable**            | **Type**    | **Description**                                                                                                                     |
| :---------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| <p>stat_date</p><p></p> | DATE        | Data date, Data of day N will be triggered on day N+1.                                                                              |
| hour_date               | TIMESTAMPTZ | Trunc hour of height.                                                                                                               |
| precommit_cost_sector   | NUMERIC     | Average PreCommit Cost.                                                                                                             |
| provecommit_cost_sector | NUMERIC     | Average ProveCommit Cost.                                                                                                           |
| pre_batch_cost_sector   | NUMERIC     | Fee required to PreCommit a sector into Filecoin network in the past hour.                                                          |
| prove_batch_cost_sector | NUMERIC     | Fee required to ProveCommit a sector into Filecoin network in the past hour.                                                        |
| base_fee                | NUMERIC     | The average set price per unit of gas to be burned (sent to an unrecoverable address) for every message execution. (Unit: Nano FIL) |
| avg_pre_agg_count       | NUMERIC     | The deal count of PreCommit aggregate on Filecoin in the past hour.                                                                 |
| avg_prove_agg_count     | NUMERIC     | The deal count of ProveCommit aggregate on Filecoin in the past hour.                                                               |

RESPONSE EXAMPLES

### Daily Network Fee Breakdown

DESCRPITION

The network fees on Filecoin network in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-network-fee-breakdown>

<https://observablehq.com/@starboard/chart-daily-network-fee-breakdown-v2>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/network_fee_breakdown`

RESPONSE SCHEMA

| **Variable**           | **Type** | **Description**                                                                                                                                                   |
| :--------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stat_date              | DATE     | Data date, Data of day N will be triggered on day N+1.                                                                                                            |
| base_fee_burn          | NUMERIC  | Base fee burn.                                                                                                                                                    |
| overestimation_fee     | NUMERIC  | Overestimation fee.                                                                                                                                               |
| pre_commit_batch_fee   | NUMERIC  | PreCommit Batch Fee.                                                                                                                                              |
| prove_commit_batch_fee | NUMERIC  | ProveCommit Batch Fee.                                                                                                                                            |
| penalty_fee            | NUMERIC  | total_fee_increase - base_fee - overestimation_fee - pre_commit_batch_fee - prove_commit_batch_fee.                                                               |
| penalty_fee_v2         | NUMERIC  | miner_penalty from derived_gas_outputs.                                                                                                                           |
| miner_tip              | NUMERIC  | The amount of FIL the miner receives for executing the message.                                                                                                   |
| total_fee              | NUMERIC  | Total Fee burnt.                                                                                                                                                  |
| total_fee_increase     | NUMERIC  | Daily increasement of total Fee burnt.                                                                                                                            |
| protocol_revenue       | NUMERIC  | Protocol revenue = base_fee_burn + pre_commit_batch_fee + prove_commit_batch_fee + penalty_fee + overestimation_fee + miner_tip = total_fee_increase + miner_tip. |
| total_protocol_revenue | NUMERIC  | Accumulated protocol revenue from 20201015 until day N.                                                                                                           |

RESPONSE EXAMPLES


### Daily Gas Usage by Methods

DESCRPITION

The gas usage on Filecoin network based on sector states in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-gas-usage>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_usage_msg_d`

RESPONSE SCHEMA

| **Variable**           | **Type** | **Description**                                                                      |
| :--------------------- | :------- | :----------------------------------------------------------------------------------- |
| stat_date              | DATE     | Data date, Data of day N will be triggered on day N+1.                               |
| total_gas_used         | NUMERIC  | Total amount of resources (or units of gas) consumed, in order to execute a message. |
| prove_commit_sector    | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 7).                     |
| pre_commit_sector      | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 6).                     |
| prove_commit_aggregate | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 26).                    |
| pre_commit_sectorbatch | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 25).                    |
| publish_storage_deals  | NUMERIC  | Total gas used of (actor_family ='storagemarket' and method = 4).                    |
| submit_windowed_post   | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 5).                     |

RESPONSE EXAMPLES


### Distribution of Past 24 Hours preCommit Batch & proveCommit Batch

DESCRPITION

Distribution of deal counts for PreCommit and ProveCommit on Filecoin network in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-distribution-of-past-24-hours-commit-batch>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_distribution_d`

RESPONSE SCHEMA

| **Variable**                     | **Type** | **Description**                                                                   |
| :------------------------------- | :------- | :-------------------------------------------------------------------------------- |
| stat_date                        | DATE     | Data date, Data of day N will be triggered on day N+1.                            |
| <p>metric_type</p><p></p><p></p> | VARCHAR  | precommit_batch_distribution or provecommit_batch_distribution .                  |
| distribution_key                 | VARCHAR  | Buckets in size of 10.                                                            |
| distribution_value               | NUMERIC  | Number of PreCommitSectorBatch count or ProveCommitAggregate count in the bucket. |

RESPONSE EXAMPLES


### Top 10 Storage Provider by Gas Usage

DESCRPITION

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_top_storage_provider_d`

RESPONSE SCHEMA

| **Variable**                         | **Type** | **Description**                                        |
| :----------------------------------- | :------- | :----------------------------------------------------- |
| stat_date                            | DATE     | Data date, Data of day N will be triggered on day N+1. |
| <p>miner_id</p><p></p><p></p><p></p> | TEXT     |                                                        |
| gas_used                             | NUMERIC  | base_fee_burn + over_estimation_burn + miner_tip.      |

RESPONSE EXAMPLES


### Daily Gas Detail Message

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-gdmd_latest>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_detail_message_d`

RESPONSE SCHEMA

| **Variable**             | **Type** | **Description**                                                                                                 |
| :----------------------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| stat_date                | DATE     | Data date, Data of day N will be triggered on day N+1.                                                          |
| actor_family             | TEXT     | The short unversioned name of the actor that received the message.'All methods' is for all.                     |
| method                   | BIGINT   | The successful method number to invoke. Only unique to the actor the method is being invoked on. (0 is for all) |
| method_name              | TEXT     | The human readable name of method.                                                                              |
| message_count            | BIGINT   | Message number of this method.                                                                                  |
| message_count_pct        | NUMERIC  | Ratio of message number of this method to all methods.                                                          |
| gas_used                 | NUMERIC  | Total gas used of this method.                                                                                  |
| gas_used_pct             | NUMERIC  | Ratio of gas used of this method to all methods.                                                                |
| base_fee_burn            | NUMERIC  | Total amount of FIL to burn as a result of the base fee of this method.                                         |
| base_fee_burn_pct        | NUMERIC  | Ratio of base_fee_burn of this method to all methods.                                                           |
| over_estimation_burn     | NUMERIC  | Total fee to pay for overestimating the gas used to execute a message of this method.                           |
| over_estimation_burn_pct | NUMERIC  | Ratio of over_estimation_burn of this method to all methods.                                                    |
| miner_tip                | NUMERIC  | Total amount of FIL the miner receives for executing the message.                                               |
| miner_tip_pct            | NUMERIC  | Ratio of miner_tip of this method to all methods.                                                               |

RESPONSE EXAMPLES


### Daily Gas Detail Message (Average)

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/datafield-gudmd_latest>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/transactions-usage/gas_usage_detail_message_d`

RESPONSE SCHEMA

| **Variable**         | **Type** | **Description**                                                                                                 |
| :------------------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| stat_date            | DATE     | Data date, Data of day N will be triggered on day N+1.                                                          |
| actor_family         | TEXT     | The short unversioned name of the actor that received the message.'All methods' is for all.                     |
| method               | BIGINT   | The successful method number to invoke. Only unique to the actor the method is being invoked on. (0 is for all) |
| method_name          | TEXT     | The human readable name of method.                                                                              |
| gas_used             | BIGINT   | Average gas used of this method.                                                                                |
| gas_limit            | NUMERIC  | Average gas limit of this method.                                                                               |
| over_estimation_rate | NUMERIC  | (total_gas_limit - total_gas_used) / total_gas_used                                                             |
| base_fee_burn        | NUMERIC  | Average amount of FIL to burn as a result of the base fee of this method.                                       |
| over_estimation_burn | NUMERIC  | Average fee to pay for overestimating the gas used to execute a message of this method.                         |
| miner_tip            | NUMERIC  | Average amount of FIL the miner receives for executing the message.                                             |

RESPONSE EXAMPLES
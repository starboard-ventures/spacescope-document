---
sidebar_position: 3
---

# Capacity & Services

Todo: Capacity & Services's description.

Network Health Dashboard link: <https://dashboard.starboard.ventures/capacity-services>

### Network Storage Capacity 

DESCRPITION

The Filecoin network storage capacity in Raw Byte (RB) and Quality-Adjusted (QA) Power.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-network-storage-capacity>

<https://observablehq.com/@starboard/chart-network-storage-capacity-with-baseline>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | STRING   | Optional        |
| end_date     | STRING   | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/network_storage_capacity`

RESPONSE SCHEMA

| **Variable**                   | **Type** | **Description**                                                                                                                                    |
| :----------------------------- | :------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| stat_date                      | DATE     | Data date, Data of day N will be triggered on day N+1.                                                                                             |
| total_qa_bytes_power           | NUMERIC  | This parameter measures the consensus power of stored data on the network, and is equal to Raw Byte Power multiplied by Sector Quality Multiplier. |
| total_qa_bytes_power_increase  | NUMERIC  |                                                                                                                                                    |
| total_raw_bytes_power          | NUMERIC  | This measurement is the size of a sector in bytes.                                                                                                 |
| total_raw_bytes_power_increase | NUMERIC  |                                                                                                                                                    |
| new_baseline_power             | NUMERIC  | The baseline power (in bytes) the network is targeting.                                                                                            |

RESPONSE EXAMPLES

### Sectors Storage State (storage_state_d)

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-active-faults>

<https://observablehq.com/@starboard/datafield-ssd_active_term_m>

<https://observablehq.com/@starboard/chart-daily-active-termination>

<https://observablehq.com/@starboard/chart-daily-sector-extension>

<https://observablehq.com/@starboard/chart-change-in-active-faults-breakdown>

<https://observablehq.com/@starboard/chart-daily-average-days-faulted-of-active-faults>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/storage_state_d`

RESPONSE SCHEMA

| **Variable**           | **Type** | **Description**                                                                                  |
| :--------------------- | :------- | :----------------------------------------------------------------------------------------------- |
| stat_date              | DATE     | Data date, Data of day N will be triggered on day N+1.                                           |
| active_fault           | NUMERIC  | The total storage size of outstanding faulted sectors that are not recovered or terminated.      |
| active_fault_increase  | NUMERIC  | <p>active_fault(day D) - active_fault(day D-1).</p><p></p>                                       |
| active_fault_avg_d     | NUMERIC  | Average days that a sector fault remains active on the Filecoin network during the last 24 hour. |
| fault_d                | NUMERIC  | Newly add faulted sector size in TiB in the past day                                             |
| recover_d              | NUMERIC  | Newly add recovered sector size in TiB in the past day                                           |
| term_d                 | NUMERIC  | Daily terminated sector size in TiB.                                                             |
| term_d_increase        | NUMERIC  | term_d(day D) - term_d(day D-1).                                                                 |
| net_fault_d            | NUMERIC  | fault_d - recover_d - term_d                                                                     |
| active_term_d          | NUMERIC  | Sectors that are scheduled to expire but gets terminated actively by SPs.                        |
| active_term_m          | NUMERIC  | The total storage size of new active terminated sectors in the past 30 days.                     |
| active_term_m_increase | NUMERIC  | active_term_m(day D) - active_term_m(day D-1).                                                   |
| passive_term_d         | NUMERIC  | Sectors that are scheduled to expire but gets terminated passively after 42 days.                |
| extend_size            | NUMERIC  | Sectors that are scheduled to expire but get extended during the last 24 hour.                   |
| extend_size_increase   | NUMERIC  | extend_size(day D) - extend_size(day D-1).                                                       |

RESPONSE EXAMPLES

### Capacity Onboarding by Method

DESCRPITION

Sectors onboarded onto the network based on PreCommit and ProveCommit states during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-sector-onboarding-breakdown-by-method>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/sector_onboarding_by_method`

RESPONSE SCHEMA


| **Variable**                 | **Type** | **Description**                                        |
| :--------------------------- | :------- | :----------------------------------------------------- |
| stat_date                    | DATE     | Data date, Data of day N will be triggered on day N+1. |
| pre_commit_sector_size       | NUMERIC  | Daily PreCommitSector size in PiB.                     |
| pre_commit_sector_batch_size | NUMERIC  | Daily PreCommitSectorBatch size in PiB.                |
| pre_commit_total_size        | NUMERIC  | pre_commit_sector_size + pre_commit_sector_batch_size  |
| prove_commit_sector_size     | NUMERIC  | Daily ProveCommitSector size in PiB.                   |
| prove_commit_aggregate_size  | NUMERIC  | Daily ProveCommitAggregate size in PiB.                |
| prove_commit_total_size      | NUMERIC  | prove_commit_sector_size + prove_commit_aggregate_size |

RESPONSE EXAMPLES

### Capacity Onboarding by Sector Size

DESCRPITION

Sectors onboarded onto the network based on sector size during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-prove-commit-32-64-gib-splits>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/prove_commit_split_d`

RESPONSE SCHEMA


| **Variable** | **Type**           | **Description**                                        |
| :----------- | :----------------- | :----------------------------------------------------- |
| stat_date    | <p>DATE</p><p></p> | Data date, Data of day N will be triggered on day N+1. |
| halfsizebyte | NUMERIC            | ProveCommit sector(32GiB) size in bytes.               |
| sizebyte     | NUMERIC            | ProveCommit sector(64GiB) size in bytes.               |

RESPONSE EXAMPLES

### Sectors Scheduled Expiration

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-scheduled-expiration-by-date-breakdown-in-pib>

<https://observablehq.com/@starboard/chart-scheduled-expiration-by-date-breakdown-in>

<https://observablehq.com/@starboard/chart-initial-pledge-release-by-scheduled-expiration-fil>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/sectors_schedule_expiration`

RESPONSE SCHEMA


| **Variable**            | **Type** | **Description**                                                        |
| :---------------------- | :------- | :--------------------------------------------------------------------- |
| stat_date               | DATE     | Data date, Data of day N will be triggered on day N+1.                 |
| interest_date           | DATE     | The date of interest.                                                  |
| schedule_expire_bytes   | BIGINT   | The total bytes of sectors alive.                                      |
| extended_bytes          | BIGINT   | The total bytes of sectors which have been extended.                   |
| terminated_bytes        | BIGINT   | The total bytes of sectors which have been terminated.                 |
| expired_bytes           | BIGINT   | The total bytes of sectors which already expired.                      |
| potential_expire_bytes  | BIGINT   | scheduled_expire – terminated – extended – expired , in bytes.         |
| schedule_expire_pledge  | NUMERIC  | The total initial pledge of sectors alive.                             |
| extended_pledge         | NUMERIC  | The total initial pledge of sectors which have been extended.          |
| terminated_pledge       | NUMERIC  | The total initial pledge of sectors which have been terminated.        |
| expired_pledge          | NUMERIC  | The total initial pledge of sectors which already expired.             |
| potential_expire_pledge | NUMERIC  | scheduled_expire – terminated – extended – expired, in initial pledge. |

RESPONSE EXAMPLES

### Network Block Reward

DESCRPITION

Weighted block rewards awarded by Filecoin network during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-network-block-rewards>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/network_block_reward`

RESPONSE SCHEMA


| **Variable**        | **Type** | **Description**                                                             |
| :------------------ | :------- | :-------------------------------------------------------------------------- |
| stat_date           | DATE     | Data date, Data of day N will be triggered on day N+1.                      |
| reward_per_wincount | NUMERIC  | Weighted block rewards awarded by Filecoin network during the last 24 hour. |

RESPONSE EXAMPLES


### 32GiB Sector Pledges and Returns

DESCRPITION

Pledges and projected 360 day rewards awarded by Filecoin network for sector size of 32GiB during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-32gib-sector-pledges-and-returns>

<https://observablehq.com/@starboard/economics-table>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/economics_sector_pledges_returns_32g_d`

RESPONSE SCHEMA


| **Variable**         | **Type** | **Description**                                                                                             |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| stat_date            | DATE     | Data date, Data of day N will be triggered on day N+1.                                                      |
| rewards              | NUMERIC  | 360day rewards                                                                                              |
| precommit_fil        | NUMERIC  | PreCommitSector gas                                                                                         |
| provecommit_fil      | NUMERIC  | ProveCommitSector gas                                                                                       |
| precommit_agg_fil    | NUMERIC  | PreCommitSectorBatch gas                                                                                    |
| provecommit_agg_fil  | NUMERIC  | ProveCommitAggregate gas                                                                                    |
| window_fil           | NUMERIC  | window_cost / window_count of SubmitWindowedPoSt method.                                                    |
| profit               | NUMERIC  | rewards - precommit_fil - provecommit_fil - window_fil/2349                                                 |
| profit_agg           | NUMERIC  | rewards - precommit_agg_fil - provecommit_agg_fil - window_fil/2349                                         |
| initial_pledge       | NUMERIC  | initial_pledge = Initial Storage Pledge(20 days equivalent of projected rewards) + Initial Consensus Pledge |
| reward_pledge_return | NUMERIC  | rewards / initial_pledge                                                                                    |
| post_gas_return      | NUMERIC  | profit / initial_pledge                                                                                     |
| post_gas_return_agg  | NUMERIC  | profit_agg / initial_pledge                                                                                 |

RESPONSE EXAMPLES


### 64GiB Sector Pledges and Returns

DESCRPITION

Pledges and projected 360 day rewards awarded by Filecoin network for sector size of 64GiB during the last 24 hour.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-64gib-sector-pledges-and-returns>

<https://observablehq.com/@starboard/economics-table>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/economics_sector_pledges_returns_64g_d`

RESPONSE SCHEMA


| **Variable**         | **Type** | **Description**                                                                                             |
| :------------------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| stat_date            | DATE     | Data date, Data of day N will be triggered on day N+1.                                                      |
| rewards              | NUMERIC  | 360day rewards                                                                                              |
| precommit_fil        | NUMERIC  | PreCommitSector gas                                                                                         |
| provecommit_fil      | NUMERIC  | ProveCommitSector gas                                                                                       |
| precommit_agg_fil    | NUMERIC  | PreCommitSectorBatch gas                                                                                    |
| provecommit_agg_fil  | NUMERIC  | ProveCommitAggregate gas                                                                                    |
| window_fil           | NUMERIC  | window_cost / window_count of SubmitWindowedPoSt method.                                                    |
| profit               | NUMERIC  | rewards - precommit_fil - provecommit_fil - window_fil/2349                                                 |
| profit_agg           | NUMERIC  | rewards - precommit_agg_fil - provecommit_agg_fil - window_fil/2349                                         |
| initial_pledge       | NUMERIC  | initial_pledge = Initial Storage Pledge(20 days equivalent of projected rewards) + Initial Consensus Pledge |
| reward_pledge_return | NUMERIC  | rewards / initial_pledge                                                                                    |
| post_gas_return      | NUMERIC  | profit / initial_pledge                                                                                     |
| post_gas_return_agg  | NUMERIC  | profit_agg / initial_pledge                                                                                 |

RESPONSE EXAMPLES


### Committed and Expired Pledge

DESCRPITION

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-commit-pledge-per-qap>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/capacity-services/commit_and_expire_pledge`

RESPONSE SCHEMA

| **Variable**            | **Type** | **Description**                                        |
| :---------------------- | :------- | :----------------------------------------------------- |
| stat_date               | DATE     | Data date, Data of day N will be triggered on day N+1. |
| raw_bytes_gb            | NUMERIC  | Total sector size of miners.(Bytes / 32 GiB)           |
| commit_pct_qa_adj       | NUMERIC  | Total committed pct verified qap of miners.            |
| commit_pledge           | NUMERIC  | Total committed initial pledge of day.                 |
| commit_pledge_per_bytes | NUMERIC  | Total committed initial pledge per raw bytes of day.   |
| commit_pledge_per_qap   | NUMERIC  | Total committed initial pledge per QAP of day.         |
| expire_pct_qa_adj       | NUMERIC  | Total expired pct verified qap of miners.              |
| expire_pledge           | NUMERIC  | Total expired initial pledge of day.                   |
| expire_pledge_per_bytes | NUMERIC  | Total expired initial pledge per raw bytes of day.     |
| expire_pledge_per_qap   | NUMERIC  | Total expired initial pledge per QAP of day.           |

RESPONSE EXAMPLES
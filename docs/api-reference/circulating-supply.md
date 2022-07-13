---
sidebar_position: 6
---

# Circulating Supply

Todo: Circulating Supply's description.

Network Health Dashboard link: https://dashboard.starboard.ventures/circulating-supply

### FIL Protocol Circulating Supply

DESCRPITION

The total amount and the change of FIL tokens in circulation according to the Protocol’s definition.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-fil-protocol-circulating-supply>

<https://observablehq.com/@starboard/daily-change-in-circulating-supply>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/circulating-supply/circulating_supply`

RESPONSE SCHEMA

| **Variable**                   | **Type** | **Description**                                                                                    |
| :----------------------------- | :------- | :------------------------------------------------------------------------------------------------- |
| stat_date                      | DATE     | Data date, Data of day N will be triggered on day N+1.                                             |
| circulating_fil                | NUMERIC  | The amount of FIL circulating and tradeable in the economy. The basis for Market Cap calculations. |
| circulating_fil_increase       | NUMERIC  | circulating_fil (day D) - circulating_fil (day D-1).                                               |
| mined_fil                      | NUMERIC  | The amount of FIL that has been mined by storage miners.                                           |
| mined_fil_increase             | NUMERIC  | mined_fil (day D) - mined_fil (day D-1).                                                           |
| vested_fil                     | NUMERIC  | Total amount of FIL that is vested from genesis allocation.                                        |
| vested_fil_increase            | NUMERIC  | vested_fil (day D) - vested_fil (day D-1).                                                         |
| reserve_disbursed_fil          | NUMERIC  | The amount of FIL that has been disbursed from the mining reserve.                                 |
| reserve_disbursed_fil_increase | NUMERIC  | reserve_disbursed_fil (day D) - reserve_disbursed_fil (day D-1).                                   |
| locked_fil                     | NUMERIC  | The amount of FIL locked as part of mining, deals, and other mechanisms.                           |
| locked_fil_increase            | NUMERIC  | locked_fil (day D) - locked_fil (day D-1).                                                         |
| burnt_fil                      | NUMERIC  | Total FIL burned as part of penalties and on-chain computations.                                   |
| burnt_fil_increase             | NUMERIC  | burnt_fil (day D) - burnt_fil (day D-1).                                                           |

RESPONSE EXAMPLES


### Daily Locked FIL Breakdown

DESCRPITION

The status of FIL token on Filecoin network in the past 24 hours.

ObservableHQ LINK

<https://observablehq.com/@starboard/chart-daily-locked-fil-breakdown>

QUERY PARAMETERS

| **Variable** | **Type** | **Description** |
| :----------- | :------- | :-------------- |
| start_date   | DATE     | Optional        |
| end_date     | DATE     | Optional        |

REQUEST EXAMPLE

GET: `/circulating-supply/network_locked_fil_breakdown`

RESPONSE SCHEMA

| **Variable**                | **Type** | **Description**                                        |
| :-------------------------- | :------- | :----------------------------------------------------- |
| stat_date                   | DATE     | Data date, Data of day N will be triggered on day N+1. |
| total_initial_pledge        | NUMERIC  | Total initial pledge of network.                       |
| total_locked_funds          | NUMERIC  | Total locked funds of network.                         |
| total_locked_funds_increase | NUMERIC  | Daily change of total locked funds of network.         |
| new_initial_pledge          | NUMERIC  | Daily change of total initial pledge of network.       |
| new_reward_locked           | NUMERIC  | Total reward locked of network.                        |
| new_reward_released         | NUMERIC  | new_reward_locked - locked_funds_increase.             |

RESPONSE EXAMPLES
---
sidebar_position: 5
---

# Transactions & Usage

Transactions and usage provides information on the Filecoin Network gas fees and usage.

### Daily Gas Fee Overview

#### Description

Overview of gas fee occurred on the Filecoin Network during the last 24 hours.

#### Request URL

```js
GET: /network_core/transactions-usage/gas_fee_overview_d
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_d?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_d?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_d?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_d?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                | **Type** | **Description**                                                                                            |
| :-------------------------- | :------- | :--------------------------------------------------------------------------------------------------------- |
| stat_date                   | DATE     | Refers to the date the data was recorded.                                                     |
| gas_sector_sealing          | NUMERIC  | The average gas cost of sealing a sector in the past 24 hours.                                             |
| gas_storage_deal_publishing | NUMERIC  | The average gas cost of publishing a storage deal in the past 24 hours.                                    |
| overestimation              | NUMERIC  | The average gas overestimation cost in the past 24 hours.                                                                                    |
| miner_tip_per_message       | NUMERIC  | The average amount of FIL the miner receives for executing the message.                                    |
| precommit_cost              | NUMERIC  | The average cost of PreCommitSector method in the past 24 hours.                                           |
| provecommit_cost            | NUMERIC  | The average cost of ProveCommitSector method in the past 24 hours.                                         |
| precommit_batch_cost        | NUMERIC  | The average cost of PreCommitSecotorBatch method, including corresponding batch fees in the past 24 hours. |
| provecommit_batch_cost      | NUMERIC  | The average cost of ProveCommitAggregate method, including corresponding batch fees in the past 24 hours.  |
| avg_pre_agg_count           | NUMERIC  | Average PreCommitSectorBatch count of last day.                                                            |
| avg_prove_agg_count         | NUMERIC  | Average ProveCommitAggregate count of last day.                                                            |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#656",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "gas_sector_sealing": 0.0117253306541251,
           "gas_storage_deal_publishing": 0.0226392708856105,
           "overestimation": 0.2589213231427517,
           "miner_tip_per_message": 0.000004940028699413,
           "precommit_cost": 0.00245399760172175,
           "provecommit_cost": 0.00817382179859997,
           "precommit_batch_cost": 0.00446321841000505,
           "provecommit_batch_cost": 0.0129468113973523,
           "avg_pre_agg_count": 55.48120989917507,
           "avg_prove_agg_count": 210.14623338257016
       }
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Gas of Sector Sealing](https://observablehq.com/@starboard/datafield-gfod_gas_sector_sealing)  
- [Chart: Daily Gas of Storage Deal Publishing](https://observablehq.com/@starboard/datafield-gfod_gas_storage_deal_publishing)
- [Chart: Daily Cost of ProveCommit](https://observablehq.com/@starboard/datafield-gfod_provecommit_cost)
- [Chart: Daily Cost of ProveCommit Batch](https://observablehq.com/@starboard/datafield-gfod_provecommit_batch_cost)

:::

<hr />

### Hourly Gas Fee Overview

#### Description

Overview of gas fee occurred on the Filecoin Network during the previous hour.

#### Request URL

```js
GET: /network_core/transactions-usage/gas_fee_overview_h
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start hour of the selected period (Optional). | 2022-07-01T00:00:00Z  | The first hour (0 AM) of  the most recent date that the API includes. |
| end_date     | STRING   | End hour of the selected period (Optional).   | 2022-07-01T00:00:00Z  | The first hour (0 AM) of  the most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>


<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_h?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_h?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_h?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_fee_overview_h?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**            | **Type**    | **Description**                                                                                                                     |
| :---------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| stat_date | DATE        | Refers to the date the data was recorded.                                                                              |
| hour_date               | TIMESTAMPTZ | Trunc hour of height.                                                                                                               |
| precommit_cost_sector   | NUMERIC     | Average PreCommit Cost.                                                                                                             |
| provecommit_cost_sector | NUMERIC     | Average ProveCommit Cost.                                                                                                           |
| pre_batch_cost_sector   | NUMERIC     | Fee required to PreCommit a sector into Filecoin network in the past hour.                                                          |
| prove_batch_cost_sector | NUMERIC     | Fee required to ProveCommit a sector into Filecoin network in the past hour.                                                        |
| base_fee                | NUMERIC     | The average set price per unit of gas to be burned (sent to an unrecoverable address) for every message execution. (Unit: Nano FIL) |
| avg_pre_agg_count       | NUMERIC     | The deal count of PreCommit aggregate on Filecoin in the past hour.                                                                 |
| avg_prove_agg_count     | NUMERIC     | The deal count of ProveCommit aggregate on Filecoin in the past hour.                                                               |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#659",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "hour_date": "2022-07-01T00:00:00Z",
           "precommit_cost_sector": 0.00191596433943102,
           "provecommit_cost_sector": 0.00696021555788974,
           "pre_batch_cost_sector": 0.0044265148964296,
           "prove_batch_cost_sector": 0.0129677062373763,
           "base_fee": 0.12069467401666667,
           "avg_pre_agg_count": 46.61904761904762,
           "avg_prove_agg_count": 152.375
       }
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Network Base Fee](https://observablehq.com/@starboard/chart-network-basefee)  
- [Chart: PreCommit Cost per Sector](https://observablehq.com/@starboard/chart-precommit-cost-per-sector)
- [Chart: ProveCommit Cost per Sector](https://observablehq.com/@starboard/chart-provecommit-sector-cost-per-sector)

:::

<hr />

### Daily Network Fee Breakdown

#### Description
The network fees on the Filecoin Network in the past 24 hours.

#### Request URL

```js
GET: /network_core/transactions-usage/network_fee_breakdown
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>


<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**           | **Type** | **Description**                                                                                                                                                   |
| :--------------------- | :------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| stat_date              | DATE     | Refers to the date the data was recorded.                                                                                                            |
| base_fee_burn          | NUMERIC  | Base fee burn.                                                                                                                                                    |
| overestimation_fee     | NUMERIC  | Overestimation fee.                                                                                                                                               |
| pre_commit_batch_fee   | NUMERIC  | PreCommit Batch Fee.                                                                                                                                              |
| prove_commit_batch_fee | NUMERIC  | ProveCommit Batch Fee.                                                                                                                                            |
| penalty_fee            | NUMERIC  | total_fee_increase - base_fee - overestimation_fee - pre_commit_batch_fee - prove_commit_batch_fee.                                                               |
| penalty_fee_v2         | NUMERIC  | miner_penalty from derived_gas_outputs.                                                                                                                           |
| miner_tip              | NUMERIC  | The amount of FIL the miner receives for executing the message.                                                                                                   |
| total_fee              | NUMERIC  | Total Fee burnt.                                                                                                                                                  |
| total_fee_increase     | NUMERIC  | Daily increment of total Fee burnt.                                                                                                                            |
| protocol_revenue       | NUMERIC  | Protocol revenue = base_fee_burn + pre_commit_batch_fee + prove_commit_batch_fee + penalty_fee + overestimation_fee + miner_tip = total_fee_increase + miner_tip. |
| total_protocol_revenue | NUMERIC  | Accumulated protocol revenue from 20201015 until day N.                                                                                                           |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#660",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "base_fee_burn": 6665.807220776991,
           "overestimation_fee": 449.99812880734163,
           "pre_commit_batch_fee": 248.385583929,
           "prove_commit_batch_fee": 1753.46446468425,
           "penalty_fee": 3232.52226487929,
           "penalty_fee_v2": 0.000856864920006476,
           "miner_tip": 7.068296803722808,
           "total_fee": 31178742.350644458,
           "total_fee_increase": 12350.177663076873,
           "protocol_revenue": 12357.245959880596,
           "total_protocol_revenue": 31316297.016597304
       }
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Burn FIL Breakdown](https://observablehq.com/@starboard/chart-daily-network-fee-breakdown)  
- [Chart: Protocol Revenue](https://observablehq.com/@starboard/chart-daily-network-fee-breakdown-v2)

:::

<hr />

### Daily Gas Usage by Methods

#### Description
The gas usage on Filecoin Network based on sector states in the past 24 hours.

#### Request URL

```js
GET: /network_core/transactions-usage/gas_usage_msg_d
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>


<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_msg_d?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_msg_d?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_msg_d?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_msg_d?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**           | **Type** | **Description**                                                                      |
| :--------------------- | :------- | :----------------------------------------------------------------------------------- |
| stat_date              | DATE     | Refers to the date the data was recorded.                               |
| total_gas_used         | NUMERIC  | Total amount of resources (or units of gas) consumed, in order to execute a message. |
| prove_commit_sector    | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 7).                     |
| pre_commit_sector      | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 6).                     |
| prove_commit_aggregate | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 26).                    |
| pre_commit_sectorbatch | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 25).                    |
| publish_storage_deals  | NUMERIC  | Total gas used of (actor_family ='storagemarket' and method = 4).                    |
| submit_windowed_post   | NUMERIC  | Total gas used of (actor_family ='storageminer' and method = 5).                     |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#661",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "total_gas_used": 47858893957775,
           "prove_commit_sector": 32366049681035,
           "pre_commit_sector": 11149043502621,
           "prove_commit_aggregate": 497144277814,
           "pre_commit_sectorbatch": 128102628109,
           "publish_storage_deals": 604228387885,
           "submit_windowed_post": 2197209729799
       }
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Gas Usage](https://observablehq.com/@starboard/chart-daily-gas-usage)  

:::

<hr />

### Distribution of Past 24 Hours preCommit Batch & proveCommit Batch

#### Description
Distribution of deal counts for PreCommit Batch and ProveCommit Batch on Filecoin Network in the past 24 hours.

#### Request URL

```js
GET: /network_core/transactions-usage/gas_distribution_d
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>



<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/gas_distribution_d?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/gas_distribution_d?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_distribution_d?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_distribution_d?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                     | **Type** | **Description**                                                                   |
| :------------------------------- | :------- | :-------------------------------------------------------------------------------- |
| stat_date                        | DATE     | Refers to the date the data was recorded.                            |
| metric_type | VARCHAR  | precommit_batch_distribution or provecommit_batch_distribution .                  |
| distribution_key                 | VARCHAR  | Buckets in size of 10.                                                            |
| distribution_value               | NUMERIC  | Number of PreCommitSectorBatch count or ProveCommitAggregate count in the bucket. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#662",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "metric_type": "precommit_batch_distribution",
           "distribution_key": "101-110",
           "distribution_value": 2
       },
     ……
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Active Deal PiB Statistics](https://observablehq.com/@starboard/chart-distribution-of-past-24-hours-commit-batch)  

:::

<hr />

### Daily Gas Detail Message

#### Description

Gas fee for messages posted onto the Filecoin Network based on the method.

#### Request URL

```js
GET: /network_core/transactions-usage/gas_detail_message_d
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>


<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/gas_detail_message_d?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/gas_detail_message_d?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_detail_message_d?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_detail_message_d?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**             | **Type** | **Description**                                                                                                 |
| :----------------------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| stat_date                | DATE     | Refers to the date the data was recorded.                                                          |
| actor_family             | TEXT     | The short unversioned name of the actor that received the message.'All methods' is for all.                     |
| method                   | BIGINT   | The successful method number to invoke. Only unique to the actor the method is being invoked on. (0 is for all) |
| method_name              | TEXT     | The human readable name of method.                                                                              |
| message_count            | BIGINT   | Message number of this method.                                                                                  |
| message_count_pct        | NUMERIC  | Ratio of message number of this method to all methods.                                                          |
| gas_used                 | NUMERIC  | Total gas used of this method.                                                                                  |
| gas_used_pct             | NUMERIC  | Ratio of gas used in this method to all methods.                                                                |
| base_fee_burn            | NUMERIC  | Total amount of FIL to burn as a result of the base fee of this method.                                         |
| base_fee_burn_pct        | NUMERIC  | Ratio of base_fee_burn of this method to all methods.                                                           |
| over_estimation_burn     | NUMERIC  | Total fee to pay for overestimating the gas used to execute a message of this method.                           |
| over_estimation_burn_pct | NUMERIC  | Ratio of over_estimation_burn of this method to all methods.                                                    |
| miner_tip                | NUMERIC  | Total amount of FIL the miner receives for executing the message.                                               |
| miner_tip_pct            | NUMERIC  | Ratio of miner_tip of this method to all methods.                                                               |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#662",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "actor_family": "account",
           "method": 0,
           "method_name": "Send",
           "message_count": 42570,
           "message_count_pct": 0.01487046764249817,
           "gas_used": 22679366566,
           "gas_used_pct": 0.00024038252971720158,
           "base_fee_burn": 4.60067209660801,
           "base_fee_burn_pct": 0.00027235746850089534,
           "over_estimation_burn": 2.46761128421453,
           "over_estimation_burn_pct": 0.0021579131456095444,
           "miner_tip": 0.0365677552722341,
           "miner_tip_pct": 0.002322468237501894
       },
     ……
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Gas Detail Message](https://observablehq.com/@starboard/datafield-gdmd_latest)  

:::

<hr />


### Daily Gas Detail Message (Average)

#### Description

Average gas fee for messages posted onto the Filecoin Network based on the method.

#### Request URL

```js
GET: /network_core/transactions-usage/gas_usage_detail_message_d
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### Request Examples

<details><summary>Code</summary>
<div>


<Tabs
  groupId="language"
  defaultValue="Python"
  values={[
    { label: 'Python', value: 'Python' },
    { label: 'GO', value: 'GO' },
    { label: 'NodeJS', value: 'NodeJS' },
    { label: 'cURL', value: 'cURL' }
  ]
}>

<TabItem value="Python">

```python
import requests

url = "https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_detail_message_d?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

```

</TabItem>

<TabItem value="GO">

```go
package main
import (
  "fmt"
  "net/http"
  "io/ioutil"
)
func main() {
  url := "https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_detail_message_d?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe")
  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

</TabItem>

<TabItem value="NodeJS">

```js
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_detail_message_d?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
```

</TabItem>
<TabItem value="cURL">

```curl
curl --location --request GET 'https://api.spacescope.io/v1/network_core/transactions-usage/gas_usage_detail_message_d?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**         | **Type** | **Description**                                                                                                 |
| :------------------- | :------- | :-------------------------------------------------------------------------------------------------------------- |
| stat_date            | DATE     | Refers to the date the data was recorded.                                                          |
| actor_family         | TEXT     | The short unversioned name of the actor that received the message.'All methods' is for all.                     |
| method               | BIGINT   | The successful method number to invoke. Only unique to the actor the method is being invoked on. (0 is for all) |
| method_name          | TEXT     | The human readable name of method.                                                                              |
| gas_used             | BIGINT   | Average gas used of this method.                                                                                |
| gas_limit            | NUMERIC  | Average gas limit of this method.                                                                               |
| over_estimation_rate | NUMERIC  | (total_gas_limit - total_gas_used) / total_gas_used                                                             |
| base_fee_burn        | NUMERIC  | Average amount of FIL to burn as a result of the base fee of this method.                                       |
| over_estimation_burn | NUMERIC  | Average fee to pay for overestimating the gas used to execute a message of this method.                         |
| miner_tip            | NUMERIC  | Average amount of FIL the miner receives for executing the message.                                             |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#662",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "actor_family": "account",
           "method": 0,
           "method_name": "Send",
           "gas_used": 532754.6762038994,
           "gas_limit": 931007.8085506225,
           "over_estimation_rate": 0.7475356860017516,
           "base_fee_burn": 0.000108073105393658,
           "over_estimation_burn": 0.0000579659686214359,
           "miner_tip": 8.59002942735122e-7
       },
     ……
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Gas Detail Message (Average)](https://observablehq.com/@starboard/datafield-gudmd_latest)  

:::

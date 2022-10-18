---
sidebar_position: 5
---

# Economics

Economics provides information about the Filecoin Network sector economics and block rewards.

### Block Reward

#### Description

Weighted block rewards awarded by the Filecoin Network.

#### Request URL

```js
GET: /economics/block_reward
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

url = "https://api.spacescope.io/v2/economics/block_reward?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/economics/block_reward?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/economics/block_reward?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/economics/block_reward?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**        | **Type** | **Description**                                                                  |
| ------------------- | -------- | -------------------------------------------------------------------------------- |
| stat_date           | DATE     | Refers to the date the data was recorded.                                       |
| reward_per_wincount | NUMERIC  | Weighted average block rewards awarded by the Filecoin Network per WinCount in the past 24 hours. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#650",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "reward_per_wincount": 20.80218438059619
        }
    ]
}
```
</div>
</details>
<hr />

### Sector Economics


#### Description

Projected pledges and 360-day sector economics of the Filecoin Network calculated based on network data in the past 24 hours.

#### Request URL

```js
GET: /economics/sector_economics
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

url = "https://api.spacescope.io/v2/economics/sector_economics?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/economics/sector_economics?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/economics/sector_economics?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/economics/sector_economics?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**         | **Type** | **Description**                                                                                      |
| -------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| stat_date            | DATE     | Refers to the date the data was recorded.                                                           |
| sector_rewards_360d_32gib              | NUMERIC  | Projected rewards awarded to a 32GiB sector over 360 days.                                                                        |
| sector_precommit_fee_32gib        | NUMERIC  | PreCommitSector gas fees per 32 GiB sector (one-time cost).                                                                             |
| sector_precommit_agg_fee_32gib      | NUMERIC  | PreCommitSectorBatch gas fees per 32 GiB sector (one-time cost for a single sector).                                                                           |
| sector_provecommit_fee_32gib    | NUMERIC  | ProveCommitSector gas fees per 32 GiB sector (one-time cost).                                                                       |
| sector_provecommit_agg_fee_32gib  | NUMERIC  | ProveCommitAggregate gas fees per 32 GiB sector (one-time cost for a single sector).                                                                       |
| sector_windowedpost_fee_360d_32gib           | NUMERIC  | Refers to SubmitWindowedPoSt fees per message of 32 GiB sectors.|
| sector_profit_360d_32gib               | NUMERIC  | Refers to the projected 360 days reward of a 32 GiB sector, less the sum of projected PreCommit fees, projected ProveCommit fees, and the projected 360 days SubmitWindowedPoSt fee of the same sector.                                |
| sector_profit_agg_360d_32gib           | NUMERIC  | Refers to the projected 360 days reward of a 32 GiB sector, less the sum of projected PreCommitSectorBatch fees, projected ProveCommitAggregate fees, and the projected 360 days SubmitWindowedPoSt fee of the same sector.          |
| sector_initial_pledge_32gib       | NUMERIC  | Refers to the sum of Initial Storage Pledge of a 32GiB sector (20 days equivalent of projected rewards) and Initial Consensus Pledge. |
| reward_over_pledge_32gib | NUMERIC  | Refers to the projected 360 days reward of a 32 GiB sector divided by the initial pledge of the same sector.                                                                  |
| profit_over_pledge_32gib      | NUMERIC  | Refers to the projected 360 days profit of a 32 GiB sector divided by the initial pledge of the same sector.                                                                     |
| profit_over_pledge_agg_32gib  | NUMERIC  | Refers to the projected 360 days reward of an aggregated 32 GiB sector divided by the initial pledge of the same sector.                                                                 |
| sector_rewards_360d_64gib              | NUMERIC  | Projected rewards awarded to a 64GiB sector over 360 days.                                                                        |
| sector_precommit_fee_64gib        | NUMERIC  | PreCommitSector gas fees per 64 GiB sector (one-time cost).                                                                             |
| sector_precommit_agg_fee_64gib      | NUMERIC  | PreCommitSectorBatch gas fees per 64 GiB sector (one-time cost for a single sector).                                                                           |
| sector_provecommit_fee_64gib    | NUMERIC  | ProveCommitSector gas fees per 64 GiB sector (one-time cost).                                                                       |
| sector_provecommit_agg_fee_64gib  | NUMERIC  | ProveCommitAggregate gas fees per 64 GiB sector (one-time cost for a single sector).                                                                       |
| sector_windowedpost_fee_360d_64gib           | NUMERIC  | Refers to SubmitWindowedPoSt fees per message of 64 GiB sectors.|
| sector_profit_360d_64gib               | NUMERIC  | Refers to the projected 360 days reward of a 64 GiB sector, less the sum of projected PreCommit fees, projected ProveCommit fees, and the projected 360 days SubmitWindowedPoSt fee of the same sector.                                |
| sector_profit_agg_360d_64gib           | NUMERIC  | Refers to the projected 360 days reward of a 64 GiB sector, less the sum of projected PreCommitSectorBatch fees, projected ProveCommitAggregate fees, and the projected 360 days SubmitWindowedPoSt fee of the same sector.          |
| sector_initial_pledge_64gib       | NUMERIC  | Refers to the sum of Initial Storage Pledge of a 64GiB sector (20 days equivalent of projected rewards) and Initial Consensus Pledge. |
| reward_over_pledge_64gib | NUMERIC  | Refers to the projected 360 days reward of a 64 GiB sector divided by the initial pledge of the same sector.                                                                  |
| profit_over_pledge_64gib      | NUMERIC  | Refers to the projected 360 days profit of a 64 GiB sector divided by the initial pledge of the same sector.                                                                     |
| profit_over_pledge_agg_64gib  | NUMERIC  | Refers to the projected 360 days reward of an aggregated 64 GiB sector divided by the initial pledge of the same sector.                                                                 |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#651",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "sector_rewards_360d_32gib": 0.138977330393156,
            "sector_precommit_fee_32gib": 0.00249939160595612,
            "sector_provecommit_fee_32gib": 0.00824760493173514,
            "sector_precommit_agg_fee_32gib": 0.00445854277720634,
            "sector_provecommit_agg_fee_32gib": 0.0129589878583761,
            "sector_windowedpost_fee_360d_32gib": 0.00256319407939105,
            "sector_profit_360d_32gib": 0.128229242670246,
            "sector_profit_agg_360d_32gib": 0.121558708572354,
            "sector_initial_pledge_32gib": 0.169573588025708,
            "reward_over_pledge_32gib": 0.819569438915728,
            "profit_over_pledge_32gib": 0.756186409470831,
            "profit_over_pledge_agg_32gib": 0.71684930411407,
            "sector_rewards_360d_64gib": 0.277954660786312,
            "sector_precommit_fee_64gib": 0.00214480573841829,
            "sector_provecommit_fee_64gib": 0.00768619962083367,
            "sector_precommit_agg_fee_64gib": 0.00450585405325211,
            "sector_provecommit_agg_fee_64gib": 0.0128392275449717,
            "sector_windowedpost_fee_360d_64gib": 0.00215255339193464,
            "sector_profit_360d_64gib": 0.268122739056948,
            "sector_profit_agg_360d_64gib": 0.260608662817977,
            "sector_initial_pledge_64gib": 0.339147176051415,
            "reward_over_pledge_64gib": 0.819569438915728,
            "profit_over_pledge_64gib": 0.79057930594799,
            "profit_over_pledge_agg_64gib": 0.768423508201254
        }
    ]
}
```
</div>
</details>
---
sidebar_position: 4
---

# Market & Deals

Market and deals provides information on the Filecoin Network deal statistics and client storage deals.

### Deal States Aggregate Daily

#### Description

Regular and verified deals based on their status that occurred in the last 24 hours on the Filecoin Network.

#### Request URL

```js
GET: /network_core/market-deals/deal_states_aggregate_daily
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

url = "https://api.spacescope.io/v1/network_core/market-deals/deal_states_aggregate_daily?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/market-deals/deal_states_aggregate_daily?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/market-deals/deal_states_aggregate_daily?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/market-deals/deal_states_aggregate_daily?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                              | **Type** | **Description**                                                            |
| :---------------------------------------- | :------- | :------------------------------------------------------------------------- |
| stat_date                                 | DATE     | Refers to the date the data was recorded.                     |
| active_deals_regular_bytes                | NUMERIC  | Active normal deal bytes.                                                  |
| active_deals_regular_bytes_increase       | NUMERIC  | Daily change in active regular deal bytes; active_deals_regular_bytes(day D) - active_deals_regular_bytes(day D-1).|
| active_deals_verified_bytes               | NUMERIC  | Active verified deal bytes.                                                |
| active_deals_verified_bytes_increase      | NUMERIC  | Daily change in active verified deal bytes; active_deals_verified_bytes(day D) - active_deals_verified_bytes(day D-1).|
| active_deals_regular_count                | BIGINT   | Active regular deal count.                                                  |
| active_deals_verified_count               | BIGINT   | Active verified deal count.                                                |
| activated_deals_regular_bytes             | NUMERIC  | Activate regular deal bytes.                                                |
| activated_deals_verified_bytes            | NUMERIC  | Activate verified deal bytes.                                              |
| activated_deals_regular_count             | BIGINT   | Activate regular deal count.                                                |
| activated_deals_verified_count            | BIGINT   | Activate verified deal count.                                              |
| new_deals_regular_bytes                   | NUMERIC  | New regular deal bytes.                                                     |
| new_deals_verified_bytes                  | NUMERIC  | New verified deal bytes.                                                   |
| new_deals_regular_count                   | BIGINT   | New regular deal count.                                                     |
| new_deals_verified_count                  | BIGINT   | New verified deal count.                                                   |
| slashed_deals_regular_bytes               | NUMERIC  | Slashed regular deal bytes.                                                 |
| slashed_deals_verified_bytes              | NUMERIC  | Slashed verified deal bytes.                                               |
| slashed_deals_regular_count               | BIGINT   | Slashed regular deal count.                                                 |
| slashed_deals_verified_count              | BIGINT   | Slashed verified deal count.                                               |
| expired_deals_regular_bytes               | NUMERIC  | Expired regular deal bytes.                                                 |
| expired_deals_verified_bytes              | NUMERIC  | Expired verified deal bytes.                                               |
| expired_deals_regular_count               | BIGINT   | Expired regular deal count.                                                 |
| expired_deals_verified_count              | BIGINT   | Expired verified deal count.                                               |
| active_deals_regular_provider_collateral  | NUMERIC  | Provider collateral in active regular deals.                                |
| active_deals_verified_provider_collateral | NUMERIC  | Provider collateral in active verified deals.                              |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#644",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "active_deals_regular_bytes": 8201021703327142,
           "active_deals_regular_bytes_increase": -171518322817888,
           "active_deals_verified_bytes": 122329609475399680,
           "active_deals_verified_bytes_increase": 519857607057408,
           "active_deals_regular_count": 310021,
           "active_deals_verified_count": 4556953,
           "activated_deals_regular_bytes": 102274689024,
           "activated_deals_verified_bytes": 227161489653760,
           "activated_deals_regular_count": 7,
           "activated_deals_verified_count": 8203,
           "new_deals_regular_bytes": 443186937856,
           "new_deals_verified_bytes": 846458125508608,
           "new_deals_regular_count": 16,
           "new_deals_verified_count": 29867,
           "slashed_deals_regular_bytes": 0,
           "slashed_deals_verified_bytes": 102407077888,
           "slashed_deals_regular_count": 0,
           "slashed_deals_verified_count": 4,
           "expired_deals_regular_bytes": 48401144654464,
           "expired_deals_verified_bytes": 1371126235136,
           "expired_deals_regular_count": 1496,
           "expired_deals_verified_count": 120,
           "active_deals_regular_provider_collateral": 1507.049768353961,
           "active_deals_verified_provider_collateral": 21438.011644658796
       }
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Active Deal PiB Statistics](https://observablehq.com/@starboard/chart-daily-active-deal-pib-statistics)  
- [Chart: Daily Active Deal Count Statistics](https://observablehq.com/@starboard/chart-daily-active-deal-count-statistics)
- [Chart: Daily Active Deal TiB Change Breakdown](https://observablehq.com/@starboard/chart-daily-active-deal-tib-change-breakdown)
- [Chart: Daily Active Deal Count Change Breakdown](https://observablehq.com/@starboard/chart-daily-active-deal-count-change-breakdown)
- [Chart: Active Deals Regular Provider Collateral](https://observablehq.com/@starboard/datafield-dsad_active_deals_regular_provider_collateral)
- [Chart: Active Deals Verified Provider Collateral](https://observablehq.com/@starboard/datafield-dsad_active_deals_verified_provider_collateral)

:::

<hr />

### Daily Deal Summary Statistics 

#### Description

Daily deal summary statistics returns data based on regular and verified deals in the last 24 hours on the Filecoin Network.

#### Request URL

```js
GET: /network_core/market-deals/deal_summary_statistics_daily
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

url = "https://api.spacescope.io/v1/network_core/market-deals/deal_summary_statistics_daily?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/market-deals/deal_summary_statistics_daily?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/market-deals/deal_summary_statistics_daily?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/market-deals/deal_summary_statistics_daily?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                            | **Type** | **Description**                                                                                    |
| :-------------------------------------- | :------- | :------------------------------------------------------------------------------------------------- |
| stat_date                               | DATE     | Refers to the date the data was recorded.                                           |
| new_deal_bytes_regular_last_week        | NUMERIC  | New regular deal bytes in the last 7 days.                                                  |
| new_deal_bytes_verified_last_week       | NUMERIC  | New verified deal bytes in the last 7 days.                                                  |
| max_regular_deal_price_last_week        | NUMERIC  | Maximum deal price for regular deal in the last 7 days.                                           |
| max_verified_deal_price_last_week       | NUMERIC  | Maximum deal price for verified deal in the last 7 days.                                         |
| min_regular_deal_price_last_week        | NUMERIC  | Minimum deal price for regular deal in the last 7 days.                                        |
| min_verified_deal_price_last_week       | NUMERIC  | Maximum deal price for verified deal in the last 7 days.                                       |
| total_regular_deal_count                | BIGINT   | Cumulative total of regular deal count.                                         |
| total_verified_deal_count               | BIGINT   | Cumulative total of verified deal count.                                         |
| total_regular_deal_bytes                | NUMERIC  | Cumulative total of regular deal bytes.                                           |
| total_verified_deal_bytes               | NUMERIC  | Cumulative total of verified deal bytes.                                           |
| avg_regular_deal_bytes                  | NUMERIC  | Average of total regular deal bytes.                                      |
| avg_verified_deal_bytes                 | NUMERIC  | Average of total verified deal bytes.                                       |
| total_regular_deal_duration             | NUMERIC  | Total duration for regular deals.                                                 |
| total_verified_deal_duration            | NUMERIC  | Total duration for verified deals.                                                |
| avg_regular_deal_duration_days          | NUMERIC  | Average duration for regular deals in days.                                     |
| avg_verified_deal_duration_days         | NUMERIC  | Average duration for verified deals in days.                                    |
| total_regular_deal_provider_collateral  | NUMERIC  | Cumulative total of storage provider collateral for regular deal in FIL.                               |
| total_verified_deal_provider_collateral | NUMERIC  | Cumulative total of storage provider collateral for verified deal in FIL.                             |
| avg_regular_deal_provider_collateral    | BIGINT   | Average of storage provider collateral for regular deal in FIL.                           |
| avg_verified_deal_provider_collateral   | BIGINT   | Average of storage provider collateral for verified deal in FIL.                           |
| percent_regular_deal_free               | NUMERIC  | Returns percentage of free regular deals over total regular deals; Free regular deals are based on storage_price_per_epoch
   |
| percent_verified_deal_free              | NUMERIC  | Returns percentage of free verified deals over total verified deals; Free verified deals are based on storage_price_per_epoch
 |
| median_regular_deal_price               | BIGINT   | Returns median value of regular deal storage price per TiB month in FIL.               |
| median_verified_deal_price              | BIGINT   | Returns median value of verified deal storage price per TiB month in FIL.             |


#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#645",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "new_deal_bytes_regular_last_week": 9046987833344,
           "new_deal_bytes_verified_last_week": 5224175642755072,
           "max_regular_deal_price_last_week": 8e-9,
           "max_verified_deal_price_last_week": 3.21e-9,
           "min_regular_deal_price_last_week": 0,
           "min_verified_deal_price_last_week": 0,
           "total_regular_deal_count": 1687010,
           "total_verified_deal_count": 5172522,
           "total_regular_deal_bytes": 40318816830793330,
           "total_verified_deal_bytes": 133155807133843460,
           "avg_regular_deal_bytes": 23899571923.576817,
           "avg_verified_deal_bytes": 25742917504.042217,
           "total_regular_deal_duration": 1810360388900,
           "total_verified_deal_duration": 7655810964151,
           "avg_regular_deal_duration_days": 372.6103326340356,
           "avg_verified_deal_duration_days": 513.9210033105251,
           "total_regular_deal_provider_collateral": 10524.791558315694,
           "total_verified_deal_provider_collateral": 23274.72610777967,
           "avg_regular_deal_provider_collateral": 0.006238725056944353,
           "avg_verified_deal_provider_collateral": 0.0044996862474011076,
           "percent_regular_deal_fee": 0.0012946048986532818,
           "percent_verified_deal_fee": 0.9981952330014537,
           "median_regular_deal_price": 0,
           "median_verified_deal_price": 0
       }
   ]
}

```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Deal Summary Statistics](https://observablehq.com/@starboard/datafield-dssd_latest)  

:::

<hr />

### Client Headcount

#### Description

Cumulative total number of clients on the Filecoin Network.

#### Request URL

```js
GET: /network_core/market-deals/deal_client_headcount
```

#### Request Parameters
| **Variable** | **Type** | **Description**               | **Example** | **Default**                                 |
| ------------ | -------- | ----------------------------- | ----------- | ------------------------------------------- |
| state_date   | DATE     | The selected Date (Optional). | 2022-07-01  | The most recent date that the API includes. |


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

url = "https://api.spacescope.io/v1/network_core/market-deals/deal_client_headcount?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/market-deals/deal_client_headcount?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/market-deals/deal_client_headcount?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/market-deals/deal_client_headcount?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                       | **Type** | **Description**                                                               |
| :--------------------------------- | :------- | :---------------------------------------------------------------------------- |
| stat_date                          | DATE     | Refers to the date the data was recorded.                        |
| total_clients | BIGINT   | Cumulative total number of clients.                        |
| total_clients_verified             | BIGINT   | Cumulative total number of clients with verified deals. |
| total_clients_verified_ratio       | NUMERIC  | total_clients_verified / total_clients                                        |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#655",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "total_clients": 1806,
           "total_clients_verified": 802,
           "total_clients_verified_ratio": 0.4440753045404208
       }
   ]
}

```
</div>
</details>

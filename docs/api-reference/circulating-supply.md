---
sidebar_position: 6
---

# Circulating Supply

Circulating supply provides information on the Filecoin Network existing FIL protocol circulation and amount of FIL locked daily.

### FIL Protocol Circulating Supply

#### Description

The total amount and the change of FIL tokens in circulation according to the Protocol’s definition.


#### Request URL

```js
GET: /network_core/circulating-supply/circulating_supply
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).  | 2022-07-01  | The most recent date that the API includes. |

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

url = "https://api.spacescope.io/v1/network_core/circulating-supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/circulating-supply/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/circulating-supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/circulating-supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                   | **Type** | **Description**                                                                                                                                    |
| ------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| stat_date                      | DATE     | Refers to the date the data was recorded.                                                                                                         |
| circulating_fil           | NUMERIC  | The amount of FIL circulating and tradeable in the economy. The basis for Market Cap calculations. |
| circulating_fil_increase  | NUMERIC  | circulating_fil (day D) - circulating_fil (day D-1).                                                                                                |
| mined_fil          | NUMERIC  | The amount of FIL that has been mined by storage miners.                                                                                        |
| mined_fil_increase | NUMERIC  | mined_fil (day D) - mined_fil (day D-1).                                                                                           |
| vested_fil             | NUMERIC  | Total amount of FIL that is vested from genesis allocation.                                                                                     |
| vested_fil_increase             | NUMERIC  | vested_fil (day D) - vested_fil (day D-1).                                                                                     |
| reserve_disbursed_fil             | NUMERIC  | The amount of FIL that has been disbursed from the mining reserve.                                                                                     |
| reserve_disbursed_fil_increase             | NUMERIC  | reserve_disbursed_fil (day D) - reserve_disbursed_fil (day D-1).                                                                                     |
| locked_fil             | NUMERIC  | The amount of FIL locked as part of mining, deals, and other mechanisms.                                                                                     |
| locked_fil_increase             | NUMERIC  | locked_fil (day D) - locked_fil (day D-1).                                                                                     |
| burnt_fil             | NUMERIC  | Total FIL burned as part of penalties and on-chain computations.                                                                                     |
| burnt_fil_increase             | NUMERIC  | burnt_fil (day D) - burnt_fil (day D-1).                                                                                     |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#666",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "circulating_fil": 316590544.83518726,
           "circulating_fil_increase": 463554.259920636,
           "mined_fil": 198962164.329669,
           "mined_fil_increase": 292465.57457804616,
           "vested_fil": 267759227.86305127,
           "vested_fil_increase": 277876.17671232874,
           "reserve_disbursed_fil": 17066618.96177341,
           "reserve_disbursed_fil_increase": 0,
           "locked_fil": 136018723.96866196,
           "locked_fil_increase": 94437.31370666207,
           "burnt_fil": 31178742.350644458,
           "burnt_fil_increase": 12350.177663076873
       }
   ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Filecoin Protocl Circulating Supply](https://observablehq.com/@starboard/chart-fil-protocol-circulating-supply)  
- [Chart: Daily Change in Circulating Supply](https://observablehq.com/@starboard/daily-change-in-circulating-supply)

:::

<hr />


### Daily Locked FIL Breakdown
#### Description

The status of the FIL token on the Filecoin Network in the past 24 hours.


#### Request URL

```js
GET: /network_core/circulating-supply/network_locked_fil_breakdown
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).  | 2022-07-01  | The most recent date that the API includes. |

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

url = "https://api.spacescope.io/v1/network_core/circulating-supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/circulating-supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/circulating-supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/circulating-supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                | **Type** | **Description**                                        |
| :-------------------------- | :------- | :----------------------------------------------------- |
| stat_date                   | DATE     | Refers to the date the data was recorded. |
| total_initial_pledge        | NUMERIC  | Total initial pledge of network.                       |
| total_locked_funds          | NUMERIC  | Total locked funds of network.                         |
| total_locked_funds_increase | NUMERIC  | Daily change of total locked funds of network.         |
| new_initial_pledge          | NUMERIC  | Daily change of total initial pledge of network.       |
| new_reward_locked           | NUMERIC  | Total reward locked of network.                        |
| new_reward_released         | NUMERIC  | new_reward_locked - locked_funds_increase.             |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
   "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#666",
   "code": 0,
   "message": "success.",
   "data": [
       {
           "stat_date": "2022-07-01T00:00:00Z",
           "total_initial_pledge": 115655615.67550927,
           "total_locked_funds": 20338541.578073677,
           "total_locked_funds_increase": -9861.797914507973,
           "new_initial_pledge": 104187.91617693826,
           "new_reward_locked": 217603.8203024527,
           "new_reward_released": 227465.61821696066
       }
   ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Locked FIL Breakdown](https://observablehq.com/@starboard/chart-daily-locked-fil-breakdown)  

:::

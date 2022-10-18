---
sidebar_position: 8
---

# Circulating Supply

Circulating supply provides information on the Filecoin Network’s protocol token circulating supply and its breakdown.

### FIL Protocol Circulating Supply

#### Description

The total amount and the change of FIL tokens in circulation according to the Protocol’s definition.

#### Request URL

```js
GET: /circulating_supply/circulating_supply
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

url = "https://api.spacescope.io/v2/circulating_supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/circulating_supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/circulating_supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/circulating_supply/circulating_supply?end_date=2022-07-01&start_date=2022-07-01' \
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
| circulating_fil           | NUMERIC  | The amount of FIL circulating and tradeable in the economy.  |
| mined_fil          | NUMERIC  | The amount of FIL that has been mined by storage miners.                                                                                        |
| vested_fil             | NUMERIC  | Total amount of FIL that is vested from genesis allocation.                                                                                     |
| reserve_disbursed_fil             | NUMERIC  | The amount of FIL that has been disbursed from the mining reserve.                                                                                     |
| locked_fil             | NUMERIC  | The amount of FIL locked as part of initial pledge, deal pledge, locked rewards, and other locking mechanisms.                                                                                     |
| burnt_fil             | NUMERIC  | The amount of FIL burned as part of on-chain computations and penalties.                                                                                     |

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
           "mined_fil": 198962164.329669,
           "vested_fil": 267759227.86305127,
           "reserve_disbursed_fil": 17066618.96177341,
           "locked_fil": 136018723.96866196,
           "burnt_fil": 31178742.350644458
       }
   ]
}
```
</div>
</details>
<hr />


### Locked FIL Breakdown

#### Description

The breakdown of FIL tokens locked on the Filecoin Network.

#### Request URL

```js
GET: /circulating_supply/network_locked_fil_breakdown
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

url = "https://api.spacescope.io/v2/circulating_supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/circulating_supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/circulating_supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/circulating_supply/network_locked_fil_breakdown?end_date=2022-07-01&start_date=2022-07-01' \
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
| total_initial_pledge        | NUMERIC  | The total active initial pledge on the Filecoin Network.                       |
| total_locked_funds          | NUMERIC  | The total active locked funds on the Filecoin Network.                         |
| new_initial_pledge          | NUMERIC  | The number of new initial pledges to the Filecoin Network in the last 24 hours.       |
| new_reward_locked           | NUMERIC  | The number of new rewards locked in the Filecoin Network in the last 24 hours.                        |
| new_reward_released         | NUMERIC  | The new locked rewards less the increase in total locked funds in the last 24 hours.             |

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
           "new_initial_pledge": 104187.91617693826,
           "new_reward_locked": 217603.8203024527,
           "new_reward_released": 227465.61821696066
       }
   ]
}
```
</div>
</details>

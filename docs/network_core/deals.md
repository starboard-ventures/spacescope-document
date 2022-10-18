---
sidebar_position: 6
---

# Deals

Deals provides information on the Filecoin Network deal statistics.

### Deal Count

#### Description

The number of storage deals on the Filecoin Network.

#### Request URL

```js
GET: /v2/deals/deal_count
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

url = "https://api.spacescope.io/v2/deals/deal_count?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/deals/deal_count?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/deals/deal_count?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/deals/deal_count?end_date=2022-07-01&start_date=2022-07-01' \
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
| total_regular_deal_count                | BIGINT  | Cumulative count of all regular deals, including active, expired, and terminated ones.                                                   |
| total_verified_deal_count       | BIGINT  | Cumulative count for verified deals, including active, expired, and terminated ones.|
| daily_proposed_regular_deal_count               | BIGINT  | The count for regular deals that are newly proposed (may not be activated yet), calculated in the last 24 hours.                                                |
| daily_proposed_verified_deal_count      | BIGINT  | The count of verified deals that are newly proposed (may not be activated yet), calculated in the last 24 hours.|
| daily_activated_regular_deal_count                | BIGINT   | The count for regular deals that are newly activated and started to be fulfilled, calculated in the last 24 hours.                                                   |
| daily_activated_verified_deal_count               | BIGINT   | The count for verified deals that are newly activated and started to be fulfilled, calculated in the last 24 hours.                                                 |
| active_regular_deal_count             | BIGINT  | The count for active regular deals.                                                |
| active_verified_deal_count            | BIGINT  | The count for active verified deals.                                             |
| daily_slashed_regular_deal_count             | BIGINT   | The count for slashed regular deals, calculated in the last 24 hours.                                                |
| daily_slashed_verified_deal_count            | BIGINT   | The count for slashed verified deals, calculated in the last 24 hours.                                              |
| daily_expired_regular_deal_count                   | BIGINT  | The count for expired regular deals, calculated in the last 24 hours.                                                     |
| daily_expired_verified_deal_count                  | BIGINT  | The count for expired verified deals, calculated in the last 24 hours.                                                   |

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
           "total_regular_deal_count": 1687010,
           "total_verified_deal_count": 5172522,
           "active_regular_deal_count": 310021,
           "active_verified_deal_count": 4556953,
           "daily_activated_regular_deal_count": 7,
           "daily_activated_verified_deal_count": 8203,
           "daily_proposed_regular_deal_count": 16,
           "daily_proposed_verified_deal_count": 29867,
           "daily_slashed_regular_deal_count": 0,
           "daily_slashed_verified_deal_count": 4,
           "daily_expired_regular_deal_count": 1496,
           "daily_expired_verified_deal_count": 120
       }
   ]
}

```
</div>
</details>
<hr />

### Deal Size 

#### Description

The byte size of storage deals on the Filecoin Network.

#### Request URL

```js
GET: /deals/deal_size
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

url = "https://api.spacescope.io/v2/deals/deal_size?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/deals/deal_size?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/deals/deal_size?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/deals/deal_size?end_date=2022-07-01&start_date=2022-07-01' \
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
| total_regular_deal_sizes        | NUMERIC  | Cumulative deal size for regular deals in bytes, including active, expired, and terminated ones.                                                  |
| total_verified_deal_sizes       | NUMERIC  | Cumulative deal size for verified deals in bytes, including active, expired, and terminated ones.                                                   |
| daily_proposed_regular_deal_size        | NUMERIC  | The deal size for regular deals that are newly proposed (may not be activated yet), calculated in the past 24 hours.                                          |
| daily_proposed_verified_deal_size       | NUMERIC  | The deal size for verified deals that are newly proposed (may not be activated yet), calculated in the past 24 hours.                                        |
| daily_activated_regular_deal_size        | NUMERIC  | The deal size for regular deals that are newly activated and started to be fulfilled, calculated in the past 24 hours.                                        |
| daily_activated_verified_deal_size       | NUMERIC  | The deal size for verified deals that are newly activated and started to be fulfilled, calculated in the past 24 hours.                          |
| active_regular_deal_size                | NUMERIC   | The active regular deals in bytes.                                         |
| active_verified_deal_size               | NUMERIC   | The active verified deals in bytes.                                        |
| daily_slashed_regular_deal_size                | NUMERIC  | The deal size for slashed regular deals in bytes, calculated in the last 24 hours.                                           |
| daily_slashed_verified_deal_size               | NUMERIC  | The deal size for slashed verified deals in bytes, calculated in the last 24 hours.                                           |
| daily_expired_regular_deal_size                  | NUMERIC  | The deal size for expired regular deals in bytes, calculated in the last 24 hours.                                      |
| daily_expired_verified_deal_size                 | NUMERIC  | The deal size for expired verified deals in bytes, calculated in the last 24 hours.                                       |

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
           "total_regular_deal_bytes": 40318816830793330,
           "total_verified_deal_bytes": 133155807133843460,
           "daily_proposed_regular_deal_size": 443186937856,
           "daily_proposed_verified_deal_size": 846458125508608,
           "daily_activated_regular_deal_size": 102274689024,
           "daily_activated_verified_deal_size": 227161489653760,
           "active_regular_deal_size": 8201021703327142,
           "active_verified_deal_size": 122329609475399680,
           "daily_slashed_regular_deal_size": 0,
           "daily_slashed_verified_deal_size": 102407077888,
           "daily_expired_regular_deal_size": 48401144654464,
           "daily_expired_verified_deal_size": 1371126235136
       }
   ]
}

```
</div>
</details>
<hr />

### Deal Collateral

#### Description

Collateral for storage deals on the Filecoin Network.

#### Request URL

```js
GET: /deals/deal_collateral
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

url = "https://api.spacescope.io/v2/deals/deal_collateral?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/deals/deal_collateral?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/deals/deal_collateral?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/deals/deal_collateral?end_date=2022-07-01&start_date=2022-07-01' \
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
| total_regular_deal_provider_collateral | NUMERIC   | The cumulative amount of collateral for regular deals in FIL. (Includes those that have been released already)                        |
| total_verified_deal_provider_collateral             | NUMERIC   | The cumulative amount of collateral for verified deals in FIL. (Includes those that have been released already) |
| active_regular_deal_provider_collateral       | BIGINT  | Active regular deal collateral for storage provider in FIL.                                        |
| active_verified_deal_provider_collateral       | BIGINT  | Active verified deal collateral for storage provider in FIL.                                        |

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
           "total_regular_deal_provider_collateral": 10524.791558315694,
           "total_verified_deal_provider_collateral": 23274.72610777967,
           "active_regular_deal_provider_collateral": 1507.049768353961,
           "active_verified_deal_provider_collateral": 21438.011644658796
       }
   ]
}

```
</div>
</details>

---
sidebar_position: 5
---

# Deals

Information on the deal statistics of the storage provider.

### Deal Count

#### Description

The number of storage deals of the storage providers.

#### Request URL

```js
GET: /storage_provider/deals/deal_count
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| state_date   | STRING   | Selected date (Optional).  | 2022-10-01  | If no state_date is input, returns data for the most recent date available. |
| miner_id     | STRING   | Selected ID of the miner (Optional).   | f0110804  | Returns data for all miners if no miner_id is input. |

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

url = "https://api.spacescope.io/v2/storage_provider/deals/deal_count?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/deals/deal_count?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/deals/deal_count?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/deals/deal_count?state_date=2022-10-01&miner_id=f0110804' \
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
| miner_id           | STRING  | Unique ID of the storage provider.  |
| total_regular_deal_count          | BIGINT  | Cumulative count of regular deals of the storage provider, including active, expired, and terminated ones. |
| total_verified_deal_count             | BIGINT  | Cumulative count of verified deals of the storage provider, including active, expired, and terminated ones. |
| daily_new_regular_deal_count | BIGINT | The count of regular deals of the storage provider that are newly proposed (may not be activated yet), calculated in the last 24 hours. |
| daily_new_verified_deal_count | BIGINT | The count of verified deals of the storage provider that are newly proposed (may not be activated yet), calculated in the last 24 hours. |
| active_regular_deal_count | BIGINT | The count of active regular deals of the storage provider. |
| active_verified_deal_count | BIGINT | The count of active verified deals of the storage provider. |
| total_regular_deal_free_count | BIGINT | Cumulative count of regular deals of the storage provider with no storage fee, including active, expired, and terminated ones.  |
| total_verified_deal_free_count | BIGINT | Cumulative count of verified deals of the storage provider with no storage fee, including active, expired, and terminated ones.  |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9380",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_regular_deal_count": 28,
            "total_verified_deal_count": 0,
            "total_regular_deal_free_count": 0,
            "total_verified_deal_free_count": 0,
            "active_regular_deal_count": 1,
            "active_verified_deal_count": 0,
            "daily_new_regular_deal_count": 0,
            "daily_new_verified_deal_count": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Client Count

#### Description

The number of clients to whom the storage provider provides the services.

#### Request URL

```js
GET: /storage_provider/deals/client_count
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| state_date   | STRING   | Selected date (Optional).  | 2022-10-01  | If no state_date is input, returns data for the most recent date available. |
| miner_id     | STRING   | Selected ID of the miner (Optional).   | f0110804  | Returns data for all miners if no miner_id is input. |

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

url = "https://api.spacescope.io/v2/storage_provider/deals/client_count?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/deals/client_count?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/deals/client_count?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/deals/client_count?state_date=2022-10-01&miner_id=f0110804' \
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
| miner_id           | STRING  | Unique ID of the storage provider.  |
| total_regular_deal_client_count          | BIGINT  | Cumulative count of the clients that the storage provider has had at least one regular deal with, including active, expired, and terminated ones.                                                                                         |
| total_verified_deal_client_count             | BIGINT  | Cumulative count of the clients that the storage provider has had at least one verified deal with, including active, expired, and terminated ones. |
| daily_new_regular_deal_client_count | BIGINT | The count of the clients that the storage provider had the first regular deal with in the past 24 hours. |
| daily_new_verified_deal_client_count | BIGINT | The count of the clients that the storage provider had the first verified deal with in the past 24 hours. |
| active_regular_deal_client_count | BIGINT | The count of the clients that are having active regular deals with the miner. |
| active_verified_deal_client_count | BIGINT | The count of the clients that are having active verified deals with the miner. |


#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9381",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_regular_deal_client_count": 3,
            "total_verified_deal_client_count": 0,
            "active_regular_deal_client_count": 1,
            "active_verified_deal_client_count": 0,
            "daily_new_regular_deal_client_count": 0,
            "daily_new_verified_deal_client_count": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Deal Size

#### Description

The byte size of storage deals of the storage providers.

#### Request URL

```js
GET: /storage_provider/deals/deal_size
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| state_date   | STRING   | Selected date (Optional).  | 2022-10-01  | If no state_date is input, returns data for the most recent date available. |
| miner_id     | STRING   | Selected ID of the miner (Optional).   | f0110804  | Returns data for all miners if no miner_id is input. |

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

url = "https://api.spacescope.io/v2/storage_provider/deals/deal_size?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/deals/deal_size?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/deals/deal_size?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/deals/deal_size?state_date=2022-10-01&miner_id=f0110804' \
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
| miner_id           | STRING  | Unique ID of the storage provider.  |
| total_regular_deal_bytes          | NUMERIC  | Cumulative deal size for regular deals (in byte) of the storage provider, including active, expired, and terminated ones.                                                                                        |
| total_verified_deal_bytes             | NUMERIC  | Cumulative deal size for verified deals (in byte) of the storage provider, including active, expired, and terminated ones. |
| active_regular_deal_bytes | NUMERIC | The active regular deals (in byte) of the storage provider. |
| active_verified_deal_bytes | NUMERIC | The active verified deals (in byte) of the storage provider. |
| daily_new_regular_deal_bytes | NUMERIC | The deal size of newly added regular deals (in byte) of the storage provider in the past 24 hours. |
| daily_new_verified_deal_bytes | NUMERIC | The deal size of newly added verified deals (in byte) of the storage provider in the past 24 hours. |
| avg_regular_deal_bytes | NUMERIC | The average deal size of regular deals (in byte) of the storage provider. |
| avg_verified_deal_bytes | NUMERIC | The average deal size of verified deals (in byte) of the storage provider. |


#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9382",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_regular_deal_bytes": 8659246080,
            "total_verified_deal_bytes": 0,
            "avg_regular_deal_bytes": 309258788.571429,
            "avg_verified_deal_bytes": 0,
            "active_regular_deal_bytes": 133169152,
            "active_verified_deal_bytes": 0,
            "daily_new_regular_deal_bytes": 0,
            "daily_new_verified_deal_bytes": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Deal Collateral

#### Description

Collateral for storage deals of the storage providers.

#### Request URL

```js
GET: /storage_provider/deals/deal_collateral
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| state_date   | STRING   | Selected date (Optional).  | 2022-10-01  | If no state_date is input, returns data for the most recent date available. |
| miner_id     | STRING   | Selected ID of the miner (Optional).   | f0110804  | Returns data for all miners if no miner_id is input. |

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

url = "https://api.spacescope.io/v2/storage_provider/deals/deal_collateral?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/deals/deal_collateral?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/deals/deal_collateral?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/deals/deal_collateral?state_date=2022-10-01&miner_id=f0110804' \
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
| miner_id           | STRING  | Unique ID of the storage provider.  |
| total_regular_deal_provider_collateral          | NUMERIC  | The cumulative amount of deal collateral (in FIL) committed to regular deals by the storage provider, inclusive of those that have been released already.                                                                                        |
| total_verified_deal_provider_collateral             | NUMERIC  | The cumulative amount of deal collateral (in FIL) committed to verified deals by the storage provider, inclusive of those that have been released already. |
| avg_regular_deal_provider_collateral | NUMERIC | The average amount of deal collateral of the storage provider for regular deals in FIL.  |
| avg_verified_deal_provider_collateral | NUMERIC | The average amount of deal collateral of the storage provider for verified deals in FIL.  |


#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9383",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_regular_deal_provider_collateral": 0.00182563524862799,
            "total_verified_deal_provider_collateral": 0,
            "avg_regular_deal_provider_collateral": 0.0000652012588795709,
            "avg_verified_deal_provider_collateral": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Deal Duration

#### Description

Duration for storage deals of the storage providers.

#### Request URL

```js
GET: /storage_provider/deals/deal_duration
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| state_date   | STRING   | Selected date (Optional).  | 2022-10-01  | If no state_date is input, returns data for the most recent date available. |
| miner_id     | STRING   | Selected ID of the miner (Optional).   | f0110804  | Returns data for all miners if no miner_id is input. |

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

url = "https://api.spacescope.io/v2/storage_provider/deals/deal_duration?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/deals/deal_duration?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/deals/deal_duration?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/deals/deal_duration?state_date=2022-10-01&miner_id=f0110804' \
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
| miner_id           | STRING  | Unique ID of the storage provider.  |
| avg_regular_deal_duration_days          | NUMERIC  | The average duration of regular deals in days of the storage provider.                                                                                         |
| avg_verified_deal_duration_days             | NUMERIC  | The average duration of verified deals in days of the storage provider.  |


#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9384",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "avg_regular_deal_duration_days": 211.770771329365,
            "avg_verified_deal_duration_days": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Deal Revenue

#### Description

Revenue for storage deals of the storage providers.

#### Request URL

```js
GET: /storage_provider/deals/deal_revenue
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| state_date   | STRING   | Selected date (Optional).  | 2022-10-01  | If no state_date is input, returns data for the most recent date available. |
| miner_id     | STRING   | Selected ID of the miner (Optional).   | f0110804  | Returns data for all miners if no miner_id is input. |

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

url = "https://api.spacescope.io/v2/storage_provider/deals/deal_revenue?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/deals/deal_revenue?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/deals/deal_revenue?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/deals/deal_revenue?state_date=2022-10-01&miner_id=f0110804' \
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
| miner_id           | STRING  | Unique ID of the storage provider.  |
| total_regular_deal_revenue          | NUMERIC  | Cumulative storage revenue in FIL of regular deal received by the storage provider from storage clients (excluding block rewards and miner tips).                                                                                         |
| total_verified_deal_revenue             | NUMERIC  | Cumulative storage revenue in FIL of verified deal received by the storage provider from storage clients (excluding block rewards and miner tips).  |


#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9385",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_regular_deal_revenue": 4.58250000000001e-9,
            "total_verified_deal_revenue": 0
        }
    ]
}
```
</div>
</details>
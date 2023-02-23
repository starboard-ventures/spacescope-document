---
sidebar_position: 7
---

# Sectors

Information on the sector-level statistics of storage providers.

### Total

#### Description

The cumulative number of sectors and daily onboarded sectors of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/total
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

url = "https://api.spacescope.io/v2/storage_provider/sector/total?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/total?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/total?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/total?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| total_num_sector          | BIGINT  | Cumulative number of sectors of the storage provider (including expired, faulted, and terminated ones).                                                                                        |
| total_sector_rbp             | NUMERIC  | Cumulative sector size (in byte) of the storage provider (including expired, faulted, and terminated ones).                                                                                     |
| total_sector_qap | NUMERIC | Cumulative sector quality-adjusted power (in byte) of the storage provider (including expired, faulted, and terminated ones). |
| daily_sector_onboarding_count | BIGINT | Number of new sectors onboarded by the storage provider in the past 24 hours. |
| daily_sector_onboarding_rbp | NUMERIC | Size (in byte) of new sectors onboarded by the storage provider on the selected date. |
| daily_sector_onboarding_qap | NUMERIC | Quality-adjusted power (in byte) of new sectors onboarded by the storage provider on the selected date. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "46bd7a2e-cc8e-4001-8595-1c699dba7108#87406",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_sector_onboarding_count": 0,
            "daily_sector_onboarding_rbp": 0,
            "daily_sector_onboarding_qap": 0,
            "total_num_sector": 2191,
            "total_sector_rbp": 75282186764288,
            "total_sector_qap": 75282186764288
        }
    ]
}
```
</div>
</details>
<hr />


### Commit Sector Count

#### Description

The cumulative number of sector onboarded on the Filecoin Network of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/commit_sector_count
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

url = "https://api.spacescope.io/v2/storage_provider/sector/commit_sector_count?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/commit_sector_count?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/commit_sector_count?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/commit_sector_count?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| total_sealed_sector_count          | BIGINT  | Cumulative number of sectors sealed by the storage provider (including expired, faulted, and terminated ones).                                                                                        |
| precommit_sector_count             | BIGINT  | Cumulative number of sectors of the storage provider for using the PreCommitSector method.   |
| precommit_batch_sector_count | BIGINT | Cumulative number of sectors of the storage provider for using the PreCommitSectorBatch method. |
| avg_precommit_batch_sector_count | NUMERIC | Average number of sectors in a message of PreCommitSectorBatch for the storage provider.  |
| provecommit_sector_count | BIGINT | Cumulative number of sectors of the storage provider for using the ProveCommitSector method. |
| provecommit_batch_sector_count | BIGINT | Cumulative number of sectors of the storage provider for using the ProveCommitAggregate method. |
| avg_provecommit_batch_sector_count | NUMERIC | Average number of sectors in a message of ProveCommitAggregate for the storage provider. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "5d8d316a-5204-4f4b-8921-e2525e50a05c#87787",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_sealed_sector_count": 2191,
            "precommit_sector_count": 1518,
            "precommit_batch_sector_count": 748,
            "avg_precommit_batch_sector_count": 1.23432343234323,
            "provecommit_sector_count": 2191,
            "provecommit_batch_sector_count": 0,
            "avg_provecommit_batch_sector_count": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Commit Sector Size

#### Description

The cumulative size of sector onboarded on the Filecoin Network of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/commit_sector_size
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

url = "https://api.spacescope.io/v2/storage_provider/sector/commit_sector_size?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/commit_sector_size?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/commit_sector_size?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/commit_sector_size?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| precommit_sector_rbp          | NUMERIC  | Cumulative size (in byte) of sectors of the storage provider for using the PreCommitSector method.                                                                                        |
| precommit_sector_qap             | NUMERIC  | Cumulative quality-adjusted power (in byte) of sectors of the storage provider for using the PreCommitSector method.   |
| precommit_batch_sector_rbp | NUMERIC | Cumulative size (in byte) of sectors of the storage provider for using the PreCommitBatch method. |
| precommit_batch_sector_qap | NUMERIC | Cumulative quality-adjusted power (in byte) of sectors of the storage provider for using the PreCommitBatch method.  |
| provecommit_sector_rbp | NUMERIC | Cumulative size (in byte) of sectors of the storage provider for using the ProveCommitSector method. |
| provecommit_sector_qap | NUMERIC | Cumulative quality-adjusted power (in byte) of sectors of the storage provider for using the ProveCommitSector method. |
| provecommit_batch_sector_rbp | NUMERIC | Cumulative quality-adjusted power (in byte) of sectors of the storage provider for using the ProveCommitAggregate method. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "5d8d316a-5204-4f4b-8921-e2525e50a05c#87790",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "precommit_sector_rbp": 52158082842624,
            "precommit_sector_qap": 75110388072448,
            "precommit_batch_sector_rbp": 25701084299264,
            "precommit_batch_sector_qap": 41334765256704,
            "provecommit_sector_rbp": 75282186764288,
            "provecommit_sector_qap": 95004676587520,
            "provecommit_batch_sector_rbp": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Termination

#### Description

The statistics of sector termination of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/terminate
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

url = "https://api.spacescope.io/v2/storage_provider/sector/terminate?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/terminate?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/terminate?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/terminate?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| daily_new_terminate_rbp          | NUMERIC  | Size (in byte) of sectors terminated by the storage provider in the past 24 hours.                                                                                        |
| daily_new_terminate_qap             | NUMERIC  | Quality-adjusted power (in byte) of sectors terminated by the storage provider in the past 24 hours.   |
| total_terminate_rbp | NUMERIC | Cumulative size (in byte) of sectors terminated by the storage provider. |
| total_terminate_qap | NUMERIC | Cumulative quality-adjusted power (in byte)  of sectors terminated by the storage provider.  |
| daily_new_active_terminate_rbp | NUMERIC | Size (in byte) of sectors actively terminated by the storage provider in the past 24 hours (active termination is when the sectors are terminated actively by the storage providers). |
| daily_new_active_terminate_qap | NUMERIC | Quality-adjusted power (in byte) of sectors actively terminated by the storage provider in the past 24 hours (active termination is when the sectors are terminated actively by the storage providers). |
| total_active_terminate_rbp | NUMERIC | Cumulative size (in byte) of sectors actively terminated by the storage provider (active termination is when the sectors are terminated actively by the storage providers). |
| total_active_terminate_qap | NUMERIC | Cumulative quality-adjusted power (in byte) of sectors actively terminated by the storage provider (active termination is when the sectors are terminated actively by the storage providers). |
| daily_new_passive_terminate_rbp | NUMERIC | Size (in byte) of sectors passively terminated by the storage provider in the past 24 hours (passive termination is when the sectors are terminated passively after 42 days in fault).  |
| daily_new_passive_terminate_qap | NUMERIC | Quality-adjusted power (in byte) of sectors passively terminated by the storage provider in the past 24 hours (passive termination is when the sectors are terminated passively after 42 days in fault).  |
| total_passive_terminate_rbp | NUMERIC | Cumulative size (in byte) of sectors passively terminated by the storage provider (passive termination is when the sectors are terminated passively after 42 days). |
| total_passive_terminate_qap | NUMERIC | Cumulative quality-adjusted power (in byte)  of sectors passively terminated by the storage provider (passive termination is when the sectors are terminated passively after 42 days). |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "46bd7a2e-cc8e-4001-8595-1c699dba7108#87409",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_new_terminate_rbp": 0,
            "daily_new_terminate_qap": 0,
            "total_terminate_rbp": 46110768889856,
            "total_terminate_qap": 46110768889856,
            "daily_new_active_terminate_rbp": 0,
            "daily_new_active_terminate_qap": 0,
            "total_active_terminate_rbp": 45664092291072,
            "total_active_terminate_qap": 45664092291072,
            "daily_new_passive_terminate_rbp": 0,
            "daily_new_passive_terminate_qap": 0,
            "total_passive_terminate_rbp": 446676598784,
            "total_passive_terminate_qap": 446676598784
        }
    ]
}
```
</div>
</details>
<hr />


### Fault

#### Description

The statistics of sector faulted of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/fault
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

url = "https://api.spacescope.io/v2/storage_provider/sector/fault?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/fault?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/fault?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/fault?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| daily_new_fault_rbp          | NUMERIC  | Size (in byte) of sectors faulted of the storage provider in the past 24 hours.                                                                                        |
| daily_new_fault_qap             | NUMERIC  | Quality-adjusted power (in byte) of sectors faulted of the storage provider in the past 24 hours.   |
| active_fault_rbp | NUMERIC | Size (in byte) of outstanding faulted sectors of the storage provider that are not recovered or terminated. |
| active_fault_qap | NUMERIC | Quality-adjusted power (in byte) of outstanding faulted sectors of the storage provider that are not recovered or terminated.  |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "5d8d316a-5204-4f4b-8921-e2525e50a05c#87801",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_new_fault_rbp": 0,
            "daily_new_fault_qap": 0,
            "active_fault_rbp": 0,
            "active_fault_qap": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Recover

#### Description

The statistics of sector recovered of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/recover
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

url = "https://api.spacescope.io/v2/storage_provider/sector/recover?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/recover?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/recover?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/recover?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| daily_new_recover_rbp          | NUMERIC  | Size (in byte)  of sectors recovered by the storage provider in the past 24 hours.                                                                                        |
| daily_new_recover_qap             | NUMERIC  | Quality-adjusted power (in byte)  of sectors recovered by the storage provider in the past 24 hours.  |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "5d8d316a-5204-4f4b-8921-e2525e50a05c#87804",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_new_recover_rbp": 0,
            "daily_new_recover_qap": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Expiration

#### Description

The statistics of sector expiration of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/expire
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

url = "https://api.spacescope.io/v2/storage_provider/sector/expire?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/expire?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/expire?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/expire?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| daily_new_expire_rbp          | NUMERIC  | Size (in byte) of sectors expired of the storage provider in the past 24 hours.                                                                                        |
| daily_new_expire_qap             | NUMERIC  | Quality-adjusted power (in byte) of sectors expired of the storage provider in the past 24 hours.  |
| total_expire_rbp | NUMERIC | Cumulative size (in byte) of sectors expired of the storage provider. |
| total_expire_qap | NUMERIC | Cumulative quality-adjusted power (in byte)  of sectors expired of the storage provider. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "46bd7a2e-cc8e-4001-8595-1c699dba7108#87421",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_new_expire_rbp": 0,
            "daily_new_expire_qap": 0,
            "total_expire_rbp": 171798691840,
            "total_expire_qap": 171798691840
        }
    ]
}
```
</div>
</details>
<hr />


### Extension

#### Description

The statistics of sector extension of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/extend
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

url = "https://api.spacescope.io/v2/storage_provider/sector/extend?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/extend?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/extend?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/extend?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| daily_new_extend_rbp          | NUMERIC  | Size (in byte) of sectors extended by the storage provider in the past 24 hours.                                                                                        |
| daily_new_extend_qap             | NUMERIC  | Quality-adjusted power (in byte) of sectors extended by the storage provider in the past 24 hours.  |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "46bd7a2e-cc8e-4001-8595-1c699dba7108#87422",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_new_extend_rbp": 0,
            "daily_new_extend_qap": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Snap Deal

#### Description

The statistics of sector snapped of the storage providers (snapDeal was introduced by FIP 0019 that allows storage providers to put deal into commited capacity sectors by doing ProveReplicaUpdate without re-sealing the sectors). 

#### Request URL

```js
GET: /storage_provider/sector/snap
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

url = "https://api.spacescope.io/v2/storage_provider/sector/snap?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/snap?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/snap?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/snap?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| daily_new_snap_rbp          | NUMERIC  | Size (in byte) of sectors converted from committed capacity to deals by the storage provider in the past 24 hours.                                                                              |
| daily_new_snap_qap             | NUMERIC  | Quality-adjusted power (in byte) of sectors converted from committed capacity to deals by the storage provider in the past 24 hours.  |
| total_snap_rbp | NUMERIC | Cumulative size (in byte) of sectors converted from committed capacity to deals by the storage provider. |
| total_snap_qap | NUMERIC | Cumulative quality-adjusted power (in byte) of sectors converted from committed capacity to deals by the storage provider. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "46bd7a2e-cc8e-4001-8595-1c699dba7108#87424",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "daily_new_snap_rbp": 0,
            "daily_new_snap_qap": 0,
            "total_snap_rbp": 0,
            "total_snap_qap": 0
        }
    ]
}
```
</div>
</details>
<hr />


### Sector Duration

#### Description

The statistics of sector duration of the storage providers.

#### Request URL

```js
GET: /storage_provider/sector/sector_duration
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

url = "https://api.spacescope.io/v2/storage_provider/sector/sector_duration?state_date=2022-10-01&miner_id=f0110804"

payload={}
headers = {
  'authorization': 'Bearer <--Please replace your API key here-->'
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
  url := "https://api.spacescope.io/v2/storage_provider/sector/sector_duration?state_date=2022-10-01&miner_id=f0110804"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer <--Please replace your API key here-->")
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
  'url': 'https://api.spacescope.io/v2/storage_provider/sector/sector_duration?state_date=2022-10-01&miner_id=f0110804',
  'headers': {
    'authorization': 'Bearer <--Please replace your API key here-->'
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/sector/sector_duration?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer <--Please replace your API key here-->'
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
| avg_active_sector_duration_days          | NUMERIC  | Average days of active sectors of the storage provider.                                                                              |
| std_active_sector_duration_days             | NUMERIC  | Standard deviation of days of active sectors of the storage provider.  |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "5d8d316a-5204-4f4b-8921-e2525e50a05c#87807",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "avg_active_sector_duration_days": 271.49191941499794,
            "std_active_sector_duration_days": 58.55211783082431
        }
    ]
}
```
</div>
</details>
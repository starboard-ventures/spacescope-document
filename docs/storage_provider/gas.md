---
sidebar_position: 6
---

# Gas

Information on the Filecoin Network usage and transaction fees of storage providers.

### Network Fee

#### Description

The cumulative network fees on the Filecoin Network of the storage providers.

#### Request URL

```js
GET: /storage_provider/gas/network_fee
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

url = "https://api.spacescope.io/v2/storage_provider/gas/network_fee?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/gas/network_fee?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/gas/network_fee?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/gas/network_fee?state_date=2022-10-01&miner_id=f0110804' \
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
| base_tx_fee          | NUMERIC  | The cumulative amount in attoFIL burned as base fee (including batch fee) by the storage provider.                                                                                        |
| over_estimation_burn             | NUMERIC  | The cumulative amount in attoFIL burned as overestimation burn by the storage provider.                                                                                     |
| batch_fee | NUMERIC | The cumulative amount in attoFIL burned as PreCommit or ProveCommit Batch Fee by the storage provider. |
| miner_tip | NUMERIC | The cumulative amount in attoFIL the storage provider has received for executing blockchain messages. |
| windowpost_gas_fee | NUMERIC | The cumulative amount in attoFIL of  SubmitWindowedPoSt fees paid by the storage provider. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9386",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "base_tx_fee": 47228695283248200000,
            "over_estimation_burn": 1796081099387420000,
            "batch_fee": 121889072988415000,
            "miner_tip": 39787691947019300,
            "windowpost_gas_fee": 9542759841359370000
        }
    ]
}
```
</div>
</details>
<hr />


### Commit Fee

#### Description

The cumulative sector onboarding fees on the Filecoin Network of the storage providers.

#### Request URL

```js
GET: /storage_provider/gas/commit_fee
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

url = "https://api.spacescope.io/v2/storage_provider/gas/commit_fee?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/gas/commit_fee?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/gas/commit_fee?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/gas/commit_fee?state_date=2022-10-01&miner_id=f0110804' \
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
| total_sealing_gas_fee          | NUMERIC  | Cumulative gas fee in attoFIL paid by the storage provider for sealing sectors.                                                                                        |
| precommit_gas_fee             | NUMERIC  | Cumulative gas fee in attoFIL paid by the storage provider for using the PreCommitSector method.   |
| precommit_batch_gas_fee | NUMERIC | Cumulative gas fee in attoFIL paid by the storage provider for using the  PreCommitSectorBatch method. |
| precommit_batch_fee | NUMERIC | Cumulative gas fee in attoFIL paid by the storage provider for PreCommit batching. |
| provecommit_gas_fee | NUMERIC | Cumulative gas fee in attoFIL paid by the storage provider for using the ProveCommitSector method. |
| provecommit_batch_gas_fee | NUMERIC | Cumulative gas fee in attoFIL paid by the storage provider for using the ProveCommitAggregate method. |
| provecommit_batch_fee | NUMERIC | Cumulative gas fee in attoFIL paid by the storage provider for ProveCommit batching. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9387",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "total_sealing_gas_fee": 37190972268440900000,
            "precommit_gas_fee": 4394199519109190000,
            "precommit_batch_gas_fee": 877725315364231000,
            "precommit_batch_fee": 121889072988415000,
            "provecommit_gas_fee": 31797158360979000000,
            "provecommit_batch_gas_fee": 0,
            "provecommit_batch_fee": 0
        }
    ]
}
```
</div>
</details>

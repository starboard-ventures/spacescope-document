---
sidebar_position: 7
---

# Gas

Gas provides information on the Filecoin Network usage and transaction fees.

### Network Base Fee

#### Description

The base fee required to send a message to the Filecoin Network.

#### Request URL

```js
GET: /gas/network_base_fee
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

url = "https://api.spacescope.io/v2/gas/network_base_fee?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z"

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
  url := "https://api.spacescope.io/v2/gas/network_base_fee?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z"
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
  'url': 'https://api.spacescope.io/v2/gas/network_base_fee?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z',
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
curl --location --request GET 'https://api.spacescope.io/v2/gas/network_base_fee?end_hour=2022-07-01T00:00:00Z&start_hour=2022-07-01T00:00:00Z' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**            | **Type**    | **Description**                                                                                                                     |
| :---------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| hour_date               | TIMESTAMPTZ | Trunc hour of height.                                                                                                               |
| base_fee                | NUMERIC     | The average set price per unit of gas to be burned (sent to an unrecoverable address) for every message execution. (Unit: Nano FIL) |

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
           "hour_date": "2022-07-01T00:00:00Z",
           "base_fee": 0.12069467401666667
       }
   ]
}

```
</div>
</details>
<hr />

### Network Fee Per Message

#### Description

The average fee required to send a message to the Filecoin Network based on their method during the last 24 hours.

#### Request URL

```js
GET: /gas/network_fee_per_message
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

url = "https://api.spacescope.io/v2/gas/network_fee_per_message?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/gas/network_fee_per_message?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/gas/network_fee_per_message?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/gas/network_fee_per_message?end_date=2022-07-01&start_date=2022-07-01' \
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
| avg_sealing_cost_per_sector          | NUMERIC  | The average gas cost of sealing a sector in the last 24 hours.                                             |
| avg_storage_deal_publishing_fee_per_message | NUMERIC  | The average gas cost of publishing a storage deal in the last 24 hours.                                    |
| avg_overestimation_fee_per_message              | NUMERIC  | The average gas overestimation cost per message in the last 24 hours.                                                                                    |
| avg_miner_tip_per_message       | NUMERIC  | The average amount of FIL the miner receives for executing the message in the last 24 hours.                                    |
| avg_precommit_fee_per_message              | NUMERIC  | The average cost of the PreCommitSector method in the last 24 hours.                                           |
| avg_provecommit_fee_per_message            | NUMERIC  | The average cost of the ProveCommitSector method in the last 24 hours.                              |
| avg_precommit_batch_fee_per_sector        | NUMERIC  | The average cost per sector of the PreCommitSecotorBatch method, including corresponding batch fees in the last 24 hours.|
| avg_provecommit_batch_fee_per_sector      | NUMERIC  | The average cost per sector of the ProveCommitAggregate method, including corresponding batch fees in the last 24 hours.  |

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
           "avg_sector_sealing_cost_per_message": 0.0117253306541251,
           "avg_storage_deal_publishing_fee_per_message": 0.0226392708856105,
           "avg_overestimation_fee_per_message": 0.2589213231427517,
           "avg_miner_tip_per_message": 0.000004940028699413,
           "avg_precommit_fee_per_message": 0.00245399760172175,
           "avg_provecommit_fee_per_message": 0.00817382179859997,
           "avg_precommit_batch_fee_per_message": 0.00446321841000505,
           "avg_provecommit_batch_fee_per_message": 0.0129468113973523
       }
   ]
}

```
</div>
</details>
<hr />


### Daily Network Fee Breakdown

#### Description
The network fees on the Filecoin Network during the last 24 hours.

#### Request URL

```js
GET: /gas/daily_network_fee_breakdown
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

url = "https://api.spacescope.io/v2/gas/daily_network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/gas/daily_network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/gas/daily_network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/gas/daily_network_fee_breakdown?end_date=2022-07-01&start_date=2022-07-01' \
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
| base_fee_burn          | NUMERIC  | The amount of FIL tokens burned as base fee in the last 24 hours.                                                                                                                                                    |
| overestimation_burn     | NUMERIC  | The amount of FIL tokens burned as overestimation burn in the last 24 hours. This is due to the difference between GasLimit and GasUsage, resulting in overestimation burn.                                                                                                                                               |
| precommit_batch_fee_burn   | NUMERIC  | The amount of FIL tokens burned as PreCommit Batch Fee in the last 24 hours.                                                                                                                                              |
| provecommit_batch_fee_burn | NUMERIC  | The amount of FIL tokens burned as ProveCommit Batch Fee in the last 24 hours.                                                                                                                                            |
| penalty_fee_burn            | NUMERIC  | The amount of FIL tokens burned from the total fee less the sum of base fee, overestimation fee, PreCommitSectorBatch fee, ProveCommit Aggregate fee in the last 24 hours.                                                               |
| miner_tip              | NUMERIC  | The amount of FIL the miner receives for executing the message over the last 24 hours.                                                                                                   |

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
           "overestimation_burn": 449.99812880734163,
           "precommit_batch_fee_burn": 248.385583929,
           "provecommit_batch_fee_burn": 1753.46446468425,
           "penalty_fee_burn": 3232.52226487929,
           "miner_tip": 7.068296803722808
       }
   ]
}

```
</div>
</details>
<hr />

### Daily Gas Usage in Units

#### Description
The gas usage of different types of messages on Filecoin Network during the last 24 hours.

#### Request URL

```js
GET: /gas/daily_gas_usage_in_units
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

url = "https://api.spacescope.io/v2/gas/daily_gas_usage_in_units?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v2/gas/daily_gas_usage_in_units?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v2/gas/daily_gas_usage_in_units?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v2/gas/daily_gas_usage_in_units?end_date=2022-07-01&start_date=2022-07-01' \
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
| total_gas_used         | NUMERIC  | Total amount of resources (or units of gas) consumed to execute all messages on the blockchain in the last 24 hours. |
| provecommit_sector_gas_used    | NUMERIC  | Amount of gas units by ProveCommitSector in the last 24 hours.                     |
| precommit_sector_gas_used      | NUMERIC  | Amount of gas units by PreCommitSector in the last 24 hours.                     |
| provecommit_aggregate_gas_used | NUMERIC  | Amount of gas units of ProveCommitAggregate in the last 24 hours.                    |
| precommit_sector_batch_gas_used | NUMERIC  | Amount of gas units by PreCommitSectorBatch in the last 24 hours.                    |
| publish_storage_deals_gas_used  | NUMERIC  | Amount of gas units to publish storage deals in the last 24 hours.                    |
| submit_windowed_post_gas_used   | NUMERIC  | Amount of gas units to submit Proof of Storage (PoSt) in the last 24 hours.                     |

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
           "provecommit_sector_gas_used": 32366049681035,
           "precommit_sector_gas_used": 11149043502621,
           "provecommit_aggregate_gas_used": 497144277814,
           "precommit_sector_batch_gas_used": 128102628109,
           "publish_storage_deals_gas_used": 604228387885,
           "submit_windowed_post_gas_used": 2197209729799
       }
   ]
}

```
</div>
</details>
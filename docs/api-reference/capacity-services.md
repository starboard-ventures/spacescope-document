---
sidebar_position: 3
---

# Capacity & Services

Capacity and services provides information on the Filecoin Network’s data storage capacity, storage services and onboarding processes. 

### Network Storage Capacity 


#### Description

The Filecoin Network storage capacity, presented in Raw Byte (RB) and Quality-Adjusted (QA) Power.

#### Request URL

```js
GET: /network_core/capacity-services/network_storage_capacity
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/networknetwork_storage_capacity?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01' \
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
| total_qa_bytes_power           | NUMERIC  | This parameter measures the consensus power of stored data on the network, and is equal to Raw Byte Power multiplied by Sector Quality Multiplier. |
| total_qa_bytes_power_increase  | NUMERIC  | Refers to the Daily change in Quality-Adjusted Power                                                                                               |
| total_raw_bytes_power          | NUMERIC  | This measurement is the total size of all sectors in bytes.                                                                                        |
| total_raw_bytes_power_increase | NUMERIC  | Refers to the daily change in Raw Byte Power                                                                                                       |
| new_baseline_power             | NUMERIC  | The baseline power (in bytes) targeted by the network.                                                                                           |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "4e14a4aa-2368-4029-a660-5a883c0c29f1#606",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "total_qa_bytes_power": 20431876696867700000,
            "total_qa_bytes_power_increase": 18811787931090944,
            "total_raw_bytes_power": 19307467099059780000,
            "total_raw_bytes_power_increase": 11360325936873472,
            "new_baseline_power": 10430930206272310000
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Network Storage Capacity](https://observablehq.com/@starboard/chart-network-storage-capacity)  
- [Chart: Network Storage Capacity with Baseline](https://observablehq.com/@starboard/chart-network-storage-capacity-with-baseline)

:::

<hr />

### Storage State 


#### Description

Storage sector state based on active, faulty, terminated or recovered sectors during the last 24 hours.


#### Request URL

```js
GET: /network_core/capacity-services/storage_state_d
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/storage_state_d?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/storage_state_d?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/storage_state_d?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/storage_state_d?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**             | **Type** | **Description**                                                                                           |
| ------------------------ | -------- | --------------------------------------------------------------------------------------------------------- |
| stat_date                | DATE     | Refers to the date the data was recorded.                                                                |
| active_fault             | NUMERIC  | The total storage size of outstanding faulted sectors that are not recovered or terminated.               |
| active_fault_increase    | NUMERIC  | Daily change in active fault size.                                                        |
| active_fault_avg_d       | NUMERIC  | Average days that a sector fault remains active on the Filecoin Network during the last 24 hours.         |
| fault_d                  | NUMERIC  | Daily faulty sector size in TiB.                                                                          |
| recover_d                | NUMERIC  | Daily recovered sector size in TiB.                                                                       |
| term_d                   | NUMERIC  | Daily terminated sector size in TiB.                                                                      |
| term_d_increase          | NUMERIC  | Daily change in terminated sector size.                                                                   |
| net_fault_d              | NUMERIC  | The net fault refers to fault_d - recover_d - term_d                                                      |
| active_term_d            | NUMERIC  | Sectors that are scheduled to expire, but has been terminated actively by SPs.                            |
| active_term_m            | NUMERIC  | The total storage size of new active terminated sectors in the past 30 days.                              |
| active_term_m_increase   | NUMERIC  | Daily change in active terminated sectors in the past 30 days.                           |
| passive_term_d           | NUMERIC  | Sectors that are scheduled to expire, but have been terminated passively after 42 days.                   |
| extend_size              | NUMERIC  | Sectors that are scheduled to expire but get extended during the last 24 hours.                           |
| extend_size_increase     | NUMERIC  | Daily change in sector extension.                                                                         |
| extend_size_qap          | NUMERIC  | Quality-Adjusted Power of Sectors that are scheduled to expire but got extended during the last 24 hours. |
| extend_size_qap_increase | NUMERIC  | Daily change in sector QAP extension.                                                                     |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#616",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "active_fault": 99965.5,
            "active_fault_increase": 9046.28125,
            "active_fault_avg_d": 4.88184400559016,
            "fault_d": 61826.15625,
            "recover_d": 52422.6875,
            "term_d": 367.0625,
            "term_d_increase": -131.09375,
            "net_fault_d": 9036.40625,
            "active_term_d": 366.78125,
            "active_term_m": 10081.1875,
            "active_term_m_increase": -138.3125,
            "passive_term_d": 0.28125,
            "extend_size": 88150.21875,
            "extend_size_qap": 88150.2489709872,
            "extend_size_increase": 5507.25,
            "extend_size_qap_increase": 5506.36028187853
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Daily Active Faults](https://observablehq.com/@starboard/chart-daily-active-faults)
- [Chart: 30-Day New Active Terminations](https://observablehq.com/@starboard/datafield-ssd_active_term_m)
- [Chart: Daily Active Termination](https://observablehq.com/@starboard/chart-daily-active-termination)
- [Chart: Daily Sector Extension](https://observablehq.com/@starboard/chart-daily-sector-extension)
- [Chart: Change in Active Faults Breakdown](https://observablehq.com/@starboard/chart-change-in-active-faults-breakdown)
- [Chart: Daily Average Days Faulted of Active Faults](https://observablehq.com/@starboard/chart-daily-average-days-faulted-of-active-faults)

:::

<hr />

### Capacity Onboarding by Method 


#### Description

Sectors onboarded onto the Filecoin Network based on PreCommit and ProveCommit states during the last 24 hours.


#### Request URL

```js
GET: /network_core/capacity-services/sector_onboarding_by_method
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/sector_onboarding_by_method?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/sector_onboarding_by_method?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/sector_onboarding_by_method?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/sector_onboarding_by_method?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                 | **Type** | **Description**                                                                                      |
| ---------------------------- | -------- | ---------------------------------------------------------------------------------------------------- |
| stat_date                    | DATE     | Refers to the date the data was recorded.                                                           |
| pre_commit_sector_size       | NUMERIC  | Daily PreCommitSector size in PiB.                                                                   |
| pre_commit_sector_batch_size | NUMERIC  | Daily PreCommitSectorBatch size in PiB.                                                              |
| pre_commit_total_size        | NUMERIC  | Refers to the sum of all PreCommit methods; pre_commit_sector_size + pre_commit_sector_batch_size    |
| prove_commit_sector_size     | NUMERIC  | Daily ProveCommitSector size in PiB.                                                                 |
| prove_commit_aggregate_size  | NUMERIC  | Daily ProveCommitAggregate size in PiB.                                                              |
| prove_commit_total_size      | NUMERIC  | Refers to the sum of all ProveCommit methods; prove_commit_sector_size + prove_commit_aggregate_size |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#617",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "pre_commit_sector_size": 22.8249816894531,
            "pre_commit_sector_batch_size": 2.02978515625,
            "pre_commit_total_size": 24.8547668457031,
            "prove_commit_sector_size": 20.540283203125,
            "prove_commit_aggregate_size": 4.78314208984375,
            "prove_commit_total_size": 25.3234252929688
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Sector Onboarding Breakdown by Method](https://observablehq.com/@starboard/chart-sector-onboarding-breakdown-by-method)

:::

<hr />

### Capacity Onboarding by Sector Size 


#### Description

Sectors onboarded onto the Filecoin Network based on sector size during the last 24 hour.


#### Request URL

```js
GET: /network_core/capacity-services/prove_commit_split_d_v2
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/prove_commit_split_d_v2?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/prove_commit_split_d_v2?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/prove_commit_split_d_v2?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/prove_commit_split_d_v2?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**       | **Type** | **Description**                                            |
| ------------------ | -------- | ---------------------------------------------------------- |
| stat_date          | DATE     | Refers to the date the data was recorded.                 |
| halfsizebyte       | NUMERIC  | ProveCommit sector(32GiB) size in bytes.                   |
| half_size_byte_qap | NUMERIC  | ProveCommit sector(32GiB) quality-adjusted power in bytes. |
| sizebyte           | NUMERIC  | ProveCommit sector(64GiB) size in bytes.                   |
| size_byte_qap      | NUMERIC  | ProveCommit sector(64GiB) quality-adjusted power in bytes. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#617",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "pre_commit_sector_size": 22.8249816894531,
            "pre_commit_sector_batch_size": 2.02978515625,
            "pre_commit_total_size": 24.8547668457031,
            "prove_commit_sector_size": 20.540283203125,
            "prove_commit_aggregate_size": 4.78314208984375,
            "prove_commit_total_size": 25.3234252929688
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: ProveCommit 32/64 GiB Splits](https://observablehq.com/@starboard/chart-prove-commit-32-64-gib-splits)

:::

<hr />

### Sectors Scheduled Expiration


#### Description

Sector size and pledges that are extended, expired, terminated or scheduled to expire, based on their sector service periods.

#### Request URL

```js
GET: /network_core/capacity-services/sectors_schedule_expiration
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/sectors_schedule_expiration?state_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/sectors_schedule_expiration?state_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/sectors_schedule_expiration?state_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/sectors_schedule_expiration?state_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**               | **Type** | **Description**                                                                          |
| -------------------------- | -------- | ---------------------------------------------------------------------------------------- |
| stat_date                  | DATE     | Refers to the date the data was recorded.                                               |
| interest_date              | DATE     | The date of interest.                                                                    |
| schedule_expire_bytes      | BIGINT   | The total bytes of sectors scheduled to expire on the date of interest.                  |
| schedule_expire_bytes_qap  | DOUBLE   | The total quality-adjusted power of sectors scheduled to expire on the date of interest. |
| extended_bytes             | BIGINT   | The total bytes of sectors that have been extended.                                      |
| extended_bytes_qap         | DOUBLE   | The total quality-adjusted power of sectors that have been extended.                     |
| terminated_bytes           | BIGINT   | The total bytes of sectors that have been terminated.                                    |
| terminated_bytes_qap       | DOUBLE   | The total quality-adjusted power of sectors that have been terminated.                   |
| expired_bytes              | BIGINT   | The total bytes of sectors that have expired.                                            |
| potential_expire_bytes     | BIGINT   | Refers to scheduled_expire – terminated – extended – expired, in bytes.                  |
| potential_expire_bytes_qap | DOUBLE   | Refers to scheduled_expire_qap – terminated_qap – extended_qap – expired_qap , in QAP.   |
| schedule_expire_pledge     | NUMERIC  | The total initial pledge of sectors that have been scheduled to expire                   |
| extended_pledge            | NUMERIC  | The total initial pledge of sectors that have been extended.                             |
| terminated_pledge          | NUMERIC  | The total initial pledge of sectors that have been terminated.                           |
| expired_pledge             | NUMERIC  | The total initial pledge of sectors that have expired.                                   |
| potential_expire_pledge    | NUMERIC  | Refers to scheduled_expire – terminated – extended – expired, in initial pledge.         |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#649",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "interest_date": "2022-06-30T00:00:00Z",
            "schedule_expire_bytes": 36327829821980672,
            "schedule_expire_bytes_qap": 36343933228232100,
            "extended_bytes": 27175907349233664,
            "extended_bytes_qap": 27181034117945200,
            "terminated_bytes": 106205951295488,
            "terminated_bytes_qap": 106281698941843,
            "expired_bytes": 9045716521451520,
            "expired_bytes_qap": 9056617411345040,
            "potential_expire_bytes": 0,
            "potential_expire_bytes_qap": -8,
            "schedule_expire_pledge": 245565.049578198,
            "extended_pledge": 180546.066598032,
            "terminated_pledge": 800.713209629618,
            "expired_pledge": 64218.2697705359,
            "potential_expire_pledge": 1.45519152283669e-11
        },
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Scheduled Expiration by Date Breakdown in PiB](https://observablehq.com/@starboard/chart-scheduled-expiration-by-date-breakdown-in-pib)
- [Chart: Scheduled Expiration by Date Breakdown in %](https://observablehq.com/@starboard/chart-scheduled-expiration-by-date-breakdown-in)
- [Chart: Initial Pledge Release by Scheduled Expiration FIL](https://observablehq.com/@starboard/chart-initial-pledge-release-by-scheduled-expiration-fil)

:::

<hr />

### Network Block Reward


#### Description

Weighted block rewards awarded by the Filecoin Network during the last 24 hours.

#### Request URL

```js
GET: /network_core/capacity-services/network_block_reward
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/network_block_reward?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/network_block_reward?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/network_block_reward?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/network_block_reward?end_date=2022-07-01&start_date=2022-07-01' \
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
| reward_per_wincount | NUMERIC  | Weighted block rewards awarded by the Filecoin Network during the last 24 hours. |

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


#### ObservableHQ LINK
:::info LINK

- [Chart: Network Block Rewards](https://observablehq.com/@starboard/chart-network-block-rewards)

:::

<hr />

### 32GiB Sector Pledges and Returns


#### Description

Pledges and projected 360-day rewards awarded by the Filecoin Network for the sector size of 32GiB during the last 24 hours.

#### Request URL

```js
GET: /network_core/capacity-services/economics_sector_pledges_returns_32g_d
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_32g_d?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_32g_d?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_32g_d?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_32g_d?end_date=2022-07-01&start_date=2022-07-01' \
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
| rewards              | NUMERIC  | Rewards awarded over 360 days                                                                        |
| precommit_fil        | NUMERIC  | PreCommitSector gas fees                                                                             |
| provecommit_fil      | NUMERIC  | ProveCommitSector gas fees                                                                           |
| precommit_agg_fil    | NUMERIC  | PreCommitSectorBatch gas fees                                                                        |
| provecommit_agg_fil  | NUMERIC  | ProveCommitAggregate gas fees                                                                        |
| window_fil           | NUMERIC  | Refers to window_cost / window_count of SubmitWindowedPoSt method fees                |
| profit               | NUMERIC  | Refers to rewards - precommit_fil - provecommit_fil - window_fil/2349                                |
| profit_agg           | NUMERIC  | Refers to rewards - precommit_agg_fil - provecommit_agg_fil - window_fil/2349          |
| initial_pledge       | NUMERIC  | Refers to Initial Storage Pledge(20 days equivalent of projected rewards) + Initial Consensus Pledge |
| reward_pledge_return | NUMERIC  | Refers to rewards / initial_pledge                                                                   |
| post_gas_return      | NUMERIC  | Refers to profit / initial_pledge                                                                    |
| post_gas_return_agg  | NUMERIC  | Refers to profit_agg / initial_pledge                                                                |

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
            "rewards": 0.138977330393156,
            "precommit_fil": 0.00249939160595612,
            "provecommit_fil": 0.00824760493173514,
            "precommit_agg_fil": 0.00445854277720634,
            "provecommit_agg_fil": 0.0129589878583761,
            "window_fil": 0.00256319407939105,
            "profit": 0.128229242670246,
            "profit_agg": 0.121558708572354,
            "initial_pledge": 0.169573588025708,
            "reward_pledge_return": 0.819569438915728,
            "post_gas_return": 0.756186409470831,
            "post_gas_return_agg": 0.71684930411407
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: 32GiB Sector Pledges and Returns](https://observablehq.com/@starboard/chart-32gib-sector-pledges-and-returns)
- [Economics Table](https://observablehq.com/@starboard/economics-table)
  
:::

<hr />

### 64GiB Sector Pledges and Returns


#### Description

Pledges and projected 360-day rewards awarded by the Filecoin Network for the sector size of 64GiB during the last 24 hours.

#### Request URL

```js
GET: /network_core/capacity-services/economics_sector_pledges_returns_64g_d
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_64g_d?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_64g_d?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_64g_d?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/economics_sector_pledges_returns_64g_d?end_date=2022-07-01&start_date=2022-07-01' \
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
| rewards              | NUMERIC  | Rewards awarded over 360 days                                                                        |
| precommit_fil        | NUMERIC  | PreCommitSector gas fees                                                                             |
| provecommit_fil      | NUMERIC  | ProveCommitSector gas fees                                                                           |
| precommit_agg_fil    | NUMERIC  | PreCommitSectorBatch gas fees                                                                        |
| provecommit_agg_fil  | NUMERIC  | ProveCommitAggregate gas fees                                                                        |
| window_fil           | NUMERIC  | Refers to window_cost / window_count of SubmitWindowedPoSt method fees                 |
| profit               | NUMERIC  | Refers to rewards - precommit_fil - provecommit_fil - window_fil/2349                                |
| profit_agg           | NUMERIC  | Refers to rewards - precommit_agg_fil - provecommit_agg_fil - window_fil/2349          |
| initial_pledge       | NUMERIC  | Refers to Initial Storage Pledge(20 days equivalent of projected rewards) + Initial Consensus Pledge |
| reward_pledge_return | NUMERIC  | Refers to rewards / initial_pledge                                                                   |
| post_gas_return      | NUMERIC  | Refers to profit / initial_pledge                                                                    |
| post_gas_return_agg  | NUMERIC  | Refers to profit_agg / initial_pledge                                                                |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#652",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "rewards": 0.277954660786312,
            "precommit_fil": 0.00214480573841829,
            "provecommit_fil": 0.00768619962083367,
            "precommit_agg_fil": 0.00450585405325211,
            "provecommit_agg_fil": 0.0128392275449717,
            "window_fil": 0.00215255339193464,
            "profit": 0.268122739056948,
            "profit_agg": 0.260608662817977,
            "initial_pledge": 0.339147176051415,
            "reward_pledge_return": 0.819569438915728,
            "post_gas_return": 0.79057930594799,
            "post_gas_return_agg": 0.768423508201254
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: 64GiB Sector Pledges and Returns](https://observablehq.com/@starboard/chart-64gib-sector-pledges-and-returns)
- [Economics Table](https://observablehq.com/@starboard/economics-table)

:::

<hr />

### Committed and Expired Pledge


#### Description

Pledges that have been committed or expired in the last 24 hours on the Filecoin Network.

#### Request URL

```js
GET: /network_core/capacity-services/commit_and_expire_pledge
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

url = "https://api.spacescope.io/v1/network_core/capacity-services/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01"

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
  url := "https://api.spacescope.io/v1/network_core/capacity-services/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01"
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
  'url': 'https://api.spacescope.io/v1/network_core/capacity-services/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01',
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
curl --location --request GET 'https://api.spacescope.io/v1/network_core/capacity-services/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**            | **Type** | **Description**                                      |
| ----------------------- | -------- | ---------------------------------------------------- |
| stat_date               | DATE     | Refers to the date the data was recorded.           |
| raw_bytes_gb            | NUMERIC  | Total sector size of miners.(Bytes / 32 GiB)         |
| commit_pct_qa_adj       | NUMERIC  | Total committed pct verified QAP of miners.          |
| commit_pledge           | NUMERIC  | Total committed initial pledge of the day.               |
| commit_pledge_per_bytes | NUMERIC  | Total committed initial pledge per raw bytes of the day. |
| commit_pledge_per_qap   | NUMERIC  | Total committed initial pledge per QAP of the day.       |
| expire_pct_qa_adj       | NUMERIC  | Total expired pct verified QAP of miners.            |
| expire_pledge           | NUMERIC  | Total expired initial pledge of the day.                 |
| expire_pledge_per_bytes | NUMERIC  | Total expired initial pledge per raw bytes of the day.   |
| expire_pledge_per_qap   | NUMERIC  | Total expired initial pledge per QAP of the day.         |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "3c9078ba-dd89-4b0b-84ce-4035964eac3b#653",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-07-01T00:00:00Z",
            "raw_bytes_gb": 815642,
            "commit_pct_qa_adj": 1034803.7599351,
            "commit_pledge": 175511.807778307,
            "commit_pledge_per_bytes": 0.215182405734754,
            "commit_pledge_per_qap": 0.169608784364403,
            "expire_pct_qa_adj": 260334.185546403,
            "expire_pledge": 63837.0279158741,
            "expire_pledge_per_bytes": 0.245526086114569,
            "expire_pledge_per_qap": 0.245211852534424
        }
    ]
}
```
</div>
</details>


#### ObservableHQ LINK
:::info LINK

- [Chart: Commit Pledge per QAP](https://observablehq.com/@starboard/chart-commit-pledge-per-qap)

:::

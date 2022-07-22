### Network Storage Capacity 


#### DESCRIPTION

The Filecoin network storage capacity in Raw Byte (RB) and Quality-Adjusted (QA) Power.


#### REQUEST URL

```js
GET: /network_governance/capacity-services/network_storage_capacity
```

#### REQUEST PARAMETERS
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
| start_date   | STRING   | Optional. Start date of selected period | 2022-07-01  | The date of the latest data. |
| end_date     | STRING   | Optional. End date of selected period   | 2022-07-01  | The date of the latest data. |

:::note

 The difference between end_date and start_date should be smaller than 31 days.

:::

#### REQUEST EXAMPLE

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

url = "https://3.12.111.181:8443/api/v1/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_tWoqipUOaqeStypHFgRrpoleGpjYPgKfDrPH'
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
  url := "https://3.12.111.181:8443/api/v1/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_tWoqipUOaqeStypHFgRrpoleGpjYPgKfDrPH")
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
  'url': 'https://3.12.111.181:8443/api/v1/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_tWoqipUOaqeStypHFgRrpoleGpjYPgKfDrPH'
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
curl --location --request GET 'https://3.12.111.181:8443/api/v1/network_storage_capacity?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_tWoqipUOaqeStypHFgRrpoleGpjYPgKfDrPH'
```

</TabItem>
</Tabs>

</div>
</details>


#### RESPONSE SCHEMA

| **Variable**                   | **Type** | **Description**                                                                                                                                    |
| ------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| stat_date                      | DATE     | Refers to the date that data was recorded.                                                                                                         |
| total_qa_bytes_power           | NUMERIC  | This parameter measures the consensus power of stored data on the network, and is equal to Raw Byte Power multiplied by Sector Quality Multiplier. |
| total_qa_bytes_power_increase  | NUMERIC  | Refers to the Daily change in Quality Adjusted Power                                                                                               |
| total_raw_bytes_power          | NUMERIC  | This measurement is the total size of all sectors in bytes.                                                                                        |
| total_raw_bytes_power_increase | NUMERIC  | Refers to the daily change in Raw Byte Power                                                                                                       |
| new_baseline_power             | NUMERIC  | The baseline power (in bytes) the network is targeting.                                                                                            |

#### RESPONSE EXAMPLES

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

- [chart-network-storage-capacity](https://observablehq.com/@starboard/chart-network-storage-capacity)  
- [chart-network-storage-capacity-with-baseline](https://observablehq.com/@starboard/chart-network-storage-capacity-with-baseline)

:::
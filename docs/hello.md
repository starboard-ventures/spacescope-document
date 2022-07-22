---
sidebar_position: 3
---
# Demo

### Committed and Expired Pledge


#### DESCRIPTION

Pledges that have been committed or expired in the last 24 hours on the Filecoin Network.

#### REQUEST URL

```js
GET: /network_governance/capacity-services/commit_and_expire_pledge
```

#### REQUEST PARAMETERS
| **Variable** | **Type** | **Description**                               | **Example** | **Default**                                 |
| ------------ | -------- | --------------------------------------------- | ----------- | ------------------------------------------- |
| start_date   | STRING   | Start date of the selected period (Optional). | 2022-07-01  | The most recent date that the API includes. |
| end_date     | STRING   | End date of the selected period (Optional).   | 2022-07-01  | The most recent date that the API includes. |

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

url = "https://data-api-test.starboard.ventures/api/v1/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01"

payload={}
headers = {
  'authorization': 'Bearer ghp_eNRrQsxAcQfWJgElKNVKfdtgYzSBpmNOPrZq'
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
  url := "https://data-api-test.starboard.ventures/api/v1/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01"
  method := "GET"
  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("authorization", "Bearer ghp_eNRrQsxAcQfWJgElKNVKfdtgYzSBpmNOPrZq")
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
  'url': 'https://data-api-test.starboard.ventures/api/v1/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01',
  'headers': {
    'authorization': 'Bearer ghp_eNRrQsxAcQfWJgElKNVKfdtgYzSBpmNOPrZq'
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
curl --location --request GET 'https://data-api-test.starboard.ventures/api/v1/commit_and_expire_pledge?end_date=2022-07-01&start_date=2022-07-01' \
--header 'authorization: Bearer ghp_eNRrQsxAcQfWJgElKNVKfdtgYzSBpmNOPrZq'
```

</TabItem>
</Tabs>

</div>
</details>


#### RESPONSE SCHEMA

| **Variable**            | **Type** | **Description**                                      |
| ----------------------- | -------- | ---------------------------------------------------- |
| stat_date               | DATE     | Refers to the date that data was recorded.           |
| raw_bytes_gb            | NUMERIC  | Total sector size of miners.(Bytes / 32 GiB)         |
| commit_pct_qa_adj       | NUMERIC  | Total committed pct verified QAP of miners.          |
| commit_pledge           | NUMERIC  | Total committed initial pledge of day.               |
| commit_pledge_per_bytes | NUMERIC  | Total committed initial pledge per raw bytes of day. |
| commit_pledge_per_qap   | NUMERIC  | Total committed initial pledge per QAP of day.       |
| expire_pct_qa_adj       | NUMERIC  | Total expired pct verified QAP of miners.            |
| expire_pledge           | NUMERIC  | Total expired initial pledge of day.                 |
| expire_pledge_per_bytes | NUMERIC  | Total expired initial pledge per raw bytes of day.   |
| expire_pledge_per_qap   | NUMERIC  | Total expired initial pledge per QAP of day.         |

#### RESPONSE EXAMPLES

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

- [chart-commit-pledge-per-qap](https://observablehq.com/@starboard/chart-commit-pledge-per-qap)

:::

<hr />
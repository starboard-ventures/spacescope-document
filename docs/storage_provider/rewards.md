---
sidebar_position: 3
---

# Rewards

Information on Filecoin block rewards received by the storage provider.

#### Request URL

```js
GET: /storage_provider/rewards
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

url = "https://api.spacescope.io/v2/storage_provider/rewards?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/rewards?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/rewards?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/rewards?state_date=2022-10-01&miner_id=f0110804' \
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
| blocks_mined          | BIGINT  | Total number of blocks mined by the storage provider.                                                                                        |
| win_count             | BIGINT  | Total number of reward units won by the storage provider.                                                                                     |
| rewards | NUMERIC | Total block rewards in FIL received by the storage provider. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9376",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "blocks_mined": 0,
            "win_count": 0,
            "rewards": 0
        }
    ]
}
```
</div>
</details>
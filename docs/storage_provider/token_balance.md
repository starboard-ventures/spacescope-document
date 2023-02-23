---
sidebar_position: 4
---

# Token Balance

Information on token balance of the storage provider. 

#### Request URL

```js
GET: /storage_provider/token_balance
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

url = "https://api.spacescope.io/v2/storage_provider/token_balance?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/token_balance?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/token_balance?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/token_balance?state_date=2022-10-01&miner_id=f0110804' \
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
| balance          | NUMERIC  | The storage provider’s latest actor balance (including initial pledge, locked funds, precommit deposits, deal collateral) in FIL.                                                                                        |
| initial_pledge             | NUMERIC  | The storage provider’s  amount of FIL locked as initial pledge.                                                                                     |
| locked_funds | NUMERIC | The storage provider’s amount of FIL locked due to the vesting schedule (when a storage provider receives block rewards, the tokens are locked and will be unlocked linearly over some future epochs. The unvested portion is considered as locked funds). |
| pre_commit_deposits | NUMERIC | The storage provider’s amount of FIL locked due to it being used as a PreCommit deposit. |
| provider_collateral | NUMERIC | The storage provider’s amount of FIL the provider has pledged as collateral for the deals. |
| fee_debt | NUMERIC | Absolute value of debt this storage provider owes from unpaid fees in FIL. |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9377",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "balance": 130.570992419809,
            "initial_pledge": 130.570992419809,
            "locked_funds": 0,
            "pre_commit_deposits": 0,
            "provider_collateral": 0.117471202123958,
            "fee_debt": 0
        }
    ]
}
```
</div>
</details>
---
sidebar_position: 1
---
# Basic Info

Basic information on the storage providers.

#### Request URL

```js
GET: /storage_provider/basic_info
```

#### Request Parameters
| **Variable** | **Type** | **Description**                         | **Example** | **Default**                  |
| ------------ | -------- | --------------------------------------- | ----------- | ---------------------------- |
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

url = "https://api.spacescope.io/v2/storage_provider/basic_info?state_date=2022-10-01&miner_id=f0110804"

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
  url := "https://api.spacescope.io/v2/storage_provider/basic_info?state_date=2022-10-01&miner_id=f0110804"
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
  'url': 'https://api.spacescope.io/v2/storage_provider/basic_info?state_date=2022-10-01&miner_id=f0110804',
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
curl --location --request GET 'https://api.spacescope.io/v2/storage_provider/basic_info?state_date=2022-10-01&miner_id=f0110804' \
--header 'authorization: Bearer ghp_xJtTSVcNRJINLWMmfDangcIFCjqPUNZenoVe'
```

</TabItem>
</Tabs>

</div>
</details>


#### Response Schema

| **Variable**                   | **Type** | **Description**                                                                                                                                    |
| ------------------------------ | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| miner_id           | STRING  | Unique ID of the storage provider.  |
| onboarding_at          | TIMESTAMP  | The earliest timestamp that the storage provider first recorded in the network.                                                                                        |
| sector_size             | BIGINT  | Size of a sector (32GiB or 64GiB, in bytes) of the storage provider.                                                                                     |

#### Response Example

<details><summary>Response</summary>
<div>

```Json
{
    "request_id": "ba4422cc-734f-4d90-84ec-7ad0b3ef01e7#9375",
    "code": 0,
    "message": "success.",
    "data": [
        {
            "stat_date": "2022-10-01T00:00:00Z",
            "miner_id": "f0110804",
            "onboarding_at": "2020-12-21T18:35:00Z",
            "sector_size": 34359738368
        }
    ]
}
```
</div>
</details>

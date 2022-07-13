### Testing

If you're eager to test DocSearch v3 and can't wait to receive your credentials, you can use ours!


## Docusaurus v1 template

<details><summary>docusaurus-v1.js</summary>
<div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  groupId="language"
  defaultValue="JavaScript"
  values={[
    { label: 'JavaScript', value: 'JavaScript', },
    { label: 'React', value: 'react', }
  ]
}>
<TabItem value="JavaScript">

```js
docsearch({
  appId: 'R2IYF7ETH7',
  apiKey: '599cec31baffa4868cae4e79f180729b',
  indexName: 'docsearch',
});
```

</TabItem>

<TabItem value="react">

```jsx
<DocSearch
  appId="R2IYF7ETH7"
  apiKey="599cec31baffa4868cae4e79f180729b"
  indexName="docsearch"
/>
```

</TabItem>

</Tabs>

</div>
</details>

Panel example:

Web ref :
https://andrewstevens.dev/posts/useApi-react-hook/

```js
import useApi from './useApi';
const { loading, data, refresh } = useApi({url:'https://jsonplaceholder.typicode.com/posts?_limit=5'});

<div>
  <button onClick={refresh}>Refresh</button>
  <div>
    {loading && 'Loading ...'}
    {data &&
    <div>Result : 
          {data.map(it => <div>{it.title}</div>)}
    </div>}
  </div>
</div>

```

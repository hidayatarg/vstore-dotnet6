## Docker Container
`docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 --name=vstoredbsql -d mcr.microsoft.com/mssql/server:2019-latest
ca520f93c10647b9bdfc425d4f0c739977f011ad112b0d61db9f490943465ac9`


## React
### Render Once
```js
  useEffect(()=> {
    fetch('http://localhost:5161/api/Product')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
```

### Render On every Reload
```js
  useEffect(()=> {
    fetch('http://localhost:5161/api/Product')
      .then(res => res.json())
      .then(data => setProducts(data))
  })
```
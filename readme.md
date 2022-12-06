## Docker Container
`docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 --name=vstoredbsql -d mcr.microsoft.com/mssql/server:2019-latest`

or for latest

`docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=yourStrong12*?AF" -e "MSSQL_PID=Express" -p 1433:1433 --name=vstoredbsql  mcr.microsoft.com/mssql/server:latest`

to run docker container

`docker run vstoredbsql`


File Soruce
`Directory.GetParent(Directory.GetCurrentDirectory())`

`Directory.GetDirectoryRoot(Directory.GetCurrentDirectory())`



## React
### Render Once
```js
  useEffect(()=> {
    fetch('http://localhost:5161/api/Product')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])
```

### Render On EndlessLoop
```js
  useEffect(()=> {
    fetch('http://localhost:5161/api/Product')
      .then(res => res.json())
      .then(data => setProducts(data))
  })
```

### React Router
Required library to install and the community have the type defination file we can get as shown below.
- `npm install react-router-dom@5.3.0 @types/react-router-dom@5.3.2`
- `npm install react-toastify`
- `npm install axios`
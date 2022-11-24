## Docker Container
`docker run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=yourStrong(!)Password" -e "MSSQL_PID=Express" -p 1433:1433 --name=vstoredbsql -d mcr.microsoft.com/mssql/server:2019-latest
ca520f93c10647b9bdfc425d4f0c739977f011ad112b0d61db9f490943465ac9`
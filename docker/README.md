## ビルド

```
docker build --no-cache -t adl .
```


## 使い方

```
docker run -d  \
  -name adl \
  -e MONGODB_ENDPOINT=<mongodb_endpoint> \
  -e PORT=<service_port> \
  -p <local_service_port>:<service_port>
  adl
```

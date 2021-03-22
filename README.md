# adl

## 概要
本プログラムは受動型見守りシステムと能動型見守りシステムを連携させるためのインターフェースとしての役割を担うAPIサーバのプログラムです。

本プログラムは受動型見守りシステムである宅内センシングシステムが検出した行動に関する行動データに対して取得、作成、更新、削除といった操作を提供します。また、宅内センシングシステムが検出可能な行動の取得、作成、更新、削除といった操作を提供します。


&nbsp;


## 環境
本プログラムはNode.jsで動作します。

下記のパッケージをインストールして下さい。

なお、MongoDBをローカル環境上で稼働させない場合はmongodbは不要です。

```
sudo apt install -y nodejs npm mongodb
```


&nbsp;


## インストール方法
下記のコマンドを実行し、インストールを行って下さい。

```
git clone https://github.com/sosomasox/adl.git
cd adl
npm install
```


&nbsp;


## 環境変数の設定
環境変数として **MONGODB_ENDPOINT** と **PORT**を設定する必要があります。

**MONGODB_ENDPOINT** にはMongoDBがのエンドポイントを **PORT** には本プログラムが公開するするポート番号を指定します。

Node.jsのプログラムから環境変数を参照するために.envファイルを作成し、adlフォルダ配下に保存して下さい。

下記に例を示します。

```
$ cat .env
MONGODB_ENDPOINT='mongodb://localhost:27017/adl'
PORT=3001
```


&nbsp;


## 使い方

下記のコマンドを実行することでプログラムが開始します。

```
npm start
```

下記のコマンドを実行することでプログラムが終了します。

``` 
npm stop
```


&nbsp;


## Web API

本プログラムが提供するWeb APIに関しては以下を参照して下さい。

https://github.com/sosomasox/adl/wiki


&nbsp;


## ライセンス

adl is under [MIT license](https://en.wikipedia.org/wiki/MIT_License).

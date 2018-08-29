React Hands-on
===================
# 目的 #
Create React Appを使ったハンズオン

# 前提 #
| ソフトウェア   | バージョン   | 備考        |
|:---------------|:-------------|:------------|
| node           |8.10.0    |             |
| docker         |17.06.2  |             |
| docker-compose |1.21.0  |             |
| vagrant        |2.0.3  |             |

# 構成 #
1. [構築](#構築 )
1. [配置](#配置 )
1. [運用](#運用 )
1. [開発](#開発 )

## 構築
### 開発用仮想マシンの起動・プロビジョニング
+ Dockerのインストール
+ docker-composeのインストール
```bash
vagrant up
vagrant ssh
```

### 開発パッケージのインストール
+ nvmのインストール
+ Node.jsのインストール
```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.3/install.sh | bash
source ~/.bashrc 
nvm install v8.10
nvm alias default v8.10
```

**[⬆ back to top](#構成)**

## 配置
**[⬆ back to top](#構成)**

## 運用
**[⬆ back to top](#構成)**

## 開発
create-react-appをインストール
```
npm install -g create-react-app
```
新規アプリケーションの作成
```
cd /vagrant
create-react-app react-app
cd react-app
npm start
```
[http://192.168.33.10:3000](http://192.168.33.10:3000)に接続して確認する

**[⬆ back to top](#構成)**

# 参照 #
+ [nvmを使ったNode.jsのインストール&バージョンアップ手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a) 
+ [Create React App](https://github.com/facebook/create-react-app) 
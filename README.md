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
### AWS認証設定
```bash
cd /vagrant/sam-app
cat <<EOF > .env
#!/usr/bin/env bash
export AWS_ACCESS_KEY_ID=xxxxxxxxxxxx
export AWS_SECRET_ACCESS_KEY=xxxxxxxxxx
export AWS_DEFAULT_REGION=us-east-1
EOF
```
アクセスキーを設定したら以下の操作をする
```bash
source .env
aws ec2 describe-regions
```

### サイトのデプロイ
package.jsonにnpm-scriptを追加する
```json
"config": {
  "s3BucketName": "react-hands-on",
  "region": "us-east-1"
},
"scripts": {    
    "web:create": "aws s3 mb s3://$npm_package_config_s3BucketName --region $npm_package_config_region && aws s3 website s3://$npm_package_config_s3BucketName/ --index-document index.html --error-document error.html",
    "web:deploy": "npm run build && aws s3 sync build/ s3://$npm_package_config_s3BucketName --region $npm_package_config_region --grants full=uri=http://acs.amazonaws.com/groups/global/AllUsers",
    "web:site": "echo http://$npm_package_config_s3BucketName.s3-website-$npm_package_config_region.amazonaws.com",
    "web:open": "open http://$npm_package_config_s3BucketName.s3-website-$npm_package_config_region.amazonaws.com",
    "web:destroy": "aws s3 rb s3://$npm_package_config_s3BucketName --region $npm_package_config_region --force",
  },
```

```
npm run web:create
npm run web:deploy
npm run web:site
```

**[⬆ back to top](#構成)**

## 運用
**[⬆ back to top](#構成)**

## 開発
### アプリケーションのセットアップ

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

### ESLintのセットアップ
```bash
cd /vagrant/react-app
npm install eslint --save-dev
npm install --dev eslint-plugin-compat
```
### eslint-config-airbnbのセットアップ
```bash
cd /vagrant/react-app
npx install-peerdeps --dev eslint-config-airbnb
npx eslint --init
cat <<EOF > .eslintrc.json
{
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "plugins": [
    "flowtype",
    "compat"
  ],
  "rules": {
    "react/jsx-wrap-multilines": 0,
    "eol-last": 0,
    "function-paren-newline": 0,
    "jsx-a11y/no-redundant-roles": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "react/jsx-filename-extension": 0
  },
  "env": {
    "browser": true,
    "jest": true
  },
  "settings": {
    "polyfills": ["fetch"]
  }
}
EOF
```
package.jsonにnpm-scriptを追加する
```json
"scripts": {
    "lint": "eslint ./src"
  },
```
lintコマンドを実行する
```bash
npm run lint
```

### StyleLintのセットアップ
```
npm install --dev stylelint stylelint-scss stylelint-config-standard
cat <<EOF > .stylelintrc.json
{
  "plugins": [
    "stylelint-scss"
  ],
   "extends": "stylelint-config-standard"
}
EOF
```
package.jsonにnpm-scriptを追加する
```json
"scripts": {
    "lint:css": "stylelint ./src"
  },
```
lintコマンドを実行する
```bash
npm run lint:css
```

### Flowのセットアップ
```
npm install --dev flow-bin babel-preset-flow babel-eslint eslint-plugin-flowtype flow-typed
npx flow init
npx flow-typed install
cat <<EOF > .flowconfig
[ignore]
.*/node_modules/.*

[include]

[libs]
/type-def-libs

[lints]

[options]
suppress_comment= \\(.\\|\n\\)*\\flow-disable-next-line

[strict]
EOF
```
package.jsonにnpm-scriptを追加する
```json
"scripts": {
    "flow": "flow ./src"
  },
```
flowコマンドを実行する
```bash
npm run flow
```

### コードカバレッジのセットアップ
package.jsonにnpm-scriptを追加する
```json
"scripts": {    
    "coverage": "npm test -- --coverage"
  },
```

**[⬆ back to top](#構成)**

# 参照 #
+ [nvmを使ったNode.jsのインストール&バージョンアップ手順](https://qiita.com/ffggss/items/94f1c4c5d311db2ec71a) 
+ [Create React App](https://github.com/facebook/create-react-app)
+ [ESLint](https://eslint.org/)
+ [stylelint](https://github.com/stylelint/stylelint)
+ [Deploying create-react-app to S3 and CloudFront](https://medium.com/@omgwtfmarc/deploying-create-react-app-to-s3-or-cloudfront-48dae4ce0af)  
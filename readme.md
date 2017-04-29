# Syonet-Sencond

[![Build Status](https://travis-ci.org/igara/syonet-second.svg?branch=master)](https://travis-ci.org/igara/syonet-second)
  
[![Code Climate](https://codeclimate.com/github/igara/syonet-second/badges/gpa.svg)](https://codeclimate.com/github/igara/syonet-second)
[![Test Coverage](https://codeclimate.com/github/igara/syonet-second/badges/coverage.svg)](https://codeclimate.com/github/igara/syonet-second/coverage)
[![Issue Count](https://codeclimate.com/github/igara/syonet-second/badges/issue_count.svg)](https://codeclimate.com/github/igara/syonet-second)

## 環境構築

### Meteorのインストール  
Linux / Mac  
```
curl https://install.meteor.com/ | sh
```

Windowsインストーラ  
[https://install.meteor.com/windows](https://install.meteor.com/windows)  

### Syonet-Secondの起動

```
git clone https://github.com/igara/syonet-second.git
cd syonet-second
meteor npm install
```

- Build
```
meteor npm run webpack
```

- Server起動(本番)  
```
meteor --production
```

- Server起動(開発)  
```
meteor --debug
```
サーバサイドのデバッグを下記のURLから行える  
http://localhost:3000/?debug=5959

- サーバアクセス  
[http://localhost:3000](http://localhost:3000)

### HTTPS　リバースプロキシサーバの利用

- mrubyのインストール  
```
git clone https://github.com/mruby/mruby.git ~/mruby
cd ~/mruby
ruby ./minirake
echo 'export PATH=$PATH:$HOME/mruby/bin' >> ~/.bash_profile
source ~/.bash_profile
mruby --version
```

- h2oのインストール  
Mac Homebrewからのインストール
```
brew install h2o
```

ArchLinux yaourtからのインストール
```
yaorgu -S h2o
```

- 証明書の作成  
例）オレオレ  
```
cd [syonet-second ディレクトリ]
cd h2o/cert
openssl genrsa -aes128 2048 > server.key
openssl req -new -key server.key > server.csr
openssl x509 -in server.csr -days 365000 -req -signkey server.key > server.crt
```
Let'encrypt  
```
git clone https://github.com/certbot/certbot
cd certbot/
### 証明書新規作成はこっち
./certbot-auto
### 証明書更新はこっち
./certbot-auto renew --force-renew
```
証明書の配置先の設定は  
syonet-second/h2o/h2o.confを参照すること

- プロキシサーバの起動  
```
cd [syonet-second ディレクトリ]
cd h2o
h2o -c h2o.conf
```

### REST APIの設定など

#### e-statを使う場合

imports/estat_api_setting.jsを新規で作成し下記を記載する

```
module.exports = {
	estat_app_id: "自分の登録したestatのappIdにすること"
};
```

### rustup & Emscripten のインストールと新しいプロジェクトの作成

- rustup install & add WebAssembly  
```
curl https://sh.rustup.rs -sSf | sh
rustup install stable
sudo rustup target add asmjs-unknown-emscripten
sudo rustup target add wasm32-unknown-emscripten
```

- cmake install
```
brew install cmake
```

- Emscripten install  
```
curl -O https://s3.amazonaws.com/mozilla-games/emscripten/releases/emsdk-portable.tar.gz
tar -xzf emsdk-portable.tar.gz
cd emsdk_portable
source ./emsdk_env.sh
emsdk update
emsdk install latest
emsdk activate latest
emsdk install sdk-incoming-64bit binaryen-master-64bit
emsdk activate sdk-incoming-64bit binaryen-master-64bit
```

- プロジェクトの作成  
```
cd [syonet-second]/private/asm
cargo new --bin [プロジェクト名]
```

- WebAssemblyへのビルド  
```
cd [syonet-second]/imports/wasm/
# プロジェクトビルド
cargo build --target wasm32-unknown-emscripten
# JSファイルの吐き出し
rustc --target=wasm32-unknown-emscripten src/main.rs -o dist/main.js
# HTMLも吐き出す
rustc --target=wasm32-unknown-emscripten src/main.rs -o dist/main.html
chmod a+r dist/main.js
```

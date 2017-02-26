# Syonet-Sencond

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
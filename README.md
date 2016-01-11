## 安裝

> 我東西盡量都寫進 `Makefiile` 裡面

> 如果有好的想法可以跟我說!

```bash
  $ git clone git@github.com:qas612820704/express-sass-babel-mongoose-passport-template.git
  // 或是fork過去自己的 Repo
  $ npm install
  $ make test // 現在只有測試User跟Profile的model
  $ npm start // 直接白箱看登入系統
  
  以上都正常的話就可以開始用囉
```

## 使用

```bash
  $ make dbserv // 如果未安裝 mongodb 請用自己的套件庫安裝
                // 或是自己安裝 記得加入 $PATH
  $ make es6    // 讓 es6 script 可以自動編譯到 public/javascripts
                // 這邊還蠻詬病的, 我找到的 express相關的 babel middleware
                // 一致不能用, 不知道是node更新 還是babel更新 導致套件都怪怪的
  $ DEBUG=* npm start
```

Thanks you!

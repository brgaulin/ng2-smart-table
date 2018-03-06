# NG2 Smart Table
Branched off ng2-smart-table 1.2.1
This branch includes fixes:
 - Fix for https://github.com/akveo/ng2-smart-table/issues/681
 - Fix for build process
 - Fix for IE Support

# To Update:

Start in your branch with the fixes(github/brgaulin/pq_upstream)

```sh
npm install
npm install -g gulp
gulp build:release
git checkout pq
rm -rf bundles/ lib/ components/ dist/ng2-smart-table/README.md
cp -R dist/ng2-smart-table/* .
rm -rf dist/ package-lock.json
git commit -am "build"
git push internal
```

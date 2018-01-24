# NG2 Smart Table
Branched off ng2-smart-table 1.2.1
This branch includes fixes:
 - Fix for https://github.com/akveo/ng2-smart-table/issues/681
 - Fix for build process

# To Update:

```sh
npm install
gulp build:release
git checkout pq
rm -rf bundles/ node_modules/ lib/ dist/ng2-smart-table/README.md
cp -R dist/ng2-smart-table/* .
rm -rf dist/ package-lock.json
git push internal
```

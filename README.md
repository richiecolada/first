# Components
Shared NPM components for web UIs

Step 1) Copy the loader component to this repository: https://github.com/PieInsurance/Quote/tree/master/src/client/components/Loader

Step 2) Get build script working to package up as an NPM package @pieinsurance/components

Notes:

Follow Ant Design's layout & folder structure: https://github.com/ant-design/ant-design/tree/master/components

Build only as ES Modules (ESM)

Target ES5

Module ES2015

Output should be similar to what you see in the /node_modules/antd/es in the quote respository after you've run npm run restore

/es/layout/style/css.js

/es/layout/style/index.css

/es/layout/style/index.d.ts

/es/layout/style/index.js

/es/layout/style/index.less

/es/layout/Layout.d.ts

/es/layout/Layout.js

/es/layout/index.d.ts

/es/layout/index.js

Step 3) Add NPM package to https://artifacts.pieinsurance.com/feeds/npm

Step 4) Get Quote repository working with https://artifacts.pieinsurance.com/feeds/npm

Step 5) Import @pieinsurance/components into Quote package.json

Step 6) Delete https://github.com/PieInsurance/Quote/tree/master/src/client/components/Loader

Step 7) Get App working again

Step 8) Move remaining components over to this repository and repeat the steps for all

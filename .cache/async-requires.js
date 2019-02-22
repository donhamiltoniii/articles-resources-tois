// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-404-js": () => import("/Users/donhamiltoniii/Documents/personal-projects/articles-resources-tois/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Users/donhamiltoniii/Documents/personal-projects/articles-resources-tois/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-page-2-js": () => import("/Users/donhamiltoniii/Documents/personal-projects/articles-resources-tois/src/pages/page-2.js" /* webpackChunkName: "component---src-pages-page-2-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/donhamiltoniii/Documents/personal-projects/articles-resources-tois/.cache/data.json")


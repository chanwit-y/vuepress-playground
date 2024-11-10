import comp from "/Users/chanwit_y/Desktop/Projects/banpu/vuepress-playground/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Test Hi\",\"lang\":\"en-US\",\"frontmatter\":{\"title\":\"Test Hi\",\"sidebar\":false,\"editLink\":false,\"search\":false,\"head\":null},\"headers\":[],\"git\":{\"updatedTime\":1731120219000,\"contributors\":[{\"name\":\"cy\",\"email\":\"chanwit.yimneam@hotmail.com\",\"commits\":1,\"url\":\"https://github.com/cy\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

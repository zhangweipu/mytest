
const getters = {
  //放入getter
  demo: state => state.demo,//需要在modules中引入
  $article: state => state.$article,
  $single: state => state.$single,
  $validate: state => state.$validate
}
export default getters

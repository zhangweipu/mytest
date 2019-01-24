//TODO:不会抽取公共方法
const remind = function (message) {
  const h = this.$createElement;
  this.$notify({
    title: '消息提醒',
    message: h('i', {style: 'color: teal'}, message)
  });
}
export {remind}

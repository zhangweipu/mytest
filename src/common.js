exports.install = function (Vue, options) {
  Vue.prototype.open = function (message) {//全局函数1
    const h = this.$createElement;
    this.$notify({
      title: '消息提醒',
      message: h('i', {style: 'color: teal'}, message)
    });
  };
  Vue.prototype.windowHeight = function () {//全局函数2
    return window.innerHeight + 'px';
  };
};

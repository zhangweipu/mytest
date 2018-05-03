//测试文件懒加载,名称不能变，还有一个是_import_production
module.exports = file => require('@/views/' + file + '.vue').default

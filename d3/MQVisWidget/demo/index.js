var widget;
//用于生成渐变数据，后期可删除
var parseDate = d3.timeParse("%Y-%m-%d %H:%M:%S");
var formatDate = d3.timeFormat("%Y-%m-%d %H:%M:%S");
var random = function (){return Math.random()/2+Number(0.4)}
window.onload = function () {
    
    var config1 = config
    config1.node = '#root1'

}
window.onresize = function () {
    var width = window.innerWidth - 20
    var height = window.innerHeight - 20
    widget.updateOptions({ width: width, height: height })
}

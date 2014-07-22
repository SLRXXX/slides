define(function(require) {

    var echarts = require('echarts');
    require('echarts/chart/force');

    var webkitDepData = require('./webkit-dep');
    webkitDepData.minRadius = 5;
    webkitDepData.maxRadius = 8;
    webkitDepData.gravity = 1;
    webkitDepData.scaling = 1.2;
    webkitDepData.steps = 20;
    webkitDepData.large = true;
    webkitDepData.coolDown = 0.995;
    webkitDepData.itemStyle = {
        normal : {
            linkStyle : {
                opacity : 0.9,
                strokeColor: 'white'
            }
        }
    }

    var ec;

    function init(dom) {
        if (ec) {
            return;
        }
        ec = echarts.init(dom);

        ec.setOption({
            title : {
                text: 'webkit内核依赖',
                subtext: '顶点: 492, 边: 806',
                x:'right',
                y:'bottom',
                textStyle: {
                    color: 'white'
                },
                subtextStyle: {
                    color: 'white'
                }
            },
            tooltip : {
                trigger: 'item',
                formatter : "{b}"
            },
            toolbox: {
                show : false
            },
            legend : {
                data : ['HTMLElement', 'WebGL', 'SVG', 'CSS', 'Other'],
                orient : 'vertical',
                x : 'left',
                textStyle: {
                    color: 'white'
                }
            },
            series: [webkitDepData]
        });
    }

    function dispose() {
        if (ec) {
            ec.clear();
            ec = null;
        }
    }

    return {
        init: init,
        dispose: dispose
    }
});
<?php

return [
    #主页
    [
        'icon' => 'fa-home',
        'name' => '主页',
        'href' => '#',
        'ul' => [
            [
                'href' => '/index_v1',
                'name' => '主页示例一',
                'index'=> true,
            ],
            [
                'href' => '/index_v2',
                'name' => '主页示例二'
            ],
            [
                'href' => '/index_v3',
                'name' => '主页示例三'
            ],
            [
                'href' => '/index_v4',
                'name' => '主页示例四',
                'target'=>true
            ],
        ]
    ],
    [
        'icon' => 'fa-list',
        'name' => 'excel管理',
        'href' => '#',
        'ul'   => [
            [
                'href' => '/excel/list',
                'name' => 'excel列表',
            ],
        ],
    ],
    #布局
    [
        'icon' => 'fa-columns',
        'name' => '布局',
        'href' => '/layouts',
    ],
    #统计图表
    [
        'icon' => 'fa-bar-chart-o',
        'name' => '统计图表',
        'href' => '#',
        'ul' => [
            [
                'href' => '/graph_echarts',
                'name' => '百度EChartse',
                'index'=> true,
            ],
            [
                'href' => '/graph_flot',
                'name' => 'Flot'
            ],
            [
                'href' => '/graph_morris',
                'name' => 'Morris.js'
            ],
            [
                'href' => '/graph_rickshaw',
                'name' => 'Rickshaw',
                'target'=>true
            ],
            [
                'href' => '/graph_peity',
                'name' => 'Peity',
                'target'=>true
            ],
            [
                'href' => '/graph_sparkline',
                'name' => 'Sparkline',
                'target'=>true
            ],
            [
                'href' => '/graph_metrics',
                'name' => '图表组合',
                'target'=>true
            ],
        ]
    ],

];
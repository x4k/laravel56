<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="renderer" content="webkit">

    <title>Laravel H+</title>

    <meta name="keywords" content="laravel后台">
    <meta name="description" content="laravel H+ 后台 ">

    <!--[if lt IE 9]>
    <meta http-equiv="refresh" content="0;ie.html" />
    <![endif]-->

    @section('css')
        <link rel="shortcut icon" href="{{ asset('/favicon.ico') }}">
        <link rel="stylesheet" href="{{ asset('css/index.css') }}">
    @show

    @yield('cssExt')
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
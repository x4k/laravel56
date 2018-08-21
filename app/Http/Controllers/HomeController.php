<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function home()
    {
        return view('home');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index',['menus' => config('menus')]);
    }

    /**
     * 实例页面2
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index_v2()
    {
        return view('index_v2');
    }

    /**
     * 实例页面1
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index_v1()
    {
        return view('index_v1');
    }
}

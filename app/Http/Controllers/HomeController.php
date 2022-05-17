<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }

    public function about()
    {
        return Inertia::render('About');
    }

    public function projects()
    {
        return Inertia::render('Projects');
    }

    public function contact()
    {
        return Inertia::render('Contact');
    }
}

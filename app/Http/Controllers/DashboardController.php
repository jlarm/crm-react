<?php

namespace App\Http\Controllers;

use App\Http\Resources\DealershipResource;
use App\Models\Dealership;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $dealerships = DealershipResource::collection(Dealership::all());

        return Inertia::render('dashboard', [
            'dealerships' => $dealerships,
        ]);
    }
}

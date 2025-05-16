<?php

namespace App\Observers;

class DealershipObserver
{
    public function created(): void
    {
        cache()->forget('dealerships');
    }

    public function updated(): void
    {
        cache()->forget('dealerships');
    }
}

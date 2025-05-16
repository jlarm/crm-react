<?php

namespace App\Console\Commands;

use App\Enum\State;
use App\Models\Dealership;
use Illuminate\Console\Command;

class AbbState extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:abb-state';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Convert state names to their two-letter codes';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $count = 0;

        Dealership::chunk(100, function ($dealerships) use (&$count) {
            foreach ($dealerships as $dealership) {
                // Get raw, uncasted value from DB
                $rawState = $dealership->getRawOriginal('state');

                // If it's already valid (like 'OH'), skip
                if (State::tryFrom($rawState)) {
                    continue;
                }

                // Try to match "Ohio" → enum
                $matchedEnum = collect(State::cases())
                    ->first(fn ($enum) => $enum->label() === $rawState);

                if ($matchedEnum) {
                    $dealership->state = $matchedEnum->value; // Save 'OH'
                    $dealership->save();
                    $count++;
                } else {
                    $this->warn("{$dealership->name} has an invalid state: {$rawState}");
                }
            }
        });

        $this->info("Updated {$count} dealerships");
    }
}

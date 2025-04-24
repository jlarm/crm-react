<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('dealership_user', function (Blueprint $table) {
            $table->foreignIdFor(\App\Models\Dealership::class)->constrained();
            $table->foreignIdFor(\App\Models\User::class)->constrained();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('dealership_user');
    }
};

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('dealer_emails', function (Blueprint $table) {
            $table->text('subject')->nullable()->change();
            $table->text('message')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('dealer_emails', function (Blueprint $table) {
            $table->string('subject')->nullable()->change();
            $table->text('message')->nullable()->change();
        });
    }
};

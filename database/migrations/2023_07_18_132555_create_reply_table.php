<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reply', function (Blueprint $table) {
            $table->id();
            $table->text('Content');
            $table->unsignedBigInteger('Replier');
            $table->foreign('Replier')->references('id')->on('users');
            $table->unsignedBigInteger('Comment_ID');
            $table->foreign('Comment_ID')->references('id')->on('comment');
            $table->dateTime('Created_At');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reply');
    }
};

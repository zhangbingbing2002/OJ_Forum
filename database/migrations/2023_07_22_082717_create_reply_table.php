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
            $table->integer('id')->primary();//id默认递增
            $table->text('content');
            $table->integer('replier');
            $table->integer('comment_id')->unique();
            $table->foreign('replier')->references('id')->on('users');
            $table->foreign('comment_id')->references('id')->on('comment');
            $table->timestamps();
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

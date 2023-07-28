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
        Schema::create('blog_contents', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();//id默认递增
            $table->integer('publish_user')->unique();
            $table->text('content');
            $table->char('theme',50);
            $table->char('device',50);
            $table->foreign('publish_user')->references('id')->on('users');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bolg_publish');
    }
};

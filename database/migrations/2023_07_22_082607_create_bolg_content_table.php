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
        Schema::create('blog_content', function (Blueprint $table) {
            $table->integer('id')->autoIncrement();//id默认递增
            $table->integer('publish_user')->unique();
            $table->text('blog_content');
            $table->char('bolg_theme',50);
            $table->char('publish_device',50);
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

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
        Schema::create('comment', function (Blueprint $table) {
            $table->integer('id')->primary();//id默认递增
            $table->text('content');
            $table->integer('commenter');
            $table->integer('Blog_Content_ID')->unique();
            $table->foreign('commenter')->references('id')->on('users');
            $table->foreign('Blog_Content_ID')->references('id')->on('blog_content');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('comment');
    }
};

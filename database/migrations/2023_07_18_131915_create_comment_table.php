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
            $table->id();
            $table->text('Content');
            $table->unsignedBigInteger('Commenter');
            $table->foreign('Commenter')->references('id')->on('users');
            $table->unsignedBigInteger('Blog_Content_ID');
            $table->foreign('Blog_Content_ID')->references('id')->on('blog_content');
            $table->dateTime('Created_At');
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

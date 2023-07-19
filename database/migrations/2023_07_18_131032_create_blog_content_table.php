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
            $table->id();
            $table->unsignedBigInteger('publish_user');
            $table->foreign('publish_user')->references('id')->on('users');
            $table->text('blog_content');
            $table->dateTime('publish_time');
            $table->date('public_date');
            $table->string('blog_theme');
            $table->string('publish_device');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('blog_content');
    }
};

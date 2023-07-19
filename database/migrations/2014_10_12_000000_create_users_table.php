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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->integer('status')->default(1)->nullable();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->char('sex',1)->nullable();
            $table->string('phone',11)->nullable();
            $table->string('blog_number',5)->default(0)->nullable();               //拥有的博客数量
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};

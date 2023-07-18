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
        Schema::create('forum_users', function (Blueprint $table) {
            // $table->id();
            $table->timestamps();
            $table->string('identity')->primary();          //主键
            $table->foreignId('name')->cascadeOnDelete();    //外键
            $table->char('sex',1);
            $table->string('phone',11);
            $table->string('email');
            $table->string('password',60);                 //哈希密码
            $table->string('blog_number',5);               //拥有的博客数量
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('logins');
    }
};

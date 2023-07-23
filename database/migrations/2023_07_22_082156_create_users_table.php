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
            $table->integer('id')->primary();//id默认递增
            $table->char('username',50)->unique();//唯一
            $table->char('password',50);
            $table->char('name',20);
            $table->char('sex');
            $table->char('email',30)->unique();//唯一
            $table->char('phone',20)->unique();
            $table->integer('blog_number')->default(0);//默认值为0
            $table->rememberToken();
            $table->timestamps();//createtime
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

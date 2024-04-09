<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Follow extends Model
{
    use HasFactory;

    protected $fillable = [
        'follower_id',
        'followed_id'
    ];

    public function folowed()
    {
        return $this->belongsTo(User::class);
    }

    public function folowing()
    {
        return $this->belongsTo(User::class);
    }
}

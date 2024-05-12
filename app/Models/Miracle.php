<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Miracle extends Model
{

    use HasFactory;
    protected $fillable = ['title', 'content', 'user_id', 'image_id'];

    public function user() {
        return $this->belongsTo(User::class);
    }
 
    public function image() {
        
        return $this->belongsTo(Image::class, 'image_id');

    }
    public function likes()
    {
        return $this->belongsToMany(User::class, 'likes', 'miracle_id', 'user_id')->withTimestamps();
    }
  
    
}
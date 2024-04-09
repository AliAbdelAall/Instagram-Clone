<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Commentt;
use App\Models\Follow;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class UserController extends Controller
{   

    public function getUserInfo(){

        $user= Auth::user();
        if(!$user){
            return response()->json([
                'Unauthorized',
            ], 401);
        }
        return response()->json([
            'status' => "success",
            'user' => $user
        ], 200);
    }


    public function getFeed()
    {   
        $id = Auth::id();

        if (!$id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $user = User::find($id, ['username', 'full_name', "profile_image"]);
        $followedUserIds = Follow::where('follower_id', $id)->pluck('followed_id');
        $followedUserIds[] = $id;

        // getting the post and the owner and all the comments of the post
        $posts = Post::whereIn('user_id', $followedUserIds)
                        ->select('id','user_id','caption','post_image')
                        ->with([
                            'user:id,username,profile_image', 
                            'comments:id,user_id,post_id,comment'
                            ])
                        ->get();

        foreach ($posts as $post) {
            $post->likes = Like::where('post_id', $post->id)->count();
        
        $post->liked = Like::where('post_id', $post->id)
                                ->where('user_id', $id)
                                ->exists();

        }
        return response()->json([
            'user' => $user,
            'posts' => $posts], 200);
    }


}

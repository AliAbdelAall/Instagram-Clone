<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Follow;
use App\Models\Like;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;


class UserController extends Controller
{   

    public function getFeed()
    {   
        $id = Auth::id();

        if (!$id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $user = User::select("username","full_name","bio","profile_image")
                        ->withCount('followers', 'following', 'posts')
                        ->find($id);
        
        $user->posts = Post::where('user_id', $id)->select('id','post_image')->get();

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

    public function addComment(Request $req)
    {

        $id = Auth::user()->id;

        if (!$id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $req->validate([
            'post_id' => 'required',
            'comment' => 'required'
        ]);

        $comment = Comment::create([
            'user_id' => $id,
            'post_id' => $req->post_id,
            'comment' => $req->comment
        ]);

        return response()->json([
            'status' => "success",
            'comment' => $comment
        ]);
    }

    public function deleteLike($id)
    {
        $user_id = Auth::user()->id;

        if (!$user_id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        // \Log::info('User ID: ' . $user_id . ', Like ID: ' . $id);

        $like = Like::where('post_id', $id)->where('user_id', $user_id)->first();

        if(!$like){
            return response()->json(['message' => "Not Found"], 404);
        }

        $like->delete();

        return response()->json([], 204);
    }

    public function addLike(Request $req)
    {
        $user_id = Auth::user()->id;

        if (!$user_id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $req->validate([
            'post_id' => 'required'
        ]);
        

        $like = Like::create([
            'user_id' => $user_id,
            'post_id' => $req->post_id
        ]);

        return response()->json([
            'status' => "success",
            'message' => "Like created successfuly"
        ], 201);
    }

    public function updateUser(Request $req){

        $id = Auth::user()->id;

        if (!$id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $user = User::find($id);

        if($req->hasFile('profile_image')){
            $req -> validate([
                'profile_image' => 'image|mimes:jpeg,png,jpg',
            ]);
            $file = $req->file('profile_image');
            $file_name = time() . '.' . $file->getClientOriginalExtension();
            $file->move(public_path('/pfp/'), $file_name);

            $prev_image = public_path('/pfp/') . $user->profile_image;
            if ($user->profile_image !== 'Default_pfp.jpg' && File::exists($prev_image)) {
                File::delete($prev_image);
            }

        $user->profile_image = $file_name;
        }

        $req -> validate([
            'bio' => 'string',
        ]);

        if($req->bio && $req->bio !== $user->bio){
            $user->bio = $req->bio;
        }

        $user->save();

        return response()->json([
            'status' => "success",
            'profile_image' => $user->profile_image,
            'bio' => $user->bio
        ], 200);
    }

    public function getSuggestions(){

        $id = Auth::id();

        if (!$id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $user = User::find($id);

        if(!$user->following()){
            $suggestions = Follow::take(6)->pluck('followed_id');
        }else{
            $followed = Follow::where('follower_id', $id)->pluck('followed_id');
            $followed[] = $id;
    
            $suggestions = Follow::whereNotIn('followed_id', $followed)->pluck('followed_id');
        }

       

        $users = User::whereIn('id', $suggestions)->select('id','username', 'profile_image')->get();

        return response()->json([
            'suggestions'=>$users,

        ], 200);
    }

    public function addPost(Request $req){

        $id = Auth::id();

        if (!$id){
            return response()->json(['message' => 'Unauthorized'],401);
        };

        $req->validate([
            'post_image' => 'required|image|mimes:jpeg,png,jpg',
            'caption' => 'nullable|string|max:255',
        ]);

        $image = $req->file('post_image');
        $imageName = time() . '.' . $image->getClientOriginalExtension();
        $image->move(public_path('posts'), $imageName);

        $post = Post::create([
            'user_id' => $id,
            'post_image' => $imageName,
            'caption' => $req->caption,
        ]);
        $post->save();

        return response()->json(['message' => 'Post created successfully', 'post' => $post], 201);
        
    }

    public function createFollow(Request $req){
        
        $id = Auth::id();

        $req->validate([
            'followed_id' => 'required|integer'
        ]);
        
        $follow = Follow::create([
            'followed_id' => $req->followed_id,
            'follower_id' => $id 
        ]);
        
        $follow->save();

        return response()->json([
            'message' => 'follow created successfuly'
        ], 201);
        
    }

}

<?php

namespace App\Http\Controllers;

use App\Models\Miracle;
use Illuminate\Http\Request;
use Inertia\Inertia;


class MiracleController extends Controller
{
    // List all miracles
    public function index()
    {
        $miracles = Miracle::with('user:id,name', 'image')->get(); 
        return response()->json($miracles);
    }
    
    
    // Store a new miracle
    public function store(Request $request)
    {
        $miracle = new Miracle();
        $miracle->title = $request->title;
        $miracle->content = $request->content;
        $miracle->image_id = $request->image_id;

        if ($request->user()) {
            $miracle->user_id = $request->user()->id;
        }

        $miracle->save();

        return response()->json([
            'message' => 'Great success! New miracle created',
            'miracle' => $miracle
        ], 201);
    }

    // Show a specific miracle
    public function show($id)
    {
        $miracle = Miracle::with(['user:id,name', 'image'])->find($id);
        if (!$miracle) {
            return response()->json(['message' => 'Miracle not found'], 404);
        }

        return Inertia::render('ExtendedMiracle', [
            'miracle' => $miracle,
            'id' => $id,
        ]);
    }

    // Like a miracle
    public function like(Request $request, $id)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Authentication required'], 401);
        }

        $miracle = Miracle::find($id);
        if (!$miracle) {
            return response()->json(['message' => 'Miracle not found'], 404);
        }

        $like = $miracle->likes()->where('user_id', $user->id)->first();
        if ($like) {
            return response()->json(['message' => 'You have already liked this miracle'], 409);
        }

        $miracle->likes()->attach($user->id);

        return response()->json(['message' => 'Miracle liked successfully'], 200);
    }

    // Unlike a miracle
    public function unlike(Request $request, $id)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Authentication required'], 401);
        }

        $miracle = Miracle::find($id);
        if (!$miracle) {
            return response()->json(['message' => 'Miracle not found'], 404);
        }

        if (!$miracle->likes()->where('user_id', $user->id)->exists()) {
            return response()->json(['message' => 'You have not liked this miracle yet'], 409);
        }

        $miracle->likes()->detach($user->id);
        return response()->json(['message' => 'Miracle unliked successfully'], 200);
    }

    // Check if a miracle is liked by the user
    public function checkLikeStatus(Request $request, $id)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Authentication required'], 401);
        }

        $miracle = Miracle::find($id);
        if (!$miracle) {
            return response()->json(['message' => 'Miracle not found'], 404);
        }

        $isLiked = $miracle->likes()->where('user_id', $user->id)->exists();

        return response()->json(['isLiked' => $isLiked]);
    }

    // Get like information (combined status and count)
    public function getLikeInfo(Request $request, $id)
    {
        $user = $request->user();
        if (!$user) {
            return response()->json(['message' => 'Authentication required'], 401);
        }

        $miracle = Miracle::withCount('likes')->find($id);
        if (!$miracle) {
            return response()->json(['message' => 'Miracle not found'], 404);
        }

        $isLiked = $miracle->likes()->where('user_id', $user->id)->exists();
        $likesCount = $miracle->likes_count; // Uses the 'withCount' Eloquent feature

        return response()->json(['isLiked' => $isLiked, 'likesCount' => $likesCount]);
    }
}

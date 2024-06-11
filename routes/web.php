<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use App\Http\Controllers\MiracleController;
use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Route for the homepage
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
    ]);
});

// Routes that require user authentication
Route::middleware('auth')->group(function () {
    // Route to edit profile
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    // Route to update profile
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    // Route to delete profile
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route to dashboard for logged-in users
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Route to CreateMiracle page for verified users
Route::get('/create', function () {
    return Inertia::render('CreateMiracle');
})->middleware(['auth', 'verified'])->name('create');

// Route to About Us page, accessible without authentication
Route::get('/about', function () {
    return Inertia::render("About");
});

// Routes for miracles
Route::get('/miracles', [MiracleController::class, 'index']); // List all miracles
Route::post('/miracles', [MiracleController::class, 'store']); // Create a new miracle
Route::get("api/miracle/{id}", [MiracleController::class, "show"]); // API endpoint to get a specific miracle
Route::get('/extended/{id}', [MiracleController::class, 'show'])->name('extended.show'); // Show extended view of a miracle

// Routes for liking/unliking miracles, protected with sanctum auth
Route::post('api/miracles/{id}/like', [MiracleController::class, 'like'])->middleware('auth:sanctum');
Route::delete('api/miracles/{id}/like', [MiracleController::class, 'unlike'])->middleware('auth:sanctum');

// Route to check the like status of a miracle
Route::get('/miracles/{id}/like-status', [MiracleController::class, 'checkLikeStatus'])->middleware('auth:sanctum');

// Route to get like information of a miracle
Route::get('api/miracles/{id}/like-info', [MiracleController::class, 'getLikeInfo'])->middleware('auth:sanctum');

// Route to list images
Route::get('api/images', [ImageController::class,'index']);

// Include authentication routes
require __DIR__.'/auth.php';

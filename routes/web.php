<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\http\Controllers\MiracleController;
use App\http\Controllers\ImageController;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/miracles', [MiracleController::class, 'index']);
Route::post('/miracles', [MiracleController::class, 'store']);
Route::get("/miracle/{id}", [MiracleController::class, "show"]);
Route::post('/miracles/{id}/like', [MiracleController::class, 'like'])->middleware('auth:sanctum');
Route::delete('/miracles/{id}/like', [MiracleController::class, 'unlike'])->middleware('auth:sanctum');
Route::get('/miracles/{id}/like-status', [MiracleController::class, 'checkLikeStatus'])->middleware('auth:sanctum');
Route::get('/miracles/{id}/like-info', [MiracleController::class, 'getLikeInfo'])->middleware('auth:sanctum');




Route::get('/images', [ImageController::class,'index']);


require __DIR__.'/auth.php';

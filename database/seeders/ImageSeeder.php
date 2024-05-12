<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder; 
use App\Models\Image;

class ImageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $images = [

            ["path" => "/images/ave.jpg"],
            ["path" => "/images/birds.jpg"],
            ["path" => "/images/bloom.jpg"],
            ["path" => "/images/blue.jpg"],
            ["path" => "/images/books.jpg"],
            ["path" => "/images/clouds.jpg"],
            ["path" => "/images/cross.jpg"],
            ["path" => "/images/flowers.jpg"],
            ["path" => "/images/flowers2.jpg"],
            ["path" => "/images/fog.jpg"],
            ["path" => "/images/green.jpg"],
            ["path" => "/images/he.jpg"],
            ["path" => "/images/lake.jpg"],
            ["path" => "/images/light.jpg"],
            ["path" => "/images/moon.jpg"],
            ["path" => "/images/night.jpg"],
            ["path" => "/images/ocean.jpg"],
            ["path" => "/images/openBook.jpg"],
            ["path" => "/images/purple.jpg"],
            ["path" => "/images/red.jpg"],
            ["path" => "/images/snow.jpg"],
            ["path" => "/images/space.jpg"],
            ["path" => "/images/stars.jpg"],
            ["path" => "/images/tea.jpg"],
            ["path" => "/images/violeta.jpg"],
            ["path" => "/images/waves.jpg"],
            ["path" => "/images/writing.jpg"],
            ["path" => "/images/yellow.jpg"],
            ["path" => "/images/default.jpg"],








        ];

        // Using insert() for more efficient bulk insertion
        Image::insert($images);
    }
}

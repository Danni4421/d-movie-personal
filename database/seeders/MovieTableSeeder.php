<?php

namespace Database\Seeders;

use App\Models\Movie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MovieTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $movie = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'drama',
                'video_url' => 'https://www.youtube.com/watch?v=6hB3S9bIaco&pp=ygUYdGhlIHNoYXdzaGFuayByZWRlbXB0aW9u',
                'thumbnail' => 'https://miro.medium.com/v2/resize:fit:1024/1*ZuyHle2wBnM1MY0xkIa9hA.jpeg',
                'rating' => 4.7,
                'is_featured' => true 
            ],
            [
                'name' => 'Up',
                'slug' => 'up',
                'category' => 'children',
                'video_url' => 'https://www.youtube.com/watch?v=2rn-vMbFglI&ab_channel=MichaelGiacchino-Topic',
                'thumbnail' => 'https://p4.wallpaperbetter.com/wallpaper/58/630/528/pixars-up-movie-wallpaper-preview.jpg',
                'rating' => 4.9,
                'is_featured' => false
            ],
            [
                'name' => 'Fast Furious 7',
                'slug' => 'fast-furious-7',
                'category' => 'action',
                'video_url' => 'https://www.youtube.com/watch?v=frA_fOuhDrg&ab_channel=YouTubeMovies',
                'thumbnail' => 'https://image.jpnn.com/resize/1200x800-80/picture/normal/20150205_180918/180918_74797_fast.jpg',
                'rating' => 4.8,
                'is_featured' => false
            ]
            ];

        Movie::insert($movie);
    }
}

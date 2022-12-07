const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    module: {
        rules: [
            {
                test: /\.(pdf|mp4|mp3|txt|bmp|Xvid|avi|flv|MPA|mp3|ogg)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
});

mix.js("resources/js/app.js", "public/js")
    .react()
    .postCss("resources/css/app.css", "public/css", [
        //
    ]);

mix.js(
    "resources/js/pages/MainRouter/MainRouter.js",
    "public/js/pages/MainRouter"
).react().version();

if (mix.inProduction()) {
    mix.version();
}

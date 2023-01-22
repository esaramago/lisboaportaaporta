self.addEventListener("install", function( event ){
    event.waitUntil(
        caches.open( "static-cache" )
              .then(function( cache ){
            return cache.addAll([
                "/css/main.css",
                "/js/main.js",
                "/img/favicon.ico",
                "/img/logo.svg",
                "/img/recycle.svg",
            ]);
        })
    );
});
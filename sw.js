var nombreCache = 'uno';
self.addEventListener(
    'install',
    function(event){
        event.waitUntil(
            caches.open(nombreCache)
            .then(
                function(cache){
                    cache.addAll(
                        [
                            'algo.js',
                            'w3.css',
                            'index.html',
                            'manifest.json',
                            './iconos/homescreen.png',
                            './iconos/homescreen144.png',
                            './iconos/homescreen192.png'
                        ]
                    );
                    console.log('Cache añadido');
                }
            )
        );
    }
);

self.addEventListener(
    'fetch', 
    function(event) {
        event.respondWith( 
            caches.match(event.request)
            .then(
                function(respuesta){
                    if(respuesta){ 
                        console.log('La respuesta proviene del cache.');
                        return respuesta; 
                    }
                    else{
                        console.log('La respuesta no proviene del cache.');
                        return fetch(event.request);
                    }
                }
            ) 
        );
    }
); 
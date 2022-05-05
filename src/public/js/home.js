new Splide('.splide', {
    perPage: 3,
    type: 'loop',
    autoplay: 'true',
    breakpoints: {
        640: {
            perPage: 2,
        },
        480: {
            perPage: 1,

        }
    },
}).mount();
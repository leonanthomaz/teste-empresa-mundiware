document.addEventListener( 'DOMContentLoaded', () => {
    const splide = new Splide ('.splide', {
        type: 'loop',
        // perPage: 1,
        // pagination: false,
        arrows: false,
        autoplay: true,
        // wheel: true.
        // right: true,
        // padding: '1rem'
        
    }).mount()


    const splide2 = new Splide ('#splide', {
        type: 'loop',
        // perPage: 1,
        // pagination: false,
        arrows: false,
        autoplay: true,
        // wheel: true.
        // right: true,
        // padding: 0
        margin: 0
    }).mount()

    const splide3 = new Splide ('#splide2', {
        type: 'loop',
        // perPage: 1,
        // pagination: false,
        arrows: false,
        autoplay: true,
        // wheel: true.
        // right: true,
    }).mount()
} );

var elms = document.getElementsByClassName( 'splide' );
for ( var i = 0; i < elms.length; i++ ) {
    new Splide( elms[ i ] ).mount(); 
}

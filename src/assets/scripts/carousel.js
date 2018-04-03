/*
    HERO.JS - Last updated: 03.04.18
*/
//-----------------------------------------------------------------
// LAUNCH CAROUSEL
//-----------------------------------------------------------------

function launchCarousel() {
    $('[data-carousel]').each(function(){

        //==================================================
        // VARS
        //==================================================

        var $this = $(this);
        var $carousel   = $('.lv-hero', $this);
        var $captions   = $('.lv-hero-item-caption', $this);
        var $slideCount = $('.lv-hero-item', $carousel).length;
        var $prevArrow  = $('.lv-hero-carousel-prev-btn', $this);
        var $nextArrow  = $('.lv-hero-carousel-next-btn', $this);

        //==================================================
        // CHECK FOR SLIDES
        //==================================================

        if ($slideCount > 1) {

            //==================================================
            // FLICKITY - OPTIONS MOVED TO INLINE
            //==================================================

            // var $flickity = $carousel.flickity({
                // adaptiveHeight: true,
                // autoPlay: false,
                // cellAlign: 'left',
                // contain: true,
                // draggable: '>1',
                // dragThreshold: 3,
                // freeScroll: false,
                // freeScrollFriction: 0.075, // lower friction, slides easier
                // friction: 0.28, // Higher friction makes the slider feel stickier and less bouncy
                // imagesLoaded: true,
                // pageDots: false,
                // prevNextButtons: false,
                // pauseAutoPlayOnHover: false,
                // selectedAttraction: 0.025, // Higher attraction makes the slider move faster
                //watchCSS: true, // run/destroy
                // wrapAround: true, // infinite
            // });

            //==================================================
            // GET INSTANCE VIA ELEMENT
            // https://flickity.metafizzy.co/api.html#jquery-fn-data-flickity
            //==================================================

            // var flkty = $carousel.data('flickity');

            //==================================================
            // ARROWS
            //==================================================

            $prevArrow.on('click', function() {
                $carousel.flickity('previous');
            });

            $nextArrow.on('click', function() {
                $carousel.flickity('next');
            });

            //==================================================
            // RETRIGGER CSS TRANSITIONS
            //==================================================

            $carousel.on('select.flickity', function() {
                $captions.hide();

                setTimeout(function(){
                    $captions.show();
                }, 500);
            })
        }
    //--
    });
}

launchCarousel();

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================
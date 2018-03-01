/*
    UTILITIES.JS - Last updated: 01.03.18
*/
//-----------------------------------------------------------------
// GOOGLE MAP - PREVENT SCROLL TRAP
//-----------------------------------------------------------------

function createGoogleMap(){
    var $googleMap = $('.lv-google-map');

    if ($googleMap.length) {

        $googleMap.each(function(){
            $(this).click(function() {
                $(this).find('iframe').css('pointer-events', 'auto');
            })
        })

        $googleMap.each(function(){
            $(this).mouseleave(function() {
                $(this).find('iframe').css('pointer-events', 'none');
            })
        })
    }
}

//-----------------------------------------------------------------
// RENDER IFRAMES
// So iframes aren't factored into the initial onload
//-----------------------------------------------------------------

function renderIframes() {
    if ($('iframe').length) {
        $('iframe').each(function(){
            var $this = $(this);
            var dataSrc = $(this).attr('data-src');
            $this.attr('src', dataSrc);
            console.log(dataSrc);
        })
    }
}

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================
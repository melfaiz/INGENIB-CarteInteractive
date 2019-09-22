(function() {
    function fullSize() {
        var hw = $('.full');
        if (hw.length) {
            var winHeight = $(window).height();
            var docHeight = document.body.clientHeight;
            var footerHeight = $('footer').innerHeight();
            var navbarHeight = $('nav').innerHeight();
            
            if (docHeight < winHeight)
                hw.css('min-height', parseInt(winHeight) - footerHeight - navbarHeight + 4 + 'px');
        }
    }
    fullSize();
    window.addEventListener('resize', fullSize);
    
})();
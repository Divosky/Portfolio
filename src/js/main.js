lightbox.option({
    'resizeDuration': 500,
    'fadeDuration': 500,
    'wrapAround': true
})

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            } 
        }
    });
});

window.sr = ScrollReveal({
    duration: 1250
});
sr.reveal('.project', 175);

sr.reveal('h1', {
    origin: 'bottom',
    distance: '10vh',
});

sr.reveal('header', {
    origin: 'left'
});

sr.reveal('h3', {
    origin: 'top',
    distance: '10vh',
    scale: 0.1
});

sr.reveal('#aboutme', {
    origin: 'bottom',
    rotate: {
      x: -45,
      y: 45
    },
});

sr.reveal('.contact-left', {
    origin: 'left',
    distance: '10vh',
    scale: 0.5
});

sr.reveal('.contact-right', {
    origin: 'right',
    distance: '10vh',
});

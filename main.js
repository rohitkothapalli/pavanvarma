$(document).ready(function() {
    $("#lines").click(function() {
        $(this).hide();
        $('#cross').fadeIn(700);
        $('#nav-hid').fadeIn(700);
    });

    // $("#cross").click(function () {
    //     $(this).hide();
    //     $('#lines').css('display', 'block');
    //     $('#nav-hid').hide();
    // });
});

$(document).on('click', function(event) {
    // ... clicked on the 'body', but not inside of #nav-hid
    $('#cross').hide();
    $('#lines').fadeIn(700);
    $('#nav-hid').fadeOut(500);
});
$('#nav-hid').on('click', function(event) {
    event.stopPropagation();
});
$('#lines').on('click', function(event) {
    event.stopPropagation();
});
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
    .add({
        targets: '.ml2 .letter',
        scale: [4, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70 * i
    }).add({
        targets: '.ml2',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });
$(function() {
    $('.intro').addClass('go');

    $('.reload').click(function() {
        $('.intro').removeClass('go').delay(200).queue(function(next) {
            $('.intro').addClass('go');
            next();
        });

    });
})
$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 30,
    responsive:{
        0:{
            items: 2,
            nav: false,
            loop: false
        },
        1024:{
            items: 4,
            nav: false,
            loop: false
        }
    }
})

$('.js-main-photo-change').click(function() {
    $(this).parents('.js-main-container').find('.js-main-photo-change').removeClass('active');
    $(this).parents('.js-main-container').find('.js-main-photo').find('img').attr('src', $(this).find('img').attr('src'))
    $(this).addClass('active');
})

$('.js-photo-btn').click(function() {
    let direction = $(this).data('direction');
    let arrayLength = $('.js-main-photo-change').length;
    let activeItem = $('.js-main-photo-change.active').data('item');
    $('.js-photo-btn').removeClass('photo__btn--disabled')
    if (direction === 'left') {
        $(`.js-main-photo-change[data-item='${parseInt(activeItem) - 1}']`).trigger('click');
        $('.owl-carousel').trigger('prev.owl.carousel');
        if (parseInt(activeItem) - 1 === 1) {
            $(`.js-photo-btn[data-direction='${direction}']`).addClass('photo__btn--disabled')
        }
    } else {
        $(`.js-main-photo-change[data-item='${parseInt(activeItem) + 1}']`).trigger('click');
        $('.owl-carousel').trigger('next.owl.carousel');
        if (parseInt(activeItem) + 1 === arrayLength) {
            $(`.js-photo-btn[data-direction='${direction}']`).addClass('photo__btn--disabled')
        }
    }
})
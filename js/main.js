$(function () {
    $('#slider-start').on('click', function () {
        $('.slider-indicator__indicator').addClass('active-start')
        $('.slider-indicator__indicator').removeClass('slider-1 slider-2 slider-3')
    });
    $('#slider-1').on('click', function () {
        $('.slider-indicator__indicator').addClass('slider-1')
        $('.slider-indicator__indicator').removeClass('active-start slider-2 slider-3')
    });
    $('#slider-2').on('click', function () {
        $('.slider-indicator__indicator').addClass('slider-2')
        $('.slider-indicator__indicator').removeClass('active-start slider-1 slider-3')
    });
    $('#slider-3, #header-content__main-scroll').on('click', function () {
        $('.slider-indicator__indicator').addClass('slider-3')
        $('.slider-indicator__indicator').removeClass('active-start slider-1 slider-2')
    });
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}
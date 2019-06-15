$('#search-input').on('focus', function (event) {
    if ($("#search-results").children().length <= 0) {
        $("#search-results").hide();
        $('#search-input').on('keyup', function (event) {
            if ($("#search-results").children().length <= 0) {
                $("#search-results").hide();
            } else {
                $("#search-results").show();
            }
        });
    } else {
        $("#search-results").show();
    }
});

function goBack() {
    window.history.back()
}

// Get the navbar
let navbar = document.querySelector('.navbar');

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// When the user scrolls the page, execute myFunction
window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("fixed-top");
    } else {
        navbar.classList.remove("fixed-top");
    }
};

$('.button-search').click(function(){
    $('.form-control').show(1000);
    $('.button-search').hide(1000);
    $('.button-close').show(500);
});

$('.button-close').click(function(){
    $('.form-control').val('');
    $('.form-control').hide(1000);
    $('.button-close').hide(1000);
    $('.button-search').show(500);
});
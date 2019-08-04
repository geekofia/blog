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

// $("#search-input").css("width", $("#search-form").width() - 39 +"px");
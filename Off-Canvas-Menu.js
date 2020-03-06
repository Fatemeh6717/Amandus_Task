
    $(".dropdown-toggle").click(function () {
        var event = $(this).parents(".button-dropdown").children(".dropdown-menu").is(":hidden");
        $(".button-dropdown .dropdown-menu").hide();
        $(".button-dropdown .dropdown-toggle").removeClass("active");
        if (event) {
            $(this).parents(".button-dropdown").children(".dropdown-menu").toggle().parents(".button-dropdown").children(".dropdown-toggle").addClass("active")
        }
    });
    $(document).bind("click", function (event) {
        var menuOpen = $(event.target);
        if (!menuOpen.parents().hasClass("button-dropdown")) {
            $(".button-dropdown .dropdown-menu").hide();
        }
    });
    $(document).bind("click", function (t) {
        var menuClose = $(event.target);
        if (!menuClose.parents().hasClass("button-dropdown"))
            $(".button-dropdown .dropdown-toggle").removeClass("active");
    })
});

$(".project").on("click", function() {
    var el = this;
    window.open(el.getAttribute("data-url"));
});
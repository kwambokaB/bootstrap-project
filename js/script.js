$(document).ready(function () {
    $("#mycarousel").carousel({
        interval: 2000
    });
    $("#carousel-pause").click(function () {
        $("#mycarousel").carousel('pause');
    });
    $("#carousel-play").click(function () {
        $("#mycarousel").carousel('cycle');
    });
});

$(document).ready(function () {
    $("#reserve").click(function () {
        $("#reserveModal").modal();});
});
$(document).ready(function () {
    $("#login").click(function () {
        $("#loginModal").modal("toggle");
    });
});
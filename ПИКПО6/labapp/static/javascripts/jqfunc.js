// Выделение пунктов меню при наведении
$(".top-menu li:not(.active)").mouseenter(function () {
    $(this).addClass("active");
}).mouseleave(function () {
    $(this).removeClass("active");
});

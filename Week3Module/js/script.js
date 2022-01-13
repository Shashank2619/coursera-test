$(function()
{
    $("#button_menuicon").blur(function (event){
        var screenWidth = window.innerWidth;
        if (screenWidth < 576){
            $("#collapseExample").collapse('hide');
        }
    });
});
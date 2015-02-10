var selected_svg =

$(document).ready(function () {$(".patternchoices img").click(function () {
        $(".patternchoices img").css("border", ".75px solid black" );
        $(this).css("border", "4px solid #512563" );
        selected_svg = this.id;
        var src = $(this).attr('src');
        $("#quiltblock img").attr("src", src );
        $(".colorA").attr('fill', '#fff');
        $(".colorB").attr('fill', '#e5e5e5');
        $(".colorC").attr('fill', '#c9c9c9');
        $(".colorD").attr('fill', '#b3b3b3');
    })
});
var setImageToSVG = function (img,svg) {
  var xml = (new XMLSerializer()).serializeToString(svg);
  img.src = "data:image/svg+xml;charset=utf-8,"+xml;
}

$(".colorAbutton").click(function () {
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
    /* colorA is in the SVGs  - fill is an SVG attribute*/
    $(".colorA").attr('fill', randomRGBA);
    /* fills the button */
    $(".colorAbutton").css('background-color', randomRGBA);
    var base = document.getElementById(selected_svg+"base");
    var target_img = document.getElementById("quiltblock-img");
    setImageToSVG(target_img,base);
});

$(".colorBbutton").click(function () {
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
    $(".colorB").attr('fill', randomRGBA);
    $(".colorBbutton").css('background-color', randomRGBA);
    var base = document.getElementById(selected_svg+"base");
    var target_img = document.getElementById("quiltblock-img");
    setImageToSVG(target_img,base);
});

$(".colorCbutton").click(function () {
      var red = Math.floor(Math.random() * 255);
      var green = Math.floor(Math.random() * 255);
      var blue = Math.floor(Math.random() * 255);
      var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
    $(".colorC").attr('fill', randomRGBA);
    $(".colorCbutton").css('background-color', randomRGBA);
    var base = document.getElementById(selected_svg+"base");
    var target_img = document.getElementById("quiltblock-img");
    setImageToSVG(target_img,base);
});



$(".colorDbutton").click(function () {
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var randomRGBA = 'rgba('+red+','+green+','+blue+',1)';
    $(".colorD").attr('fill', randomRGBA);
    $(".colorDbutton").css('background-color', randomRGBA);
    var base = document.getElementById(selected_svg+"base");
    var target_img = document.getElementById("quiltblock-img");
    setImageToSVG(target_img,base);
});



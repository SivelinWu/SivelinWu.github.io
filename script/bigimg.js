var Imgindex = 0;
var img = new Image();
var width_per, height_per;
function img_block(index) {
  var img_width,
  img_height;
  $('.content span').show();
  var width = $(window).width(); //get browser's width
  var height = $(window).height(); //get browser's height
  $('.close_div').css({
    'width': (width - 50)
  });
  $('.bottom').stop();
  $('.content').stop();
  $('.content .img').css('display', 'none'); //don't show the current image(previous showed image)
  $('.content').animate({
    'width': (width - 50) + 'px',
    'height': height - 100 + 'px'
  }, 300, function () {
    img.src = $('.thumb_photo:eq(' + index + ')').attr('data-original'); //set image's src
    img_width = img.width;
    img_height = img.height;
    width_per = (img_width / img_height).toFixed(2); //rate of width/heigth
    height_per = (img_height / img_width).toFixed(2); //rate of height/width
    //
    if (img_height >= height - 100 && img_width < width - 50 || img_height > height - 100 && img_width > width - 50 && (width - 50) > (height - 100)) {
      img_height = height - 100;
      img_width = parseInt((height - 100) * width_per);
    }    //

    if (img_width >= width - 50 && img_height < height - 100 || img_height > height - 100 && img_width > width - 50 && (width - 50) < (height - 100)) {
      img_width = width - 50;
      img_height = parseInt((width - 50) * height_per);
    }    //

    if (img_height <= height - 100 && img_width <= width - 50) {
      img_height = img_height;
      img_height = img_height;
    }
    $('.content .img').attr('height', img_height);
    $('.content .img').attr('width', img_width);
    $('.content .img').css('left', (width - 50 - parseInt(img_width)) / 2); //horizon aligh center
    $('.content .img').css('top', (height - 100 - parseInt(img_height)) / 2); //vertical aligh center
    $('.content .img').css('display', 'block');
    $('.bottom').css('width', (width - 50) + 'px');
    $('.bottom').animate({
      'height': '30px'
    });
    $('.content .img').attr('src', img.src);
    $('.content span').hide();
  });
}
$(document).ready(function () {
  //show big image
  $('.thumb_photo').click(function () {
    $('.container').fadeIn(300);
    Imgindex = parseInt(this.title) - 1; // get the image index
    img_block(Imgindex);
  });
  //close big image
  $('.close_pop').click(function () {
    $('.container').fadeOut(300);
  });
});
/*
function seeBig(obj){
    $('.container').fadeIn(300);
    Imgindex = parseInt(obj.title)-1;
    img_block(Imgindex);
}

var count = 14;
	//automatically show more images
	function ShowMoreImg(){
		var html = "";
		var img = '';
		for(var i = count; i < count+13; i++){
			var n = Math.round(Math.random(1)*13);
			var src = 'images/'+n+'.jpg';
			html = html + "<div class='grid'>"+
				"<div class='imgholder'>"+
				"<img class='lazy thumb_photo' title='"+i+"' src='images/pixel.gif' data-original='"+src+"' width='225' onclick='seeBig(this)'/>"+
				"</div>"+
				"</div>";
			img = img + "<img class='img' src='"+src+"'>";
		}
		count = count + 13;
		$('#container').append(html);
		$('.content').append(img);
		$('#container').BlocksIt({
			numOfCol:4,  //imges' count per line
			offsetX: 5,  //image margin
			offsetY: 5   //image margin
		});
		$("img.lazy").lazyload();
	}

$(window).scroll(function(){
	var scrollTop = $(this).scrollTop();
	var scrollHeight = $(document).height();
	var windowHeight = $(this).height();
	if(scrollTop + windowHeight >= (scrollHeight*0.7)){
		ShowMoreImg();
	}
});
*/
function AddImg(){
	var imgContainer = document.getElementById('container');
	imgContainer.innerHTML += "<div class='grid'><div class='imgholder'><img class='lazy thumb_photo' title='1' src='img/pixel.gif' data-original='img/background.jpg' width='225'/></div></div>";
	imgContainer.innerHTML += "<div class='grid'><div class='imgholder'><img class='lazy thumb_photo' title='1' src='img/pixel.gif' data-original='img/background.jpg' width='225'/></div></div>";
	imgContainer.innerHTML += "<div class='grid'><div class='imgholder'><img class='lazy thumb_photo' title='1' src='img/pixel.gif' data-original='img/background.jpg' width='225'/></div></div>";
	imgContainer.innerHTML += "<div class='grid'><div class='imgholder'><img class='lazy thumb_photo' title='1' src='img/pixel.gif' data-original='img/background.jpg' width='225'/></div></div>";
}
AddImg();

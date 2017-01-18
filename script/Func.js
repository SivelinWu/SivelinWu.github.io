var bSideMenuShow,bSideMenuLock = false;
var seed,seed2;

$(document).ready(function() {
    var TheDate = new Date("March 28, 2015");
    var MeetDate = new Date("May 6,2012");
    var DateNow = new Date();
    var deltaTogether = Math.floor((DateNow.getTime() - TheDate.getTime()) / (24 * 3600 * 1000));
    var deltaMeet = Math.floor((DateNow.getTime() - MeetDate.getTime()) / (24 * 3600 * 1000));
	ChangeBackgroundImg();
    
	window.onload=function(){
		$("#Ourdate").typed({
            strings: ["It has been " + deltaTogether + " days sine we fell in love^500<br>" + deltaMeet + " days since we met^500<br>&nbsp;Wu Bin ♡ Chen Jian"],
            typeSpeed: 60,
            startDelay: 500,
            loop: false,
			showCursor: true,
			cursorChar: "|",
			callback: function() {
				$(".typed-cursor").html("&nbsp;");
				setTimeout("$('#CenterContainer').fadeOut('5000');$('#GrowingTime').fadeIn('5000');",5000);			
				},
        });
		seed2 = setInterval("UpdateDeltaT(new Date('March 28, 2015'))",1000);
	}
});

$('#SideMenu').mouseenter(function(){
	bSideMenuToShow = true;
	if(bSideMenuToShow && !bSideMenuLock){
		bSideMenuLock = true;
		$('#SideMenu').css("opacity","0.9");
		$('#SideMenu').animate({'margin-left':'0'},'normal',
			function(){
				bSideMenuLock = false;
				if(!bSideMenuToShow)
					$('#SideMenu').mouseleave();
			});
		//$('#SideMenu').animate({width:'250px'},'slow');
	}
});

$('#SideMenu').mouseleave(function(){
	bSideMenuToShow = false;
	if(!bSideMenuToShow && !bSideMenuLock){
		$('#SideMenu').animate({'margin-left':'-210px'},'normal',
			function(){
				$('#SideMenu').css('opacity','0');
				bSideMenuLock = false;
				if(bSideMenuToShow)			
					$('#SideMenu').mouseenter();
		});
		//$('#SideMenu').animate({width:'15px'},'slow',function(){$('#SideMenu').css('opacity','0')});
	}
});

function SwithClockScreen(){
	if($("#TimeScreen").css('display') == 'none'){
		$("#TimeScreen").fadeIn('fast',function(){seed =setInterval(UpdateClock,1000);});
		//$("#TimeScreenMask").fadeIn();
		$("#MainContainer").addClass("blur");
		UpdateClock();
	}
	else{
		clearInterval(seed);
		$("#TimeScreen").fadeOut();//'normal',function(){$("#MainContainer").removeClass("blur");});
		//$("#TimeScreenMask").fadeIn();
		$("#MainContainer").removeClass("blur");
	}
}

function UpdateDeltaT(d1){
	var DateNow = new Date();
	var deltaT = DateNow.getTime() - d1.getTime();
	var temp = deltaT / (24 * 3600 * 1000);
	var deltaDay = Math.floor(temp);
	temp = (temp - deltaDay)*24;
	var deltaHour = Math.floor(temp);
	temp = (temp - deltaHour)*60;
	var deltaMin = Math.floor(temp);
	temp = (temp - deltaMin)*60;
	var deltaSec = Math.floor(temp);
	$("#GrowingDay").html(FormatDigital(deltaDay));
	$("#GrowingD").html("days");
	$("#GrowingHour").html(FormatDigital(deltaHour));
	$("#GrowingH").html("hours");
	$("#GrowingMin").html(FormatDigital(deltaMin));
	$("#GrowingM").html("minutes");
	$("#GrowingSec").html(FormatDigital(deltaSec));
	$("#GrowingS").html("seconds");
	//$("#GrowingT").html(deltaDay+"days" + deltaHour+"hours"+deltaMin +"minutes"+deltaSec+"seconds");
}

function UpdateClock(){
	var time = new Date();
	var Hour = time.getHours();
	var Min = time.getMinutes();
	var Sec = time.getSeconds();
	
	var strTime = FormatDigital(Hour) + ":" + FormatDigital(Min) + ":" + FormatDigital(Sec);
	$("#Time").html(strTime);/*
	$("#tbHouur").html(FormatDigital(Hour));
	$("#tbMin").html(FormatDigital(Min));
	$("#tbSec").html(FormatDigital(Sec));*/
}

function FormatDigital(digital){
	var newDigital = "";
	if(digital < 10)
		newDigital = "0" + digital.toString();
	else 
		newDigital = digital.toString();
	return newDigital;
}

var bOwnBackground = false;
function ChangeBackgroundImg(){
	if(!bOwnBackground){
		bOwnBackground = true;
		$("body").css('background','transparent url("img/background.jpg") repeat fixed 50% 50% / cover');
	}
	else{		
		bOwnBackground = false;
		$("body").css('background','transparent url("http://www.dujin.org/sys/bing/1366.php") repeat fixed 50% 50% / cover');
	}
		
	
}
/*
var bNoteBookShowed = false;
function ShowNoteBook(){
	if(!bNoteBookShowed){
		bNoteBookShowed = true;
		$("#notebook").fadeIn();		
	}
	else{
		bNoteBookShowed = false;
		$("#notebook").fadeOut();		
	}
}
*/
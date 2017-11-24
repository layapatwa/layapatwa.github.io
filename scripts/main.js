
var myImg = document.querySelector('img');
myImg.onclick = function(){
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImg.setAttribute('src','images/IMG_20170219_243434967_HDR.jpg');
	}
	else{
		myImg.setAttribute('src', 'images/firefox-icon.png');
	}
}
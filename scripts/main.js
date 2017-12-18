
/*myImg.onclick = function(){
	var mySrc = myImg.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png'){
		myImg.setAttribute('src','images/IMG_20170219_243434967_HDR.jpg');
	}
	else{
		myImg.setAttribute('src', 'images/firefox-icon.png');
	}
}*/
var myBtn = document.querySelector('button');
function myFunction(){
	if(document.getElementById("img1").style.display==="none"){
	document.getElementById("img1").style.display="";
	document.getElementById("details").innerHTML = "Work Experience <br><ul> <li>Developed a software named ‘Invoice Generator’. It is used to generate tax invoice at around 85 Road Sale points of CCL and is a crucial part of the revenue generating process of the company. More than 3,000 trucks loaded with coal pass through these sale points daily.</li>  <li>Developed and deployed ‘File Tracking and Monitoring System’, a LAN based software module. The module was developed as part of existing ERP(named ‘CoalNet’) of CCL using Oracle database, JSP and Javascript and is used by about 2000 employees of Central Coalfields Limited.</li>  <li>Executed the process to renew the contract worth around 660,000 USD for maintenance support and enhancement of CoalNet through open reverse e-Auction.</li></ul>";

	}
	else{
	document.getElementById("img1").style.display="none";
	document.getElementById("details").innerHTML = "";

	
	}
	
}
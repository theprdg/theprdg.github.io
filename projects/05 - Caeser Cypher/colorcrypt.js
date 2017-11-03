var pw = "caesar", keyCount = 0, login = "",
	encryptMsg = '', decryptMsg = '', final = '';

$("#container").hide();
$("#container2").hide();

$(window).resize(function(){
	$("body").height($(this).height());
	
}).resize();

$(window).keypress(function(event){
	login += String.fromCharCode(event.which);
	var angle = Math.floor(Math.random()*360)+1;
	if (login === pw) {
		$("body").css("background","#eff0f1");
		$("body").css("background","-webkit-linear-gradient(0deg, #e0e0e0, #e0e0e0");
		$("body").css("background","linear-gradient(0deg, #e0e0e0, #e0e0e0");
		$(this).unbind("keypress");
		$("#container").fadeIn(500);
		$("#container2").fadeIn(500);
	}
	else if (keyCount >= pw.length){
		keyCount = 0;
		login = '';
	}
	else {
		$("body").css("background",randomColor()); //fallback for older browsers
		$("body").css("background","-webkit-linear-gradient("+ angle +"deg, " + randomColor() + ", " + randomColor() + ")");
		$("body").css("background","linear-gradient("+ angle +"deg, " + randomColor() + ", " + randomColor() + ")");	
	}
	keyCount++;
});

function randomColor() {
	return "#"+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6)
}

$("#encryptbtn").click(encrypt);
$("#decryptbtn").click(decrypt);

function encrypt() {
	final = '';
	encryptMsg = $("textarea#encrypt").val();
	for(var i = 0; i < encryptMsg.length; i++) {
		if(encryptMsg[i].charCodeAt() == 10 || encryptMsg[i].charCodeAt() == 32) {
			final += String.fromCharCode(32);
		}
		else if (encryptMsg[i].charCodeAt()+5 > 126) {
			final += String.fromCharCode(encryptMsg[i].charCodeAt()+5 - 95);
		}
		else {
			final += String.fromCharCode(encryptMsg[i].charCodeAt()+5);
		}
	}
	$("#output").text(final);
}

function decrypt() {
	final = '';
	decryptMsg = $("textarea#decrypt").val();
	for(var i = 0; i < decryptMsg.length; i++) {
		if(decryptMsg[i].charCodeAt() == 10 || decryptMsg[i].charCodeAt() == 32) {
			final += String.fromCharCode(32);
		}
		else if (decryptMsg[i].charCodeAt()-5 < 32) {
			final += String.fromCharCode(decryptMsg[i].charCodeAt()-5 + 95);
		}
		else {
			final += String.fromCharCode(decryptMsg[i].charCodeAt()-5);
		}
		console.log(final[i].charCodeAt());
	}
	$("#output").text(final);
}
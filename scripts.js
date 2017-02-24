window.addEventListener("load", function(){

	document.getElementsByClassName("fa-bars")[0].addEventListener("click", dropDown);

});

function dropDown(){

	var headerDiv = document.getElementsByClassName("header-bottom")[0]

	if (headerDiv.style.height != "80px"){
		headerDiv.style.height = "80px"
	
	} else {
		headerDiv.style.height = "0px"	
	}
}


// If using position:offset
// window.onscroll = dropDownMin

// function dropDownMin(){

// 	var headerDiv = document.getElementsByClassName("header-bottom")[0]

// 	if (headerDiv.style.height == "80px"){

// 		headerDiv.style.height = "0px"
// 	}	

// }

document.addEventListener('DOMContentLoaded', init, false);
function init(){
	element = document.getElementById('button');
	var bool = true;
	element.onclick = function () { 
	var x = document.getElementById("invisible");
		if (bool) {
    	    x.style.display="block";
    	    bool = false;
   	 } else {
    	    x.style.display="none";
    	    bool = true;
   	 	}
   	 }
   	var thumb =  document.getElementsByClassName("thumbs","img");
   	var bool2 = true;
	for (i=0; i<thumb.length; i++){
	thumb[i].onclick = function () {
	var img = document.createElement('img');
	var title = this.title;
	var header = this.alt;
	var path = this.src;
	source = path.replace(".jpg","big.jpg");
	document.getElementById('show').innerHTML = '<div class="illustration"><div class="illust-content"><h5>'+header+'</h5><img src="'+source+'" class="illustimg"><br><h6>'+title+'</h6><img src="exit.png" alt="Exit" title="exit" class="exit"></div></div>';	
	var wrap = document.getElementById('show');
	wrap.onclick = function () {
	document.getElementById('show').innerHTML = '';
			}
	
   		};
   	};

};
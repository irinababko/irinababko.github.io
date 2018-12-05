/*_________ROUND-CAROUSEL________*/

if ((document.getElementsByClassName('info__carousel__arrow1').length!==0) && 
  (document.getElementsByClassName('info__carousel__arrow2').length!==0)) {
    var step = 32.5;
    var position = 0;
    var positionAfterStop = 0;
	function retrieveNormalOpacity(){
      for (i=0; i<document.querySelectorAll('.info__stage').length; i++)
    {
      document.querySelectorAll('.info__stage')[i].style.opacity = '1';
      document.getElementsByClassName('hover')[i].style.opacity = '0';
    };
      document.getElementById('stage__text1').style.opacity = '0';
      document.getElementById('stage__text2').style.opacity = '0';
      document.getElementById('stage__text3').style.opacity = '0';
      document.getElementById('stage__text4').style.opacity = '0';
      document.getElementById('stage__text5').style.opacity = '0';
      document.getElementById('stage__text6').style.opacity = '0';
      document.getElementById('stage__text7').style.opacity = '0';
      document.getElementById('stage__text8').style.opacity = '0';
    };
	 function retrieveNormalDisplay(){
	  document.getElementById('prev').style.display = 'flex';
      document.getElementById('next').style.display = 'flex';
	 }
	function retrieveNormalOpacityItemClick(){
	  for (i=0; i<document.querySelectorAll('.info__stage').length; i++)
      {
      document.getElementsByClassName('hover')[i].style.opacity = '0';
      };
	  document.getElementById('stage__text1').style.opacity = '0';
      document.getElementById('stage__text2').style.opacity = '0';
      document.getElementById('stage__text3').style.opacity = '0';
      document.getElementById('stage__text4').style.opacity = '0';
      document.getElementById('stage__text5').style.opacity = '0';
      document.getElementById('stage__text6').style.opacity = '0';
      document.getElementById('stage__text7').style.opacity = '0';
      document.getElementById('stage__text8').style.opacity = '0';
	}
/*__________________________________Click On Item___________________________________*/
	document.querySelectorAll('.info__stage')[0].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text1').style.opacity = '1';
    document.getElementsByClassName('hover')[0].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[1].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text2').style.opacity = '1';
    document.getElementsByClassName('hover')[1].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[2].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text3').style.opacity = '1';
    document.getElementsByClassName('hover')[2].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[3].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text4').style.opacity = '1';
    document.getElementsByClassName('hover')[3].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[4].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text5').style.opacity = '1';
    document.getElementsByClassName('hover')[4].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[5].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text6').style.opacity = '1';
    document.getElementsByClassName('hover')[5].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[6].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text7').style.opacity = '1';
    document.getElementsByClassName('hover')[6].style.opacity = '1';
			};
	document.querySelectorAll('.info__stage')[7].onclick = function() {
	retrieveNormalOpacityItemClick();
    document.getElementById('stage__text8').style.opacity = '1';
    document.getElementsByClassName('hover')[7].style.opacity = '1';
            };
            

/*_______________________________________Previous Key___________________________________*/	
    prev.onclick = function() {
      position = Math.min(position + step, 0);
      positionAfterStop = positionAfterStop + step;
      if((position<=positionAfterStop)&&(position>=(-step*4))) {
          document.getElementById('carousel').style.transform = 'rotate('+ position + 'deg)';
          document.getElementById('carousel').style.transition = 'transform 1s';
      for (var i = 0; i < document.querySelectorAll('.info__stage').length; i++) {
          document.querySelectorAll('.info__stage')[i].style.transform = 'rotate('+ (-position) + 'deg)';
      }} else {position=-step*4};
      if (position!==0) {document.getElementById('prev').classList.remove("inactive");}
      if (position==-130) {document.getElementById('next').classList.add("inactive");}
      if (position!==-130) {document.getElementById('next').classList.remove("inactive");}
      
switch (Math.round(position)) {
  case 0:
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[4].style.opacity = '0';
    document.getElementById('stage__text1').style.opacity = '1';
    document.getElementsByClassName('hover')[0].style.opacity = '1';
	retrieveNormalDisplay();
    document.getElementById('prev').style.display = 'none';
    break;
  case Math.round(-step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[0].style.opacity = '0';
    document.querySelectorAll('.info__stage')[5].style.opacity = '0';
    document.getElementById('stage__text2').style.opacity = '1';
    document.getElementsByClassName('hover')[1].style.opacity = '1';
	retrieveNormalDisplay();
    break;
  case Math.round(-2*step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[1].style.opacity = '0';
    document.querySelectorAll('.info__stage')[6].style.opacity = '0';
    document.getElementById('stage__text3').style.opacity = '1';
    document.getElementsByClassName('hover')[2].style.opacity = '1';
	retrieveNormalDisplay();
    break;
    case Math.round(-3*step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[2].style.opacity = '0';
    document.querySelectorAll('.info__stage')[7].style.opacity = '0';
    document.getElementById('stage__text4').style.opacity = '1';
    document.getElementsByClassName('hover')[3].style.opacity = '1';
	retrieveNormalDisplay();
    break;
}
switch (Math.round(positionAfterStop)){
  case (Math.round(-4*step)):
    retrieveNormalOpacity();
    document.getElementById('stage__text5').style.opacity = '1';
    document.getElementsByClassName('hover')[4].style.opacity = '1';
    document.querySelectorAll('.info__stage')[3].style.opacity = '0';
	retrieveNormalDisplay();
    break;
 case (Math.round(-5*step)):
    retrieveNormalOpacity();
    document.getElementById('stage__text6').style.opacity = '1';
    document.getElementsByClassName('hover')[5].style.opacity = '1';
    document.querySelectorAll('.info__stage')[3].style.opacity = '0';
	retrieveNormalDisplay();
    break;
  case (Math.round(-6*step)):
    retrieveNormalOpacity();
    document.getElementById('stage__text7').style.opacity = '1';
    document.getElementsByClassName('hover')[6].style.opacity = '1';
    document.querySelectorAll('.info__stage')[3].style.opacity = '0';
	retrieveNormalDisplay();
    break;
}
    };

/*___________________________________Next Key_______________________________________*/
  next.onclick = function() {
      position = Math.max(position - step, -130);
      positionAfterStop = positionAfterStop - step;
      document.getElementById('carousel').style.transform = 'rotate('+ position + 'deg)';
      document.getElementById('carousel').style.transition = 'transform 1s';
       for (var i = 0; i < document.querySelectorAll('.info__stage').length; i++) {
      document.querySelectorAll('.info__stage')[i].style.transform = 'rotate('+ (-position) + 'deg)';
      }
      if (position==0) {document.getElementById('prev').classList.add("inactive");}
      if (position!==0) {document.getElementById('prev').classList.remove("inactive");}
      switch (Math.floor(position)) {
  case 0:
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[4].style.opacity = '0';
    document.getElementById('stage__text1').style.opacity = '1';
    document.getElementsByClassName('hover')[0].style.opacity = '1';
    retrieveNormalDisplay();
    break;
  case Math.floor(-step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[0].style.opacity = '0';
    document.querySelectorAll('.info__stage')[5].style.opacity = '0';
    document.getElementById('stage__text2').style.opacity = '1';
    document.getElementsByClassName('hover')[1].style.opacity = '1';
    retrieveNormalDisplay();
    break;
  case Math.floor(-2*step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[1].style.opacity = '0';
    document.querySelectorAll('.info__stage')[6].style.opacity = '0';
    document.getElementById('stage__text3').style.opacity = '1';
    document.getElementsByClassName('hover')[2].style.opacity = '1';
    retrieveNormalDisplay();
    break;
  case Math.floor(-3*step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[2].style.opacity = '0';
    document.querySelectorAll('.info__stage')[7].style.opacity = '0';
    document.getElementById('stage__text4').style.opacity = '1';
    document.getElementsByClassName('hover')[3].style.opacity = '1';
	retrieveNormalDisplay();
    break;
  case Math.floor(-4*step):
    retrieveNormalOpacity();
    document.querySelectorAll('.info__stage')[3].style.opacity = '0';
    document.getElementById('stage__text5').style.opacity = '1';
    document.getElementsByClassName('hover')[4].style.opacity = '1';
    retrieveNormalDisplay();
    break;
}
switch (Math.floor(positionAfterStop)){
 case Math.floor(-5*step):
    retrieveNormalOpacity();
	document.querySelectorAll('.info__stage')[3].style.opacity = '0';
    document.getElementById('stage__text6').style.opacity = '1';
    document.getElementsByClassName('hover')[5].style.opacity = '1';
	retrieveNormalDisplay();
    break;
  case Math.floor(-6*step):
    retrieveNormalOpacity();
	document.querySelectorAll('.info__stage')[3].style.opacity = '0';
    document.getElementById('stage__text7').style.opacity = '1';
    document.getElementsByClassName('hover')[6].style.opacity = '1'; 
    retrieveNormalDisplay();
    break;
  case Math.floor(-7*step):
    retrieveNormalOpacity();
	document.querySelectorAll('.info__stage')[3].style.opacity = '0';
    document.getElementById('stage__text8').style.opacity = '1';
    document.getElementsByClassName('hover')[7].style.opacity = '1';
	retrieveNormalDisplay();
    document.getElementById('next').style.display = 'none';
    break;
}

    };
       };
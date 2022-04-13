var btnpopup = document.getElementById('btnpopup');
var popup = document.getElementById('popup');
var btnclose = document.getElementById('btnclose');

btnpopup.addEventListener('click',openpopup);
function openpopup(){
    popup.style.display = "block";
}           

btnclose.addEventListener('click',close);

function close(){
    popup.style.display = 'none';
}

var btnpopup2 = document.getElementById('btnpopup2');
var popup2 = document.getElementById('popup2');
var btnclose2 = document.getElementById('btnclose2');

btnpopup2.addEventListener('click',openpopup2);
function openpopup2(){
    popup2.style.display = "block";
}           

btnclose2.addEventListener('click',close2);
function close2(){
    popup2.style.display = 'none';
}

var btnpopup3 = document.getElementById('btnpopup3');
var popup3 = document.getElementById('popup3');
var btnclose3 = document.getElementById('btnclose3');

btnpopup3.addEventListener('click',openpopup3);
function openpopup3(){
    popup3.style.display = "block";
}           

btnclose3.addEventListener('click',close3);
function close3(){
    popup3.style.display = 'none';
}

var btnpopup4 = document.getElementById('btnpopup4');
var popup4 = document.getElementById('popup4');
var btnclose4 = document.getElementById('btnclose4');

btnpopup4.addEventListener('click',openpopup4);
function openpopup4(){
    popup4.style.display = "block";
}           

btnclose4.addEventListener('click',close4);
function close4(){
    popup4.style.display = 'none';
}

// <!-- ================== script pour sticky header ================== -->

window.onscroll = function () {
    myFunction();
  };

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }



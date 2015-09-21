(function() {
  function setHeaderBackgroundToColor(colorString){
    document.getElementsByClassName('view-header')[0].children[0].style.backgroundColor=colorString;
  }

  var flag = false;
  setInterval(function(){
    if (flag){
      setHeaderBackgroundToColor('red');
      flag = false;
    }
    else {
      setHeaderBackgroundToColor('yellow');
      flag = true;
    }
  }, 500);

  alert('injected')
}());

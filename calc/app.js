
function plus(){
  var args = getArgs();
  putResult( args.a + args.b );
}

function minus(){
  var args = getArgs();
  putResult( args.a - args.b );
}

function getArgs(){
  return {
     a: parseInt(document.getElementById("tb1").value),
     b: parseInt(document.getElementById("tb2").value)
  };
}

function putResult(r){
  var elm = document.getElementById("tbResult");

  elm.value = r;
  elm.style.backgroundColor = (r<0) ? "#ff0000" : "#00ff00";
}

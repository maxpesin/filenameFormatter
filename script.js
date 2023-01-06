const submit = document.getElementById("submit");
const title = document.getElementById("text");
var clipped = document.getElementById("clipped");

submit.onclick = function(){
title.value = title.value.toLowerCase().replace(/ /g, "-").replace(/:/g, "-").replace(/\//g, "-").replace(/'/g, "").replace(/,/g, "");
title.select();
document.execCommand("copy");
clipped.innerText = ''+title.value+'';
};

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    console.log(event.keyCode);
    title.value = title.value.toLowerCase().replace(/ /g, "-").replace(/:/g, "-").replace(/'/g, "").replace(/,/g, "");
    title.select();
    document.execCommand("copy");
    clipped.innerText = ''+title.value+'';
  }
});
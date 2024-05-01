let count = 1;
let count2 = 5;
let count3 = 9;
document.getElementsByName('radio1').checked = true;
document.getElementsByName('radio2').checked = true;
document.getElementsByName('radio3').checked = true;

setInterval ( function(){
  nextImage();
}, 2000);

function nextImage() {
  count++;
  count2++;
  count3++;
  if(count>4) {
    count = 1;
    count2 = 5;
    count3 = 9;
  }

  document.getElementById("radio"+count).checked = true;
  document.getElementById("radio"+count2).checked = true;
  document.getElementById("radio"+count3).checked = true;
}
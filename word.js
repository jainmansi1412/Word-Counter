let textbox= document.getElementById('textbox');

textbox.addEventListener('input', function(){
  var innerbox = this.value
  let char = innerbox.length;
  document.getElementById('num2').innerHTML = char;

  innerbox = innerbox.trim();
let word = innerbox.split(" ");
let cleanlist = word.filter(function(el){
    return el!="";
})

document.getElementById("num").innerHTML = cleanlist.length;
});

function correctCheck(bool, num) {
    // var bool = "True";
    var x = document.getElementById(num);
    if (bool == "True") {
        x.innerHTML = "CORRECT";
        x.style.color= "lime"
      } else {
        x.innerHTML = "INCORRECT";
        x.style.color= "red"
      }
}
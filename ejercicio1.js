function multi() {
  num = document.getElementById("num").value;

  if (isNaN(num)) {
    alert("Esto no es un número");
  } else {
    num = parseInt(num);

    for (var i = 1; i <= 10; i++) {
      multi = num * i;
      document.write(num + " x " + i + " = " + multi + "<br>");
    }
  }
}

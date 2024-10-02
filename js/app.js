<script>

  function reveal_top() {
  var reveals_top = document.querySelectorAll(".reveal_top");

  for (var i = 0; i < reveals_top.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals_top[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (true) {
  reveals_top[i].classList.add("active");
} else {
  reveals_top[i].classList.remove("active");
}
}
}
  function reveal_bot() {
  var reveals_bot = document.querySelectorAll(".reveal_bot");

  for (var i = 0; i < reveals_bot.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals_bot[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
  reveals_bot[i].classList.add("active");
} else {
  reveals_bot[i].classList.remove("active");
}
}
}
  function reveal_left() {
  var reveals_left = document.querySelectorAll(".reveal_left");

  for (var i = 0; i < reveals_left.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals_left[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
  reveals_left[i].classList.add("active");
} else {
  reveals_left[i].classList.remove("active");
}
}
}

  function reveal_right() {
  var reveals_right = document.querySelectorAll(".reveal_right");

  for (var i = 0; i < reveals_right.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals_right[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
  reveals_right[i].classList.add("active");
} else {

}
}
}


  window.addEventListener("scroll", reveal_top);
  window.addEventListener("scroll", reveal_bot);
  window.addEventListener("scroll", reveal_left);
  window.addEventListener("scroll", reveal_right);
</script>


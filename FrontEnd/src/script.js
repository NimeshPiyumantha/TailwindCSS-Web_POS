const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');

btn.addEventListener('click', () => {
  btn.classList.toggle('open');
  nav.classList.toggle('flex');
  nav.classList.toggle('hidden');
});

$(document).ready(function () {
  $("#HomeSection").css('display', 'block');
  $("#CustomerSection").css('display', 'none');
  $("#ItemSection").css('display', 'none');
  $("#OrderSection").css('display', 'none');
  $("#OrderDetails").css('display', 'none');
});

$("#homeBtn,.homeBtn").click(function () {
  $("#HomeSection").css('display', 'block');
  $("#CustomerSection").css('display', 'none');
  $("#ItemSection").css('display', 'none');
  $("#OrderSection").css('display', 'none');
  $("#OrderDetails").css('display', 'none');
});


$("#customerBtn,.customerBtn").click(function () {
  $("#HomeSection").css('display', 'none');
  $("#CustomerSection").css('display', 'block');
  $("#ItemSection").css('display', 'none');
  $("#OrderSection").css('display', 'none');
  $("#OrderDetails").css('display', 'none');
});

$("#itemBtn,.itemBtn").click(function () {
  $("#HomeSection").css('display', 'none');
  $("#CustomerSection").css('display', 'none');
  $("#ItemSection").css('display', 'block');
  $("#OrderSection").css('display', 'none');
  $("#OrderDetails").css('display', 'none');
});
var sidebarBox = document.querySelector('#sideInfo');
var sidebarBtn = document.querySelector('#button2');
var sidebarBtn2 = document.querySelector('#closeBtn');

sidebarBtn.addEventListener('click', function(event) {

  if (this.classList.contains('active')) {
      this.classList.remove('active');
      sidebarBox.classList.remove('active');
  } else {
      this.classList.add('active');
      sidebarBox.classList.add('active');
  }
});

window.addEventListener('keydown', function(event) {

  if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
      sidebarBtn.classList.remove('active');
      sidebarBox.classList.remove('active');
  }
});


sidebarBtn2.addEventListener('click', function(event) {
  if (sidebarBox.classList.contains('active')) {
      sidebarBox.classList.remove('active');
  }
});
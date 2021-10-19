document.getElementById("hamburger").onclick = function () {
    this.classList.toggle("is-active");
  };
  
  const button = document.querySelector("#hamburger");
  
  button.addEventListener("click", (e) => {
    document.querySelector(".show-nav").classList.toggle("header__nav");
  });
  


  function updateMenuButton() {
	$('.js-menu-button').find('.menu-icon').toggleClass('is-active');
}

$(document).ready(function() {

	$('.js-menu-button').click(function(e){

		e.preventDefault();
		updateMenuButton();

	});

});
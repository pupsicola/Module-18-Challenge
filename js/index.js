$(".hamburgermenu").on("click", function(){
  $("#dropDown").slideToggle();
});

const div = document.getElementById("clickWrapper")

div.addEventListener('click', () => {
if(div.childNodes[0].classList.contains("close")){
	div.childNodes[0].className = "menu animate"
}else{
	div.childNodes[0].className = "close animate"
}
})
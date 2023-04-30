const icons = document.querySelectorAll(".icon-group");
const iconTxt = document.querySelectorAll(".icon-txt");
const iconGroup = document.querySelectorAll(".icon-group");
const iconBg = document.querySelectorAll(".icon-bg");

icons.forEach((icon,index) => {
	icon.addEventListener("mouseenter" , function() {
		iconTxt[index].classList.remove("hidden");
		iconTxt[index].classList.add("show");
		iconTxt[index].style.color = "var(--primaryColor)";
		icons[index].style.color = "var(--primaryColor)";
		iconBg[index].style.clipPath = "circle(150% at 0% 50%)";
		iconBg[index].style.transition = "all 0.5s ease-in-out";
	})
	icon.addEventListener("mouseleave", function name(params) {
		iconTxt[index].classList.remove("show");
    iconTxt[index].classList.add("hidden");
		icons[index].style.color = "var(--btnTxtColor)";
    iconBg[index].style.clipPath = "circle(50% at -100% 50%)";
	})
})
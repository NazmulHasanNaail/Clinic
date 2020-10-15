///search-box//
function openSearch() {
    var obj = document.getElementById("myOverlay");
    obj.setAttribute("style", "visibility: visible; opacity: 1;");

}

function closeSearch() {
   var obj = document.getElementById("myOverlay");
    obj.setAttribute("style", "visibility: hiden; opacity: 0;");
}


//=====counter-up=====//
const counters = document.querySelectorAll('.counter');
const speed = 300; // The lower the slower

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const  inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = count + parseInt(inc+1);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter.innerText = target;
		}
	};

	updateCount();
});

//=======Sticky-Navbar======//
window.addEventListener("scroll",function(){
    var navbar = document.querySelector("nav");
     navbar.classList.toggle("sticky", window.scrollY > 0);
    
})
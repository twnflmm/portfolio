//бургер меню
const burger = document.getElementById('burger')
const menu = document.getElementById('menu')

burger.addEventListener('click', () => {
	burger.classList.toggle('active')
	if (menu.style.maxHeight) {
		menu.style.maxHeight = null
	} else {
		menu.style.maxHeight = menu.scrollHeight + 'px'
	}
})

const links = menu.querySelectorAll('a')
links.forEach((element) => {
	element.addEventListener('click', () => {
		burger.classList.toggle('active')
		if (menu.style.maxHeight) {
			menu.style.maxHeight = null
		} else {
			menu.style.maxHeight = menu.scrollHeight + 'px'
		}
	})
})

// const accord = document.querySelectorAll('');

// accord.forEach(function (item) {
//   item.addEventListener('click', function () {
//     item.classList.toggle('active');

//     var panel = item.nextElementSibling;
//     if (panel.style.maxHeight) {
//       panel.style.maxHeight = null;
//     } else {
//       panel.style.maxHeight = panel.scrollHeight + 'px';
//     }
//   });
// });

var typingEffect = new Typed('.multiText', {
	strings: ['coder', 'freelancer', 'musician'],
	loop: true,
	typeSpeed: 100,
	backSpeed: 80,
	backDelay: 1500
})

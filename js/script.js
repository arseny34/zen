document.querySelector('.burger').onclick = function () {
	document.querySelector('.burger').classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('.header__links-list').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
};

AOS.init();

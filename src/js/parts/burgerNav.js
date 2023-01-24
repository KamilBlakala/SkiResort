const brgBars = document.querySelector('.burger-btn__box');
const navBtn = document.querySelector('.burger-btn');
const navHandler = document.querySelector('.navListItems');

const handleNav = () => {
	brgBars.classList.toggle('open');
	navHandler.classList.toggle('active');
};

navBtn.addEventListener('click', handleNav);

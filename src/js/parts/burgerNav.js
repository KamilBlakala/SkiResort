const brgBars = document.querySelector('.burger-btn__box');
const navBtn = document.querySelector('.burger-btn');

const handleNav = () => {
	brgBars.classList.toggle('open');
};

navBtn.addEventListener('click', handleNav);

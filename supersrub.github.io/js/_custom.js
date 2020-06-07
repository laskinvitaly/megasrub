const KatalogBtn=document.querySelector('.katalog-btn');
const	Katalog=document.querySelector('.katalog-wrap');

//Спрятать показать каталог

KatalogBtn.addEventListener('click', ()=>{
	console.dir(Katalog);
	Katalog.classList.toggle('show');
})
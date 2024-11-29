
// import {animate} from "./gsap-test"
import { setBackgrounds } from "./set-background"
import LocomotiveScroll from "locomotive-scroll"
// import Swiper from "swiper"

// import { Parallax, Mousewheel, Controller, Pagination, Scrollbar, Navigation, Thumbs, Autoplay } from 'swiper/modules'
// import { jqueryTest } from "./jquery";

document.addEventListener('DOMContentLoaded', () => {

	const scroll = new LocomotiveScroll({
		lenisOptions: {
			el: document.querySelector("body"),
			duration: 1.7,
			smooth: true,
			smoothTouch: true,
		},
	})

	// animate();

	// jqueryTest();

	// скрипт автоматически находит классы элементов начинающихся с  bg-- и подставляет нужный формат изображения
	// также необходимо прописать фоллбак на случай если у пользователя отключен js: style="background-image: url('images/header-bg.jpg');"
	setBackgrounds();

})


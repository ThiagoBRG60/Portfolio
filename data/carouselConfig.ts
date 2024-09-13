const settings = {
   infinite: false,
   speed: 200,
   slidesToShow: 5,
   slidesToScroll: 1,
   arrows: false,
   swipe: false,
   responsive: [
      {
         breakpoint: 1441,
         settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            arrows: true,
            dots: true,
            draggable: true,
            swipe: true,
         }
      },
      {
         breakpoint: 1025,
         settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            arrows: true,
            dots: true,
            draggable: true,
            swipe: true,
         }
      },
      {
         breakpoint: 426,
         settings: {
            slidesToShow: 1,
            arrows: true,
            dots: true,
            draggable: true,
            swipe: true,
         }
      }
   ]
};

export default settings
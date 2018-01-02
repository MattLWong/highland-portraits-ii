const preload = function() {
  var frozenImages = new Array();
  function preloadFrozen() {
    for (let i = 0; i < arguments.length; i++) {
      frozenImages[i] = new Image();
      frozenImages[i].src = arguments[i];
      console.log("preloaded" + i);
    }
  }
  preloadFrozen(
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/1.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/2.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/3.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/4.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/5.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/6.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/7.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/8.jpg", "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/9.jpg", "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/10.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/11.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/12.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/13.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/14.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/15.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/16.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/17.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/18.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/19.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/20.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/21.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/22.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/23.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/24.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/25.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/26.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/27.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/28.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/29.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/30.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/31.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/32.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/33.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/34.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/35.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/36.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/37.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/38.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/39.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/40.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/41.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/42.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/43.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/44.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/45.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/46.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/47.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/48.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/49.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/50.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/51.jpg",
    "http://res.cloudinary.com/mwong9968/image/upload/v15163/highland/frozen/2.jpg"
  );
};



export default preload;

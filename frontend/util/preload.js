let f = "http://res.cloudinary.com/mwong9968/image/upload/v1524411975/highland-4-22-18/frozen/";
let s = "http://res.cloudinary.com/mwong9968/image/upload/v1524423758/highland-4-22-18/square/";
let frozenurls = [];
let squareurls = [];
for (let i = 1; i < 73; i++) {
  frozenurls.push(f + i + '.jpg');
}

for (let i = 1; i < 17; i++) {
  squareurls.push(s + i + '.jpg');
}
const preload = function() {
  var frozenImages = new Array();
  var squareImages = new Array();
  function preloadFrozen(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
      //load frozen images
      frozenImages[i] = new Image();
      frozenImages[i].src = array1[i];
    }
    for (let j = 0; j < array2.length; j++) {
      //load first 12 images
      squareImages[j] = new Image();
      squareImages[j].src = array2[j];
    }
    //load profile picture
    var pp = new Image();
    pp.src = "http://res.cloudinary.com/mwong9968/image/upload/v1510648287/highland-admin/_D618751.jpg";
  }
  preloadFrozen(frozenurls, squareurls);
};



export default preload;

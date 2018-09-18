export const waitForEl = function(selector, callback) {
  if ($(selector).length) {
    callback();
  } else {
    setTimeout(function() {
      // console.log("waiting");
      waitForEl(selector, callback);
    }, 1000);
  }
};

waitForEl('#map', function() {
  myMap();
});

export const myMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 9,
    center: {lat: 37.88, lng: -122.26},
    scaleControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    draggable: false
  });
  var marker = new google.maps.Marker({
    position: {lat: 37.88, lng: -122.26},
    map: map
  });
};

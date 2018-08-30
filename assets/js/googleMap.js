'use strict';

var googleMap = function () {
	var $map = document.getElementById('googleMap');
	var API_KEY = 'AIzaSyCqGil8SobbfqNrK098GTFf0lfzZUMX6nc';

	function initMap() {
		var loc = { lat: 28.558966, lng: -81.343426 };
		var mapStyles = [{
			"elementType": "geometry",
			"stylers": [{
				"color": "#ebe3cd"
			}]
		}, {
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#523735"
			}]
		}, {
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#f5f1e6"
			}]
		}, {
			"featureType": "administrative",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#c9b2a6"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#dcd2be"
			}]
		}, {
			"featureType": "administrative.land_parcel",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#ae9e90"
			}]
		}, {
			"featureType": "administrative.neighborhood",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "landscape.natural",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "landscape.natural.landcover",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#96a35c"
			}]
		}, {
			"featureType": "landscape.natural.terrain",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#96a35c"
			}]
		}, {
			"featureType": "poi",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#93817c"
			}]
		}, {
			"featureType": "poi.business",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#a5b076"
			}]
		}, {
			"featureType": "poi.park",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#447530"
			}]
		}, {
			"featureType": "road",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f5f1e6"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "geometry",
			"stylers": [{
				"color": "#fdfcf8"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry",
			"stylers": [{
				"color": "#f8c967"
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#4d604d"
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#e9bc62"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry",
			"stylers": [{
				"color": "#e98d58"
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#4d604d"
			}, {
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.highway.controlled_access",
			"elementType": "geometry.stroke",
			"stylers": [{
				"color": "#db8555"
			}]
		}, {
			"featureType": "road.local",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#806b63"
			}]
		}, {
			"featureType": "transit",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#8f7d77"
			}]
		}, {
			"featureType": "transit.line",
			"elementType": "labels.text.stroke",
			"stylers": [{
				"color": "#ebe3cd"
			}]
		}, {
			"featureType": "transit.station",
			"elementType": "geometry",
			"stylers": [{
				"color": "#dfd2ae"
			}]
		}, {
			"featureType": "water",
			"elementType": "geometry.fill",
			"stylers": [{
				"color": "#b9d3c2"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#92998d"
			}]
		}];

		var map = new google.maps.Map(document.getElementById('googleMap'), {
			zoom: 6,
			center: loc,
			styles: mapStyles,
			scrollwheel: false,
			zoomControl: false,
			scaleControl: false
		});

		var contentString = '<div class="container">' + '<h6>Normand PLLC</h6>' + '<p>3165 McCrory Place, Suite 175, Orlando, FL 32803</p>';
		'</div>';

		var infowindow = new google.maps.InfoWindow({
			content: contentString
		});

		var marker = new google.maps.Marker({
			position: loc,
			map: map,
			title: 'Normand PLLC',
			icon: 'wp-content/themes/blankslate/assets/img/marker.png',
			draggable: false,
			animation: google.maps.Animation.BOUNCE
		});
		marker.addListener('click', function () {
			infowindow.open(map, marker);
		});
	}

	google.maps.event.addDomListener(window, 'load', initMap);

	return {
		initMap: initMap
	};
}();

window.onload = function () {
	googleMap.initMap();
};

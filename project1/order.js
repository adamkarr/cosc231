/*
    COSC 231
    Project 1
    Lego Egypt Website
    
    order.js
    Javascript to change image and description on order page
    
    Adam Karr
    2016-02-10
*/

var loc = 'lego_assets/', order = [
  {
    'src': '2879.jpg',
    'name': 'Desert Expedition<br />192 pieces',
    'desc': 'Includes a bi-plane piloted by Harry Cane, a car driven by '
      + 'Sam Sinister and Slyboots, a palm tree, and a tomb with a skeleton '
      + '&amp scorpions.<br />Released: 1998',
    'price': '$20.00'
  },
  {
    'src': '5938.png',
    'name': 'Oasis Ambush<br />76 pieces',
    'desc': 'Includes a statue of the Egyptian god Anubis that lifts to reveal '
      + 'treasure and hieroglyphics.<br />Released: 1998',
    'price': '$7.99 '
  },
  {
    'src': '5928.jpg',
    'name': 'Bi-Wing Baron<br />70 pieces',
    'desc': 'Includes a bi-plane piloted by Baron Von Barron, map, black '
      + 'binoculars, and four standard rifles.<br />Released: 1998',
    'price': '$6.00'
  },
  {
    'src': '5988.jpg',
    'name': 'Pharaoh\'s Forbidden Ruins<br />710 pieces',
    'desc': 'The Pharaoh\'s Forbidden Ruins is the resting place of the Re-Gou '
      + 'Ruby. Includes a large temple, a hot-air balloon, and Lord Sinister\'s '
      + 'truck.<br />Released: 1998',
    'price': '$79.99'
  },
  {
    'src': '9377.jpg',
    'name': 'Adventurers Combined Set<br />855 pieces',
    'desc': 'Includes everything from Oasis Ambush, Bi-Wing Baron, and Pharaoh\'s '
      + 'Forbidden Ruins sets.<br />Released: 1998',
    'price': '$89.25'
  }
];

function changeInfo(num) {
  document.getElementById('product').src = loc + order[num].src;
  document.getElementById('name').innerHTML = order[num].name;
  document.getElementById('desc').innerHTML = order[num].desc;
  document.getElementById('price').innerHTML = order[num].price;
}

function submitOrder() {
  alert('Order submitted');
  window.location = '/order.html';
}



/* Image Citations:

Lego logo, Adventurers logo, and product images from Brickipedia
http://lego.wikia.com/wiki/File:LEGO_logo.jpg
No changes made.
http://lego.wikia.com/wiki/File:Adventures_Logo.png
No changes made.
http://lego.wikia.com/wiki/File:2879_Desert_Expedition.jpg
No changes made.
http://lego.wikia.com/wiki/File:5928-1-1.jpg
No changes made.
http://lego.wikia.com/wiki/File:5938.png
No changes made.
http://lego.wikia.com/wiki/File:5988_Box.jpg
No changes made.
http://lego.wikia.com/wiki/File:Adventurers_combined_Lego.jpg
No changes made.

Background image from bgfons
http://bgfons.com/download/1336
No changes made.

Homepage image from S3ISOR on Flickr
https://www.flickr.com/photos/59263516@N08/16055660600
No changes made.
License: https://creativecommons.org/licenses/by/2.0/

*/
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
    'src': '5938.jpg',
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
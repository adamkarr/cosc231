var loc = "a3_assets/";
var game = [
  { //cloc == 0
    "src": "forest.jpg",
    "desc": "You\'ve woken up to find yourself deep in the forest. Find your way back home.",
    "options": [
      {
        "desc": "Start",
        "loc": 1
      }
    ]
  },
  { //cloc == 1
    "src": "fork1.jpg",
    "desc": "There are two paths before you. Which way do you go?",
    "options": [
      {
        "desc": "Left",
        "loc": 2
      },
      {
        "desc": "Right",
        "loc": 6
      }
    ]
  },
  { //cloc == 2
    "src": "brush.jpg",
    "desc": "Thick brush spans across your path. What do you do?",
    "options": [
      {
        "desc": "Push through the brush",
        "loc": 3
      },
      {
        "desc": "Climb over",
        "loc": 4
      }
    ]
  },
  { //cloc == 3
    "src": "path.jpg",
    "desc": "It was a struggle, but you made it through. A few scrapes and bruises won\'t stop you.",
    "options": [
      {
        "desc": "Continue",
        "loc": 5
      }
    ]
  },
  { //cloc == 4
    "src": "path.jpg",
    "desc": "It was a struggle, but you made it over. A few scrapes and bruises won\'t stop you.",
    "options": [
      {
        "desc": "Continue",
        "loc": 5
      }
    ]
  },
  { //cloc == 5
    "src": "fork3.jpg",
    "desc": "There are two paths before you. One seems to go towards light, the other towards darkness. Which way do you go?",
    "options": [
      {
        "desc": "Light",
        "loc": 14
      },
      {
        "desc": "Dark",
        "loc": 13
      }
    ]
  },
  { //cloc == 6
    "src": "fork2.jpg",
    "desc": "There\'s a fork in the road. Which way do you go?",
    "options": [
      {
        "desc": "Left",
        "loc": 7
      },
      {
        "desc": "Right",
        "loc": 9
      }
    ]
  },
  { //cloc == 7
    "src": "river.jpg",
    "desc": "A river stands before you.",
    "options": [
      {
        "desc": "Jump across on the rocks",
        "loc": 5
      },
      {
        "desc": "Swim across",
        "loc": 8
      },
      {
        "desc": "Go back",
        "loc": 6
      }
    ]
  },
  { //cloc == 8
    "src": "underwater.jpg",
    "desc": "You\'re swept away by the current. A way downstream, you are able to pull yourself ashore.",
    "options": [
      {
        "desc": "Continue",
        "loc": 5
      }
    ]
  },
  { //cloc == 9
    "src": "bear.jpg",
    "desc": "There\'s a bear on the trail! What do you do?",
    "options": [
      {
        "desc": "Fight",
        "loc": 10
      },
      {
        "desc": "Climb a tree",
        "loc": 11
      },
      {
        "desc": "Go back",
        "loc": 6
      }
    ]
  },
  { //cloc == 10
    "src": "dead.jpg",
    "desc": "You fight valiantly, but die a bloody death.",
    "options": [
      {
        "desc": "Try again?",
        "loc": 0
      }
    ]
  },
  { //cloc == 11
    "src": "skyline.jpg",
    "desc": "You can see the city just past the trees. It\'s still pretty far off though."
      + "<br />There\'s another tree you could be able to jump to. What do you do?",
    "options": [
      {
        "desc": "Jump",
        "loc": 12
      },
      {
        "desc": "Climb back down",
        "loc": 9
      }
    ]
  },
  { //cloc == 12
    "src": "fall.jpg",
    "desc": "Just a little short! You fall to the forest floor.",
    "options": [
      {
        "desc": "Continue",
        "loc": 13
      }
    ]
  },
  { //cloc == 13
    "src": "fork4.jpg",
    "desc": "There are two paths before you. One seems to go uphill, the other downhill. Which way do you go?",
    "options": [
      {
        "desc": "Uphill",
        "loc": 14
      },
      {
        "desc": "Downhill",
        "loc": 5
      }
    ]
  },
  { //cloc == 14
    "src": "city.jpg",
    "desc": "You\'ve made it home!<br />"
      + "Now to find out how you got in the forest to begin...",
    "options": [
      {
        "desc": "Play again?",
        "loc": 0
      }
    ]
  }
];
  
var cloc = 0;     //starting location

function changeImage () {
  document.getElementById("image").src = loc + game[cloc].src;
};

function changeLoc (num) {
    cloc = num;
    changeImage(cloc);
    printCurrentLoc();
};

function printCurrentLoc () {
    document.getElementById("desc").innerHTML = game[cloc].desc;
    var options = "";
    for (var i = 0; i < game[cloc].options.length; i++) {
        options += "<p><button onclick='changeLoc(" + game[cloc].options[i].loc
          + ")'>" + game[cloc].options[i].desc + "</button></p>";
    }
    document.getElementById("options").innerHTML = options;
};


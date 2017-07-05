var friends = ["Candace", "Adrian", "Brian", "JB", "Greg"]
var locations = ["i lab", "bathroom", "gen it classroom", "parking deck", "pool", "bedroom", "graveyard", "car lot", "ice cream room", "sanctuary"]
var weapons = ["healthcare repeal.", "bazooka.", "trump vote.", "galactic gun.", "thunderbolt.", "bad meme.", "hyper beam.", "covalence lab.", "jquery function.", "mage bomb.", "arcane shot.", "trap card.", "iphone charger.", "samsung battery.", "bad driver.", "array function.", "sharp candy cane.", "mountain dew.", "master baiter.", "denial of basic human rights."];

document.addEventListener("DOMContentLoaded", function() {

for(var i = 1; i <= 100; i++) {
    var tag = document.createElement('h3');
    tag.innerText = 'Clue ' + i;  
    var set = {
        num: i,
        friend: friends[Math.floor(Math.random() * friends.length)],
        location: locations[Math.floor(Math.random() * locations.length)],
        weapon: weapons[Math.floor(Math.random() * weapons.length)]
};
  
  tag.addEventListener('click', config.bind(set));
  document.body.appendChild(tag);

    }
});

function config() {
    alert(this.friend + ' did it in the ' + this.location + ' with a ' + this.weapon);
}







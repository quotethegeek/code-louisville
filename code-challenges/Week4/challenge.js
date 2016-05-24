// Part 1: Create a new div of class "planet" and set its background color
// to the color of your choice.  Then, append it to the body in the DOM.
  var planet = document.createElement("div");
  planet.className = "planet";
  planet.setAttribute('style', 'background-color: darkblue; margin: 100px auto;');
  document.body.appendChild(planet);
// Part 2: Create a new div of class "moon" and append it to the planet in the  DOM.
  var moon = document.createElement("div");
  moon.className = "moon";
  planet.appendChild(moon);

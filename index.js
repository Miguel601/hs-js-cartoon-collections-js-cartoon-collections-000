function dwarfRollCall(dwarves) {
    let snow = "";
    for (let index = 0; index < dwarves.length; index++) {
      snow = snow + (index + 1) + ". " + dwarves[index] + " ";
    }
    console.log(snow);
  }
  
  dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
  
  dwarfRollCall(dwarves)
  
<<<<<<< HEAD
function summonCaptainPlanet(planeteersCalls) {
=======
  function summonCaptainPlanet(planeteersCalls) {
>>>>>>> 2fe25a9b55172a7cbc58e3e061f07ff40a186b3d
      return planeteersCalls.map(function(elements){
          return elements.toUpperCase() + "!";
      });
  }
  
  summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"]);
  
<<<<<<< HEAD
function longPlaneteerCalls(words) {
=======
  function longPlaneteerCalls(words) {
>>>>>>> 2fe25a9b55172a7cbc58e3e061f07ff40a186b3d
    let b = false;
    for (let index = 0; index < foods.length; index++) {
      if (b.length > 4) {
        return true
      }
    }
    return b
  }
  
<<<<<<< HEAD
function findTheCheese (foods) {
=======
  function findTheCheese (foods) {
>>>>>>> 2fe25a9b55172a7cbc58e3e061f07ff40a186b3d
      for (let index = 0; index < foods.length; index++) {
          if (foods[index] === "cheddar"){
              return "cheddar"
          } if (foods[index] === "gouda") {
              return "gouda"
          }if (foods[index] === "camembert") {
              return "camembert"
          }
      }
      return null;
  }
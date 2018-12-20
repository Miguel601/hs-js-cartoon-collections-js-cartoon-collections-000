function dwarfRollCall(dwarves) {
    let snow = "";
    for (let index = 0; index < dwarves.length; index++) {
      snow = snow + (index + 1) + ". " + dwarves[index] + " ";
    }
    console.log(snow);
  }
  
  dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
  
  dwarfRollCall(dwarves)
  
function summonCaptainPlanet(planeteersCalls) {
      return planeteersCalls.map(function(elements){
          return elements.toUpperCase() + "!";
      });
  }
  
  summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"]);
  
function longPlaneteerCalls(words) {
    let b = false;
    for (let index = 0; index < foods.length; index++) {
      if (b.length > 4) {
        return true
      }
    }
    return b
  }
  
function findTheCheese (foods) {
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
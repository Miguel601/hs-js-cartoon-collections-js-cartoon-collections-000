//return numbered dwarves
function dwarfRollCall(dwarves) {
    let snow = "";
    for (let index = 0; index < dwarves.length; index++) {
      snow = snow + (index + 1) + ". " + dwarves[index] + " ";
    }
    console.log(snow);
  }
  
  dwarves = ["Doc", "Dopey", "Bashful", "Grumpy"];
  
  dwarfRollCall(dwarves)
  


//return an array with uppercase and exclamation @ end
function summonCaptainPlanet(planeteersCalls) {
      return planeteersCalls.map(function(elements){
          return elements.toUpperCase() + "!";
      });
  }
  
  summonCaptainPlanet(["earth", "wind", "fire", "water", "heart"]);
  

//let us know wether any of the calls are longer than four characters
function longPlaneteerCalls(words) {
    let b = false;
    for (let words = 0; words < words.length; words++) {
      if (b.length > 4) {
        return true
      }
    }
    return b
  }
  
  //accept an array of strings and return the first cheese
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
      return 'no cheese!';
  }

  foods = ["burger", "gouda", "Ham", "poutine"]

findTheCheese(foods)
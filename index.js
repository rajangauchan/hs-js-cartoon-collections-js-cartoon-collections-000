function dwarfRollCall(dwarves) {
  let listDwarves = [];
  for(let i = 0; i < dwarves.length; i++){
    
    listDwarves.push(`${i+1}. ${dwarves[i]} `);
  }
  return listDwarves.join("");
}


function summonCaptainPlanet(planeteerCalls){
  let uppercasePlaneteerCalls = [];
  for(let i = 0; i < planeteerCalls.length; i++){
    uppercasePlaneteerCalls.push(`${planeteerCalls[i]}!`.toUpperCase());
  }
  return uppercasePlaneteerCalls;
}

function longPlaneteerCalls(words) {
  for(let i = 0; i < words.length; i++){
   if(words[i].length>4){
      return true;
    }
  }
  return false;
}

function findTheCheese (foods) {
  for(var i = 0; i < foods.length; i++){
    if(foods[i] === "cheddar" || foods[i] === "gouda" || foods[i] === "camembert"){
      return foods[i];
    }
  }
return "no cheese!";
  }

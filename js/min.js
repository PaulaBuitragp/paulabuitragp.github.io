var allData;

d3.dsv(";","../Data/PetsCitizens.csv")
.then( function(data){
  allData = data;
})
.catch(function(error){
//handle error
});


function crearTabla(){
  for (var i = 0; i < 100; i++) {
    allData[i]
  document.getElementById("crearTabla").innerHTML += ` 
  <tr> 
  <td>${allData[i]["microchip"]}</td> 
  <td>${allData[i]["species"]}</td> 
  <td>${allData[i]["sex"]}</td> 
  <td>${allData[i]["size"]}</td> 
  <td>${allData[i]["potentDangerous"]}</td> 
  <td>${allData[i]["neighborhood"]}</td> 
  </tr>  
  `
  }
  
}

function agregarMascota(){
  var microchip = null;
  microchip = document.getElementById("microchip").value;
  var species = null;
  species = document.getElementById("cf").value;
  var sex = null;
  sex = document.getElementById("hm").value;
  var size = null;
  size = document.getElementById("mpg").value;
  var potentDangerous = null;
  potentDangerous = document.getElementById("pe").value;
  var neighborhood = null;
  neighborhood = document.getElementById("localidad").value;
  var race = null;
  var owner = null;
  var address = null;
  var picture = null;
  alert(microchip + " " + species + " " + sex + " " + size + " " + potentDangerous + " " + neighborhood )
  allData.push({"microchip" : microchip, "species" : species, "sex" : sex, "size" : size, "potentDangerous" : potentDangerous, "neighborhood" : neighborhood, "race" : race, "owner" : owner, "address" : address, "picture" : picture});
  console.log(allData[allData.length - 1]);
}

function editarMascota(){
  var microchip = null;
  microchip = document.getElementById("microchip").value;
  var species1 = null;
  species1 = document.getElementById("cf").value;
  var sex1 = null;
  sex1 = document.getElementById("hm").value;
  var size1 = null;
  size1 = document.getElementById("mpg").value;
  var potentDangerous1 = null;
  potentDangerous1 = document.getElementById("pe").value;
  var neighborhood1 = null;
  neighborhood1 = document.getElementById("localidad").value;
  var race1 = null;
  var owner1 = null;
  var address1 = null;
  var picture1 = null;
  alert(microchip + " " + species1 + " " + sex1 + " " + size1 + " " + potentDangerous1 + " " + neighborhood1 );
  for (var i = 0; i < allData.length; i++) {
    if(allData[i]["microchip"] = microchip){
      console.log(allData[i]);
      allData[i] = {...allData[i],species : species1};  
      allData[i] = {...allData[i],sex : sex1};  
      allData[i] = {...allData[i],size : size1};  
      allData[i] = {...allData[i],potentDangerous : potentDangerous1};  
      allData[i] = {...allData[i],neighborhood : neighborhood1};  
      allData[i] = {...allData[i],race : race1}; 
      allData[i] = {...allData[i],owner : owner1}; 
      allData[i] = {...allData[i],address : address1}; 
      allData[i] = {...allData[i],picture : picture1}; 
      console.log(allData[i]);
      break; 
    }
  }

}




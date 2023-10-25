var array1 = [203,204, 205, 206, 207, 208, 203, 204, 205, 206];
var array2 = [203, 204, 204, 205, 206, 207, 205, 208, 203, 206, 205, 206, 204
];

function acaoBotao( array2){
  var newArray = []
  for(var i = 0; i < array2.length ; i++){
      if(newArray[array2[i]] == undefined)
       { newArray[array2[i]] = 0}
      console.log(newArray[array2[i]])
      newArray[array2[i]] = newArray[array2[i]]
      console.log(newArray[array2[i]])
  }
  
  return newArray
}
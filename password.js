var alpha = process.argv;
  function password (alpha){
  var pass = alpha[2];
  var output = "";
   for (var i=0 ; i < pass.length ; i++){
  if (pass[i]=='a'){
  output += 4;
  } else if (pass[i] =='e'){
  output += 3;
  }
  else if (pass[i] == 'o') {
    output += 0;
  } 
  else if (pass[i]== 'l'){
    output += 1;
  }
  else{
    output += pass[i]
  };
  }
  return output
  }
console.log(password(["fggf", "fghj"]));
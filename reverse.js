function translatePigLatin(str) {
  var ns;

  var rslt = str.replace((/^[^aeiou]+/gi), function(match, p1, string){
    
    ns = string.substr(match.length);
    ns = ns+ match +"ay";
  });
  
  if (ns === undefined){
    ns = str+ "way";
  }
 
  return ns;
}

translatePigLatin("pig latin");
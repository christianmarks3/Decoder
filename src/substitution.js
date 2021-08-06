// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
   let result= ""
   if(!alphabet||alphabet.length!=26){
     return false
  
   }
    let letter = {
      
    }
    for(i=0;i<alphabet.length;i++){
      const char= alphabet[i]
      if(letter[char]){
        return false
      }
      letter[char]=true
    }
    for(i=0;i<input.length;i++){
     
      let char= input.charCodeAt(i)
      if(input[i]==" "){
        result+=" "
        continue
      }
      if(encode){
      let index=char-97
      char= alphabet[index]
      
      }else{
        let index=alphabet.split("").findIndex(a=>a==input[i])
        char=String.fromCharCode(97+index)
        
      }
     result+=char
      
      
    }
    return result
    // your solution code here
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

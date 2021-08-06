// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    input=input.toLowerCase()
    if(!shift){
      return false
    }
    let result= ''    
   if(shift===0||shift<-25||shift>25){
     return false
     
   }
    if(!encode){
      shift*=-1
    }
   for(i=0;i<input.length;i++){
     
     let char = input.charCodeAt(i)
     if(char<97||char>122){
       result+=input[i]
     }else{
        char+=shift
       if(char>122){
         char-=26
       }
       if(char<97){
         char+=26
       }
     result+=String.fromCharCode(char)
     }
     
     
    }
    return result
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

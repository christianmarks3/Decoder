// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const poly = [
      [
        "a","b","c","d","e"
      ],
      [
        "f","g","h","i,j","k",
      ],
      [
        "l","m","n","o","p"
      ],
      [
       "q","r","s","t","u"
      ],
      [
        "v","w","x","y","z"
      ]
     
     
    
    ]
    let result = ""
    input=input.toLowerCase()
      if(encode){
        for(i=0;i<input.length;i+=1){
        const char= input.charCodeAt(i)
        if(input[i]==" "){
          result+=" "
          continue
        }
          for(r=0;r<poly.length;r++){
            for(c=0;c<poly[r].length;c++){
              if(poly[r][c].indexOf(input[i])>=0){
                result+=(c+1)+""+(r+1)
              }
            }
          }
        let index = char-97
        if(index>107){
          index++
        }
        let row= Math.floor(index/5)+1
        let col=(index%5)
        //result+=col+""+row
        }
      }else{
        const string = input.split(" ").join("")
        if(string.length%2==1){
          return false
        }
        for(i=0;i<input.length;i+=2){
          if(input[i]==" "){
            result+=" "
            i--
            continue
          }
      let col=input[i]
      const row = input[i+1]
      const number= row* 5 + col
      if(number>7){
        //col--
      }
      const char= poly[row-1][col-1]
      result+=char
      }
     
    }
    return result
    
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

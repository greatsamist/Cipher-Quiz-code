"use strict";

// A function that takes a str and returns encrypt also decrypt

function rot13(str) {
  let converter = "";
  for (var i = 0; i < str.length; i++) {
    let asciiNum = str[i].charCodeAt();
    if (asciiNum >= 65 && asciiNum <= 77) {
      converter += String.fromCharCode(asciiNum + 13);
    } else if (asciiNum >= 78 && asciiNum <= 90) {
      converter += String.fromCharCode(asciiNum - 13);
    }
  }
  return converter;
}
//A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z
console.log(rot13("PASSWORD")); // CNFFJBEQ
console.log(rot13("CNFFJBEQ")); // PASSWORD

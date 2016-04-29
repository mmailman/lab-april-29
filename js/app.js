'use strict';

//Conversion array

var conversionArray = ['inches', 'flOunces', 'miles', 'lbs', 'tons'];
var conversionToArray = ['cm', 'ml', 'km', 'kg', 'mTon'];

//Math functions
function inchesCon(type, value){
  if(type === 'standard'){
    return value * 2.54;
  } else {
    return value / 2.54;
  }
}

function flOuncesCon(type, value){
  if(type === 'standard'){
    return value * 29.574;
  } else {
    return value / 29.574;
  }
}

function milesCon(type, value){
  if(type === 'standard'){
    return value * 1.609;
  } else {
    return value / 1.609;
  }
}

function lbsCon(type, value){
  if(type === 'standard'){
    return value * 0.454;
  } else {
    return value / 0.454;
  }
}

function tonsCon(type, value){
  if(type === 'standard'){
    return value * 0.907185;
  } else {
    return value / 0.907185;
  }
}

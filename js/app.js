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

//Submit Handler
function submitHandler(event){
  event.preventDefault();
  var dropDownValue = document.getElementById('dropdown').value;
  var convertedValue = 0;
  console.log(dropDownValue);
  switch (dropDownValue){
  case 'inches':
    convertedValue = inchesCon('standard', parseFloat(event.target.rawValue.value));
    break;
  case 'cm':
    convertedValue = inchesCon('metric', parseFloat(event.target.rawValue.value));
    break;
  case 'flOz':
    convertedValue = flOuncesCon('standard', parseFloat(event.target.rawValue.value));
    break;
  case 'ml':
    convertedValue = flOuncesCon('metric', parseFloat(event.target.rawValue.value));
    break;
  case 'miles':
    convertedValue = milesCon('standard', parseFloat(event.target.rawValue.value));
    break;
  case 'km':
    convertedValue = milesCon('metric', parseFloat(event.target.rawValue.value));
    break;
  case 'lbs':
    convertedValue = lbsCon('standard', parseFloat(event.target.rawValue.value));
    break;
  case 'kg':
    convertedValue = lbsCon('metric', parseFloat(event.target.rawValue.value));
    break;
  case 'tons':
    convertedValue = tonsCon('standard', parseFloat(event.target.rawValue.value));
    break;
  case 'mTons':
    convertedValue = tonsCon('metric', parseFloat(event.target.rawValue.value));
    break;
  }
  convertedValue = convertedValue.toFixed(3);
  console.log(convertedValue);

  var resultsDisplay = document.getElementById('results');
  resultsDisplay.value = convertedValue;
}

//Event Listener
var conversionForm = document.getElementById('conversionForm');
conversionForm.addEventListener('submit', submitHandler);

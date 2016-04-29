'use strict';

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

function generateList(input, output, inputType, outputType){
  var liString = input + inputType + ' equals ' + output + outputType;
  var listEl = document.getElementById('resultsList');
  var liEl = document.createElement('li');
  liEl.textContent = liString;
  listEl.appendChild(liEl);
  console.log(liString);
}

//Submit Handler
function submitHandler(event){
  event.preventDefault();
  var dropDownValue = document.getElementById('dropdown').value;
  var convertedValue = 0;
  console.log(dropDownValue);
  var inputVariable = '';
  var outputVariable = '';
  switch (dropDownValue){
  case 'inches':
    convertedValue = inchesCon('standard', parseFloat(event.target.rawValue.value));
    inputVariable = ' inches';
    outputVariable = ' centimeters';
    break;
  case 'cm':
    convertedValue = inchesCon('metric', parseFloat(event.target.rawValue.value));
    inputVariable = ' centimeters';
    outputVariable = ' inches';
    break;
  case 'flOz':
    convertedValue = flOuncesCon('standard', parseFloat(event.target.rawValue.value));
    inputVariable = ' fluid ounces';
    outputVariable = ' mililiters';
    break;
  case 'ml':
    convertedValue = flOuncesCon('metric', parseFloat(event.target.rawValue.value));
    inputVariable = ' mililiters';
    outputVariable = ' fluid ounces';
    break;
  case 'miles':
    convertedValue = milesCon('standard', parseFloat(event.target.rawValue.value));
    inputVariable = ' miles';
    outputVariable = ' kilometers';
    break;
  case 'km':
    convertedValue = milesCon('metric', parseFloat(event.target.rawValue.value));
    inputVariable = ' kilometers';
    outputVariable = ' miles';
    break;
  case 'lbs':
    convertedValue = lbsCon('standard', parseFloat(event.target.rawValue.value));
    inputVariable = ' pounds';
    outputVariable = ' kilograms';
    break;
  case 'kg':
    convertedValue = lbsCon('metric', parseFloat(event.target.rawValue.value));
    inputVariable = ' kilograms';
    outputVariable = ' pounds';
    break;
  case 'tons':
    convertedValue = tonsCon('standard', parseFloat(event.target.rawValue.value));
    inputVariable = ' standard tons';
    outputVariable = ' metric tonnes';
    break;
  case 'mTons':
    convertedValue = tonsCon('metric', parseFloat(event.target.rawValue.value));
    inputVariable = ' metric tonnes';
    outputVariable = ' standard tons';
    break;
  }
  convertedValue = convertedValue.toFixed(3);
  console.log(convertedValue);

  var resultsDisplay = document.getElementById('results');
  resultsDisplay.value = convertedValue;

  var inputValue = parseFloat(event.target.rawValue.value);
  generateList(inputValue, convertedValue, inputVariable, outputVariable);
  event.target.rawValue.value = '';
}

function clearListHandler(){
  var listElement = document.getElementById('resultsList');
  listElement.innerHTML = null;
  document.getElementById('results').value = '';
}

//Event Listener
var conversionForm = document.getElementById('conversionForm');
conversionForm.addEventListener('submit', submitHandler);

var clearButtonEl = document.getElementById('clearList');
clearButtonEl.addEventListener('click', clearListHandler);

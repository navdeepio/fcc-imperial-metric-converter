/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let matches = /^(\d+(?:\.\d+)?(?:\/\d+)?)?[a-zA-Z]+$/.exec(input);
    
    if (matches) {
      if (matches[1] === undefined) {
        return 1;
      } else {
        let factors = matches[1].split('\/');
        if (factors.length === 1) {
        return parseFloat(factors[0]);
      } else {
        return (parseFloat(factors[0]) / parseFloat(factors[1]));
      }
      }
    } else {
      return 'invalid number';
    }
  };
  
  this.getUnit = function(input) {
    const str = input.match(/[a-z]+/i)[0];
    let validUnits = ['kg', 'lbs', 'gal', 'l', 'mi', 'km'];
    if (validUnits.indexOf(str.toLowerCase()) > -1) {
      return str;
    } else {
      return 'invalid unit';
    }
  };
  
  this.getReturnUnit = function(initUnit) {
    let result = 'invalid unit';
    switch(initUnit.toLowerCase()) {
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'mi':
        result = 'km';
        break;
      case 'km':
        result = 'mi';
        break;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result = 'invalid unit';
    switch (unit) {
      case 'kg':
        result = 'kilograms';
        break;
      case 'mi':
        result = 'miles';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'l':
        result = 'litres';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'km':
        result = 'kilometers';
        break;
    }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result = 0;
    switch(initUnit.toLowerCase()) {
      case 'gal':
        result = initNum * galToL;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
    }
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result = `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
    
    return result;
  };
  
}

module.exports = ConvertHandler;

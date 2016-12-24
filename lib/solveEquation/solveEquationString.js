'use strict';

const math = require('mathjs');

const solveEquation = require('./solveEquation');

function solveEquationString(equationString, debug=false) {
  const comparators = ['<=', '>=', '=', '<', '>'];

  for (let i = 0; i < comparators.length; i++) {
    const comparator = comparators[i];
    const sides = equationString.split(comparator);
    if (sides.length !== 2) {
      continue;
    }
    let leftSide, rightSide, leftNode, rightNode;

    leftSide = sides[0].trim();
    rightSide = sides[1].trim();
    if (!leftSide || !rightSide) {
      return [];
    }

    try {
      leftNode = math.parse(leftSide);
      rightNode = math.parse(rightSide);
    }
    catch (err) {
      return [];
    }
    if (leftNode && rightNode) {
      return solveEquation(leftNode, rightNode, comparator, debug);
    }
  }

  return [];
}

module.exports = solveEquationString;
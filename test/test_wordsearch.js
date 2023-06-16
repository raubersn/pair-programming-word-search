const chai = require('chai');
const assert = chai.assert;

const wordSearch = require('../wordsearch.js')

describe("#wordSearch()", function() {
  it("should return false if the word is not present", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'FRANK')

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontally", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
      ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
      ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", function() {
    const result = wordSearch([
      ['A', 'W', 'C', 'F', 'Q', 'S', 'A', 'L'],
      ['X', 'X', 'X', 'X', 'X', 'E', 'X', 'X'],
      ['Y', 'F', 'C', 'F', 'Q', 'I', 'A', 'L'],
      ['H', 'M', 'J', 'T', 'E', 'N', 'R', 'G'],
      ['W', 'H', 'C', 'S', 'Y', 'F', 'R', 'L'],
      ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
      ['U', 'B', 'T', 'W', 'A', 'L', 'A', 'I'],
      ['O', 'D', 'C', 'A', 'K', 'D', 'A', 'S'],
    ], 'SEINFELD')

    assert.isTrue(result);
  });

  it("should return false if the array contains empty arrays", function() {
    const result = wordSearch([
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ], 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return false if the array is empty", function() {
    const result = wordSearch([], 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return false if a string is passed as a paramater", function() {
    const result = wordSearch("testing!", 'SEINFELD')

    assert.isFalse(result);
  });

  it("should return false if a number is passed as a paramater", function() {
    const result = wordSearch(123456, 'SEINFELD')

    assert.isFalse(result);
  });
});

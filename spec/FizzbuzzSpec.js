'use strict';

describe('Fizzbuzz', function() {

  var fizzbuzz;

  beforeEach(function() {
    fizzbuzz = new Fizzbuzz();
  });

  describe('multiples of 3', function() {

    it('fizzes for 3', function() {
      expect(fizzbuzz.play(3)).toEqual('fizz');
    });

    it('fizzes for 6', function(){
      expect(fizzbuzz.play(6)).toEqual('fizz');
    });

  });

  describe('multiples of 3', function() {

    it('buzzes for 5', function() {
      expect(fizzbuzz.play(5)).toEqual('buzz');
    });

    it('buzzes for 25', function() {
      expect(fizzbuzz.play(25)).toEqual('buzz');
    });

  });

  describe('multiples of 3 and 5', function() {

    it('buzzes for 15', function() {
      expect(fizzbuzz.play(15)).toEqual('fizzbuzz');
    });

    it('buzzes for 30', function() {
      expect(fizzbuzz.play(30)).toEqual('fizzbuzz');
    });

  });

});

// describe('FizzBuzz', function() {

//   var fizzBuzz;

//   beforeEach(function() {
//     fizzBuzz = new FizzBuzz();
//   });

// });
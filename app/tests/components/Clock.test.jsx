var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

var Clock = require('Clock');

//tests

//call describe to group
describe('Clock', () => {
  it('should exist', () => { {/*Assertions*/}
    expect(Clock).toExist();
  });
  describe('formatSeconds', ()=> {
    it('should format seconds', () =>{
      {/*Render the component so we can test its funtions*/}
      var clock = TestUtils.renderIntoDocument(<Clock/>);
      {/*the input*/}
      var seconds = 61;
      {/*the expected result */}
      var expected = '01:01';
      {/*Actual result*/}
      var actual = clock.formatSeconds(seconds);

      expect(actual).toBe(expected);
    });
  });
});

var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

//actual component we need to render
var Clock = require('Clock');

//tests

//call describe to group
describe('Clock', () => {
  it('should exist', () => { {/*Assertions*/}
    expect(Clock).toExist();
  });
  {/*this is a render test*/}
  describe('render', () => {
    it('should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={78}/>);
      {/*root component in dom */}
      var $el =  $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();
      expect(actualText).toBe('01:18');
    });
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

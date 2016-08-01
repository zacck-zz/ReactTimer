//libraries we need to do testing
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require('jQuery');

//module to test
var Controls = require('Controls');

//actual tests
describe('Controls', () => {
  it('should Exist', () => {
    expect(Controls).toExist();
  });
  describe('render', () =>{
    it('should Render Pause Button', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="started"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      expect($pauseButton.length).toBe(1);
    });
    it('Should Render Start Button', ()=>{
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus="paused"/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      expect($pauseButton.length).toBe(1);
    });
  });
});

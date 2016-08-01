//libraries we need to do testing
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require('jQuery');


//component we are testing
var CountDownForm = require('CountDownForm');

//do the actual tests
describe('CountDownForm', () => {
  it('should exist', () =>{
    expect(CountDownForm).toExist();
  });

  //using spies to test
  it('should call onSetCountdown if valid seconds are entered', () => {
    var spy = expect.createSpy();
    /*render the components*/
    var cdform = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(cdform));

    cdform.refs.secondsInput.value = '109';
    /*simulate a submit*/
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toHaveBeenCalledWith(109);
  });

  //using spies to test
  it('should not call onSetCountdown if invalid seconds are entered', () => {
    var spy = expect.createSpy();
    /*render the components*/
    var cdform = TestUtils.renderIntoDocument(<CountDownForm onSetCountdown={spy}/>);
    var $el = $(ReactDOM.findDOMNode(cdform));

    cdform.refs.secondsInput.value = 'abc';
    /*simulate a submit*/
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(spy).toNotHaveBeenCalled();
  });
});

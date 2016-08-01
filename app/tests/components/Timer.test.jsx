//libraries we need to do testing
var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require ('react-addons-test-utils');
var $ = require('jQuery');

//module to test
var Timer = require('Timer');

describe('Timer', () =>{
  it('should exist', () =>{
    expect(Timer).toExist();
  });

  it('should start timer on started status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer .handleStatusChanged('started');
    expect(timer.state.count).toBe(0);

    setTimeout(() =>{
      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.count).toBe(1);
      done();
    },1001);
  });
  it('should pause timer on pause status', (done) =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count:11});
    timer.handleStatusChanged('started');
    timer.handleStatusChanged('paused');
    expect(timer.state.count).toBe(11);

    setTimeout(() =>{
      expect(timer.state.timerStatus).toBe('paused');
      expect(timer.state.count).toBe(11);
      done();
    },1001);
  });
  it('should stop timer on stopped status', () =>{
    var timer = TestUtils.renderIntoDocument(<Timer/>);

    timer.setState({count:11});
    timer.handleStatusChanged('started');
    timer.handleStatusChanged('stopped');
    expect(timer.state.timerStatus).toBe('stopped');
    expect(timer.state.count).toBe(0);
  });

});

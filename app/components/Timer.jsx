var React = require('react');

//import components
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
  getInitialState: function(){
    return {
      timerStatus: 'stopped',
      count: 0
    }
  },
  startTimer: function(){
    /*use the set Interval function and call it every second  */
    this.timer = setInterval(() => {
      var newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
    },1000);

  },
  handleStatusChanged: function(newTimerStatus){
    this.setState({
      timerStatus: newTimerStatus
    });
  },
  componentDidUpdate: function(prevProps, prevState){
    if(this.state.timerStatus !== prevState.timerStatus){
      switch(this.state.timerStatus){
        case 'started':
          this.handleStart();
          break;
        case 'stopped':
          this.setState({
            count:0
          });
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;

      }
    }
  },
  componentWillUnmount: function(){
    clearInterval(this.timer);
  },
  handleStart: function() {
    this.timer = setInterval(()=>{
      this.setState({
        count: this.state.count + 1
      })
    },1000);
  },
  render: function() {
    var {count, timerStatus} = this.state;
    return(
      <div>
        <h1 className="page-title">Timer</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={timerStatus} onStatusChanged={this.handleStatusChanged}/>
      </div>
    );
  }
});

//export modules
module.exports = Timer;

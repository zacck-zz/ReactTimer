var React = require('react');
//modules needed
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');


//our component
var CountDown = React.createClass({
  getInitialState: function(){
    return{
      count:0,
      coundownStatus: 'stopped'
    };
  },
  /*use component lifecyle */
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.coundownStatus !== prevState.coundownStatus) {
      /*check if previous state is same as current*/
      switch(this.state.coundownStatus) {
        case 'started':
          this.startTimer();
          break;
      }
    }
  },
  startTimer: function () {
    /*use the set Interval function and call it every second  */
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
    },1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count:seconds,
      coundownStatus: 'started'
    })
  },
  render: function() {
    var {count} = this.state;
    return(
      <div>
        <Clock totalSeconds={count}/>
        <CountDownForm onSetCountdown={this.handleSetCountdown}/>
      </div>
    );
  }
});


//always remember to export
module.exports = CountDown;

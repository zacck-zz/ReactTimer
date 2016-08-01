var React = require('react');
//modules needed
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls');


//our component
var CountDown = React.createClass({
  getInitialState: function(){
    return{
      count:0,
      countdownStatus: 'stopped'
    };
  },
  /*use component lifecyle */
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      /*check if previous state is same as current*/
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({count: 0});
        case 'paused':
          clearInterval(this.timer);
          this.timer = undefined;
          break;
      }
    }
  },

  componentWillUpdate: function(nextProps, nextState){
    /*This is called just before a component updates*/
  },
  componentWillUnmount: function() {
    /*this will be called right before the component is removed from the DOM*/
    console.log('Component did unmount');
  },
  componentWillMount: function(){
    /*this is called just before the component is shown on the screen
    N/B the DOM is not accessible at this point
    */
    console.log('Component will mount Called');

  },
  componentDidMount: function(){
    /*This is called after the component is rendered
    The DOM is accessible at this point
    */
    console.log('Component Did mount called');
  },

  startTimer: function () {
    /*use the set Interval function and call it every second  */
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: newCount >= 0 ? newCount : 0
      });
      if(newCount === 0) {
        this.setState({
          countdownStatus: 'stopped'
        });
      }
    },1000);
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count:seconds,
      countdownStatus: 'started'
    })
  },
  handleStatusChanged: function(status){
    this.setState({
      countdownStatus:status
    })
  },
  render: function() {
    var {count, countdownStatus} = this.state;

    var renderControlArea = () => {
      if(countdownStatus !== 'stopped') {
        return <Controls countdownStatus={countdownStatus} onStatusChanged={this.handleStatusChanged}/>
      } else {
        return <CountDownForm onSetCountdown={this.handleSetCountdown}/>
      }
    };
    return(
      <div>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});


//always remember to export
module.exports = CountDown;

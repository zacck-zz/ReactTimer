var React = require('react');
//modules needed
var Clock = require('Clock');
var CountDownForm = require('CountDownForm');


//our component
var CountDown = React.createClass({
  getInitialState: function(){
    return{count:0}
  },
  handleSetCountdown: function(seconds) {
    this.setState({
      count:seconds
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

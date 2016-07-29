var React = require('react');


//modules needed
var Clock = require('Clock');
var CountDown = React.createClass({
  render: function() {
    return(
      <div>
        <Clock totalSeconds={129}/>
      </div>
    );
  }
});


//always remember to export
module.exports = CountDown;

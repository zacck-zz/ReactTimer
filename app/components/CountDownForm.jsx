var React = require('react');

var CountDownForm = React.createClass({
    onSubmit: function(Event){
      Event.preventDefault();
      var strSeconds = this.refs.secondsInput.value;
      {/*do validation use a regex to check if value if a number*/}
      if(strSeconds.match(/^[0-9]*$/)) {
        this.refs.secondsInput.value = '';
        this.props.onSetCountdown(parseInt(strSeconds, 10));
      }
    },
    render: function() {
       return(
               <div>
                 <form ref="form" onSubmit={this.onSubmit} className="countdown-form">
                   <input type="text" ref="secondsInput" placeholder="Enter Time in Seconds"/>
                   <button className="button expanded">Start</button>
                 </form>
               </div>
             );
    }
});
module.exports =  CountDownForm;

var React = require('react');
//get Link and Routers
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
  render: function() {
    return(
      <div className="top-bar">
        <div clasName="top-bar-left">
          <ul className="menu top-bar-left">
            <li className="menu-text">
              Time
            </li>
            <li>
              <IndexLink activeClassName="active-link" to="/">Timer</IndexLink>
            </li>
            <li>
              <Link to="countdown" activeClassName="active-link">CountDown</Link>
            </li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu top-bar-right">
            <li className="menu-text">
              App By <a href="https://github.com/zacck" target="_blank">Zacck</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
});

//export the modile so we can use it
module.exports = Nav;

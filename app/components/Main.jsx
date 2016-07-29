var React = require('react');

//components we need in this Component
var Nav = require('Nav');


var Main = (props) => {
  return (
    <div>
      <div >
          <Nav/>
          {/*render children here*/}
          {props.children}
      </div>
    </div>
  );
}

module.exports = Main;

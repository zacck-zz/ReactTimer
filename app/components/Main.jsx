var React = require('react');

var Main = (props) => {
  return (
    <div>
      <div className="row">
        <div className="columns medium-6 large-4 small-centered">
          {/*render children here*/}
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;

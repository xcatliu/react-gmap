var React = require('react');
var Gmap = require('../src/GMap.jsx');

var styles = {
  container: {
    maxWidth: '600px',
    padding: '1em',
    margin: '0 auto'
  }
};

var App = React.createClass({
  render: function() {
    return (
      <div style={styles.container}>
        <h1>Google Maps component for React</h1>
        <h2>简单示例</h2>
        <div style={{width:'100%', height:'400px'}}>
          <Gmap
            APIKey="AIzaSyDjubW2P47DS_99icE8VJCv01Moo0yUfwU"/>
        </div>
      </div>
    );
  }
});

module.exports = App;

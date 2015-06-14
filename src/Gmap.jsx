'use strict';

var React = require('react');
var loader = require('./loader');
var assign = require('object-assign')

var GMap = React.createClass({
  getDefaultProps: function() {
    return {
      defaultMapOptions: {
        zoom: 8,
        center: {
          lat: -34.397,
          lng: 150.644
        }
      }
    };
  },
  componentWillMount: function() {
    this.loadAPI()
      .then(this.initMap)
  },
  loadAPI: function() {
    return new Promise((resolve, reject) => {
      this.loaded = false;
      loader.load(() => {
        this.loaded = true;
        this.forceUpdate(resolve);
      });
    });
  },
  getDefaultMapOptions: function() {
    return assign({}, this.props.defaultMapOptions, {
      center: new google.maps.LatLng(this.props.defaultMapOptions.center.lat, this.props.defaultMapOptions.center.lng)
    });
  },
  initMap: function() {
    return new Promise((resolve, reject) => {
      this.mapInstance = new google.maps.Map(document.getElementById('gmap'), this.getDefaultMapOptions());
    });
  },
  render: function() {
    if (!this.loaded) return <div>Loading API...</div>;
    return <div id="gmap" style={{width:'100%', height:'100%'}}/>;
  }
});

module.exports = GMap;

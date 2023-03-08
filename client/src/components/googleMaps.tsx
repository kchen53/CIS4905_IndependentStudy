import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {
  render() {
    return (
      <div id="map" style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          defaultCenter={{ lat: 37.7749, lng: -122.4194 }}
          defaultZoom={8}
        />
      </div>
    );
  }
}

export default Map;

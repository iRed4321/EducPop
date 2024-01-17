//Equivalent d'un div pour avoir le même type de bandeau à chaque page

import React from 'react';
import "../styles/components/Banner.scss";

class Banner extends React.Component {
  render() {
    return <div id="bannerContainer">
          {this.props.children}
          </div>;
  }
}

export default Banner;

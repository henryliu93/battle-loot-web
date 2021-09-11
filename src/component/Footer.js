import React from 'react';

class Footer extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="mastfoot">
            <div className="inner">
              <p>Power By <a className="https://getbootstrap.com/">Battle Loot</a>, by <a href="https://twitter.com/mdo">@battle loot</a>.</p>
            </div>
        </div>
      );
    }
  }

  export default Footer;
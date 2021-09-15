import React from 'react';

class Footer extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <div className="mastfoot">
            <div className="inner">
              <p>Join us at <a href="https://discord.com/channels/884667979655163945/884741176522063882">Discord</a> or Follow us at <a href="https://twitter.com/BattleforLoot">@Twitter</a>.</p>
            </div>
        </div>
      );
    }
  }

  export default Footer;
import React from 'react';
import {AccountContext} from '../context.js' 

class Header extends React.Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return (
        <div className="masthead clearfix container">
            <div className="inner row">
              <div className="col-md-4">
                <h3 className="masthead-brand">Battle Loot</h3>
              </div>
              <Account />
            </div>
        </div>
      );
    }
  }

  function Account(){
    return (
      <AccountContext.Consumer>{context => (
        <StatusBar address={context.accountStore.getState().address} connectWallet={context.accountStore.connectWallet}/>
      )}
      </AccountContext.Consumer>
    );
  }

  class StatusBar extends React.Component {
    constructor(props){
      super(props);
    }
    render(){
      const address = this.props.address;
      const connectWallet = this.props.connectWallet;
      if(address){
        return (
          <div className="col-md-8 row">
            <div className="col-md-12">{address}</div>
          </div>
        );
      }
      
      return (
        <div className="col-md-8 row">
            <div className="col-md-8">Connect your Wallet</div>
            <div className="col-md-4">
            <button className="btn btn-default" onClick={() => {connectWallet()}}>
              Connect
            </button>
          </div>
        </div>
      );
    }
  }

export default Header;
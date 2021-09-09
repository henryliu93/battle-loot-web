//import logo from './logo.svg';
import React from 'react';
import wallet from './wallet.js';

function Account(props){
  const address = props.status ? props.address : 'Connect your Wallet'
  const bottonContent = !props.status ? 'Connect' : 'Disconnect';
  return (
    <div className="col-md-8 row">
        <div className="col-md-8">
          {address}
        </div>
        <div className="col-md-4">
          <button className="btn btn-default" onClick={props.onClick}>{bottonContent}</button>
        </div>
    </div>
  );
}

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  renderAccount(accountStatus, accountAddress){
    return <Account status={accountStatus} address={accountAddress} onClick={()=> this.props.onClick(accountStatus)} />;
  }

  render(){
    return (
      <div className="masthead clearfix container">
            <div className="inner row">
              <div className="col-md-4">
                <h3 className="masthead-brand">Battle Loot</h3>
              </div>
              {this.renderAccount(this.props.accountStatus, this.props.accountAddress)}
            </div>
      </div>
    );
  }
}

class Board extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="inner cover board">
        <div className="row">
            <div className="col-md-5 rounded-3">
              <p>
              Top Left
              </p>
              <button className="btn btn-default">Stake</button>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-5 rounded-3">Top Right</div>
        </div>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8 central-panel rounded-3">Central Panel</div>
            <div className="col-md-2"></div>
        </div>
    </div>
    );
  }
}

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

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      connected: false,
      accountAddress: wallet.getAccount(this),
    }
  }

  updateState(account){
    if(account){
      this.setState({
        connected: true,
        accountAddress: account
      });
    }else{
      this.setState({
        connected: false,
        accountAddress: null
      });
    }
  }

  conntectOrDisconnect(status){
    if (!status){
      wallet.getAccount(this);
    }else{
      wallet.disconnect(this);
      this.setState({
        connected: false,
        accountAddress: null
      });
    }
  }

  render() {
    const accountStatus = this.state.connected;
    const accountAddress = this.state.accountAddress;
    return (
      <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <Header accountStatus={accountStatus} accountAddress={accountAddress} onClick={() => this.conntectOrDisconnect(accountStatus)}/>
          <Board />
          <Footer />
        </div>
      </div>
    </div>
    );
  }
}

export default App;

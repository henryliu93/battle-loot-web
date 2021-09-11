import React from 'react';
import wallet from './wallet.js';
import {AccountContext, accountStore} from './context.js' 
import Board from './component/Board.js'
import Footer from './component/Footer.js'
import Header from './component/Header.js';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      accountStore
    }
    wallet.getConnectedAccount(accountStore.connect);
  }

  _updateState(){
    const state = this.state.accountStore.getState();
    this.setState(state);
  }

  componentDidMount(){
    this.state.accountStore.subscribe(() => this._updateState())
  }

  render() {
    return (
      <div className="site-wrapper">
      <div className="site-wrapper-inner">
        <div className="cover-container">
          <AccountContext.Provider value={{accountStore: this.state.accountStore}}>
            <Header />
            <Board />
            <Footer />
          </AccountContext.Provider>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

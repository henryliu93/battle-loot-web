import React from 'react';
import {AccountContext} from '../context.js' 

class Board extends React.Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return (
        <AccountContext.Consumer>{context => (
            <div className="inner cover board">
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="rootErc721Address" id="rootErc721Input"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="tokenId" id="erc721TokenInput"/>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary" onClick={context.accountStore.deposit}>Deposit</button>
                </div>
              </div>
              <div className="row token-row">
                  <div className="col-6 row input-group token-input-form">
                    <div className="col input-group">
                        <input type="text" className="form-control" id="tokenInput" placeholder="TokenId" aria-label="TokenId" aria-describedby="button-addon"/>
                        <button type="submit" className="btn btn-outline-secondary" id="button-addon" onClick={context.accountStore.stake} >Register</button>
                    </div>
                  </div>
                <div className="col-6 message-panel">Rarity Panel</div>
              </div>
              <div className="row stake-row">
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="tokenId" id="withdrawInput"/>
                </div>
                <div className="col-3">
                  <button className="btn btn-default">WithDraw</button>
                </div>
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="tokenId" id="battleInput"/>
                </div>
                <div className="col-3">
                  <button className="btn btn-default" onClick={context.accountStore.battle}>Battle</button>
                </div>
              </div>
              <div className="row claim-row">
                <div className="col">
                  Claimable: {context.accountStore.bagld_to_claim > 0 ? context.accountStore.bagld_to_claim : 0} BAGLD
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary" id="button-claim" onClick={context.accountStore.claim} >Claim</button>
                </div>
              </div>
              <div className="row gap-row"></div>
              <div className="row panel-row">
                <div className="col-2"></div>
                <div className="col-8 central-panel">Battle Result</div>
                <div className="col-2"></div>
              </div>
            </div>
        )}
        </AccountContext.Consumer>
      );
    }
  }

export default Board;
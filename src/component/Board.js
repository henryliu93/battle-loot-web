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
                  Total Warriors:  {context.accountStore.getState().totalWarriors}
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control" placeholder="rootErc721Address" id="rootErc721Input"/>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="tokenId" id="erc721TokenInput"/>
                </div>
                <div className="col">
                  <button type="submit" className="btn btn-primary" onClick={context.accountStore.deposit}>Stake</button>
                </div>
              </div>
              <div className="row token-row">
                  <div className="col-6 row input-group token-input-form">
                    <div className="col input-group">
                        <input type="text" className="form-control" id="tokenInput" placeholder="TokenId" aria-label="TokenId" aria-describedby="button-addon"/>
                        <button type="submit" className="btn btn-outline-secondary" id="button-addon" onClick={context.accountStore.stake} >Register</button>
                    </div>
                  </div>
                <div className="col-6 message-panel">Your Roles : {context.accountStore.getState().stakeTokens.join(',')}</div>
              </div>
              <div className="row stake-row">
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="tokenId" id="withdrawInput"/>
                </div>
                <div className="col-3">
                  <button className="btn btn-default" onClick={context.accountStore.withdraw}>WithDraw</button>
                </div>
                <div className="col-3">
                  <input type="text" className="form-control" placeholder="tokenId" id="battleInput"/>
                </div>
                <div className="col-3">
                  <button className="btn btn-default" onClick={context.accountStore.battle}>Battle</button>
                </div>
              </div>
              <div className="row panel-row">
                <div className="col-2"></div>
                <div className="col-8 central-panel">
                    acceptorAddress: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.acceptorAddress : ''} <br/>
                    challengerRanking: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.challengerRanking : ''} <br/>
                    acceptorRanking: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.acceptorRanking : ''} <br/>
                    failNumber: {context.accountStore.getState().battleInfo ? context.accountStore.getState().battleInfo.failNumber : ''} <br/>
                    result: {context.accountStore.getState().battleInfo ? (context.accountStore.getState().battleInfo.result ? 'Won' : 'Lose') : ''}
                </div>
                <div className="col-2"></div>
              </div>
              <div className="row gap-row"></div>
              <div className="row claim-row">
                <div className="col">
                  Claimable: {context.accountStore.getState().bagld_to_claim > 0 ? context.accountStore.getState().bagld_to_claim : 0} BAGLD
                </div>
                <div className="col">

                  <button type="submit" className="btn btn-primary" id="button-claim" onClick={context.accountStore.claimReward}>Claim</button>
                </div>
              </div>
            </div>
        )}
        </AccountContext.Consumer>
      );
    }
  }

export default Board;

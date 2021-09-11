import React from 'react';

class Board extends React.Component {
    constructor(props){
      super(props);
    }
  
    render(){
      return (
        <div className="inner cover board">
            <div className="row token-row">
                <div className="col-md-6 row input-group token-input-form">
                    <div className="col-md-8">
                        <input type="text" className="form-control" id="tokenInput" placeholder="TokenId"/>
                    </div>
                    <div className="col-md-4">
                        <button className="btn btn-primary mb-3">Confirm</button>
                    </div>
                </div>
                <div className="col-md-6 message-panel">Rarity Panel</div>
            </div>
            <div className="row stake-row">
                <div className='col-md-3'>
                    <button className="btn btn-default">Stake</button>
                </div>
                <div className="col-md-6"></div>
                <div className="col-md-3">
                <button className="btn btn-default">Battle</button>
                </div>
            </div>
          <div className="row gap-row"></div>
          <div className="row panel-row">
              <div className="col-md-2"></div>
              <div className="col-md-8 central-panel">Battle Result</div>
              <div className="col-md-2"></div>
          </div>
      </div>
      );
    }
  }

export default Board;
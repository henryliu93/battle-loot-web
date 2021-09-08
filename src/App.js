//import logo from './logo.svg';


function App() {
  return (
    <div className="site-wrapper">

      <div className="site-wrapper-inner">

        <div className="cover-container">

          <div className="masthead clearfix">
            <div className="inner">
              <h3 className="masthead-brand">Battle Loot</h3>
              <nav>
                <ul className="nav masthead-nav">
                  <li className="active"><a href="#">Wallet Status</a></li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="inner cover">
            <div className="row">
              <div className="col-md-5">
                Top Left
                <a href="#" className="btn btn-lg btn-default">Learn more</a>
              </div>
              <div className="col-md-5 col-md-offset-2">Top Right</div>
            </div>
            <div className="row">
              <div className="col-md-8 col-md-offset-2">Central Panel</div>
            </div>
          </div>

          <div className="mastfoot">
            <div className="inner">
              <p>Power By <a className="https://getbootstrap.com/">Battle Loot</a>, by <a href="https://twitter.com/mdo">@battle loot</a>.</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

export default App;

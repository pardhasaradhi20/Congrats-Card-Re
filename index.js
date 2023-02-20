const element = (
  <div className="bg-container">
    <h1 className="heading">Congrulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="image col-sm-12"
      />
      <h1>Kiran</h1>
      <p>vishnu institute of computer Education and technologies bhimavaram</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="image col-sm-12"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

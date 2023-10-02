import "./LandingPage.css";

const LandingPage = () => {
  return (
    <header className="shadow">
      <div className="landing_page">
        <div className="main">
          <div className="home">
            <h1 className="home_header">
              Nasza firma oferuje najwyższej jakości produkty.
            </h1>
            <p className="home_content">Nie wierz nam na słowo - sprawdź</p>
            <a href="#offer">
              <button className="btn">oferta</button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LandingPage;

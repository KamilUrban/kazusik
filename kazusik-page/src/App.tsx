import './App.css'
import hero from './assets/hero.png'
import logo from './assets/logo.png'
import stopkaLogo from './assets/stopka_logo.png'


function App() {
  return (
    <div className="page">
      
      {/* TOP SECTION */}
      <section className="hero" style={{ backgroundImage: `url(${hero})` }}>
         <div className="overlay">
            <img src={logo} alt="KAZUSIK logo" className="logo" />
            <div className="center">
              <button className="cta">Umów Spotkanie</button>
            </div>
         </div>
      </section>

      {/* BOTTOM SECTION */}
      <section className="bottom">
        <div className="bottom-content">
          <h2>Professional. Reliable. Simple.</h2>
        </div>
      </section>
      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-content">
          <h3>Kontakt</h3>
          <p>Email: kontakt@kazusik.pl</p>
          <p>Tel: +48 123 456 789</p>
          <p>Adres: Gdańsk, Polska</p>
        </div>

        <div className="footer-logo-wrapper">
          <img src={stopkaLogo} alt="KAZUSIK logo stopka" className="footer-logo" />
        </div>
      </footer>
    </div>
  )
}

export default App
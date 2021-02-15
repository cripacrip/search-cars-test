
import user from './image/icons/user.svg'
import calendar from './image/icons/calendar.svg'
import fuel from './image/icons/fuel.svg'
import gearbox from './image/icons/gearbox.svg'
import speed from './image/icons/speed.svg'
import lang from './image/icons/lang.svg'
import instagram from './image/icons/instagram.svg'
import facebook from './image/icons/facebook.svg'
import arrowLeft from './image/icons/arrow-left.svg'
import arrowRight from './image/icons/arrow-right.svg'
import audi1 from './image/cars/audi1.jpg'
import allroad from './image/cars/allroad.png'
import allroad02 from './image/cars/allroad02.png'
import allroad07 from './image/cars/allroad07.png'
import avantOld from './image/cars/avant-old.png'
import avant60 from './image/cars/avant1960.png'
import noCars from './image/cars/no-cars.png'
import advertisement1 from './image/advertisement1.png'
import advertisement2 from './image/advertisement2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="container-large">
          <div className="header__inner">
            <div className="header__inner-left">
              <div className="header__logo">LOGO</div>
              <nav className="nav">
                <a className="nav__link" href="/#">Blog</a>
                <a className="nav__link" href="/#">Contanc</a>
                <a className="nav__link" href="/#">Help</a>
                <a className="nav__link" href="/#">Dealer</a>
                <a className="nav__link" href="/#">Carrier</a>
              </nav>
            </div>
            <button className="burger" type="button" id="navToggle">
					      <span className="burger__item">Menu</span>
				      </button>
            <div className="header__inner-right">
              <div className="nav__login">
                <img src={user} className="nav__login-icon" alt="icon1"/>
                <p className="nav__login-text">Sign In</p>
              </div>
              <div className="nav__lang">
                <img src={lang} alt="lang"/>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="search">
        <div className="container">
          <div className="search__form">
          <div className="search__back">
            <img src={arrowLeft}  alt="arrow-left"/>
            <h3 className="search__back-text">BLog</h3>
          </div>
            <div className="search__form-top">
              <div className="search__form-first">
                <form className="form__action">
                  <div className="form__action-buttons">
                    <button className="form-button">All</button>
                    <button className="form-button">Used</button>
                    <button className="form-button">Classic</button>
                    <button className="form-button">New</button>
                  </div>
                  <label className="form__action-label">Vehicle Type</label>
                  <select className="form__action-select">
                    <option className="form__action-select-value" value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                  </select>

                  <label className="form__action-label">Manufacturer</label>
                  <select className="form__action-select">
                    <option value="">All</option>
                    <option value="">Audi</option>
                    <option value="">BMW</option>
                    <option value="">Ford</option>
                    <option value="">Honda</option>
                  </select>

                  <label className="form__action-label">Model</label>
                  <select className="form__action-select">
                    <option value="">A4</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                    <option value="">All</option>
                  </select>
                </form>
              </div>
              <div className="search__form-second">
                <form className="form__action grid-form">
                  <label className="form__action-label">Year</label>
                  <div className="form__action-pick">
                    <select className="form__action-select choice">
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                    </select>

                    <select className="form__action-select choice">
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                    </select>
                  </div>

                  <label className="form__action-label">Milage (miles)</label>
                  <div className="form__action-pick">
                    <select className="form__action-select choice">
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                    </select>
                    <select className="form__action-select choice">
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                    </select>
                  </div>

                  <label className="form__action-label">Price ($)</label>
                  <div className="form__action-pick">
                    <input className="form__action-select choice" placeholder="from" />
                    <input className="form__action-select choice" placeholder="to" />
                  </div>
                </form>
              </div>
            </div>
            <div className="search__checkbox">
            <div className="form__action-checkbox-label">Transmission</div>
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Manual gearbox</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Semi-automatic</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Automatic transmission</p>
                  </div>
                </div>
            </div>
            <div className="form__action">
              <div className="search__form-last">
              <label className="form__action-label">Days on Market</label>
                  <div className="form__action-pick">
                    <select className="form__action-select choice">
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                    </select>

                    <select className="form__action-select choice">
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                      <option value="">All</option>
                    </select>
                  </div>
              </div>
            </div>
            <div className="search__checkbox">
            <div className="form__action-checkbox-label">Drivertrain</div>
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input className="form__action-pick-input" type="checkbox" />
                    <p className="form__action-pick-text">All Wheel Drive</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Front-Wheel Drive</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Rear-Wheel Drive</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Unknown</p>
                  </div>
                </div>
            </div>
            <div className="search__checkbox">
            <div className="form__action-checkbox-label">Fuel Type</div>
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Gasoline</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Hybrid</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Automatic transmission</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Diesel</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Gas</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Unknown</p>
                  </div>
                </div>
            </div>
            <div className="search__checkbox">
            <div className="form__action-checkbox-label">New / Used / CPO</div>
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Certified Pre-Owner</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Used</p>
                  </div>
                </div>
            </div>
            <div className="search__checkbox">
            <div className="form__action-checkbox-label">Seating Capacity</div>
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">2</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">4</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">5</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">7</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Unknown</p>
                  </div>
                </div>
            </div>
            <div className="search__checkbox">
            <div className="form__action-checkbox-label">Seller  Type</div>
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Seller</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Seller</p>
                  </div>
                </div>
            </div>
            <div className="search__checkbox">
                <div className="form__action-pick check">
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Hide vehicles without photos</p>
                  </div>
                  <div className="form__action-pick-label">
                    <input type="checkbox" />
                    <p className="form__action-pick-text">Only show recent price drops</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="cars">
            <div className="cars__search">
              <div className="cars__search-top">
                <button className="cars__search-top-button">Save Search</button>
                <div className="cars__search-top-result">19,817</div>
                <p className="cars__search-top-text"> Ads matching your search criteria</p>
              </div>
              <div className="cars__search-bottom">
                <div className="cars__search-desc">Used <span>&times;</span></div>
                <div className="cars__search-desc">Audi <span>&times;</span></div>
                <div className="cars__search-desc">Price>$10 000 <span>&times;</span></div>
              </div>
            </div>
              <div className="cars__inner">
                <div className="cars__items">
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={audi1} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">Audi A6 Avant 2012</h2>
                      <div className="cars__price">$ 28,500</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={allroad} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">AUDI - ALL ROAD 2004</h2>
                      <div className="cars__price">$ 2,800</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={noCars} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">Audi A6 Avant 2012</h2>
                      <div className="cars__price">$ 28,500</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                  <div className="advertisement">
                    <img src={advertisement1} alt="advertisement" />
                  </div>
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={allroad07} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">AUDI - ALL ROAD 2007</h2>
                      <div className="cars__price">$ 2,800</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={avantOld} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">Audi A6 Avant 2012</h2>
                      <div className="cars__price">$ 28,500</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={allroad02} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">AUDI - ALL ROAD 2002</h2>
                      <div className="cars__price">$ 2,800</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                  <div className="advertisement">
                    <img src={advertisement2} alt="advertisement" />
                  </div>
                  <div className="cars__item">
                    <div className="cars__item-left">
                      <img src={avant60} className="cars__item-image" alt="audi" />
                    </div>
                    <div className="cars__item-right">
                      <h2 className="cars__name">Audi A6 Avant 2012</h2>
                      <div className="cars__price">$ 28,500</div>
                      <div className="cars__features">
                        <div className="cars__features-item">
                          <img src={calendar} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">2012</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={speed} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">206,468 Mi</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={fuel} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Diesel</p>
                        </div>
                        <div className="cars__features-item">
                          <img src={gearbox} className="cars__features-item-icon" alt="calendar" />
                          <p className="cars__features-option">Automatic</p>
                        </div>
                      </div>
                      <div className="cars__desc">
                        ca. 6,7 l/100km (komb.), ca. 179 g CO₂/km (komb.)
                        EZ 06/2009, 200.000&nbsp;km, 176kW (239 PS) Kombi,
                        Diesel, Automatik
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pagination">
                  <a href="/#"><img src={arrowLeft} alt="arrow" /> Prev</a>
                  <a href="/#">1</a>
                  <a href="/#">2</a>
                  <a href="/#">3</a>
                  <a href="/#">4</a>
                  <a href="/#">5</a>
                  <a href="/#">6</a>
                  <a href="/#">Next <img src={arrowRight} alt="arrow"/></a>
                </div>
              </div>
          </div>
        </div>
      </section>
      <section className="footer">
        <div className="container-large">
          <div className="footer__nav">
            <div className="footer__nav-left">
              <div className="footer__nav-logo-text">
                <div className="footer__nav-logo">
                  LOGO
                </div>
                <div className="footer__nav-text">
                  The marketplace for USU Cars,
                  American Cars Muscle Cars and Oldtimer
                  from the United States.
                </div>
              </div>
              <div className="footer__nav-wrapper">
                <div className="footer__nav-links">
                  <a href="/#" className="footer__nav-link">Blog</a>
                  <a href="/#" className="footer__nav-link">Contact</a>
                  <a href="/#" className="footer__nav-link">Help</a>
                </div>
                <div className="footer__nav-links">
                  <a href="/#" className="footer__nav-link">Dealer</a>
                  <a href="/#" className="footer__nav-link">Privacy Policy</a>
                  <a href="/#" className="footer__nav-link">Terms</a>
                </div>
                <div className="footer__nav-links">
                  <a href="/#" className="footer__nav-link">Advertising</a>
                  <a href="/#" className="footer__nav-link">Press</a>
                  <a href="/#" className="footer__nav-link">Carrier</a>
                </div>
              </div>
            </div>
            <div className="footer__nav-right">
              <div className="footer__nav-social">
                <img src={instagram} alt="instagramm" className="footer__nav-social-icon" />
                <img src={facebook} alt="facebook" className="footer__nav-social-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;

import { Container } from "react-bootstrap";
import { RentButton } from "../../pages/Home/components/RentButton";
import PropTypes from "prop-types";
import { SearchForm } from "../SearchForm/SearchForm";
import Example from "../Offcanvas/Offcanvas";

const Hero = (props) => {
  const { withRentButton = true, withSearchForm = false, withHeroContent = true, withSearchResultForm = false } = props;

  return (
    <section
      id="hero"
      className="mb-3"
      style={{
        position: "relative",
      }}
    >
      <Example />
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <span className="logo"></span>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#features">
                  Our Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#features">
                  Why Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#features">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#features">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Container className="hero-content">
        {withHeroContent && (
          <div className="row g-0">
            <div className="col-sm-12 col-lg-6">
              <div className="row">
                <div className="col-lg-10">
                  <h1>Sewa dan Rental Mobil Terbaik di Kawasan (Lokasimu)</h1>
                  <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  {withRentButton ? <RentButton /> : <></>}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-lg-6">
              <div className="hero-image">
                <picture>
                  <source media="" srcset="./images/img_car.png" />
                  <source media="" srcset="./images/img_car@3x.png" />
                  <img src="./images/img_car@3x.png" className="img-fluid object-fit-cover" alt="img_car" />
                </picture>
              </div>
            </div>
          </div>
        )}
      </Container>
      {withSearchForm && <SearchForm />}
    </section>
  );
};

export default Hero;

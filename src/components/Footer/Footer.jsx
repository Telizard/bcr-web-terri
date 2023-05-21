export const Footer = () => {
  return (
    <section id="footer" className="footer">
      <div className="container">
        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-start gap-3">
          <div className="fw-bold">
            <div className="mb-2">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</div>
            <div className="mb-2">binarcarrental@gmail.com</div>
            <div>081-233-334-808</div>
          </div>
          <div className="menu">
            <ul>
              <li>Our Services</li>
              <li>Why Us</li>
              <li>Testimonial</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <div className="fw-bold mb-2">Connect with us</div>
            <div className="d-flex gap-2">
              <img className="m-1 pt-2" src={require("../aset/facebook.png")} alt="" />
              <img className="m-1 pt-2" src={require("../aset/ig3.png")} alt="" />
              <img className="m-1 pt-2" src={require("../aset/twitter3.png")} alt="" />
              <img className="m-1 pt-2" src={require("../aset/mail.png")} alt="" />
              <img className="m-1 pt-2" src={require("../aset/twitch.png")} alt="" />
            </div>
          </div>
          <div>
            <div className="fw-bold mb-2">Copyright Binar 2023</div>
            <div>
              <span className="logo"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

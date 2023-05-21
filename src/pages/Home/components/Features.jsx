import { Container, Row, Col } from "react-bootstrap";

export const Features = () => {
  return (
    <section id="features" className="mb-3 py-5">
      <Container>
        <Row>
          <div className="col-sm-12 col-lg-6">
            <div className="p-5 p-lg-0">
              <picture>
                <img src="./images/img_service.png" className="img-fluid object-fit-cover" alt="img_service" />
              </picture>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <h1>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
            <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
            <div>
              <ul style={{ listStyle: "none" }}>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../../../components/aset/ceklis.png")} alt="" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../../../components/aset/ceklis.png")} alt="" />
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../../../components/aset/ceklis.png")} alt="" />
                    Sewa Mobil Jangka Panjang Bulanan
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../../../components/aset/ceklis.png")} alt="" />
                    Gratis Antar - Jemput Mobil di Bandara
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../../../components/aset/ceklis.png")} alt="" />
                    Layanan Airport Transfer / Drop In Out
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

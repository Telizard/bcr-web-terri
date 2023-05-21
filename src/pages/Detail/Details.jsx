import { useEffect, useState } from "react";
import { Card, Form, Container, Row, Col } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const [name, setName] = useState();
  const [image, setImage] = useState();

  const { id } = useParams();
  let fetchStatus = async () => {
    let result = await axios.get(`https://bootcamp-rent-cars.herokuapp.com/customer/car/${id}`);
    console.log(result.data, "<<<<<");
    setName(result.data.name);
    setImage(result.data.image);
  };
  useEffect(() => {
    fetchStatus();
  }, []);

  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary mb-3 "
          id="hero"
          style={{
            position: "relative",
            height: "250px",
          }}
        >
          <div className="container">
            <a className="navbar-brand" href="/">
              <span className="logo2"></span>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navbarNav">
              <ul className="navbar-nav navtext">
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
      </div>
      <Container>
        <div className="container kotak d-flex justify-content-center">
          <div className=" w-100 m-3 p-3">
            <div className="container flex-wrap">
              <div className="row">
                <h6 className="fw-bold">Pencarianmu</h6>
                <div className="col">
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Nama Mobil</Form.Label>
                      <Form.Control type="email" placeholder="nama mobil" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col">
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Kategori</Form.Label>
                      <Form.Control type="email" placeholder="kategori" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col">
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Harga Sewa per Hari</Form.Label>
                      <Form.Control type="email" placeholder="Harga Sewa per Hari" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="col">
                  <Form>
                    <Form.Group className="mb-3" controlId="">
                      <Form.Label>Status</Form.Label>
                      <Form.Control type="email" placeholder="Status" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div className="container">
        <div className="row m-2 pt-3">
          <div className="col">
            <div className="card m-2  justify-content-center">
              <div className="card-body w-100">
                <h6 className="text-start fw-bold pt-3">Tentang Paket</h6>
                <h6 className="text-start pt-2 fw-bold">Include</h6>
                <ul className="text-start" style={{ color: "#8A8A8A" }}>
                  <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
                  <li> Sudah termasuk bensin selama 12 jam</li>
                  <li>Sudah termasuk Tiket Wisata</li>
                  <li>Sudah termasuk pajak</li>
                </ul>
                <h6 className="text-start pt-2 fw-bold">Exclude</h6>
                <ul className="text-start" style={{ color: "#8A8A8A" }}>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li> Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
                <h6 className="text-start pt-2 fw-bold">Refund, Reschedule, Overtime</h6>
                <ul className="text-start" style={{ color: "#8A8A8A" }}>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                  <li> Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                  <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                  <li>Tidak termasuk akomodasi penginapan</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col mt-2">
            <div className="card w-75 d-flex ">
              <div className="card-body justify-content-end ">
                <div className=" pt-2 ">
                  <img src={image} style={{ width: "300px", height: "150px" }} alt="" className="justify-content-center" />
                </div>
                <h6 className="text-start fw-bold pt-5">{name}</h6>
                <div className="user1">
                  {" "}
                  <img src="aset/users.png" alt="" />
                  <h6 className="orang" style={{ fontSize: "small" }}>
                    6-8 Orang
                  </h6>
                </div>
                <div className="justify-content-between pt-5">
                  <h6 className=" fw-bold text-start">Total</h6>
                  <h6 className="fw-bold text-end gope">Rp 500.000</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container text-start mt-5 pt-5">
        <div className="row">
          <div className="col">
            <h6 className="fw-bold">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
            <h6 className="fw-bold pt-3">binarcarrental@gmail.com</h6>
            <h6 className="fw-bold pt-3">081-233-334-808</h6>
          </div>
          <div className="col services">
            <h6 className>Our services</h6>
            <h6 className="pt-3">Why Us</h6>
            <h6 className="pt-3">Testimonial</h6>
            <h6 className="pt-3">FAQ</h6>
          </div>
          <div className="col text-start ">
            <h6 className="fw-bold">Connect with us</h6>
            <img className="m-1 pt-2" src={require("../../components/aset/facebook.png")} alt="" />
            <img className="m-1 pt-2" src={require("../../components/aset/ig.png")} alt="" />
            <img className="m-1 pt-2" src={require("../../components/aset/twitter.png")} alt="" />
            <img className="m-1 pt-2" src={require("../../components/aset/mail.png")} alt="" />
            <img className="m-1 pt-2" src={require("../../components/aset/twitch.png")} alt="" />
          </div>
          <div className="col">
            <h6 className="fw-bold">Copyright Binar 2022</h6>
            <img className="mt-2 pt-2" src={require("../../components/aset/logo.png")} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

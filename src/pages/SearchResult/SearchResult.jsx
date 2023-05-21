import React, { useState, useEffect } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import style from "./searchresult.css";

export const SearchResult = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [filter, setFilter] = useState({
    name: "",
  });
  const [data, setData] = useState(null);
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    if (fetchStatus === true) {
      axios
        .get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car")
        .then((res) => {
          setData([...res.data.cars]);
        })
        .catch((error) => {});
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  console.log(data);

  const handleChangeFilter = (event) => {
    setFilter({ ...filter, [event.target.name]: event.target.value });
  };

  const handleFilter = (event) => {
    event.preventDefault();
    let fetchStatus = async () => {
      let result = await axios.get("https://bootcamp-rent-cars.herokuapp.com/customer/v2/car");

      let data = result.data.cars;
      console.log(data);
      let filterData = data.filter((res) => {
        return res.name.toLowerCase().includes(filter.name.toLowerCase());
      });
      console.log(filterData);
      if (filterData.length === 0) {
        setData([]);
        console.log("Sorry, no data");
      } else {
        setData(filterData);
      }
    };
    fetchStatus();
  };

  const handleSubmit = (evt) => {
    navigate(`/result?name=${name}&category=${category}`);
  };

  return (
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

      <form onSubmit={handleFilter}>
        <div className="container d-flex justify-content-center">
          <div className="kotak w-75">
            <div className="container text-center m-3">
              <div className="row">
                <div className="col">
                  <div>
                    <div className="mb-3">
                      <label htmlFor="exampleInputEmail1" className="form-label">
                        Nama Mobil
                      </label>
                      <input onChange={handleChangeFilter} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ketik nama/tipe mobil" value={filter.name} name="name" />
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Kategori
                    </label>
                    <select className="form-select" aria-label="Default select example" onChange={(evt) => setCategory(evt.target.value)}>
                      <option selected>Masukan Kapasitas Mobil</option>
                      <option value={1}>2-4 Orang</option>
                      <option value={2}>4-6 Orang</option>
                      <option value={3}>6-8 Orang</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Harga
                    </label>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Masukan harga sewa perhari</option>
                      <option value={1}> {"<"} Rp 400.000</option>
                      <option value={2}>Rp. 400.000 - Rp. 600.000</option>
                      <option value={3}>{">"} Rp 400.000</option>
                    </select>
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Status
                    </label>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Disewa</option>
                      <option value={1}>Tersedia</option>
                      <option value={2}>Tidak Ada</option>
                    </select>
                  </div>
                </div>
                <div className="col p-4">
                  <button type="submit" className="btn btn-outline-primary" style={{ background: "" }} id="tombol1">
                    Cari Mobil
                  </button>
                </div>

                <Container className="pt-5">
                  <h3>Hasil Pencarian</h3>
                  <Row>
                    {data != null &&
                      data.map((res, index) => {
                        return (
                          <Col key={index} md={4}>
                            <Card style={{ width: "100%" }}>
                              <Card.Img variant="top" src={res.image} />
                              <Card.Body>
                                <Card.Title>
                                  {res.name} {res.id}
                                </Card.Title>
                                <Card.Text>{res.price}/hari</Card.Text>
                                <Card.Text>
                                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur ex minima in, veritatis labore beatae animi quas dolore quia id accusantium, suscipit magnam, tempora velit dolores dolorum iusto
                                  recusandae. Dolore?
                                </Card.Text>
                              </Card.Body>
                              <Link to={`/detail/${res.id}`}>
                                <Button variant="success">Pilih Mobil</Button>
                              </Link>
                            </Card>
                          </Col>
                        );
                      })}
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

import { useState } from "react";
import { Container, Card, Form, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const SearchForm = () => {
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [price, setPrice] = useState();
  const [status, setStatus] = useState();

  const renderFormData = () => (
    <div>
      <h2>Form Data</h2>
      <div>Nama Mobil : {name}</div>
      <div>Kategori : {category}</div>
      <div>Harga : {price}</div>
      <div>Status : {status}</div>
    </div>
  );

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("form data: ", {
      name,
      category,
      price,
      status,
    });

    localStorage.setItem(
      "formData",
      JSON.stringify({
        name,
        category,
        price,
        status,
      })
    );
  };

  return (
    <>
      <Container className="py-3 search-form">
        <Card className="p-3 my-5">
          <Form onSubmit={(e) => onSubmit(e)}>
            <Row>
              <Col lg={3} sm={12}>
                <Form.Group>
                  <Form.Label>Nama Mobil</Form.Label>
                  <Form.Control type="text" placeholder="Ketik nama / tipe mobil" className="search-input" onChange={(e) => setName(e.target.value)}></Form.Control>
                </Form.Group>
              </Col>
              <Col lg={3} sm={12}>
                <Form.Group>
                  <Form.Label>Kategori</Form.Label>
                  <Form.Select className="search-input" onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Pilih Kategori</option>
                    <option value="1">2 - 4 orang</option>
                    <option value="2">4 - 6 orang</option>
                    <option value="3">6 - 8 orang</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={3} sm={12}>
                <Form.Group>
                  <Form.Label>Harga</Form.Label>
                  <Form.Select className="search-input" onChange={(e) => setPrice(e.target.value)}>
                    <option value="">Pilih Harga</option>
                    <option value="1">{"< Rp. 400.000"}</option>
                    <option value="2">{"Rp. 400.000 - Rp. 600.000"}</option>
                    <option value="3">{"> Rp. 400.000"}</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col lg={3} sm={12}>
                <div className="d-flex align-items-end gap-3">
                  <Form.Group className="flex-fill">
                    <Form.Label>Status</Form.Label>
                    <Form.Select className="search-input" onChange={(e) => setStatus(e.target.value)}>
                      <option value="">Pilih Status</option>
                      <option value="1">Disewa</option>
                      <option value="2">Tersedia</option>
                    </Form.Select>
                  </Form.Group>
                  <Link to="/SearchResult">
                    <Button type="submit" variant="success">
                      Cari Mobil
                    </Button>
                  </Link>
                </div>
              </Col>
            </Row>
          </Form>
        </Card>
      </Container>
    </>
  );
};

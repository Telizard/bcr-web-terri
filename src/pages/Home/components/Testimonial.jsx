import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

export const Testimonial = () => {
  const testimonials = ["AAA", "BBB", "CCC"];

  const [index, setIndex] = useState(0);

  const onSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <section id="testimonial" className="mb-3 py-3">
      <div className="text-center pt-4 d-flex justify-content-center">
        <div className="row">
          <div className="col justify-content-center">
            <img src={require("../../../components/aset/testi1.png")} alt="" />
            <img src={require("../../../components/aset/testi2.png")} alt="" />
            <img src={require("../../../components/aset/testi3.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

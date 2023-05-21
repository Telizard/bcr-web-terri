import { Accordion } from "react-bootstrap";

export const Faq = () => {
  const faqs = ["AAA", "BBB", "CCC"];
  return (
    <section id="faq" className="mb-3 py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <div className="text-center text-lg-start">
              <h2>Frequently Asked Questions</h2>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <Accordion>
              {faqs.map((item) => (
                <Accordion.Item key={item} eventKey={item}>
                  <Accordion.Header>
                    Apa saja syarat yang dibutuhkan?
                  </Accordion.Header>
                  <Accordion.Body>
                    <strong>This is the first item's accordion body.</strong>
                    It is shown by default, until the collapse plugin adds the
                    appropriate classes that we use to style each element. These
                    classes control the overall appearance, as well as the
                    showing and hiding via CSS transitions. You can modify any
                    of this with custom CSS or overriding our default variables.
                    It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the
                    transition does limit overflow.
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

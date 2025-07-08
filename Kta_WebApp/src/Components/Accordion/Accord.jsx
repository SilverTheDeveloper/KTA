import Accordion from 'react-bootstrap/Accordion';
import './Accord.scss'
function Accord() {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>what makes kta tile adhesives different from other brands?
        </Accordion.Header>
        <Accordion.Body>
          kta adhesives are engineered to meet isi, en, and ansi standards. our products are polymer-enhanced for superior bonding, easy application, and long-term durability — even in extreme conditions.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Which tile adhesive should i use for large format or natural stone tiles?
        </Accordion.Header>
        <Accordion.Body>
          For large format tiles or stone installations, we recommend using our c2tes1 or r2t grade adhesives, designed for high-performance bonding with no slip and extended open time.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Are your products suitable for exterior use?
        </Accordion.Header>
        <Accordion.Body>
          Yes. our c2te and c2tes1 formulations are specifically designed to handle exterior conditions, including moisture, temperature variations, and heavy load-bearing areas.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Can i use kta adhesives for vertical tile installations?
        </Accordion.Header>
        <Accordion.Body>
          Absolutely. our anti-sag formulations are perfect for wall applications, ensuring tiles stay in place without slippage during setting.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Do you offer technical support or on-site guidance?

        </Accordion.Header>
        <Accordion.Body>
          Yes, we provide full technical support including product training, mixing instructions, site demos, and troubleshooting to ensure flawless application.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Where can i buy kta products?

        </Accordion.Header>
        <Accordion.Body>
          You can purchase kta products through our authorized distributors and dealers. contact us for your nearest supplier or bulk order inquiries.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Where can i buy kta products?

        </Accordion.Header>
        <Accordion.Body>
          You can purchase kta products through our authorized distributors and dealers. contact us for your nearest supplier or bulk order inquiries.

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Do you offer private label or contract manufacturing?

        </Accordion.Header>
        <Accordion.Body>
          Yes, we work with several brands under private label/oem agreements. reach out to our team for collaboration opportunities.

        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Accord;
import Accordion from 'react-bootstrap/Accordion';
import './Accord.scss'
function Accord() {
  return (
<Accordion>
  <Accordion.Item eventKey="0">
    <Accordion.Header>What makes KTA tile adhesives different from other brands?</Accordion.Header>
    <Accordion.Body>
      KTA adhesives are specially engineered to meet ISI, EN, and ANSI standards. Our polymer-enhanced formulas ensure excellent bonding strength, smooth application, and long-lasting durability — even under extreme weather or heavy usage conditions.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="1">
    <Accordion.Header>Which tile adhesive should I use for large format or natural stone tiles?</Accordion.Header>
    <Accordion.Body>
      For large format tiles or natural stone installations, we recommend our C2TES1 or R2T grade adhesives. These provide high-performance bonding, prevent tile slippage, and offer extended open time for easy adjustments during installation.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="2">
    <Accordion.Header>Are your products suitable for exterior use?</Accordion.Header>
    <Accordion.Body>
      Yes, our C2TE and C2TES1 adhesives are specially designed for outdoor applications. They can withstand exposure to moisture, extreme temperature variations, and heavy load-bearing areas without compromising their strength.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="3">
    <Accordion.Header>Can I use KTA adhesives for vertical tile installations?</Accordion.Header>
    <Accordion.Body>
      Absolutely. Our advanced anti-sag formulations are ideal for wall applications, ensuring tiles stay firmly in place without sliding during the setting process, making installation faster and cleaner.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="4">
    <Accordion.Header>Do you offer technical support or on-site guidance?</Accordion.Header>
    <Accordion.Body>
      Yes, we offer complete technical support including detailed product training, correct mixing and application instructions, on-site demonstrations, and troubleshooting assistance to help you achieve a flawless finish.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="5">
    <Accordion.Header>Where can I buy KTA products?</Accordion.Header>
    <Accordion.Body>
      KTA products are available through our network of authorized distributors and dealers. Contact us to find your nearest supplier or to place bulk orders directly with our sales team.
    </Accordion.Body>
  </Accordion.Item>

  <Accordion.Item eventKey="6">
    <Accordion.Header>Do you offer private label or contract manufacturing?</Accordion.Header>
    <Accordion.Body>
      Yes, we collaborate with various brands under private label and OEM manufacturing agreements. Reach out to our team to discuss potential partnerships, product customization, and contract manufacturing options.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>

  );
}

export default Accord;
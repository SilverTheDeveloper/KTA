import React from 'react'
import styles from './Terms.module.scss'
function Terms() {
  return (
    <div>
      <div className={styles.termsPage}> 
             <div className={styles.heading}>Terms & Conditions – <span className={styles.KtaHeading}>KTA Solutions</span></div>

        <p className={styles.KtaDesc}>
          Welcome to KTA Solutions. By accessing or using our website, products,
          or services, you agree to comply with the following Terms & Conditions.
          Please read them carefully.
        </p>

        <h2>1. General</h2>
        <ul>
          <li>
            These Terms & Conditions apply to all visitors, customers, and users
            of KTA Solutions’ website and products.
          </li>
          <li>
            By using our services, you accept these terms in full. If you do not
            agree, you should not use our website or purchase our products.
          </li>
          <li>
            KTA Solutions reserves the right to update, modify, or change these
            terms without prior notice.
          </li>
        </ul>

        <h2>2. Products & Services</h2>
        <ul>
          <li>
            KTA Solutions manufactures and supplies tile adhesives, grouts, block
            joint mortar, and related construction materials.
          </li>
          <li>
            All product descriptions, specifications, and technical data sheets
            are provided for general guidance only. While we ensure accuracy, KTA
            Solutions does not guarantee exact suitability for every application.
          </li>
          <li>
            It is the customer’s responsibility to ensure that the selected
            product meets the requirements of their project.
          </li>
        </ul>

        <h2>3. Pricing & Payment</h2>
        <ul>
          <li>All prices are subject to change without prior notice.</li>
          <li>Payments must be made in full before dispatch unless otherwise agreed in writing.</li>
          <li>
            Any applicable taxes, freight charges, or duties will be added to the
            invoice.
          </li>
        </ul>

        <h2>4. Orders, Delivery & Returns</h2>
        <ul>
          <li>Orders are processed subject to availability of stock.</li>
          <li>
            Delivery timelines are estimates and may vary due to circumstances
            beyond our control (e.g., transport delays, strikes, natural events).
          </li>
          <li>
            Returns are only accepted for damaged or defective goods, reported
            within 7 days of receipt, and must be accompanied by proof of
            purchase.
          </li>
        </ul>

        <h2>5. Warranties & Limitations</h2>
        <ul>
          <li>
            KTA Solutions products conform to internal quality standards and
            follow ISI, EN, and ANSI guidelines where applicable (unless otherwise
            specified).
          </li>
          <li>
            No warranty is expressed or implied regarding the specific performance
            of products in every situation.
          </li>
          <li>
            KTA Solutions shall not be liable for any indirect, incidental, or
            consequential damages arising from product use, including but not
            limited to project delays, rework, or financial losses.
          </li>
        </ul>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on this website, including text, images, designs, packaging,
          and branding, are the intellectual property of KTA Solutions and may not
          be used without written permission.
        </p>

        <h2>7. Governing Law</h2>
        <p>
          These Terms & Conditions shall be governed by and construed in
          accordance with the laws of India. Any disputes shall be subject to the
          exclusive jurisdiction of the courts in Ajmer, Rajasthan.
        </p>

        <h2>8. Contact Us</h2>
        <p >
          For any queries or clarifications, please contact:
          <br />
          KTA Solutions <br />
          Email: info@KTAsolutions.in <br />
          Phone: +91 8233602899 / +91 9414009900 <br />
       
        </p>
      </div>
          </div>
  )
}

export default Terms


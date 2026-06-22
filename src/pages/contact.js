export default function contact() {
  return `
  <section class="page-hero">
    <div class="container">
      <h1>Contact Us</h1>
      <p>
        We’re here to help you understand your care options.
        Reach out and our team will guide you through the next steps.
      </p>
    </div>
  </section>

  <section class="contact">
    <div class="container contact-grid">

      <form class="contact-form">

        <h2>Send us a message</h2>

        <label>
          Full Name
          <input type="text" placeholder="Your name" />
        </label>

        <label>
          Phone Number
          <input type="text" placeholder="Your phone number" />
        </label>

        <label>
          Email
          <input type="email" placeholder="Your email address" />
        </label>

        <label>
          Service Needed
          <select>
            <option>Home Care Support</option>
            <option>Community Integration</option>
            <option>Personalized Care Plans</option>
            <option>24/7 Support Services</option>
            <option>Not sure yet</option>
          </select>
        </label>

        <label>
          Message
          <textarea placeholder="Tell us about your situation..."></textarea>
        </label>

        <button class="btn btn-primary" type="button">
          Submit Inquiry
        </button>

      </form>

      <div class="contact-info">

        <div class="info-card">
          <h3>Call Us</h3>
          <p>Speak directly with our care team for immediate assistance.</p>
          <div class="info-detail">+63 XXX XXX XXXX</div>
        </div>

        <div class="info-card">
          <h3>Email Us</h3>
          <p>Send us a detailed inquiry anytime.</p>
          <div class="info-detail">support@healinghomes.com</div>
        </div>

        <div class="info-card">
          <h3>Response Time</h3>
          <p>We typically respond within 24 hours.</p>
        </div>

      </div>

    </div>
  </section>

  <section class="contact-trust">
    <div class="container">
      <h2>Why families trust us</h2>

      <div class="trust-points">
        <div>✓ Licensed care professionals</div>
        <div>✓ Personalized care planning</div>
        <div>✓ Compassion-driven support</div>
        <div>✓ Reliable communication</div>
      </div>
    </div>
  </section>
  `;
}
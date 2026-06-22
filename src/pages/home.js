export default function home() {
  return `
  <section class="hero fade-up">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>

    <div class="container hero-center">
      <div class="hero-content">
        <h1>
          Compassionate Care.<br />
          Independent Living.<br />
          Stronger Communities.
        </h1>

        <p>
          Nurturing Independence, Elevating Lives, Where Individuals Shape Their Environment for Optimal Quality of Life
        </p>

        <div class="hero-actions">
          <a href="/contact" data-link class="btn btn-primary">
            Schedule Consultation
          </a>

          <a href="/services" data-link class="btn btn-secondary">
            Explore Services
          </a>
        </div>
        
      </div>
    </div>
  </section>

  <section class="trust fade-up">
    <div class="container trust-grid">

      <div>Licensed Care Providers</div>
      <div>Person-Centered Support</div>
      <div>24/7 Availability</div>
      <div>Community-Based Services</div>

    </div>
  </section>

  <section class="services fade-up">
    <div class="container">

      <div class="section-header">
        <h2>Our Services</h2>
        <p>
          Comprehensive support designed to promote independence,
          dignity, and quality of life.
        </p>
      </div>

      <div class="service-grid">

        <div class="service-card">
          <h3>Home Care Support</h3>
          <p>
            Assistance with daily living activities in the comfort of home.
          </p>
        </div>

        <div class="service-card">
          <h3>Community Integration</h3>
          <p>
            Helping individuals participate meaningfully in their community.
          </p>
        </div>

        <div class="service-card">
          <h3>Personalized Care Plans</h3>
          <p>
            Tailored support strategies based on individual needs and goals.
          </p>
        </div>

        <div class="service-card">
          <h3>24/7 Support Services</h3>
          <p>
            Around-the-clock assistance for safety and peace of mind.
          </p>
        </div>

      </div>

    </div>
  </section>

  <section class="why fade-up">
    <div class="container">

      <div class="section-header">
        <h2>Why Families Choose Us</h2>
        <p>
          We focus on dignity, independence, and consistent compassionate care
          tailored to every individual we serve.
        </p>
      </div>

      <div class="why-grid">

        <div class="why-card">
          <i data-lucide="star" class="icon"></i>
          <h3>Compassionate Care</h3>
          <p>
            Every individual is treated with respect, empathy, and genuine understanding.
          </p>
        </div>

        <div class="why-card">
          <i data-lucide="check" class="icon"></i>
          <h3>Personalized Support</h3>
          <p>
            Care plans are tailored to each person’s unique needs and goals.
          </p>
        </div>

        <div class="why-card">
          <i data-lucide="clock" class="icon"></i>
          <h3>Reliable Availability</h3>
          <p>
            Consistent support whenever it is needed, including 24/7 assistance options.
          </p>
        </div>

        <div class="why-card">
          <i data-lucide="heart" class="icon"></i>
          <h3>Community Focused</h3>
          <p>
            Helping individuals stay engaged, active, and connected within their community.
          </p>
        </div>

      </div>

    </div>
  </section>

  <section class="testimonials fade-up">
    <div class="container">

      <div class="section-header">
        <h2>What Families Say</h2>
        <p>
          Real feedback from families who trust us with their care needs.
        </p>
      </div>

      <div class="testimonial-grid">

        <div class="testimonial-card">
          <p class="quote">
            “The care and attention my mother receives is beyond what we expected.
            The staff is kind, patient, and always responsive.”
          </p>

          <div class="author">
            <div class="avatar">M</div>
            <div>
              <strong>Maria L.</strong>
              <span>Family Member</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            “They helped my brother transition into independent living with
            dignity and full support. Truly life-changing service.”
          </p>

          <div class="author">
            <div class="avatar">J</div>
            <div>
              <strong>James R.</strong>
              <span>Caregiver</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            “Reliable, compassionate, and always available when needed.
            We feel confident knowing they are there.”
          </p>

          <div class="author">
            <div class="avatar">A</div>
            <div>
              <strong>Anna S.</strong>
              <span>Family Member</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            “The care and attention my mother receives is beyond what we expected.
            The staff is kind, patient, and always responsive.”
          </p>

          <div class="author">
            <div class="avatar">M</div>
            <div>
              <strong>Maria L.</strong>
              <span>Family Member</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            “They helped my brother transition into independent living with
            dignity and full support. Truly life-changing service.”
          </p>

          <div class="author">
            <div class="avatar">J</div>
            <div>
              <strong>James R.</strong>
              <span>Caregiver</span>
            </div>
          </div>
        </div>

        <div class="testimonial-card">
          <p class="quote">
            “Reliable, compassionate, and always available when needed.
            We feel confident knowing they are there.”
          </p>

          <div class="author">
            <div class="avatar">A</div>
            <div>
              <strong>Anna S.</strong>
              <span>Family Member</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>

  <section class="cta fade-up">
    <div class="container cta-box">

      <div class="cta-content">

        <h2>
          Let’s Talk About Your Care Needs
        </h2>

        <p>
          Whether you're exploring support options for yourself or a loved one,
          we’re here to help you understand what services are right for you.
        </p>

        <div class="cta-actions">
          <a href="/contact" data-link class="btn btn-primary">
            Schedule Consultation
          </a>

          <a href="/services" data-link class="btn btn-secondary">
            View Services
          </a>
        </div>

      </div>

    </div>
  </section>
  `;
}
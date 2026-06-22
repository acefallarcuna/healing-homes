export function footer() {
  return `
    <footer class="footer">

      <div class="container footer-top">
        <div class="footer-brand">
          <div class="footer-brand-row">
            <img src="./src/assets/logo2.png" alt="Healing Homes Living Services" class="footer-logo" />

            <span class="footer-brand-name">
              Healing Homes Living Services
            </span>
          </div>

          <p>
            Compassionate care and independent living support. Equipping providers, families, and organizations with the expertise for operational excellence and compassionate care — in Minnesota and nationwide.
          </p>
        </div>

        <!-- Contact -->
        <div class="footer-col">
          <h4>Contact</h4>

          <div class="footer-item">
            <i data-lucide="phone"></i>
            <span>(612) 208-6707</span>
          </div>

          <div class="footer-item">
            <i data-lucide="mail"></i>
            <span>info@healinghomeslivingservices.com</span>
          </div>

          <div class="footer-item">
            <i data-lucide="map-pin"></i>
            <span>St Paul, MN 55117, USA</span>
          </div>
        </div>

        <!-- Quick Links -->
        <div class="footer-col">
          <h4>Quick Links</h4>

          <a href="/" data-link>Home</a>
          <a href="/about" data-link>About</a>
          <a href="/services" data-link>Services</a>
          <a href="/careers" data-link>Careers</a>
          <a href="/contact" data-link>Contact</a>
        </div>

      </div>

      <div class="footer-bottom">
        <p>© 2026 Healing Homes Living Services LLC. All rights reserved.</p>
      </div>

    </footer>
  `;
}
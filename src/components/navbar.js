export function navbar() {
  return `
    <header class="navbar">
      <div class="container nav-inner">

        <a href="/" data-link class="logo">
          <img src="/images/logo1.png" alt="Healing Homes Living Services" />
          Healing Homes Living Services
        </a>

        <nav>
          <a href="/" data-link>Home</a>
          <a href="/about" data-link>About</a>
          <a href="/services" data-link>Services</a>
          <a href="/careers" data-link>Careers</a>
          <a href="/contact" data-link>Contact</a>
        </nav>

      </div>
    </header>
  `;
} 
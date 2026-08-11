// =====================================================
// ShorePointIT Footer Include
// Streamlined Mailing Address & Legal Footer
// =====================================================

document.write(`
<footer class="site-footer">
  <div class="footer-container">
    <div class="footer-brand">
      <div class="brand">
        ShorePoint<span class="brand-it">IT</span>
      </div>
      <p class="footer-desc">
        Executive-level technology advisory, cloud architecture, and cybersecurity.
      </p>
    </div>

    <div class="footer-address">
      <strong>ShorePointIT LLC</strong><br>
      130 W Water St, Unit 131<br>
      Toms River, NJ 08754<br><br>
      <strong>Phone:</strong> <a href="tel:8555746737">855-574-6737</a>
    </div>
  </div>

  <div class="footer-bottom">
    <div class="footer-bottom-container">
      <div>
        &copy; <span id="year"></span> ShorePoint<span class="brand-it">IT</span> LLC. All rights reserved.
      </div>
      <div class="footer-legal-links">
        <a href="privacy.html">Privacy Policy</a>
        <span>|</span>
        <a href="faq.html">FAQ</a>
      </div>
    </div>
  </div>
</footer>
`);

setTimeout(() => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}, 0);
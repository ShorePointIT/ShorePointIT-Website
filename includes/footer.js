document.write(`
<footer>
  <div>
    &copy; <span id="year"></span>
    ShorePoint<span class="brand-it">IT</span>. All rights reserved.
  </div>

  <div>
    <strong>ShorePointIT</strong><br>
    130 W Water St, Unit 131<br>
    Toms River, NJ 08754<br><br>

  <strong>Phone:</strong> 855-574-6737
  </div>
</footer>
`);

setTimeout(() => {
  const year = document.getElementById('year');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
}, 0);
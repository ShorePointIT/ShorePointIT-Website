document.write(`
  <nav>
    ...
  </nav>
  
  <script type="application/ld+json">
  {
    "@context":"https://schema.org",
    "@type":"Organization",
    "name":"ShorePointIT LLC",
    "url":"https://shorepointit.com",
    "logo":"https://shorepointit.com/favicon.png",
    "telephone":"+1-855-574-6737",
    "address":{
      "@type":"PostalAddress",
      "addressLocality":"Toms River",
      "addressRegion":"NJ",
      "postalCode":"08754",
      "addressCountry":"US"
    },
    "areaServed":[
      "New Jersey",
      "New York",
      "Pennsylvania"
      "Connecticut"
    ],
    "founder":{
      "@type":"Person",
      "name":"Luis Hernandez"
    },
    "sameAs":[
      "https://www.facebook.com/shorepointit",
      "https://www.linkedin.com/company/shorepointit"
    ]
  }
  </script>
  `);
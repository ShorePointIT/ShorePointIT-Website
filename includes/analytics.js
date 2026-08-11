// =====================================================
// ShorePointIT Analytics
// Google Analytics (G-TNV38K77GR) + Microsoft Clarity (xmm7xh1mbg)
// =====================================================

// Google Analytics
(function () {
    if (!document.querySelector('script[src*="G-TNV38K77GR"]')) {
        const gaScript = document.createElement("script");
        gaScript.async = true;
        gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-TNV38K77GR";
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        window.gtag = gtag;

        gtag("js", new Date());
        gtag("config", "G-TNV38K77GR");
    }
})();

// Microsoft Clarity
(function (c, l, a, r, i, t, y) {
    if (!window.clarity) {
        c[a] = c[a] || function () {
            (c[a].q = c[a].q || []).push(arguments);
        };

        t = l.createElement(r);
        t.async = 1;
        t.src = "https://www.clarity.ms/tag/" + i;

        y = l.getElementsByTagName(r)[0];
        y.parentNode.insertBefore(t, y);
    }
})(window, document, "clarity", "script", "xmm7xh1mbg");
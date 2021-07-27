function triggerGtag() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-2MWG0DMS9R');
  console.log('ok');
}

if (typeof window !== "undefined") {
  // browser code
  var head = window.document.getElementsByTagName('head')[0];
  var script = window.document.createElement('script');
  script.type = 'text/javascript';
  script.onload = function() {
    triggerGtag();
  }
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2MWG0DMS9R';
  head.appendChild(script);

  // fonts
  const links = ["https://fonts.googleapis.com", "https://fonts.gstatic.com", "https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700&display=swap"]
  for (let ix = 0; ix < links.length; ix++) {
    const link = window.document.createElement('link');
    link.href = links[ix];
    if (ix < 2) {
      link.rel = 'preconnect';
      link.crossorigin = true;
    } else {
      link.rel = 'stylesheet';
    }
    links.onload = function() {
      console.log('load')
    }
    head.appendChild(link);
  }
}

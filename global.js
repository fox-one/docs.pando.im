function triggerGtag() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-2MWG0DMS9R');
  console.log('ok');
}

var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.type = 'text/javascript';
script.onload = function() {
  triggerGtag();
}
script.src = 'https://www.googletagmanager.com/gtag/js?id=G-2MWG0DMS9R';
head.appendChild(script);

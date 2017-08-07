(function() {
  var styleElement = document.getElementById(chrome.runtime.id);
  if (styleElement) {
    styleElement.remove();
    return;
  }
  var css = ({
    'ebsco.com': './../src/inject/inject.css',
    'web.b.ebscohost.com': './../src/inject/inject.css',
    'web.a.ebscohost.com': './../src/inject/inject.css', 

  })[location.hostname];
  if (!css) {
    return;
  }  
  styleElement = document.createElement('link');
  styleElement.id = chrome.runtime.id;
  styleElement.rel = 'stylesheet';
  styleElement.href = chrome.runtime.getURL(css);
  document.documentElement.appendChild(styleElement);
})();


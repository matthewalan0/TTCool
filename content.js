let temp = document.createElement('script');
temp.setAttribute('type', 'text/javascript');
temp.setAttribute('defer', 'defer');
temp.id = 'TT';
temp.src = chrome.extension.getURL('TTCool.js');
document.body.appendChild(temp);

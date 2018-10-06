const userAgent = window.navigator.userAgent;

// Ref: https://github.com/mumuy/browser
const testMap = {
  Windows: /Windows/,
  MacOS: /Macintosh/,
  Linux: /Linux|X11/,
  Android: /Android|Adr/,
  IOS: /like Mac OS X/,
  Mobile: /Mobi|iPh|480/,
  Tablet: /Tablet|Pad|Nexus 7/,
  WeChat: /MicroMessenger/,
  IPhone: /iPhone|iPod/,
  IPad: /iPad/,
};

const ua = {};

Object.keys(testMap).forEach((prop) => {
  ua[`is${prop}`] = (u = userAgent) => { testMap[prop].test(u); };
});

export default ua;

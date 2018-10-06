export default function insertScript(url, options = {}) {
  const script = document.createElement('script');

  script.src = url;
  Object.keys(options).forEach((key) => { script[key] = key; });

  document.body.appendChild(script);
}

(function () {
  const endpoint = "https://script.google.com/macros/s/AKfycbwS-YRSn0Ye2f88X5w_8O0Fs6kBookus9zsgiqXjamLDwqSVb0IRLYt-Jf4V2HorA0bHg/exec";

  function getParam(name) {
    const params = new URLSearchParams(window.location.search);
    return params.get(name) || "";
  }

  const payload = {
    timestamp: new Date().toISOString(),
    hostname: window.location.hostname,
    path: window.location.pathname,
    url: window.location.href,
    title: document.title,
    referrer: document.referrer || "",
    userAgent: navigator.userAgent,
    language: navigator.language || "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    screenWidth: window.screen.width || "",
    screenHeight: window.screen.height || "",
    viewportWidth: window.innerWidth || "",
    viewportHeight: window.innerHeight || "",
    utm_source: getParam("utm_source"),
    utm_medium: getParam("utm_medium"),
    utm_campaign: getParam("utm_campaign"),
    utm_term: getParam("utm_term"),
    utm_content: getParam("utm_content")
  };

  if (!endpoint || endpoint.includes("YOUR_APPS_SCRIPT_URL_HERE")) {
    return;
  }

  fetch(endpoint, {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  }).catch(function () {
    // Silent fail
  });
})();

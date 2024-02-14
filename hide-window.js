chrome.windows.getAll({}, async (windows) => {
  for (let w of windows) {
    chrome.windows.update(w.id, { state: "minimized" });
  }
});

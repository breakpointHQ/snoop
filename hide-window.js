chrome.windows.getAll({}, async (windows) => {
    for (let w of windows){
      chrome.windows.update(w.id, {width: 200, height: 100});
      chrome.windows.update(w.id, {left: -550, top: 1000});
    }
});

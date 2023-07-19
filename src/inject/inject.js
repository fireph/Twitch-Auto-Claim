// Try to trick the site into thinking it's never hidden
Object.defineProperty(document, "hidden", {
  value: false,
  writable: false,
});
Object.defineProperty(document, "visibilityState", {
  value: "visible",
  writable: false,
});
Object.defineProperty(document, "webkitVisibilityState", {
  value: "visible",
  writable: false,
});
document.dispatchEvent(new Event("visibilitychange"));
document.hasFocus = function () {
  return true;
};

// visibilitychange events are captured and stopped
document.addEventListener(
  "visibilitychange",
  function (e) {
    e.stopImmediatePropagation();
  },
  true,
  true
);

setInterval(function () {
  var elems = document.getElementsByClassName("claimable-bonus__icon");
  for (let elem of elems) {
    var button = elem.closest("button");
    if (button) {
      button.click();
    }
  }
}, 1000);

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// Try to trick the site into thinking it's never hidden
		Object.defineProperty(document, "hidden", {value: false, writable: false});
		Object.defineProperty(document, "visibilityState", {value: "visible", writable: false});
		Object.defineProperty(document, "webkitVisibilityState", {value: "visible", writable: false});
		document.dispatchEvent(new Event("visibilitychange"));
		document.hasFocus = function () { return true; };
		 
		// visibilitychange events are captured and stopped
		document.addEventListener("visibilitychange", function(e) {
			e.stopImmediatePropagation();
		}, true, true);

		setInterval(function() {
			var elems = document.getElementsByClassName("claimable-bonus__icon");
			for (elem of elems) {
				var button = elem.closest('button[class^="ScCoreButton"]');
				if (button) {
					button.click();
				}
			}
		}, 1000);
	}
	}, 10);
});
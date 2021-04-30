chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);
		Object.defineProperty(document, "hidden", { value : false });
		setInterval(function() {
			var elems = document.getElementsByClassName("claimable-bonus__icon");
			for (elem of elems) {
				elem.closest(".tw-button").click();
			}
		}, 5000);
	}
	}, 10);
});
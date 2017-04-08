var smoking = document.getElementsByClassName('icon-smoking');
if (smoking.length) {
	var icon = document.createElement('img');
	// Source: https://upload.wikimedia.org/wikipedia/commons/d/de/Cigarette_Sign.svg
	icon.src = chrome.extension.getURL('smoking.svg');
	icon.style = 'position: fixed; top: 64px; right: 0; width: 128px; height: 128px; z-index: 10;';
	document.body.appendChild(icon);
}

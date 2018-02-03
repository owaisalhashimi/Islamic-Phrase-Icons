function islamic_phrase_icons(svg_path) {
	const svg = svg_path||'sprite.min.svg';
	const ips = Array.from(document.querySelectorAll('i[data-ip]'));
	ips.forEach(icon => {
		icon.insertAdjacentHTML('beforeEnd',`<svg><use xlink:href="${svg}#${icon.dataset.ip}" x="0" y="0"/></svg>`);
	});
};
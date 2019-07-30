

export default function download(fileName, url) {

	if (!fileName) return;

	console.log(url);
	const link = document.createElement('a');
	const evt = document.createEvent('MouseEvents');

	link.href = url;
	link.download = fileName;

	evt.initEvent('click');

	link.dispatchEvent(evt);
}

export default function resolveExportData(data, headersMapping) {
	if (Array.isArray(data)) {
		const headers = [];
		let headerKeys = [];

		if (!headersMapping && data.length) {
			data.forEach(item => {
				for (const attr in item) {
					if (item.hasOwnProperty(attr) && headers.indexOf(attr) === -1) {
						headers.push(attr);
					}
				}
			});
			headerKeys = headers;

		} else if (data.length) {
			headerKeys = Object.keys(headersMapping);
			headerKeys.forEach(key => {
				if (headers.indexOf(headersMapping[key]) === -1) {
					headers.push(headersMapping[key]);
				}
			});
		}

		const list = data.map(item => headerKeys.map(key => `${item[key]}` || '').join(','));

		list.unshift(headers.join(','));

		return list.join('\r\n');
	}
}

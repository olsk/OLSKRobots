const main = {

	OLSKRobotsTXT (inputData) {
		if (!Array.isArray(inputData)) {
			throw new Error('OLSKErrorInputNotValid');
		}

		return ['User-agent: *'].concat(inputData.map(function (e) {
			return `Allow: ${e === '/' ? '/$' : e}`;
		})).concat('Disallow: /').join('\n');
	},
	
};

Object.assign(exports, main);

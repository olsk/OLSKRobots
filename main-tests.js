const { throws, deepEqual } = require('assert');

const mod = require('./main.js');

describe('OLSKRobotsTXT', function test_OLSKRobotsTXT() {

	it('throws if not array', function () {
		throws(function () {
			mod.OLSKRobotsTXT(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('returns string', function() {
		deepEqual(mod.OLSKRobotsTXT([]), 'User-agent: *\nDisallow: /');
	});

	it('allows root', function() {
		deepEqual(mod.OLSKRobotsTXT(['/']), 'User-agent: *\nAllow: /$\nDisallow: /');
	});

	it('allows random', function() {
		const item = Math.random().toString();
		
		deepEqual(mod.OLSKRobotsTXT([item]), `User-agent: *\nAllow: ${ item }\nDisallow: /`);
	});

});

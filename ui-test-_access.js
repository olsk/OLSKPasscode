const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKPasscode: '.OLSKPasscode',
	
	OLSKPasscodeBackupNotice: '.OLSKStandardViewBody .OLSKPasscodeBackupNotice',
}).map(function (e) {
	return global[e.shift()]  = e.pop();
});

describe('OLSKPasscode_Access', function () {

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});

	it('hides OLSKPasscode', function () {
		browser.assert.elements(OLSKPasscode, 0);
	});

	context('OLSKModalViewShow', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});
		
		it('shows OLSKPasscode', function () {
			browser.assert.elements(OLSKPasscode, 1);
		});

		it('shows OLSKPasscodeBackupNotice', function () {
			browser.assert.elements(OLSKPasscodeBackupNotice, 1);
		});

	});

	context('OLSKModalViewClose', function () {

		before(function () {
			return browser.pressButton('#TestOLSKModalViewClose');
		});

		it('hides OLSKPasscode', function () {
			browser.assert.elements(OLSKPasscode, 0);
		});
		
	});

});

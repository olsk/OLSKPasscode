const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

Object.entries({
	OLSKPasscode: '.OLSKStandardViewBody .OLSKPasscode',
	
	OLSKPasscodeBackupNotice: '.OLSKPasscodeBackupNotice',
	
	OLSKPasscodePasswordField1: '.OLSKPasscodePasswordField1',
	OLSKPasscodePasswordField2: '.OLSKPasscodePasswordField2',
	
	OLSKPasscodeFutileFieldLabel: '.OLSKPasscodeFutileFieldLabel',
	OLSKPasscodeFutileField: '.OLSKPasscodeFutileField',
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

		it('shows OLSKPasscodePasswordField1', function () {
			browser.assert.elements(OLSKPasscodePasswordField1, 1);
		});

		it('shows OLSKPasscodePasswordField2', function () {
			browser.assert.elements(OLSKPasscodePasswordField2, 1);
		});

		it('shows OLSKPasscodeFutileFieldLabel', function () {
			browser.assert.elements(OLSKPasscodeFutileFieldLabel, 1);
		});

		it('shows OLSKPasscodeFutileField', function () {
			browser.assert.elements(OLSKPasscodeFutileField, 1);
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

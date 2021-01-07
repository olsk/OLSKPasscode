const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKPasscode_Misc', function () {	

	const OLSKModalViewTitleText = Math.random().toString();

	before(function() {
		return browser.OLSKVisit(kDefaultRoute, {
			OLSKModalViewTitleText,
		});
	});
	
	before(function () {
		return browser.pressButton('#TestOLSKModalViewShow');
	});

	describe('OLSKModalViewTitle', function test_OLSKModalViewTitle () {

		it('binds OLSKModalViewTitleText', function () {
			browser.assert.text('.OLSKModalViewTitle', OLSKModalViewTitleText);
		});

	});

	describe('OLSKPasscodePasswordField1', function test_OLSKPasscodePasswordField1 () {

		it('sets type', function () {
			browser.assert.attribute(OLSKPasscodePasswordField1, 'type', 'password');
		});

	});

	describe('OLSKPasscodePasswordField2', function test_OLSKPasscodePasswordField2 () {

		it('sets type', function () {
			browser.assert.attribute(OLSKPasscodePasswordField2, 'type', 'password');
		});

	});

});

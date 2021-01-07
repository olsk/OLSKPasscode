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

});

const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe(`OLSKPasscode_Localize-${ OLSKRoutingLanguage }`, function () {

		before(function() {
			return browser.OLSKVisit(kDefaultRoute, {
				OLSKRoutingLanguage,
			});
		});
	
		before(function () {
			return browser.pressButton('#TestOLSKModalViewShow');
		});

		it('localizes OLSKPasscodeBackupNotice', function () {
			browser.assert.text(OLSKPasscodeBackupNotice, uLocalized('OLSKPasscodeBackupNoticeText'));
		});

		it('localizes OLSKPasscodePasswordField1', function () {
			browser.assert.attribute(OLSKPasscodePasswordField1, 'placeholder', uLocalized('OLSKPasscodePasswordField1Text'));
		});

		it('localizes OLSKPasscodePasswordField2', function () {
			browser.assert.attribute(OLSKPasscodePasswordField2, 'placeholder', uLocalized('OLSKPasscodePasswordField2Text'));
		});

	});

});

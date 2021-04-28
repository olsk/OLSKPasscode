const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

kDefaultRoute.OLSKRouteLanguageCodes.forEach(function (OLSKRoutingLanguage) {

	const uLocalized = function (inputData) {
		return OLSKTestingLocalized(inputData, OLSKRoutingLanguage);
	};

	describe('OLSKPasscode_Localize-' + OLSKRoutingLanguage, function () {

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

		it('localizes OLSKPasscodeFutileFieldLabel', function () {
			browser.assert.text(OLSKPasscodeFutileFieldLabel, uLocalized('OLSKPasscodeFutileFieldLabelText'));
		});

		it('localizes OLSKPasscodeContinueButton', function () {
			browser.assert.text(OLSKPasscodeContinueButton, uLocalized('OLSKPasscodeContinueButtonText'));
		});

		it('localizes OLSKPasscodeLauncherItemConfigure', function () {
			return browser.assert.OLSKLauncherItemText('OLSKPasscodeLauncherItemConfigure', uLocalized('OLSKPasscodeLauncherItemConfigureText'));
		});

		context('OLSKModalView', function () {
			
			it('binds OLSKModalViewTitleText', function () {
				return browser.assert.text('.OLSKModalViewTitle', uLocalized('OLSKPasscodeLauncherItemConfigureText'));
			});
		
		});

	});

});

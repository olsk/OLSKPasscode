const kDefaultRoute = require('./controller.js').OLSKControllerRoutes().shift();

describe('OLSKPasscode_Misc', function () {	

	before(function() {
		return browser.OLSKVisit(kDefaultRoute);
	});
	
	before(function () {
		return browser.pressButton('#TestOLSKModalViewShow');
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

	describe('OLSKPasscodeFutileField', function test_OLSKPasscodeFutileField () {

		it('sets type', function () {
			browser.assert.attribute(OLSKPasscodeFutileField, 'type', 'checkbox');
		});

	});

	describe('OLSKPasscodeContinueButton', function test_OLSKPasscodeContinueButton () {

		it('sets disabled', function () {
			browser.assert.attribute(OLSKPasscodeContinueButton, 'disabled', '');
		});

		context('filled', function () {

			const item = Math.random().toString();
			
			before(function () {
				return browser.fill(OLSKPasscodePasswordField1, item);
			});
			
			before(function () {
				return browser.fill(OLSKPasscodePasswordField2, item);
			});
			
			before(function () {
				return browser.check(OLSKPasscodeFutileField);
			});

			it('sets disabled', function () {
				browser.assert.attribute(OLSKPasscodeContinueButton, 'disabled', null);
			});

			context('click', function () {

				before(function () {
					browser.assert.text('#TestOLSKPasscodeDispatchContinue', '0');
				});

				before(function () {
					return browser.pressButton(OLSKPasscodeContinueButton);
				});
				
				it('sends OLSKPasscodeDispatchContinue', function () {
					browser.assert.text('#TestOLSKPasscodeDispatchContinue', '1');
				});

				it('sets OLSK_PASSCODE_HASH', function () {
					browser.assert.evaluate('localStorage.getItem("OLSK_PASSCODE_HASH")', require('OLSKCrypto').OLSKCryptoPBKDF2Hash(item));
				});
			
			});
		
		});

	});

});

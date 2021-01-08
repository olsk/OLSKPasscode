const { throws, deepEqual } = require('assert');

const mod = require('./ui-logic.js').default;

const uLocalized = function (inputData) {
	return inputData + 'LOCALIZED';
};

describe('OLSKPasscodeLauncherFakeItemProxy', function test_OLSKPasscodeLauncherFakeItemProxy() {

	it('returns object', function () {
		const item = mod.OLSKPasscodeLauncherFakeItemProxy();
		deepEqual(item, {
			LCHRecipeName: 'OLSKPasscodeLauncherFakeItemProxy',
			LCHRecipeCallback: item.LCHRecipeCallback,
		});
	});

	context('LCHRecipeCallback', function () {
		
		it('returns undefined', function () {
			deepEqual(mod.OLSKPasscodeLauncherFakeItemProxy().LCHRecipeCallback(), undefined);
		});

	});

});

describe('OLSKPasscodeLauncherItemConfigure', function test_OLSKPasscodeLauncherItemConfigure() {

	const _OLSKPasscodeLauncherItemConfigure = function (inputData = {}) {
		return mod.OLSKPasscodeLauncherItemConfigure(Object.assign({
			ParamMod: {},
			OLSKLocalized: uLocalized,
		}, inputData))
	}

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKPasscodeLauncherItemConfigure(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if OLSKLocalized not function', function () {
		throws(function () {
			_OLSKPasscodeLauncherItemConfigure({
				OLSKLocalized: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamMod not object', function () {
		throws(function () {
			_OLSKPasscodeLauncherItemConfigure({
				ParamMod: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('returns object', function () {
		const item = _OLSKPasscodeLauncherItemConfigure();
		deepEqual(item, {
			LCHRecipeSignature: 'OLSKPasscodeLauncherItemConfigure',
			LCHRecipeName: uLocalized('OLSKPasscodeLauncherItemConfigureText'),
			LCHRecipeCallback: item.LCHRecipeCallback,
		});
	});

	context('LCHRecipeCallback', function () {
		
		it('calls _OLSKPasscode.modPublic.OLSKModalViewShow', function () {
			const OLSKModalViewShow = Math.random().toString();
			deepEqual(_OLSKPasscodeLauncherItemConfigure({
				ParamMod: {
					_OLSKPasscode: {
						modPublic: {
							OLSKModalViewShow: (function () {
								return OLSKModalViewShow;
							}),
						},
					},
				},
			}).LCHRecipeCallback(), OLSKModalViewShow);
		});

	});

});

describe('OLSKPasscodeRecipes', function test_OLSKPasscodeRecipes() {

	const _OLSKPasscodeRecipes = function (inputData = {}) {
		return mod.OLSKPasscodeRecipes(Object.assign({
			OLSKLocalized: uLocalized,
			ParamMod: {},
			ParamSpecUI: false,
		}, inputData))
	};

	it('throws if not object', function () {
		throws(function () {
			mod.OLSKPasscodeRecipes(null);
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamMod not object', function () {
		throws(function () {
			_OLSKPasscodeRecipes({
				ParamMod: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('throws if ParamSpecUI not boolean', function () {
		throws(function () {
			_OLSKPasscodeRecipes({
				ParamSpecUI: null,
			});
		}, /OLSKErrorInputNotValid/);
	});

	it('includes production recipes', function () {
		deepEqual(_OLSKPasscodeRecipes().map(function (e) {
			return e.LCHRecipeSignature || e.LCHRecipeName;
		}), Object.keys(mod).filter(function (e) {
			return e.match(/Launcher/) && !e.match(/Fake/);
		}));
	});

	context('ParamSpecUI', function () {

		it('includes all recipes', function () {
			deepEqual(_OLSKPasscodeRecipes({
				ParamSpecUI: true,
			}).map(function (e) {
				return e.LCHRecipeSignature || e.LCHRecipeName;
			}), Object.keys(mod).filter(function (e) {
				return e.match(/Launcher/);
			}));
		});
	
	});

});

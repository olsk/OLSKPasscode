const mod = {

	OLSKPasscodeLauncherFakeItemProxy () {
		return {
			LCHRecipeName: 'OLSKPasscodeLauncherFakeItemProxy',
			LCHRecipeCallback () {},
		};
	},

	OLSKPasscodeLauncherItemConfigure  (params) {
		if (typeof params !== 'object' || params === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamMod !== 'object' || params.ParamMod === null) {
			throw new Error('OLSKErrorInputNotValid');
		}
		
		if (typeof params.OLSKLocalized !== 'function') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return {
			LCHRecipeSignature: 'OLSKPasscodeLauncherItemConfigure',
			LCHRecipeName: params.OLSKLocalized('OLSKPasscodeLauncherItemConfigureText'),
			LCHRecipeCallback () {
				return params.ParamMod._OLSKPasscode.modPublic.OLSKModalViewShow();
			},
		};
	},

	OLSKPasscodeRecipes (params) {
		if (typeof params !== 'object' || params === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamMod !== 'object' || params.ParamMod === null) {
			throw new Error('OLSKErrorInputNotValid');
		}

		if (typeof params.ParamSpecUI !== 'boolean') {
			throw new Error('OLSKErrorInputNotValid');
		}

		return [
			mod.OLSKPasscodeLauncherFakeItemProxy(),
			mod.OLSKPasscodeLauncherItemConfigure(params),
		].filter(function (e) {
			if (params.ParamSpecUI) {
				return true;
			}

			return !(e.LCHRecipeSignature || e.LCHRecipeName).match(/Fake/);
		});
	},
	
};

export default mod;

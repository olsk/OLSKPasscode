const mod = {

	OLSKPasscodeLauncherFakeItemProxy () {
		return {
			LCHRecipeName: 'OLSKPasscodeLauncherFakeItemProxy',
			LCHRecipeCallback () {},
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
		].filter(function (e) {
			if (params.ParamSpecUI) {
				return true;
			}

			return !(e.LCHRecipeSignature || e.LCHRecipeName).match(/Fake/);
		});
	},
	
};

export default mod;

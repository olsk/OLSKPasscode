<script>
export let OLSKPasscodeDispatchContinue;

export const modPublic = {};

import { OLSKLocalized } from 'OLSKInternational';
import OLSKCrypto from 'OLSKCrypto';
import OLSKPasscodeLogic from './ui-logic.js';

Object.assign(modPublic, OLSKPasscodeLogic);

const mod = {

	_OLSKModalView: null,

	// VALUE

	_ValueContinueDisabled: true,

	// DATA

	DataContinueEnabled () {
		return mod._ValuePassword1 && mod._ValuePassword2 && (mod._ValuePassword1 === mod._ValuePassword2) && mod._ValueFutile;
	},

	// INTERFACE

	InterfaceFutileFieldDidInput () {
		mod._ValueContinueDisabled = !mod.DataContinueEnabled();
	},

	InterfaceContinueButtonDidClick () {
		mod.ControlSet(mod._ValuePassword1);

		mod._OLSKModalView.modPublic.OLSKModalViewClose();

		OLSKPasscodeDispatchContinue();
	},

	// CONTROL

	async ControlSet (inputData) {
		localStorage.setItem('OLSK_PASSCODE_HASH', OLSKCrypto.OLSKCryptoPBKDF2Hash(await OLSKCrypto.OLSKCryptoPBKDF2Key(inputData)));

		mod._ValuePassword1 = mod._ValuePassword2 = '';
		mod._ValueFutile = false;
	},

	// LIFECYCLE

	LifecycleModuleDidMount() {
		Object.assign(modPublic, mod._OLSKModalView.modPublic);
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleDidMount);

import OLSKModalView from 'OLSKModalView';
</script>

<OLSKModalView bind:this={ mod._OLSKModalView } OLSKModalViewTitleText={ OLSKLocalized('OLSKPasscodeLauncherItemConfigureText') }>
	<div class="OLSKPasscode OLSKDecor">
		<div>
			<div class="OLSKPasscodeBackupNotice">{ OLSKLocalized('OLSKPasscodeBackupNoticeText') }</div>

			<p><input class="OLSKPasscodePasswordField1" type="password" placeholder={ OLSKLocalized('OLSKPasscodePasswordField1Text') } bind:value={ mod._ValuePassword1 } /></p>
			<p><input class="OLSKPasscodePasswordField2" type="password" placeholder={ OLSKLocalized('OLSKPasscodePasswordField2Text') } bind:value={ mod._ValuePassword2 } /></p>

			<p>
				<label class="OLSKPasscodeFutileFieldLabel">
					<input class="OLSKPasscodeFutileField" type="checkbox" bind:checked={ mod._ValueFutile } on:change={ mod.InterfaceFutileFieldDidInput } />
					{ OLSKLocalized('OLSKPasscodeFutileFieldLabelText') }
				</label>
			</p>

			<p>
				<button class="OLSKPasscodeContinueButton" disabled={ mod._ValueContinueDisabled } on:click={ mod.InterfaceContinueButtonDidClick }>{ OLSKLocalized('OLSKPasscodeContinueButtonText') }</button>
			</p>
		</div>
	</div>
</OLSKModalView>

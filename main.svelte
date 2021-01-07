<script>
export let OLSKModalViewTitleText;
export let DEBUG_OLSKPasscodeDataSource = false;

export const modPublic = {};

import { OLSKLocalized } from 'OLSKInternational';

const mod = {

	_OLSKModalView: null,

	// LIFECYCLE

	LifecycleModuleDidMount() {
		Object.assign(modPublic, mod._OLSKModalView.modPublic);
	},

};

import { onMount } from 'svelte';
onMount(mod.LifecycleModuleDidMount);

import OLSKModalView from 'OLSKModalView';
</script>

<OLSKModalView bind:this={ mod._OLSKModalView } OLSKModalViewTitleText={ OLSKModalViewTitleText }>
	<div class="OLSKPasscode">
		<div>
			<div class="OLSKPasscodeBackupNotice">{ OLSKLocalized('OLSKPasscodeBackupNoticeText') }</div>

			<p><input class="OLSKPasscodePasswordField1" type="password" placeholder={ OLSKLocalized('OLSKPasscodePasswordField1Text') } /></p>
			<p><input class="OLSKPasscodePasswordField2" type="password" placeholder={ OLSKLocalized('OLSKPasscodePasswordField2Text') } /></p>

			<p>
				<label class="OLSKPasscodeFutileFieldLabel">
					<input class="OLSKPasscodeFutileField" type="checkbox" />
					{ OLSKLocalized('OLSKPasscodeFutileFieldLabelText') }
				</label>
			</p>
		</div>
	</div>
</OLSKModalView>

<style>
.OLSKPasscodeBackupNotice {
	width: 100%;
	height: 100%;

	background: white;
}
</style>

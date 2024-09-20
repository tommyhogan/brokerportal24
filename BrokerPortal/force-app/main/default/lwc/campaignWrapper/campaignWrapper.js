import { LightningElement, api } from "lwc";

const COMPONENT_MAP = {
	campaign1: () => import('c/getListRecords'),
	campaign2: () => import('c/brokerAppMenu')
}

export default class CampaignWrapper extends LightningElement {
	@api campaignName;
	@api recordId;
	@api objectApiName;

	componentConstructor;

	async connectedCallback() {
		const component = await COMPONENT_MAP[this.campaignName]();
		this.componentConstructor = component.default;
	}

	// usage :
	// https://benchtech2024-dev-ed.develop.my.site.com/g2/s/campaigns?campaignName=campaign1 
	// https://benchtech2024-dev-ed.develop.my.site.com/g2/s/campaigns?campaignName=campaign2
}
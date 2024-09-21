import { LightningElement, api, wire } from "lwc";
import getFormComponent from '@salesforce/apex/CampaignController.getFormComponentByName';

export default class CampaignForm extends LightningElement {
	@api name;
    componentConstructor;
    error;

    @wire (getFormComponent,{campaignName:'$name'})
    wireView({ error, data }) {
        if (data) {
            const componentToRender = `c/${data}`;
            this.renderComponent(componentToRender);
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.componentConstructor = undefined;
        }
    }

    async renderComponent(componentToRender) {
        try {
            const ctor = await import(componentToRender); 
            this.componentConstructor = ctor.default;
        } catch(e) {
            console.log(e);
        }
    }

    //usage:
    //https://benchtech2024-dev-ed.develop.my.site.com/g2/s/campaigns?name=Campaign1 

}
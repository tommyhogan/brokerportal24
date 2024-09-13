import { LightningElement, api } from "lwc";
import LogosResource from '@salesforce/resourceUrl/RunnersLogosResource';

export default class BrokerAppTile extends LightningElement {
    _app;
    logoUrl;
    name;     

    @api
    get app(){
        return this._app;
    }

    set app(brokerApp){
        this._app = brokerApp;
        this.logoUrl = LogosResource + '/' + brokerApp.LogoFileName__c.value;
        this.name = brokerApp.Name.value;
    }
}
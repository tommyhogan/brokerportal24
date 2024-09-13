import { LightningElement, wire } from "lwc";
import { getListRecordsByName } from "lightning/uiListsApi";
import BROKER_PORTAL_APP_OBJECT from "@salesforce/schema/BrokerPortalApp__c";

const appData = [
    {
        "Id": "App1",
        "Name": "Pension Planner",
        "Description__c": "Pension Planner App",
        "LogoFileName__c": "nike.png"
    },
    {
        "Id": "App2",
        "Name": "Campaigns",
        "Description__c": "Campaigns App",
        "LogoFileName__c": "reebok.png"
    }
 ];

export default class BrokerAppMenu extends LightningElement {
  error;
  records;

  @wire(getListRecordsByName, {
    objectApiName: BROKER_PORTAL_APP_OBJECT.objectApiName,
    listViewApiName: "ActiveBrokerApps",
    fields: ["BrokerPortalApp__c.Id", "BrokerPortalApp__c.Name", "BrokerPortalApp__c.Description__c", "BrokerPortalApp__c.LogoFileName__c"],
    sortBy: ["BrokerPortalApp__c.Name"],
  })
  listRecords({ error, data }) {
    if (data) {
      this.records = data.records;
      this.error = undefined;
    } else if (error) {
      this.error = error;
    }
  }
}
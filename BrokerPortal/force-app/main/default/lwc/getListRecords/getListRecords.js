// wireGetListRecordsByName.js
import { LightningElement, wire } from "lwc";
import { getListRecordsByName } from "lightning/uiListsApi";
import BROKER_PORTAL_APP_OBJECT from "@salesforce/schema/BrokerPortalApp__c";

export default class GetListRecords extends LightningElement {
  error;
  records;

  @wire(getListRecordsByName, {
    objectApiName: BROKER_PORTAL_APP_OBJECT.objectApiName,
    listViewApiName: "ActiveBrokerApps",
    fields: ["BrokerPortalApp__c.Id", "BrokerPortalApp__c.Name"],
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
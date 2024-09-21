public without sharing class CampaignController {
    @AuraEnabled(cacheable=true)
    public static String getFormComponentByName(String campaignName){
        system.debug('campaignName=' + campaignName);
        String componentName;
        try {
            Campaign[] campaigns = [
                SELECT Id, FormComponentName__c 
                FROM Campaign 
                WHERE Name = :campaignName
            ];     
            if (campaigns.size() > 0) {
                componentName = campaigns[0].FormComponentName__c;
            }
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
        return componentName;
    }
}
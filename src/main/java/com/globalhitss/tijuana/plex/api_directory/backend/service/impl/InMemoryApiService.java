package com.globalhitss.tijuana.plex.api_directory.backend.service.impl;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.globalhitss.tijuana.plex.api_directory.backend.model.Api;
import com.globalhitss.tijuana.plex.api_directory.backend.service.ApiService;

@Service
public class InMemoryApiService implements ApiService {
    private final List<Api> apis = Arrays.asList(
          /*  new Api(1L, "Customer Management", "v4.0.0", "Productive", "Manages customer accounts", "/apis/1",
                    "Detail about Customer Management"),
           
new Api("A",651L, "Agreement Management", "v4.0.0", "Productive", "Manages agreements and contracts", "Domain: Business Partner"),
new Api("A",646L, "Appointment Management", "v4.0.0", "Productive", "Manages appointment scheduling and details", "Domain: Customer"),
new Api("C",666L, "Account Management", "v4.0.0", "Productive", "Handles account-related operations", "Domain: Customer"),
new Api("C new Api(2L, "Product Catalog", "v5.0.1", "Candidate", "Handles product structure", "/apis/2",
                    "Detail about Product Catalog")
           */

new Api("A", 601L, "AI Management", "v4.0.0", "Productive", "Manages AI components", "/apis/1", "Domain: Common"),
new Api("A", 602L, "Account Management", "v5.0.0", "Productive", "Manages customer accounts", "/apis/2", "Domain: Business Partner"),
new Api("A", 603L, "Agreement Management", "v4.0.0", "Productive", "Manages agreements between parties", "/apis/3", "Domain: Business Partner"),
new Api("A", 604L, "Alarm Management", "v5.0.0", "Productive", "Handles alarm notifications", "/apis/4", "Domain: Resource"),
new Api("A", 605L, "Appointment Management", "v4.0.0", "Productive", "Manages appointments", "/apis/5", "Domain: Customer"),
new Api("C", 606L, "Customer Management", "v4.0.0", "Productive", "Manages customer information and relationships", "/apis/6", "Domain: Customer"),
new Api("C", 607L, "Customer Bill Management", "v4.0.0", "Productive", "Handles customer billing processes", "/apis/7", "Domain: Customer"),
new Api("C", 608L, "Communication Management", "v4.0.0", "Productive", "Manages communication channels and interactions", "/apis/8", "Domain: Common"),
new Api("C", 609L, "Consumption Management", "v4.0.0", "Productive", "Manages consumption data and analysis", "/apis/9", "Domain: Resource"),
new Api("C", 610L, "Change Management", "v4.0.0", "Productive", "Manages change requests and processes", "/apis/10", "Domain: Resource"),
new Api("C", 611L, "CDR Management", "v4.0.0", "Productive", "Handles Call Detail Records", "/apis/11", "Domain: Resource"),
new Api("C", 612L, "Campaign Management", "v4.0.0", "Productive", "Manages marketing campaigns", "/apis/12", "Domain: Marketing"),
new Api("C", 613L, "Coverage Management", "v4.0.0", "Productive", "Handles network coverage details", "/apis/13", "Domain: Resource"),
new Api("D", 614L, "Document Management", "v4.0.0", "Productive", "Manages documents and attachments", "/apis/14", "Domain: Common"),
new Api("E", 615L, "Event Management", "v4.0.0", "Productive", "Handles system and business events", "/apis/15", "Domain: Common"),
new Api("F", 616L, "Facility Management", "v4.0.0", "Productive", "Manages physical facilities", "/apis/16", "Domain: Resource"),
new Api("G", 617L, "Geographic Address Management", "v4.0.0", "Productive", "Manages addresses", "/apis/17", "Domain: Common"),
new Api("G", 618L, "Geographic Site Management", "v4.0.0", "Productive", "Manages sites and locations", "/apis/18", "Domain: Common"),
new Api("I", 619L, "Individual Management", "v4.0.0", "Productive", "Handles individual party details", "/apis/19", "Domain: Party"),
new Api("I", 620L, "Interaction Management", "v4.0.0", "Productive", "Manages interactions with parties", "/apis/20", "Domain: Customer"),
new Api("I", 621L, "Inventory Management", "v4.0.0", "Productive", "Manages service and resource inventories", "/apis/21", "Domain: Resource"),
new Api("I", 622L, "Invoice Management", "v4.0.0", "Productive", "Handles customer invoices", "/apis/22", "Domain: Customer"),
new Api("M", 623L, "Marketing Campaign Management", "v4.0.0", "Productive", "Manages marketing campaign details", "/apis/23", "Domain: Marketing"),
new Api("O", 624L, "Offer Management", "v4.0.0", "Productive", "Manages commercial offers", "/apis/24", "Domain: Product"),
new Api("O", 625L, "Order Management", "v4.0.0", "Productive", "Handles ordering processes", "/apis/25", "Domain: Product"),
new Api("P", 626L, "Party Management", "v4.0.0", "Productive", "Manages party information", "/apis/26", "Domain: Party"),
new Api("P", 627L, "Payment Management", "v4.0.0", "Productive", "Handles payments and transactions", "/apis/27", "Domain: Customer"),
new Api("P", 628L, "Place Management", "v4.0.0", "Productive", "Handles physical or logical places", "/apis/28", "Domain: Common"),
new Api("P", 629L, "Prepay Balance Management", "v4.0.0", "Productive", "Manages prepaid balances", "/apis/29", "Domain: Customer"),
new Api("P", 630L, "Product Catalog Management", "v4.0.0", "Productive", "Manages product catalog operations", "/apis/30", "Domain: Product"),
new Api("P", 631L, "Product Inventory Management", "v4.0.0", "Productive", "Manages product inventories", "/apis/31", "Domain: Product"),
new Api("P", 632L, "Product Order Management", "v4.0.0", "Productive", "Handles product orders", "/apis/32", "Domain: Product"),
new Api("P", 633L, "Product Offering Qualification", "v4.0.0", "Productive", "Qualifies product offerings for customers", "/apis/33", "Domain: Product"),
new Api("P", 634L, "Product Configuration", "v4.0.0", "Productive", "Configures product specifications", "/apis/34", "Domain: Product"),
new Api("Q", 635L, "Quote Management", "v4.0.0", "Productive", "Handles quotation of products and services", "/apis/35", "Domain: Product"),
new Api("R", 636L, "Resource Activation Management", "v4.0.0", "Productive", "Activates physical and logical resources", "/apis/36", "Domain: Resource"),
new Api("R", 637L, "Resource Function Activation", "v4.0.0", "Productive", "Manages activation of resource functions", "/apis/37", "Domain: Resource"),
new Api("R", 638L, "Resource Order Management", "v4.0.0", "Productive", "Handles resource orders", "/apis/38", "Domain: Resource"),
new Api("R", 639L, "Resource Inventory Management", "v4.0.0", "Productive", "Manages resource inventories", "/apis/39", "Domain: Resource"),
new Api("S", 640L, "Service Activation Management", "v4.0.0", "Productive", "Activates services in the network", "/apis/40", "Domain: Service"),
new Api("S", 641L, "Service Catalog Management", "v4.0.0", "Productive", "Manages service catalogs", "/apis/41", "Domain: Service"),
new Api("S", 642L, "Service Inventory Management", "v4.0.0", "Productive", "Handles service inventories", "/apis/42", "Domain: Service"),
new Api("S", 643L, "Service Order Management", "v4.0.0", "Productive", "Manages service orders", "/apis/43", "Domain: Service"),
new Api("S", 644L, "Service Problem Management", "v4.0.0", "Productive", "Handles service-related issues", "/apis/44", "Domain: Service"),
new Api("S", 645L, "Service Qualification", "v4.0.0", "Productive", "Checks if a service can be provided at a location", "/apis/45", "Domain: Service"),
new Api("S", 646L, "Service Test Management", "v4.0.0", "Productive", "Manages testing of services", "/apis/46", "Domain: Service"),
new Api("S", 647L, "Sales Management", "v4.0.0", "Productive", "Manages sales processes and opportunities", "/apis/47", "Domain: Product"),
new Api("T", 648L, "Trouble Ticket Management", "v4.0.0", "Productive", "Handles trouble tickets", "/apis/48", "Domain: Service"),
new Api("U", 649L, "Usage Management", "v4.0.0", "Productive", "Manages usage records", "/apis/49", "Domain: Resource"),
new Api("W", 650L, "Work Order Management", "v4.0.0", "Productive", "Handles work order processes", "/apis/50", "Domain: Resource")


                    
                    );

    @Override
    public List<Api> getAllApis() {
        return apis;
    }

    @Override
    public Api getApiById(Long id) {
        return apis.stream().filter(api -> api.getId().equals(id)).findFirst().orElse(null);
    }
}

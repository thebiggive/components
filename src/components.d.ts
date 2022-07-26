/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface BiggiveCampaignCard {
        /**
          * @param banner Full URL of a banner image.
         */
        "banner": string;
        "beneficiaries": string;
        /**
          * @param callToActionLabel Text for the link to `callToActionUrl`.
         */
        "callToActionLabel": string;
        /**
          * @param callToActionUrl Full URL of a call to action.
         */
        "callToActionUrl": string;
        "campaignTitle": string;
        "campaignType": string;
        "categories": string;
        "daysRemaining": number;
        "matchFundsRemaining": number;
        "organisationName": string;
        "target": number;
        /**
          * @param totalFundsRaised Total the campaign has raised so far including matching but excluding any tax relief, in major unit of currency e.g. pounds GBP.
         */
        "totalFundsRaised": number;
    }
    interface BiggiveGrid {
    }
    interface DemoCampaignCards {
    }
}
declare global {
    interface HTMLBiggiveCampaignCardElement extends Components.BiggiveCampaignCard, HTMLStencilElement {
    }
    var HTMLBiggiveCampaignCardElement: {
        prototype: HTMLBiggiveCampaignCardElement;
        new (): HTMLBiggiveCampaignCardElement;
    };
    interface HTMLBiggiveGridElement extends Components.BiggiveGrid, HTMLStencilElement {
    }
    var HTMLBiggiveGridElement: {
        prototype: HTMLBiggiveGridElement;
        new (): HTMLBiggiveGridElement;
    };
    interface HTMLDemoCampaignCardsElement extends Components.DemoCampaignCards, HTMLStencilElement {
    }
    var HTMLDemoCampaignCardsElement: {
        prototype: HTMLDemoCampaignCardsElement;
        new (): HTMLDemoCampaignCardsElement;
    };
    interface HTMLElementTagNameMap {
        "biggive-campaign-card": HTMLBiggiveCampaignCardElement;
        "biggive-grid": HTMLBiggiveGridElement;
        "demo-campaign-cards": HTMLDemoCampaignCardsElement;
    }
}
declare namespace LocalJSX {
    interface BiggiveCampaignCard {
        /**
          * @param banner Full URL of a banner image.
         */
        "banner"?: string;
        "beneficiaries"?: string;
        /**
          * @param callToActionLabel Text for the link to `callToActionUrl`.
         */
        "callToActionLabel"?: string;
        /**
          * @param callToActionUrl Full URL of a call to action.
         */
        "callToActionUrl"?: string;
        "campaignTitle"?: string;
        "campaignType"?: string;
        "categories"?: string;
        "daysRemaining"?: number;
        "matchFundsRemaining"?: number;
        "organisationName"?: string;
        "target"?: number;
        /**
          * @param totalFundsRaised Total the campaign has raised so far including matching but excluding any tax relief, in major unit of currency e.g. pounds GBP.
         */
        "totalFundsRaised"?: number;
    }
    interface BiggiveGrid {
    }
    interface DemoCampaignCards {
    }
    interface IntrinsicElements {
        "biggive-campaign-card": BiggiveCampaignCard;
        "biggive-grid": BiggiveGrid;
        "demo-campaign-cards": DemoCampaignCards;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "biggive-campaign-card": LocalJSX.BiggiveCampaignCard & JSXBase.HTMLAttributes<HTMLBiggiveCampaignCardElement>;
            "biggive-grid": LocalJSX.BiggiveGrid & JSXBase.HTMLAttributes<HTMLBiggiveGridElement>;
            "demo-campaign-cards": LocalJSX.DemoCampaignCards & JSXBase.HTMLAttributes<HTMLDemoCampaignCardsElement>;
        }
    }
}

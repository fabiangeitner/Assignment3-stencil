/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface HomeScreen {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface MyDescription {
    }
    interface MyFilter {
    }
    interface MyHeader {
    }
    interface MyPrice {
        "price": string;
    }
    interface MySalebanner {
    }
    interface ProductVariation {
        "color": string;
    }
    interface StartseiteNavigation {
    }
}
declare global {
    interface HTMLHomeScreenElement extends Components.HomeScreen, HTMLStencilElement {
    }
    var HTMLHomeScreenElement: {
        prototype: HTMLHomeScreenElement;
        new (): HTMLHomeScreenElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLMyDescriptionElement extends Components.MyDescription, HTMLStencilElement {
    }
    var HTMLMyDescriptionElement: {
        prototype: HTMLMyDescriptionElement;
        new (): HTMLMyDescriptionElement;
    };
    interface HTMLMyFilterElement extends Components.MyFilter, HTMLStencilElement {
    }
    var HTMLMyFilterElement: {
        prototype: HTMLMyFilterElement;
        new (): HTMLMyFilterElement;
    };
    interface HTMLMyHeaderElement extends Components.MyHeader, HTMLStencilElement {
    }
    var HTMLMyHeaderElement: {
        prototype: HTMLMyHeaderElement;
        new (): HTMLMyHeaderElement;
    };
    interface HTMLMyPriceElement extends Components.MyPrice, HTMLStencilElement {
    }
    var HTMLMyPriceElement: {
        prototype: HTMLMyPriceElement;
        new (): HTMLMyPriceElement;
    };
    interface HTMLMySalebannerElement extends Components.MySalebanner, HTMLStencilElement {
    }
    var HTMLMySalebannerElement: {
        prototype: HTMLMySalebannerElement;
        new (): HTMLMySalebannerElement;
    };
    interface HTMLProductVariationElement extends Components.ProductVariation, HTMLStencilElement {
    }
    var HTMLProductVariationElement: {
        prototype: HTMLProductVariationElement;
        new (): HTMLProductVariationElement;
    };
    interface HTMLStartseiteNavigationElement extends Components.StartseiteNavigation, HTMLStencilElement {
    }
    var HTMLStartseiteNavigationElement: {
        prototype: HTMLStartseiteNavigationElement;
        new (): HTMLStartseiteNavigationElement;
    };
    interface HTMLElementTagNameMap {
        "home-screen": HTMLHomeScreenElement;
        "my-component": HTMLMyComponentElement;
        "my-description": HTMLMyDescriptionElement;
        "my-filter": HTMLMyFilterElement;
        "my-header": HTMLMyHeaderElement;
        "my-price": HTMLMyPriceElement;
        "my-salebanner": HTMLMySalebannerElement;
        "product-variation": HTMLProductVariationElement;
        "startseite-navigation": HTMLStartseiteNavigationElement;
    }
}
declare namespace LocalJSX {
    interface HomeScreen {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface MyDescription {
    }
    interface MyFilter {
    }
    interface MyHeader {
    }
    interface MyPrice {
        "price"?: string;
    }
    interface MySalebanner {
    }
    interface ProductVariation {
        "color"?: string;
    }
    interface StartseiteNavigation {
    }
    interface IntrinsicElements {
        "home-screen": HomeScreen;
        "my-component": MyComponent;
        "my-description": MyDescription;
        "my-filter": MyFilter;
        "my-header": MyHeader;
        "my-price": MyPrice;
        "my-salebanner": MySalebanner;
        "product-variation": ProductVariation;
        "startseite-navigation": StartseiteNavigation;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "home-screen": LocalJSX.HomeScreen & JSXBase.HTMLAttributes<HTMLHomeScreenElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "my-description": LocalJSX.MyDescription & JSXBase.HTMLAttributes<HTMLMyDescriptionElement>;
            "my-filter": LocalJSX.MyFilter & JSXBase.HTMLAttributes<HTMLMyFilterElement>;
            "my-header": LocalJSX.MyHeader & JSXBase.HTMLAttributes<HTMLMyHeaderElement>;
            "my-price": LocalJSX.MyPrice & JSXBase.HTMLAttributes<HTMLMyPriceElement>;
            "my-salebanner": LocalJSX.MySalebanner & JSXBase.HTMLAttributes<HTMLMySalebannerElement>;
            "product-variation": LocalJSX.ProductVariation & JSXBase.HTMLAttributes<HTMLProductVariationElement>;
            "startseite-navigation": LocalJSX.StartseiteNavigation & JSXBase.HTMLAttributes<HTMLStartseiteNavigationElement>;
        }
    }
}

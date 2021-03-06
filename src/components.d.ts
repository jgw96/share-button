/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface ShareButton {
    'text': string;
    'title': string;
    'url': string;
  }
  interface ShareButtonAttributes extends StencilHTMLAttributes {
    'text'?: string;
    'title'?: string;
    'url'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'ShareButton': Components.ShareButton;
  }

  interface StencilIntrinsicElements {
    'share-button': Components.ShareButtonAttributes;
  }


  interface HTMLShareButtonElement extends Components.ShareButton, HTMLStencilElement {}
  var HTMLShareButtonElement: {
    prototype: HTMLShareButtonElement;
    new (): HTMLShareButtonElement;
  };

  interface HTMLElementTagNameMap {
    'share-button': HTMLShareButtonElement
  }

  interface ElementTagNameMap {
    'share-button': HTMLShareButtonElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}

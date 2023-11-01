import { LightningElement, api } from 'lwc';

export default class UrlButtonLwc extends LightningElement {
    @api buttonLabel;
    @api buttonLink;
    @api buttonVariant;
    @api backgroundcolor;
    @api textColor;
    @api buttonWidth;
    @api buttonHeight;
    @api buttonClass;
    @api buttonIcon;

    handleClick() {
        window.open(this.buttonLink, "_blank");
        console.log("Button clicked!");
    }
}
export class Image {
    photographer: string;
    photographer_url: string;
    src:{
        original?:string,
        large2x?:string,
        large?:string,
        landscape?:string,
        medium?:string,
        portrait?:string,
        small?:string,
        tiny?:string
    };
    alt:string;
    constructor(photographer:string,photographer_url:string,src:{},alt:string) {
        this.photographer = photographer;
        this.photographer_url = photographer_url;
        this.src = src;
        this.alt = alt;
    }
}
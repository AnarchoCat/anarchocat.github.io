"use strict";

class Template {
    static pattern: RegExp = new RegExp(/\{\{\s*(\w+)\s*\}\}/, 'g');
    #templateString: string;
    #map: Map<string, string>;


    constructor(templateString: string) {
        this.#map = new Map<string, string>();
        this.#templateString = templateString;
        for (const m of this.#templateString.matchAll(Template.pattern)) {
            try {
                Reflect.defineProperty(this, m[1], {
                    set(x) {
                        this.#map.set(m[0], x);
                    }
                });
            }
            catch {

            }
        }
    }
    
    render() {
        let html: string = this.#templateString;
        this.#map.forEach((v, k) => {
            html = html.replace(k, v);
        })
        return html;
    }

}

export default Template;
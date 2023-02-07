import {css, html, LitElement, styleMap} from 'lit';

export class AssureSignIframe extends LitElement {
    // Define scoped styles right with your component, in plain CSS
    static styles = css`
      :host {
        height: 100%;
        width: 100%;
        display: block;
      }

      .frame {
        display: inline-block;
        height: 100%;
        width: 100%;
        background-color: transparent;
        border: none;
      }
    `;

    static data = {
        "request": {
            "placeholders": [],
            "templates": [
            {
                "templateID": this.templateId,
                "values": [
                {
                    "name": "Envelope Name 2 ",
                    "value": "My New Envelope"
                },
                {
                    "name": "Envelope Order number 2",
                    "value": "Account_Order_123"
                },
                {
                    "name": "Expiration Date 2",
                    "value": "06/17/2019"
                },
                {
                    "name": "Language",
                    "value": "en-US"
                },
                {
                    "name": "Signer 1 Name",
                    "value": this.signerName
                },
                {
                    "name": "Signer 1 Email",
                    "value": this.signerEmail
                },
                {
                    "name": "Signer 1 Mobile Phone",
                    "value": this.signerPhone
                }
                ]
            }
            ]
        }
    };

    constructor() {
        super();
        this.src = '';
        this.signerName = '';
        this.signerEmail = '';
        this.signerPhone = '';
        this.templateId = '';
        this.apiUsername = '';
        this.apiPassword = '';
      }

    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'AssureSign',
            fallbackDisableSubmit: false,
            description: 'AssureSign signing experience.',
            iconUrl: "one-line-text",
            groupName: 'Visual',
            version: '1.3',
            properties: {
                src: {
                    type: 'string',
                    title: 'Source URL',
                    description: 'URL of the iframe, please note many sites block been rendered in iframes'
                },
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                },
                signerName: {
                    type: 'string',
                    title: 'Signer Name',
                    description: 'Full name of the Signer'
                },
                signerEmail: {
                    type: 'string',
                    title: 'Signer Email',
                    description: 'Email of the Signer'
                },
                signerPhone: {
                    type: 'string',
                    title: 'Signer Phone Number',
                    description: 'Phone number of the Signer'
                },
                templateId : {
                    type: 'string',
                    title: 'Template Id',
                    description: 'AssureSign Template Id'
                },
                apiUsername: {
                    type: 'string',
                    title: 'API Username'
                },
                apiPassword: {
                    type: 'string',
                    title: 'API Password'
                }
            },
            standardProperties: {
                readOnly: true,
                required: true,
                description: true,
            }
        };
    }    

    // Render the UI as a function of component state
    render() {
        let styles = {height: this.height};

        return html`
            <iframe
                class="frame"
                style=${styleMap(styles)}
                name=${this.name}
                allow="geolocation *; microphone; camera"
                title=${this.title}
                src=${this.src}
            ></iframe>`;
    }
}

// registering the web component.
const elementName = 'sample-iframe';
customElements.define(elementName, SampleIframe);
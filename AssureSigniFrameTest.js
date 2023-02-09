import {css, html, LitElement, styleMap} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/all/lit-all.min.js';

export class SampleIframe extends LitElement {
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

    static getMetaConfig() {
        // plugin contract information
        return {
            controlName: 'AssureSign-iFrame',
            fallbackDisableSubmit: false,
            description: 'IFrame component which can render AssureSign envelope',
            iconUrl: "pen",
            groupName: 'signature',
            version: '1.3',
            properties: {
                height: {
                    type: 'string',
                    title: 'Height',
                    description: 'Height of the component',
                },
                signerEmail: {
                    type: 'string',
                    title: 'Signer Email'
                },
                signerName: {
                    type: 'string',
                    title: 'Signer Name'
                },
                signerPhone: {
                    type: 'string',
                    title: 'Signer Phone Number'
                },
                assureSignApiUsername: {
                    type: 'string',
                    title: 'AssureSign API Username'
                },
                assureSignApiKey: {
                    type: 'string',
                    title: 'AssureSign API Password'

                },
                assureSignApiUserEmail: {
                    type: 'string',
                    title: 'AssureSign API User Email'
                },
                assureSignTemplateId: {
                    type: 'string',
                    title: 'AssureSign template Id'
                }
            },
            standardProperties: {
                readOnly: true,
                description: true,
            }
        };
    }

    static properties = {
        name: '',
        title: '',
        src: 'https://www.nintex.com/',
        height: '100%',
        signerName: '',
        signerEmail: '',
        signerPhone: '',
        assureSignApiUsername: '',
        assureSignApiKey: '',
        assureSignTemplateId: ''
    }

    async load() {
        const apiUserBody = {
            "request": {
              "apiUsername": this.assureSignApiUsername,
              "key": this.assureSignApiKey,
              "contextUsername": this.assureSignApiUserEmail,
              "sessionLengthInMinutes": 10
            }
        };
        debugger;
        console.log(apiUserBody);

        const token = await fetch('https://account.assuresign.net/api/v3.7/authentication/apiUser', {
            method: 'POST',
            body: JSON.stringify(apiUserBody)
        });

        console.log(token);

        // const submitBody = {
        //     "request": {
        //         "placeholders": [],
        //         "templates": [
        //             {
        //                 "templateID": this.assureSignTemplateId,
        //                 "values": [
        //                     {
        //                         "name": "Envelope Name 2 ",
        //                         "value": "My New Envelope"
        //                     },
        //                     {
        //                         "name": "Language",
        //                         "value": "en-US"
        //                     },
        //                     {
        //                         "name": "Signer 1 Name",
        //                         "value": this.signerName
        //                         },
        //                     {
        //                         "name": "Signer 1 Email",
        //                         "value": this.signerEmail
        //                     },
        //                     {
        //                         "name": "Signer 1 Phone",
        //                         "value": this.signerPhone
        //                     }
        //                 ]
        //             }
        //         ]
        //     }
        // }
        
        // const submit = await fetch('https://www.assuresign.net/api/documentnow/v3.7/submit',
        // {
        //     method: 'POST',
        //     headers: {
        //         'Authorization': 'Bearer' + token.
        //         // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     body: JSON.stringify(submitBody)
        // });

        // console.log(submit);

        // const signingLinks = await fetch('https://www.assuresign.net/api/documentnow/v.37/envelope/'+ submit.value +'/signingLinks',
        //     {
        //         method: 'GET'
        //     }
        // );
    }

    // Render the UI as a function of component state
    render() {
        this.load();
        let styles = {height: this.height};

        return html`
            <iframe
                class="frame"
                style=${styleMap(styles)}
                allow="geolocation *; microphone; camera"
                src=${this.src}
            ></iframe>`;
    }
}

// registering the web component.
const elementName = 'testing-testing';
customElements.define(elementName, SampleIframe);
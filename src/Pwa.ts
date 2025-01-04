class Pwa 
{ 
    #serviceWorkerRegistration?: ServiceWorkerRegistration; 
    constructor() 
    { 
        if ( isSecureContext ) 
        { 
            ( async () => 
            { 
                this.#serviceWorkerRegistration = await navigator.serviceWorker.register( "sw.js" ); 
                this.logServiceWorkerRegistration();
            } )(); 
        } 
    } 

    private logServiceWorkerRegistration() {
        console.log(this.#serviceWorkerRegistration);
    }
} 
export const pwa = new Pwa();
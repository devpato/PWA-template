"use strict";

let sw = null;
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(swRegistered => {
        console.log("[ServiceWorker**] - Registered");
        sw = swRegistered;
    });
}
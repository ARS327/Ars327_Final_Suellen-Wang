(function resetAB() {
    if(typeof PMO !== "undefined" && typeof PMO.Interface !== "undefined" && typeof PMO.Interface.resetAB !== "undefined") {
        PMO.Interface.resetAB();
    } else {
        window.setTimeout(resetAB, 50);
    }
})();

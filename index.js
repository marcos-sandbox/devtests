(async function main () {
    function getUrlParam() {
        var params = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,    
        function(m,key,value) {
          params[key] = value;
        });
        return params;
    }
    
    var delay = getUrlParam()['delay'];
    
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: 'funnel_step',
        funnel: {
            name: 'A',
            current_step: 'A',
            origin: 'A'
        }
    });
    
    if (delay) {
        await new Promise(r => setTimeout(r, Number(delay)));
    }
    
    window.dataLayer.push({
        event: 'funnel_step',
        funnel: {
            name: 'B',
            current_step: 'B',
            origin: 'B'
        }
    });
})();

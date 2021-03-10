
            
function Bootstrap(baseUri) {

    return new Promise((resolve) => {

        function loadNextScript(bundles) {
            const bundle = bundles.pop()

            console.log('Loading ' + bundle)

            const script = document.createElement('script')
            script.addEventListener("load", function(event) {
                console.log('Loaded ' + bundle);
                
                if (bundles.length > 0) {
                    loadNextScript(bundles)
                } else {
                    resolve()
                }
            });
            script.setAttribute('type', 'text/javascript');
            script.setAttribute('src', baseUri + bundle);
            document.body.appendChild(script);
        }

        let bundles = [
            "main.js","vendors-node_modules_core-js_modules_es_object_to-string_js-node_modules_core-js_modules_es_p-72d9dd.js","runtime.js"
        ]

        loadNextScript(bundles)
    })
}

window.HelloWorld = {
    load: (baseUri) => {
        return Bootstrap(baseUri)
        .then(() => {
            return window.HelloWorld.load()
        })
    }
}
            
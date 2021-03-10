
            
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
            
        ]

        loadNextScript(bundles)
    })
}

window.HelloWorld = {
    load: (baseUri) => {
        return Bootstrap(baseUri)
        .then(() => {
            return window.HelloWorld
        })
    }
}
            
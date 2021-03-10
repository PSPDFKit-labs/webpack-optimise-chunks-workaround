const fs = require('fs');

// Optimised Chunks require you to inject the Javascript
// files into the HTML page but this isn't always fesiable
// so this plugin creates a bootstrap file to do this.
//
class BootstrapPlugin {

    apply(compiler) {

        compiler.hooks.afterEmit.tap('Bootstrap Plugin', (compilation) => {

            const bundles = Array.from(compilation.comparedForEmitAssets).map(url => {
                return '"' + url + '"';
            });

            const bootstrapScript = `
            
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
            ${bundles}
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
            `

            const outputPath = compilation.outputOptions.path;
            fs.writeFile(outputPath + '/' + 'bootstrap.js', bootstrapScript, (err) => {
                console.log(err)
            })
        });
    }
}

module.exports = {
    BootstrapPlugin
}
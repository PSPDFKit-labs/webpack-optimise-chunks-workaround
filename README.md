# 🚀 Welcome to your new awesome project!

This project has been created using **webpack scaffold**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

## Known Issues

- Promise Polyfill for Bootstrap
- Exported Module is {} on dev servers

# Todo
- PSPDFKit is still undefined on window 
- IE11 and non IE11 bundles (Disable boostrap + chunk opts for IE11)
- Analyise what is in numbered chunk
- Bundle library so that big chunks like pspdfkit.pdf is in main folder
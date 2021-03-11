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
- Wait PSPDFKit to be loaded before examples are started in catalog
- Split `load` into `init` and `load` method.  
- Give vendor chunk a nice name
- Bundle library so that big chunks like pspdfkit.pdf is in pspdfkit-lib folder
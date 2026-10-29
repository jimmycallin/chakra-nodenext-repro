# @chakra-ui/react type declarations don't resolve under `moduleResolution: "nodenext"`

```sh
npm install
npm run typecheck
```

Output with `@chakra-ui/react@3.37.0` and TypeScript 5.9:

```
src/App.tsx(1,10): error TS2305: Module '"@chakra-ui/react"' has no exported member 'Button'.
src/App.tsx(1,18): error TS2305: Module '"@chakra-ui/react"' has no exported member 'ChakraProvider'.
```

The same file typechecks under `moduleResolution: "bundler"`:

```sh
npx tsc --noEmit --module preserve --moduleResolution bundler
```

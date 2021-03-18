# @callaars/react-native-portal

Ultra-lightweight portal implementation.

## Installation

```sh
npm install @callaars/react-native-portal
```

## Usage

```js
import Portal from "@callaars/react-native-portal";

export default function App() {
  return (
    <PortalProvider>
      {/** Any portaled components will appear right here. **/}

      {/** The rest of your app **/}

      <Portal>
        {/** Whenever you want to portal component put it in a Portal **/}
      </Portal>
    </PortalProvider>
  );
}
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

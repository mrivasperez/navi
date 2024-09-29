# navi: A simple react routing library.

## Overview

`navi` is a lightweight and flexible routing library designed specifically for React applications. It provides the core functionality you need to manage navigation within your application without the overhead of a large, complex library.

## Key Features

- **Simple API:** `navi` offers a clean and intuitive API, making it easy to set up and use.
- **Customizable:** You have full control over how your routes are structured and how navigation is handled, allowing you to create a routing system that perfectly fits your application's needs.
- **Lightweight:** `navi` is a small and efficient library, minimizing the impact on your application's performance.

## Installation

```bash
npm install @mrivasperez/navi
```

## Usage

```jsx
import { NavigationProvider, Route, Link, useNavigation } from "navi";

function App() {
  return (
    <NavigationProvider>
      <Route path="/">
        <h1>Home</h1>
        <Link to="/about">About</Link>
      </Route>
      <Route path="/about">
        <h1>About Us</h1>
        <Link to="/">Go back to Home</Link>
      </Route>
    </NavigationProvider>
  );
}
```

## Contributing

Contributions to navi are welcome! Please submit a PR if you encounter any issues, or help with resolving existing ones.

## Feedback

Please feel free to open an issue!

## License

`navi` is licensed under the MIT License.

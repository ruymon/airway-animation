# Airway Animation ✈

A concept to add airplanes in a airway using Javascript and CSS Animations. Currently this is a a HTML only concept. In the near future we will add a Lib to abstract this and provide a way to use it in a React App.

## Getting Started

1. Clone the repo

```cmd
git clone https://github.com/ruymon/airway-animation.git
```

_Observation: if you have the [**Github CLI**](https://cli.github.com/) installed you can use the following command to clone the repo._

```cmd
gh repo clone ruymon/airway-animation
```

2. Open the index.html file and

3. If you wish to add custom config to the animation, add your configurations in the airway.js file.

```js
const customConfig = {
  // Your Configurations!
};
```

All configurations possibilities:

```js
const customConfig = {
  background: '#282828', // Background color of the container. This property can be a HEX; RGB; RGBA or a color name. If not set, the default background color is transparent.
  height: 500, // Height of the container as a number. If not set, the deault value is 130px.
  resizable: false, // Resizable container boolean. If set to true, the container will be resizable.
  colorFromLeft: 'blue', // Color for the aircraft coming from the left. This property can be a HEX; RGB; RGBA or a color name. If not set, the default color is blue.
  colorFromRight: 'red', // Color for the aircraft coming from the right. This property can be a HEX; RGB; RGBA or a color name. If not set, the default color is red.
  lazy: true, // Lazy Mode is a boolean. If set to true, airplanes will spawn slowly (incrementally). If set to false, all airplanes will spawn at once when the page loads.
  log: false, // Log Mode or Developer Mode. If set to true, the console will log the events. If set to false, the console will not log the events.
};
```

### Behind the Scenes 🔎

In this starter version there is a container div that will be used to inject airplanes.

```html
<div id="airwayGrid"></div>
```

### Roadmap: 📅

---

1. Convert to TypeScript

```ts
interface configTypes {
  background: 'transparent' | string;
  height: number;
  resizable: boolean;
  colorFromLeft: string[] | string | 'random'; // Nice feature to add: 'random'.
  colorFromRight: string[] | string | 'random'; // Nice feature to add: 'random'.
  lazy: boolean;
  log: boolean;
}
```

2. Create a Lib to use a component in a React Project:

This example will demonstrate how this could be used as a component in a React Project:

````jsx

```jsx
import React from 'react';
import AirwayAnimation from 'airway-animation';

const config = {
  maxLimit: 'container',
  background: 'transparent',
  resizable: true,
  colorFromLeft: '#a339e3',
  colorFromRight: '#2ec662',
};

function sampleData() {
  return <AirwayAnimation config={config} />;
}

export default sampleData;
````

---

### Contributing 📝

If you wish to contribute to this project: _Bug Fixes_; _Updating Docs_; or any update at all, **you can follow this guide:**

- [ ] [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) this repo;

- [ ] Find this fork inside your github project.

- [ ] Create a new _branch_ with your modifications. 💡 _Tip: To create a new branch use the command:_

```git
git checkout -b my-branch
```

- [ ] Make your modifications.

- [ ] _Commit_ your modifications. 💡 _Tip: To commit use the command:_

```cmd
git commit -m 'feat: My new feature'
```

- [ ] _Push_ your _branch_: 💡 _Tip: To push your branch use the command:_

```cmd
git push origin my-branch
```

:tada: Tada! Now the only thing left to do is to open a _pull request_ of your _fork_ and I will be glad to analyze your contribution!;

<br>

### :memo: Licence

MIT © [Ruy Monteiro](https://github.com/ruymon). This project is under the MIT Licence. Check the [LICENSE](LICENSE) file for more details.

---

Made with ♥ by [Ruy Monteiro](https://github.com/ruymon) :wave:

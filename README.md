# Airway Animation

A simple lib to add airplanes in a airway using javascript and CSS Animations

### Roadmap:

---

Todo: add config object for lib.

Idea:

```js
const config = {
  maxLimit: "container",
  background: "transparent",
  resizable: true,
  colorFromLeft: "#a339e3",
  colorFromRight: "#2ec662",
};
```

Types Schema \*\*[DONE]:

```ts
interface configTypes {
  maxLimit: "container" | number;
  background: "transparent" | string;
  resizable: true | false;
  colorFromLeft: string[] | string | "random";
  colorFromRight: string[] | string | "random";
}
```

How it should look in a React Project:

```jsx
import React from "react";
import AirwayAnimation from "airway-animation";

const config = {
  maxLimit: "container",
  background: "transparent",
  resizable: true,
  colorFromLeft: "#a339e3",
  colorFromRight: "#2ec662",
};

function sampleData() {
  return <AirwayAnimation config={config} />;
}

export default sampleData;
```

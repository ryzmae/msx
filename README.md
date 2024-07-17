# msx
![NPM Downloads](https://img.shields.io/npm/dy/msxlib)

A minmalistic ms conversion library

## Examples
Use the following command to install the `msxlib` package via npm:

```bash
npm install msxlib
```

Once installed, you can import and use the library in your code:

```typescript
import msx from "msxlib";

console.log(MSX.parse("1ms")); // 1
console.log(MSX.parse("1s")); // 1000
console.log(MSX.parse("1m")); // 60000
console.log(MSX.parse("1h")); // 3600000
console.log(MSX.stringify(1)); // 1.00ms
```

For more information on how to use the `msxlib` package, please refer to the [documentation](https://npmjs.com/package/msxlib).
# Welcome to Osaka Utility Library!

#### resolve

```js
import { resolve } from 'osaka-utils';

async function main() {
  const promise = new Promise((resolve) => resolve('My data goes here'));
  const [error, data] = await resolve(promise);
  if (error) {
    console.log(error);
  }
  console.log(data);

  const promise2 = new Promise(() => {
    throw new Error('Something goes wrong');
  });
  const [error2, data2] = await resolve(promise2);

  if (error2) {
    console.log(error2);
  }

  console.log(data2);
}
main();
```

#### sleep

```js
import { sleep } from 'osaka-utils';

async function main() {
  console.log(`Sleep 1 second, ${new Date()}`);
  await sleep();
  console.log(`End, ${new Date()}`);

  console.log(`Sleep 5 seconds, ${new Date()}`);
  await sleep(5);
  console.log(`End, ${new Date()}`);
}
main();
```

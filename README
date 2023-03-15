# Welcome to Osaka Utility Library!

#### Example
```js
import { Resolve } from  'osaka-utils';

async  function  main() {
	const  promise  =  new  Promise((resolve) =>  resolve('My data goes here'));
	const [error, data] =  await  Resolve(promise);
	if (error) {
		console.log(error);
	}
	console.log(data)

	const  promise2  =  new  Promise(() => {
		throw  new  Error('Something goes wrong')
	});
	const [error2, data2] =  await  Resolve(promise2);

	if (error2) {
		console.log(error2);
	}

	console.log(data2);
}
main();
```
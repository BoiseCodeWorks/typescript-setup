Getting Started with TypeScript
===============================

VSCode is an awesome editor to get started with TypeScript. VSCode has a built in task runner that can be tied into and will work perfect to compile TypeScript to ES5 or whatever ES platform you are targeting.

##Step 1: Install the TypeScript Compiler

```terminal
> npm install -g typescript
```
Use `sudo` if the above fails. If you don't have `npm` go install [node](https://nodejs.org/en/download/) and then reopen your command line and try again.

##Step 2: VSC TaskRunner

Open VSCode and press `ctrl/cmd+shift+b`
You will likely see a popup that asks you to configure the `tasks.json` file. Go ahead and replace the first section of code that is not in comments with this

```json
{
    "version": "0.1.0",
    "command": "tsc",
    "showOutput": "silent",
    "isShellCommand": true,
    "problemMatcher": "$tsc"
}
```

Then Go to the root of your project and add a file named `tsconfig.json` and add the following to it. 

```json
{
    "compilerOptions": {
        "target": "es5",
        "out": "js/script.js",
        "watch": true
    }
}
```

##Step 3: Start the Watcher
From VSCode and press `ctrl/cmd+shift+b`
You should see the tasks window pop with a message like

`Watching for file changes.` 

##Step 4: Create a .ts file

Here is an example for you.

Person.ts
```typescript
/**
 * Person
 */
class Person {
    constructor(public name :string, private age :number) {
        this.name = name;
        this.age = age;
    }   
}

var jake = new Person("Jake", 30);
```

As soon as you save the file you will see a new directory name `js` with a file named `script.js`

If you open it up you will see your TypeScript file has been converted to ES5.

##Step 5 Build Something
Have Fun! 

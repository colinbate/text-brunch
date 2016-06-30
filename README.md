# text-brunch

Brunch plugin to read text files as strings in JS.

## Install

```sh
npm install -D text-brunch
```

## Configuration

By default will work on any `.txt` file. If you want more, configure it using `pattern`.

You can configure where the plugin is used using the `pattern` configuration option. It takes a regular expression or glob or an array of those.

```js
exports.config = {
  plugins: {
    text: {
      pattern: /^fixtures\//
    }
  }
}
```

## Usage

```js
const myTextString = require('./my-file.txt');
```

If you have JS/TS files with the same base name as your text/other files, and you want to refer to the JS/TS files without their extension, you may want to include this in your config file:

```js
// change the regex to match your pattern if you are using a custom pattern
exports.config = {
  files: {
    javascripts: {
      order: {
        after: [/\.txt$/]
      }
    }
  }
}
```

This will force your text files to be output later in the file, which means they won't take the alias for the base name.


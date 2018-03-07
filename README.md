# nearley-loader

This package is a standard [webpack loader](https://webpack.js.org/loaders/)
which allows you to load [nearley](https://github.com/Hardmath123/nearley)
parser specification files as parser rules directly from webpack.

This branch contains support for the latest nearley version, currently
`nearley@^2.0.0`. For `nearlet@^1.0.0` check the `nearley1` branch in this
repo.

## Installation

You need to install both `nearley` and `nearley-loader`, since `nearley` is a
peer dependency of this package. The major version of the `nearley-loader`
package must match the installed version of `nearley`, so if you install
`nearley@2.13.0`, then you need to install `nearley-loader@^2.0.0`.

## Usage

Just configure webpack to handle nearley files with this loader:

```javascript
module: {
  rules: [
      {
        test: /\.nearley$/,
        use: [
          'nearley-loader',
        ],
      },
  ]
}

```

If using with `create-react-app` or any other pre-configured webpack, be sure
that the `.ne` extension (or whatever file extension you use above) is not
affected by another loader.  For instance, `create-react-app` will apply a
url-loader to any file extension it doesn't recognize.

Once you've done that, you can now require nearley files in your javascript
modules and you'll get the compiled parser rules:

```javascript
import { Parser, Grammar } from 'nearley';
import grammar from './grammar.ne';

const parser = new Parser(Grammar.fromCompiled(grammar));
```

## License

MIT License

Copyright (c) 2016 Kozily

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

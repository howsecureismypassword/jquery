# How Secure Is My Password? jQuery Plugin

Now you can use the [howsecureismypassword.net](https://howsecureismypassword.net) password strength meter on your own sites.

# About

Rather then just saying a password is "weak" or "strong", *How Secure is My Password?* lets your users know how long it would take someone to crack their password. It also checks against the top 10,000 most common passwords as well as a number of other checks (such as repeated strings, telephone numbers, and words followed by numbers).

## Other Versions

This is the jQuery version of the plugin. Other versions are also available:

- Vanilla JS Version: [howsecureismypassword/hsimp](https://github.com/howsecureismypassword/hsimp)
- WordPress Version: [howsecureismypassword/wordpress](https://github.com/howsecureismypassword/wordpress)


# Setup

## Installation

```shell
bower install hsimp-jquery
```

## CSS
Copy the `build/hsimp.jquery.css` file to your `css` directory and include it in your document `<head>`:

```html
<link rel="stylesheet" href="/css/hsimp.css">
```

## JavaScript
Copy the `build/hsimp.jquery.min.js` file to your `js` directory and include it at the bottom of the document `<body>`:

```html
<script src="/js/hsimp.min.js"></script>
<!-- Other scripts go here -->
```

# Usage

## Basic Usage

```javascript
$("[type=password]").hsimp();
```

## With Configuration

```javascript
$(".password-input").hsimp({
    calculationsPerSecond: 10e9, // 10 billion
    // see below for full set of options...
});
```

## Configuration

Currently there are three supported options:

- `calculationsPerSecond`: the assumed number of calculations per second a cracker could make (default: 10e9 - 10 billion)
- `good`: the minimum time (in seconds) that a "good" (green) password would take to crack (default: 31557600e6 - 1 million years)
- `ok`: the minimum time (in seconds) that an "ok" (orange) password would take to crack (default: 31557600 - 1 year)


# License

The MIT License (MIT)

Copyright (c) 2015, Mark Nicholas Wales / Small Hadron Collider

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
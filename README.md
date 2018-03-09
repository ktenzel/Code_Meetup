<p align="center"><img width="60%" src="src/assets/codeday_logo.png"></p>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;
[![Project Version](https://img.shields.io/badge/Ver-0.1.0-blue.svg?style=for-the-badge)](https://github.com/ktenzel/Code_Meetup.git)
&nbsp;&nbsp;&nbsp;&nbsp;
[![GitHub issues](https://img.shields.io/github/issues/ktenzel/Code_Meetup.svg?style=for-the-badge)](https://github.com/ktenzel/Code_Meetup/issues)
&nbsp;&nbsp;&nbsp;&nbsp;
[![GitHub license](https://img.shields.io/github/license/ktenzel/Code_Meetup.svg?style=for-the-badge)](https://github.com/ktenzel/Code_Meetup/blob/master/LICENSE)


## Project Overview
<!-- Basic Overview goes here -->
<!-- REMOVE API KEY & API KEY HISTORY -->
## Install

First, clone this repo:

```sh
$ git clone https://github.com/ktenzel/Code_Meetup.git
```

From your terminal, cd into the directory you just cloned:

> :children_crossing: Path below is just an example an likely doesn't exist, unless of course you cloned into you desktop.

```sh
$ cd ~/Desktop/Code_Meetup
```

Install all npm packages:

```sh
$ npm install
```

<!-- Edit api-keys file -->

Now we need to setup our Firebase function, start off by installing the firebase-tools npm package.
> Install this globally or locally, either or. (If you're going to be working with Firebase a lot and on multiple projects, I suggest you install it globally or use something like env)

```sh
$ npm install -g firebase-tools
```

Next, we will need to authenticate the firebase tool:
> Sign in with the same account you used to create your Firebase database.

```sh
$ firebase login
```

Last set of npm packages:

```sh
$ cd functions && npm install
```

You're ready to roll. Just run this angular cli task:

```sh
$ ng serve
```

> :bell: Note

> Commands denoted by :construction: are currently not available, but will be in the very near future.
### Future features

| Improvements | Description |
| :------------- | :------------- |
| :construction: | :construction: |   
| :construction: | :construction: |

## License

[MIT License][Arbitrary case-insensitive reference text]

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

###### Copyright (c) 2018 Anduin Mooney, Abdullah Yahya, Kyle Tenzel, & Ross Fletcher

[arbitrary case-insensitive reference text]: https://ayahya.mit-license.org

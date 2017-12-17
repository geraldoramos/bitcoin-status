# Bitcoin Status

[![Twitter](https://img.shields.io/twitter/url/https/twitter.com/fold_left.svg?style=social&label=Follow%20%40geraldoramos)](https://twitter.com/geraldoramos)

A menu bar application using [Electron](https://github.com/electron) that updates bitcoin price in real-time. Prices are updated every minute.

<p align="center"><img src="https://firebasestorage.googleapis.com/v0/b/js-directory.appspot.com/o/bitcoin-status.gif?alt=media&token=31c2e737-8291-4e06-bafc-65ea02397718" width="600"/></p>


## Downloading the app

To download the app, click [here](https://github.com/geraldoramos/bitcoin-status/raw/master/dist/bitcoin-status-1.0.0.dmg) (currently available for macOS only)

PS: The app is not signed yet, a security notice may appear. If you prefer to build the app on your machine, follow the next part.

## Build the app locally

**First, clone this repo:**
 ```
git clone https://github.com/geraldoramos/bitcoin-status.git
cd bitcoin-status
 ```

**Then install and launch using NPM:**
```
npm install && npm start
 ```

**To create a dmg file using electron builder:**
```
rm -rf dist
electron-builder
```


## License
This database is distributed under the Creative Commons Zero v1.0 Universal license

Follow me on [Twitter](http://twitter.com/geraldoramos)

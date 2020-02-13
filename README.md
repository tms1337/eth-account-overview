## Introduction

This a simple ETH account overview app where once you enter a valid ETH address, you get the information about your ETH, ERC20 balance, and a number of [Argent](https://www.argent.xyz/) guardians.

<p align="center">
  <img src="https://imgur.com/gC3jYcq.png" width="700" height="420" / >
</p>


## Useful commands

First install all the necessary dependencies by running `yarn`

Execute unit tests with `yarn test`

To run the project locally, execute `yarn start`

To build the project for production run `yarn build` and optimized production version will be present in `build/` folder.

## Repository structure

Repository has the following folder structure

```
|- src/
  |- config/
  |- components/
    |- hooks/
    |- services/
    |- screens/
    |- layouts/
  |- App.js
```

Let's break it down a bit. The entry point of the application is the `App.js` file.

`screens/` folder contains all the screens we show, in this case only `MainScreen` since it is a single screen app.

`/components` contains basic components we use as building blocks for the app. Alongside each component is unit test for it.

`/hooks` folder contains reusable state logic. In this case it is only a `useBlockchainData` hook which enables us to use data obtained from the blockchain and third-party APIs.

`/services` contains connectors to blockchain and third-party APIs used by `hooks/`.
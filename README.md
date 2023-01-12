# SvelteKit-Truffle-DApp

Revitalised the Certificate DApp example with newest technologies.


## 🛠 Built With

<div align="left">
<a href="https://nodejs.org/en/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/nodejs.svg" width="36" height="36" alt="NodeJS" /></a>
<a href="https://kit.svelte.dev/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/svelte.svg" width="36" height="36" alt="SvelteKit" /></a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/javascript.svg" width="36" height="36" alt="JavaScript" /></a>
<a href="https://soliditylang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/solidity.svg" width="36" height="36" alt="Solidity" /></a>
<a href="https://web3js.readthedocs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/web3js.svg" width="36" height="36" alt="Web3Js" /></a>
<a href="https://trufflesuite.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/truffle.svg" width="36" height="36" alt="Truffle" /></a>
<a href="https://ipfs.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/ipfs.svg" width="36" height="36" alt="IPFS" /></a>
<a href="https://metamask.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/DEMYSTIF/DEMYSTIF/bc1af50088a86d0c03085862403738d7884e27b7/assets/icons/metamask.svg" width="36" height="36" alt="MetaMask" /></a>
</div>


## ⚙️ Run Locally

Make sure to have a blockchain simulation (ganache/geth/foundry etc.) running on your port 8545. 

Clone the project

```bash
  git clone https://github.com/DEMYSTIF/sveltekit-truffle-dapp.git
```

Go to the project directory

```bash
  cd sveltekit-truffle-dapp
```

Go to the truffle folder

```bash
  cd truffle
```

Install truffle globally

```bash
  npm install -g truffle
```

Compile & migrate the contract

```bash
  truffle migrate
```

Go to the sveltekit folder

```bash
  cd .. && cd sveltekit
```

Install dependencies

```bash
  npm install
```

Start the application

```bash
  npm run dev
```

Enable cors in IPFS config and restart the application

```bash
  "API": {
    "HTTPHeaders": {
      "Access-Control-Allow-Origin": [
        "*"
      ]
    }
  },
```


## License

Distributed under the MIT License.


## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again! 

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/<feature_name>`)
3. Commit your Changes (`git commit -m '<feature_name>_added'`)
4. Push to the Branch (`git push origin feature/<feature_name>`)
5. Open a Pull Request


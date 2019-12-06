const bn = require('bn.js')

const Matic = require('../../dist/index').default
const config = require('./config')
const token = config.ROPSTEN_TEST_TOKEN // test token address
// const amount = '1000000000000000000' // amount in wei
const amount = new bn(100000000) // amount in wei

const from = config.FROM_ADDRESS // from address

// Create object of Matic
const matic = new Matic({
  maticProvider: config.MATIC_PROVIDER,
  parentProvider: config.PARENT_PROVIDER,
  rootChain: config.ROOTCHAIN_ADDRESS,
  registry: config.REGISTRY_ADDRESS,
  depositManager: config.DEPOSITMANAGER_ADDRESS,
  withdrawManager: config.WITHDRAWMANAGER_ADDRESS,
})

matic.initialize().then(() => {
  matic.wallet(config.PRIVATE_KEY)
  // Approve token
  matic
    .approveERC20TokensForDeposit(token, amount, {
      from,
      onTransactionHash: (hash) => {
        // action on Transaction success
        console.log(hash) // eslint-disable-line
      },
    })
    .then(() => {
      // Deposit tokens
      matic.depositERC20Tokens(token, from, amount, {
        from,
        onTransactionHash: (hash) => {
          // action on Transaction success
          console.log(hash) // eslint-disable-line
        },
      })
    })

})
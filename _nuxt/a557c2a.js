(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(n,t,e){"use strict";e.r(t);var o={components:{Layout:e(173).a}},r=e(14),component=Object(r.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Layout",{attrs:{title:"ExitUtil",description:"matic.js internally use `ABIManager` for handling abi management for you",keywords:"exit util, api type, read, write, polygon",contentSrc:"/home/runner/work/matic.js/matic.js/docs/content/docs/advanced/exit-util.md"}},[e("h1",{attrs:{id:"exitutil"}},[n._v("ExitUtil")]),n._v(" "),e("p",[e("code",[n._v("matic.js")]),n._v(" internally uses "),e("code",[n._v("ExitUtil")]),n._v(" for generating proof. It is a class which has different methods for helping with exit utilities.")]),n._v(" "),e("h2",{attrs:{id:"buildpayloadforexit"}},[n._v("buildPayloadForExit")]),n._v(" "),e("p",[n._v("It exposes "),e("code",[n._v("buildPayloadForExit")]),n._v(" method which can be used to generate proof.")]),n._v(" "),e("pre",[e("code",[n._v('import { ExitUtil, RootChain, use, Web3SideChainClient } from "@maticnetwork/maticjs";\nimport { Web3ClientPlugin } from "@maticnetwork/maticjs-web3";\nimport HDWalletProvider from "@truffle/hdwallet-provider";\nimport { from, privateKey, RPC } from "./config";\nuse(Web3ClientPlugin);\n\n\nconst client = new Web3SideChainClient<any>();\n// initiate client\nawait client.init({\n    // log: true,\n    network: \'testnet\',\n    version: \'mumbai\',\n    parent: {\n        provider: new HDWalletProvider(privateKey, RPC.parent),\n        defaultConfig: {\n            from\n        }\n    },\n    child: {\n        provider: new HDWalletProvider(privateKey, RPC.child),\n        defaultConfig: {\n            from\n        }\n    }\n});\n\n// create root chain instance\nconst rootChain = new RootChain(client, <root chain address>);\n\n// create exitUtil Instance\nconst exitUtil = new ExitUtil(client, rootChain);\n\n// generate proof\nconst proof = await exitUtil.buildPayloadForExit(\n    <burn tx hash>,\n    <log event signature>,\n    <isFast>\n)\n')])]),n._v(" "),e("h3",{attrs:{id:"generatingproofusingbridgeclient"}},[n._v("Generating proof using bridge client")]),n._v(" "),e("p",[n._v("Every bridge client including "),e("strong",[n._v("POSClient")]),n._v(", "),e("strong",[n._v("PlasmaClient")]),n._v(" exposes "),e("code",[n._v("exitUtil")]),n._v(" property.")]),n._v(" "),e("pre",[e("code",[n._v("import { POSClient,use } from \"@maticnetwork/maticjs\"\nimport { Web3ClientPlugin } from '@maticnetwork/maticjs-web3'\nimport HDWalletProvider from \"@truffle/hdwallet-provider\"\n\n// install web3 plugin\nuse(Web3ClientPlugin);\n\nconst posClient = new POSClient();\nawait posClient.init({\n    network: 'testnet',\n    version: 'mumbai',\n    parent: {\n      provider: new HDWalletProvider(privateKey, mainRPC),\n      defaultConfig: {\n        from : fromAddress\n      }\n    },\n    child: {\n      provider: new HDWalletProvider(privateKey, childRPC),\n      defaultConfig: {\n        from : fromAddress\n      }\n    }\n});\n\nconst proof = await posClient.exitUtil.buildPayloadForExit(\n    <burn tx hash>,\n    <log event signature>,\n    <isFast>\n)\n")])])])}),[],!1,null,null,null);t.default=component.exports}}]);
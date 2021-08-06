import { Web3SideChainClient } from "./web3_side_chain_client";
import { ITransactionConfig, ITransactionOption, IContractInitParam } from "../interfaces";
import { BaseContractMethod } from "../abstracts";
import { BaseContract } from "./eth_contract";
import { eventBusPromise, merge, IEventBusPromise } from "../utils";
import { EXTRA_GAS_FOR_PROXY_CALL } from "../constant";
import { ITransactionReceipt } from "../interfaces";
import { ContractWriteResult } from "./contract_write_result";

interface ITransactionConfigParam {
    txConfig: ITransactionConfig;
    method?: BaseContractMethod;
    isWrite?: boolean;
    isParent?: boolean;
}

export class BaseToken {

    contract: BaseContract;

    constructor(
        public contractParam: IContractInitParam,
        public client: Web3SideChainClient,
    ) {
        this.contract = this.getContract(contractParam);
    }

    protected processWrite(method: BaseContractMethod, option: ITransactionOption): Promise<ContractWriteResult> {
        return this.createTransactionConfig(
            {
                txConfig: option,
                isWrite: true,
                method,
                isParent: true
            }).then(config => {
                if (option.returnTransaction) {
                    return merge(config, {
                        data: method.encodeABI(),
                        to: this.contract.address
                    } as ITransactionConfig);
                }
                const methodResult = method.write(
                    config,
                );
                return new ContractWriteResult(methodResult);

            });
    }

    getContract({ isParent, tokenAddress, abi }: IContractInitParam) {
        const client = isParent ? this.client.parent.client :
            this.client.child.client;
        return client.getContract(tokenAddress, abi);
    }

    get parentDefaultConfig() {
        return this.client.config.parent.defaultConfig;
    }

    get childDefaultConfig() {
        return this.client.config.child.defaultConfig;
    }

    createTransactionConfig = async ({ txConfig, method, isParent, isWrite }: ITransactionConfigParam) => {
        txConfig = Object.assign(this.parentDefaultConfig, txConfig || {});
        const client = isParent ? this.client.parent.client :
            this.client.child.client;
        if (isWrite) {
            const [gas, gasPrice, nonce, chainId] = await Promise.all([
                !(txConfig.gas)
                    ? method.estimateGas({ from: txConfig.from, value: txConfig.value })
                    : txConfig.gas,
                !txConfig.gasPrice ? client.getGasPrice() : txConfig.gasPrice,
                !txConfig.nonce ? client.getTransactionCount(txConfig.from as string, 'pending') : txConfig.nonce,
                !txConfig.chainId ? client.getChainId() : txConfig.chainId,
            ]);

            txConfig.gas = isParent ? Number(gas) + EXTRA_GAS_FOR_PROXY_CALL : gas;
            txConfig.gasPrice = gasPrice;
            txConfig.nonce = nonce;
            txConfig.chainId = chainId;
        }
        return txConfig;
    };

}
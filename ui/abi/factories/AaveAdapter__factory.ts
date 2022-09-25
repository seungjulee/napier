/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type {
  AaveAdapter,
  AaveAdapterInterface,
  BaseAdapter,
} from "../AaveAdapter";

const _abi = [
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "underlying",
            type: "address",
          },
          {
            internalType: "address",
            name: "target",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "delta",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "minm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxm",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "issuanceFee",
            type: "uint256",
          },
        ],
        internalType: "struct BaseAdapter.AdapterParams",
        name: "_adapterParams",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "LENDING_POOL_V2_MAINNET",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_lscale",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "adapterParams",
    outputs: [
      {
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "delta",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "maxm",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "issuanceFee",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getIssuanceFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTarget",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scale",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tilt",
    outputs: [
      {
        internalType: "uint128",
        name: "",
        type: "uint128",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "uDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "underlying",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tBal",
        type: "uint256",
      },
    ],
    name: "unwrapTarget",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "uBal",
        type: "uint256",
      },
    ],
    name: "wrapUnderlying",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60c06040523480156200001157600080fd5b5060405162001c9a38038062001c9a8339810160408190526200003491620008cb565b8051600080546001600160a01b03199081166001600160a01b039384161782556020840151600180549092169316928317905560408084015160025560608401516003556080840151600490815560a085015160055581516306fdde0360e01b815291518594936306fdde039380840193919291908290030181865afa158015620000c3573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052620000ed91908101906200098b565b604051602001620000ff919062000a38565b6040516020818303038152906040526006908051906020019062000125929190620007f2565b5080602001516001600160a01b03166395d89b416040518163ffffffff1660e01b8152600401600060405180830381865afa15801562000169573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200019391908101906200098b565b604051602001620001a5919062000a66565b60405160208183030381529060405260079080519060200190620001cb929190620007f2565b5080600001516001600160a01b031663313ce5676040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200020f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019062000235919062000a94565b60ff166080526020808201516040805163313ce56760e01b815290516001600160a01b039092169263313ce567926004808401938290030181865afa15801562000283573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002a9919062000a94565b60ff1660a05250602080820151604080516358b50cef60e11b815290516001600160a01b039092169263b16a19de926004808401938290030181865afa158015620002f8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200031e919062000ac0565b6000546001600160a01b039081169116146200038c5760405162461bcd60e51b815260206004820152602260248201527f41617665416461707465723a20756e6d61746368696e6720756e6465726c79696044820152616e6760f01b60648201526084015b60405180910390fd5b600a8054737d2768de32b0b80b7a3454c06bdac94a69ddc7a96001600160a01b031990911681179091558151620003de916001600160a01b039091169060001962000424602090811b6200094a17901c565b6200041d737d2768de32b0b80b7a3454c06bdac94a69ddc7a960001983602001516001600160a01b03166200042460201b6200094a179092919060201c565b5062000bac565b801580620004a25750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa1580156200047a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620004a0919062000ade565b155b620005165760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e636500000000000000000000606482015260840162000383565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b0390811663095ea7b360e01b179091526200056e9185916200057316565b505050565b6000620005cf826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166200065160201b62000a97179092919060201c565b8051909150156200056e5780806020019051810190620005f0919062000af8565b6200056e5760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b606482015260840162000383565b60606200066284846000856200066a565b949350505050565b606082471015620006cd5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b606482015260840162000383565b600080866001600160a01b03168587604051620006eb919062000b1c565b60006040518083038185875af1925050503d80600081146200072a576040519150601f19603f3d011682016040523d82523d6000602084013e6200072f565b606091505b50909250905062000743878383876200074e565b979650505050505050565b60608315620007bf578251620007b7576001600160a01b0385163b620007b75760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015260640162000383565b508162000662565b620006628383815115620007d65781518083602001fd5b8060405162461bcd60e51b815260040162000383919062000b3a565b828054620008009062000b6f565b90600052602060002090601f0160209004810192826200082457600085556200086f565b82601f106200083f57805160ff19168380011785556200086f565b828001600101855582156200086f579182015b828111156200086f57825182559160200191906001019062000852565b506200087d92915062000881565b5090565b5b808211156200087d576000815560010162000882565b634e487b7160e01b600052604160045260246000fd5b80516001600160a01b0381168114620008c657600080fd5b919050565b600060c08284031215620008de57600080fd5b60405160c081016001600160401b038111828210171562000903576200090362000898565b6040526200091183620008ae565b81526200092160208401620008ae565b602082015260408301516040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b60005b83811015620009755781810151838201526020016200095b565b8381111562000985576000848401525b50505050565b6000602082840312156200099e57600080fd5b81516001600160401b0380821115620009b657600080fd5b818401915084601f830112620009cb57600080fd5b815181811115620009e057620009e062000898565b604051601f8201601f19908116603f0116810190838211818310171562000a0b5762000a0b62000898565b8160405282815287602084870101111562000a2557600080fd5b6200074383602083016020880162000958565b6000825162000a4c81846020870162000958565b671020b230b83a32b960c11b920191825250600801919050565b6000825162000a7a81846020870162000958565b6716b0b230b83a32b960c11b920191825250600801919050565b60006020828403121562000aa757600080fd5b815160ff8116811462000ab957600080fd5b9392505050565b60006020828403121562000ad357600080fd5b62000ab982620008ae565b60006020828403121562000af157600080fd5b5051919050565b60006020828403121562000b0b57600080fd5b8151801515811462000ab957600080fd5b6000825162000b3081846020870162000958565b9190910192915050565b602081526000825180602084015262000b5b81604085016020870162000958565b601f01601f19169190910160400192915050565b600181811c9082168062000b8457607f821691505b6020821081141562000ba657634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a0516110c162000bd960003960006101e1015260008181610174015261092101526110c16000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806395d89b411161008c578063c3ca9a9b11610066578063c3ca9a9b14610262578063d717c2731461026a578063f00e6a2a14610285578063f51e181a1461029657600080fd5b806395d89b4114610228578063a811141714610230578063c39a3b291461025357600080fd5b80634aae9fed116100c85780634aae9fed146101a857806351c39ea1146101c9578063691ddb47146101dc5780636f307dc31461020357600080fd5b806306fdde03146100ef578063083118d51461010d57806345ed132f1461016f575b600080fd5b6100f761029e565b6040516101049190610deb565b60405180910390f35b600054600154600254600354600454600554610137956001600160a01b0390811695169392919086565b604080516001600160a01b039788168152969095166020870152938501929092526060840152608083015260a082015260c001610104565b6101967f000000000000000000000000000000000000000000000000000000000000000081565b60405160ff9091168152602001610104565b6101bb6101b6366004610e1e565b61032c565b604051908152602001610104565b6101bb6101d7366004610e1e565b61061c565b6101967f000000000000000000000000000000000000000000000000000000000000000081565b6000546001600160a01b03165b6040516001600160a01b039091168152602001610104565b6100f761090b565b60085460095461023e919082565b60408051928352602083019190915201610104565b60405160008152602001610104565b6005546101bb565b610210737d2768de32b0b80b7a3454c06bdac94a69ddc7a981565b6001546001600160a01b0316610210565b6101bb610918565b600680546102ab90610e37565b80601f01602080910402602001604051908101604052809291908181526020018280546102d790610e37565b80156103245780601f106102f957610100808354040283529160200191610324565b820191906000526020600020905b81548152906001019060200180831161030757829003601f168201915b505050505081565b60008082116103825760405162461bcd60e51b815260206004820152601e60248201527f41617665416461707465723a207542616c206c6f776572207468616e2030000060448201526064015b60405180910390fd5b816103956000546001600160a01b031690565b6040516370a0823160e01b81523360048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa1580156103db573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103ff9190610e72565b101561044d5760405162461bcd60e51b815260206004820152601e60248201527f41617665416461707465723a20496e73756666696369656e74207542616c00006044820152606401610379565b6001546040516370a0823160e01b81523360048201526001600160a01b039091169060009082906370a0823190602401602060405180830381865afa15801561049a573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104be9190610e72565b90506104e93330866104d86000546001600160a01b031690565b6001600160a01b0316929190610aae565b600a546001600160a01b031663e8eda9df61050c6000546001600160a01b031690565b6040516001600160e01b031960e084901b1681526001600160a01b0390911660048201526024810187905233604482015260006064820152608401600060405180830381600087803b15801561056157600080fd5b505af1158015610575573d6000803e3d6000fd5b50506040516370a0823160e01b8152336004820152600092506001600160a01b03851691506370a0823190602401602060405180830381865afa1580156105c0573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e49190610e72565b905060006105f28383610ea1565b90508581146106135760405162461bcd60e51b815260040161037990610eb8565b95945050505050565b600080821161066d5760405162461bcd60e51b815260206004820152601e60248201527f41617665416461707465723a207442616c206c6f776572207468616e203000006044820152606401610379565b6001546040516370a0823160e01b815233600482015283916001600160a01b0316906370a0823190602401602060405180830381865afa1580156106b5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106d99190610e72565b10156107275760405162461bcd60e51b815260206004820152601e60248201527f41617665416461707465723a20496e73756666696369656e74207442616c00006044820152606401610379565b600080546001600160a01b03166040516370a0823160e01b81523360048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa15801561077a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061079e9190610e72565b6001549091506107b9906001600160a01b0316333086610aae565b600a54600154604051631a4ca37b60e21b81526001600160a01b0391821660048201526024810186905233604482015260009291909116906369328dec906064016020604051808303816000875af1158015610819573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061083d9190610e72565b905060006108536000546001600160a01b031690565b6040516370a0823160e01b81523360048201526001600160a01b0391909116906370a0823190602401602060405180830381865afa158015610899573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bd9190610e72565b905060006108cb8483610ea1565b90508581146108ec5760405162461bcd60e51b815260040161037990610eb8565b8281146106135760405162461bcd60e51b815260040161037990610eb8565b600780546102ab90610e37565b600061094560017f0000000000000000000000000000000000000000000000000000000000000000610aec565b905090565b8015806109c45750604051636eb1769f60e11b81523060048201526001600160a01b03838116602483015284169063dd62ed3e90604401602060405180830381865afa15801561099e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109c29190610e72565b155b610a2f5760405162461bcd60e51b815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b6064820152608401610379565b6040516001600160a01b038316602482015260448101829052610a9290849063095ea7b360e01b906064015b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152610b77565b505050565b6060610aa68484600085610c49565b949350505050565b6040516001600160a01b0380851660248301528316604482015260648101829052610ae69085906323b872dd60e01b90608401610a5b565b50505050565b600060128260ff161115610b2157610b05601283610eef565b610b1090600a610ff6565b610b1a908461100c565b9250610b6e565b60128260ff161015610b4d57610b38826012610eef565b610b4390600a610ff6565b610b1a908461102e565b8160ff1660121415610b6e57610b6b83670de0b6b3a764000061102e565b92505b50815b92915050565b6000610bcc826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316610a979092919063ffffffff16565b805190915015610a925780806020019051810190610bea919061104d565b610a925760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b6064820152608401610379565b606082471015610caa5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b6064820152608401610379565b600080866001600160a01b03168587604051610cc6919061106f565b60006040518083038185875af1925050503d8060008114610d03576040519150601f19603f3d011682016040523d82523d6000602084013e610d08565b606091505b5091509150610d1987838387610d24565b979650505050505050565b60608315610d90578251610d89576001600160a01b0385163b610d895760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610379565b5081610aa6565b610aa68383815115610da55781518083602001fd5b8060405162461bcd60e51b81526004016103799190610deb565b60005b83811015610dda578181015183820152602001610dc2565b83811115610ae65750506000910152565b6020815260008251806020840152610e0a816040850160208701610dbf565b601f01601f19169190910160400192915050565b600060208284031215610e3057600080fd5b5035919050565b600181811c90821680610e4b57607f821691505b60208210811415610e6c57634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610e8457600080fd5b5051919050565b634e487b7160e01b600052601160045260246000fd5b600082821015610eb357610eb3610e8b565b500390565b6020808252601f908201527f41617665416461707465723a2042616c616e636520496e657175616c69747900604082015260600190565b600060ff821660ff841680821015610f0957610f09610e8b565b90039392505050565b600181815b80851115610f4d578160001904821115610f3357610f33610e8b565b80851615610f4057918102915b93841c9390800290610f17565b509250929050565b600082610f6457506001610b71565b81610f7157506000610b71565b8160018114610f875760028114610f9157610fad565b6001915050610b71565b60ff841115610fa257610fa2610e8b565b50506001821b610b71565b5060208310610133831016604e8410600b8410161715610fd0575081810a610b71565b610fda8383610f12565b8060001904821115610fee57610fee610e8b565b029392505050565b600061100560ff841683610f55565b9392505050565b60008261102957634e487b7160e01b600052601260045260246000fd5b500490565b600081600019048311821515161561104857611048610e8b565b500290565b60006020828403121561105f57600080fd5b8151801515811461100557600080fd5b60008251611081818460208701610dbf565b919091019291505056fea264697066735822122096cc46b06629657088431c4f4add7f0651ad321cc2fb1b498d3dc9685978aa7064736f6c634300080a0033";

type AaveAdapterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AaveAdapterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AaveAdapter__factory extends ContractFactory {
  constructor(...args: AaveAdapterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _adapterParams: BaseAdapter.AdapterParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<AaveAdapter> {
    return super.deploy(
      _adapterParams,
      overrides || {}
    ) as Promise<AaveAdapter>;
  }
  override getDeployTransaction(
    _adapterParams: BaseAdapter.AdapterParamsStruct,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_adapterParams, overrides || {});
  }
  override attach(address: string): AaveAdapter {
    return super.attach(address) as AaveAdapter;
  }
  override connect(signer: Signer): AaveAdapter__factory {
    return super.connect(signer) as AaveAdapter__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AaveAdapterInterface {
    return new utils.Interface(_abi) as AaveAdapterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AaveAdapter {
    return new Contract(address, _abi, signerOrProvider) as AaveAdapter;
  }
}

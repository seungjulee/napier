import { ethers } from 'ethers';
import { ERC20 } from '../../abi/ERC20';
import { ERC20__factory } from '../../abi/factories';
import { Tranche__factory } from '../../abi/factories/Tranche.sol';
import { getAddressByChainId } from './Addresses';
import {
  YieldSourceEnum, YieldSymbolEnum
} from './YieldPositionNames';

declare let window: any;

async function requestAccount() {
  try {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    const { chainId } = await provider.getNetwork();

  } catch (e: any) {
    window.alert(e.data?.message?.toString() || e.message);
  }
}


export async function getERC20Instance(
  yieldSymbol: YieldSymbolEnum,
): Promise<ERC20> {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const myAddress = await signer.getAddress();
  const { chainId } = await provider.getNetwork();
  const addresses = getAddressByChainId(chainId);

  let contractAddress = "";
  if (yieldSymbol === YieldSymbolEnum.DAI) {
    contractAddress = addresses.DAI;
  }
  
  const dai = ERC20__factory.connect(contractAddress, provider);
  
  return dai;
}


export async function calculateAmount(underlyingInputAmount: number, yieldSymbol: YieldSymbolEnum, yieldSource: YieldSourceEnum) {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const myAddress = await signer.getAddress();
  const { chainId } = await provider.getNetwork();
  const addresses = getAddressByChainId(chainId);

  let ptContractAddress = "";
  if (yieldSymbol === YieldSymbolEnum.DAI) {
    if (yieldSource === YieldSourceEnum.Aave) {
      ptContractAddress = addresses.ADAI;
    }
  }

  const tAmount = underlyingInputAmount;

  // call tranche (npt)
  const ONE = ethers.BigNumber.from(10).pow(18)
  const tranche = await Tranche__factory.connect(addresses.Tranche, signer);
  const [trancheSeries] = await tranche.getSeries(ptContractAddress);
  console.log('trancheSeries', trancheSeries);
  
  // const adapter = new Contract(tranche.getSeries(ptContractAddress).adapter, abi)
  // const feePst = adapter.getIssuanceFee();
  // const fee = tAmount.mul(feePst).div(ONE);
  // let _scale = tranche.lscales(
  // pt, <user address>
  // )
  // if (_scale.isZero()) {
  // _scale = adapter.scaleStored();
  // }
  // // pt amount and yt amount are the same
  // const mintAmount = (tAmount - fee).mul(_scale).div(ONE);
}

export async function approveERC20Token(yieldSymbol: YieldSymbolEnum, yieldSource: YieldSourceEnum) {
  await window.ethereum.request({ method: 'eth_requestAccounts' });
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  const myAddress = await signer.getAddress();
  const { chainId } = await provider.getNetwork();
  const addresses = getAddressByChainId(chainId);

  let ptContractAddress = "";
  if (yieldSymbol === YieldSymbolEnum.DAI) {
    if (yieldSource === YieldSourceEnum.Aave) {
      ptContractAddress = addresses.ADAI;
    }
  }

  const dai = ERC20__factory.connect(ptContractAddress, provider);
  const approveMsg = await dai.approve(addresses.Tranche, ethers.constants.MaxUint256);
  console.log(approveMsg);
}
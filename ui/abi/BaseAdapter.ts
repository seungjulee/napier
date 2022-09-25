/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface BaseAdapterInterface extends utils.Interface {
  functions: {
    "_lscale()": FunctionFragment;
    "adapterParams()": FunctionFragment;
    "getIssuanceFee()": FunctionFragment;
    "getTarget()": FunctionFragment;
    "name()": FunctionFragment;
    "scale()": FunctionFragment;
    "symbol()": FunctionFragment;
    "tDecimals()": FunctionFragment;
    "tilt()": FunctionFragment;
    "uDecimals()": FunctionFragment;
    "underlying()": FunctionFragment;
    "unwrapTarget(uint256)": FunctionFragment;
    "wrapUnderlying(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "_lscale"
      | "adapterParams"
      | "getIssuanceFee"
      | "getTarget"
      | "name"
      | "scale"
      | "symbol"
      | "tDecimals"
      | "tilt"
      | "uDecimals"
      | "underlying"
      | "unwrapTarget"
      | "wrapUnderlying"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "_lscale", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "adapterParams",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIssuanceFee",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getTarget", values?: undefined): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "scale", values?: undefined): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "tDecimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "tilt", values?: undefined): string;
  encodeFunctionData(functionFragment: "uDecimals", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "underlying",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "unwrapTarget",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "wrapUnderlying",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "_lscale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "adapterParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIssuanceFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getTarget", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "scale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tDecimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tilt", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "uDecimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "underlying", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unwrapTarget",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "wrapUnderlying",
    data: BytesLike
  ): Result;

  events: {};
}

export interface BaseAdapter extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseAdapterInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    _lscale(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; value: BigNumber }
    >;

    adapterParams(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        underlying: string;
        target: string;
        delta: BigNumber;
        minm: BigNumber;
        maxm: BigNumber;
        issuanceFee: BigNumber;
      }
    >;

    getIssuanceFee(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTarget(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    scale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    tDecimals(overrides?: CallOverrides): Promise<[number]>;

    tilt(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    uDecimals(overrides?: CallOverrides): Promise<[number]>;

    underlying(overrides?: CallOverrides): Promise<[string]>;

    unwrapTarget(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    wrapUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  _lscale(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { timestamp: BigNumber; value: BigNumber }
  >;

  adapterParams(
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      underlying: string;
      target: string;
      delta: BigNumber;
      minm: BigNumber;
      maxm: BigNumber;
      issuanceFee: BigNumber;
    }
  >;

  getIssuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

  getTarget(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  scale(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  tDecimals(overrides?: CallOverrides): Promise<number>;

  tilt(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  uDecimals(overrides?: CallOverrides): Promise<number>;

  underlying(overrides?: CallOverrides): Promise<string>;

  unwrapTarget(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  wrapUnderlying(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _lscale(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { timestamp: BigNumber; value: BigNumber }
    >;

    adapterParams(
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        underlying: string;
        target: string;
        delta: BigNumber;
        minm: BigNumber;
        maxm: BigNumber;
        issuanceFee: BigNumber;
      }
    >;

    getIssuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTarget(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    scale(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<string>;

    tDecimals(overrides?: CallOverrides): Promise<number>;

    tilt(overrides?: CallOverrides): Promise<BigNumber>;

    uDecimals(overrides?: CallOverrides): Promise<number>;

    underlying(overrides?: CallOverrides): Promise<string>;

    unwrapTarget(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    wrapUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    _lscale(overrides?: CallOverrides): Promise<BigNumber>;

    adapterParams(overrides?: CallOverrides): Promise<BigNumber>;

    getIssuanceFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTarget(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    scale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    tDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    tilt(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    uDecimals(overrides?: CallOverrides): Promise<BigNumber>;

    underlying(overrides?: CallOverrides): Promise<BigNumber>;

    unwrapTarget(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    wrapUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _lscale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    adapterParams(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getIssuanceFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTarget(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scale(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tilt(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    uDecimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    underlying(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unwrapTarget(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    wrapUnderlying(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}

/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from 'ethers'
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from '@ethersproject/contracts'
import { BytesLike } from '@ethersproject/bytes'
import { Listener, Provider } from '@ethersproject/providers'
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi'

interface L1GatewayRouterInterface extends ethers.utils.Interface {
  functions: {
    'calculateL2TokenAddress(address)': FunctionFragment
    'counterpartGateway()': FunctionFragment
    'defaultGateway()': FunctionFragment
    'finalizeInboundTransfer(address,address,address,uint256,bytes)': FunctionFragment
    'getGateway(address)': FunctionFragment
    'getOutboundCalldata(address,address,address,uint256,bytes)': FunctionFragment
    'inbox()': FunctionFragment
    'initialize(address,address,address,address,address)': FunctionFragment
    'isRouter()': FunctionFragment
    'l1TokenToGateway(address)': FunctionFragment
    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)': FunctionFragment
    'owner()': FunctionFragment
    'router()': FunctionFragment
    'setDefaultGateway(address,uint256,uint256,uint256)': FunctionFragment
    'setGateway(address,uint256,uint256,uint256)': FunctionFragment
    'setGateways(address[],address[],uint256,uint256,uint256)': FunctionFragment
    'setOwner(address)': FunctionFragment
    'updateWhitelistSource(address)': FunctionFragment
    'whitelist()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'calculateL2TokenAddress',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'counterpartGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'defaultGateway',
    values?: undefined
  ): string
  encodeFunctionData(
    functionFragment: 'finalizeInboundTransfer',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'getGateway', values: [string]): string
  encodeFunctionData(
    functionFragment: 'getOutboundCalldata',
    values: [string, string, string, BigNumberish, BytesLike]
  ): string
  encodeFunctionData(functionFragment: 'inbox', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string, string, string]
  ): string
  encodeFunctionData(functionFragment: 'isRouter', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'l1TokenToGateway',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'outboundTransfer',
    values: [
      string,
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BytesLike
    ]
  ): string
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string
  encodeFunctionData(functionFragment: 'router', values?: undefined): string
  encodeFunctionData(
    functionFragment: 'setDefaultGateway',
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'setGateway',
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(
    functionFragment: 'setGateways',
    values: [string[], string[], BigNumberish, BigNumberish, BigNumberish]
  ): string
  encodeFunctionData(functionFragment: 'setOwner', values: [string]): string
  encodeFunctionData(
    functionFragment: 'updateWhitelistSource',
    values: [string]
  ): string
  encodeFunctionData(functionFragment: 'whitelist', values?: undefined): string

  decodeFunctionResult(
    functionFragment: 'calculateL2TokenAddress',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'counterpartGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'defaultGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'finalizeInboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'getGateway', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'getOutboundCalldata',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'inbox', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'isRouter', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'l1TokenToGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'outboundTransfer',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'router', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'setDefaultGateway',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'setGateway', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setGateways', data: BytesLike): Result
  decodeFunctionResult(functionFragment: 'setOwner', data: BytesLike): Result
  decodeFunctionResult(
    functionFragment: 'updateWhitelistSource',
    data: BytesLike
  ): Result
  decodeFunctionResult(functionFragment: 'whitelist', data: BytesLike): Result

  events: {
    'DefaultGatewayUpdated(address)': EventFragment
    'GatewaySet(address,address)': EventFragment
    'InboundTransferFinalized(address,address,address,uint256,uint256,bytes)': EventFragment
    'OutboundTransferInitiated(address,address,address,uint256,uint256,bytes)': EventFragment
    'TransferRouted(address,address,address,address)': EventFragment
    'TxToL2(address,address,uint256,bytes)': EventFragment
    'WhitelistSourceUpdated(address)': EventFragment
  }

  getEvent(nameOrSignatureOrTopic: 'DefaultGatewayUpdated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'GatewaySet'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'InboundTransferFinalized'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'OutboundTransferInitiated'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TransferRouted'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'TxToL2'): EventFragment
  getEvent(nameOrSignatureOrTopic: 'WhitelistSourceUpdated'): EventFragment
}

export class L1GatewayRouter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  on(event: EventFilter | string, listener: Listener): this
  once(event: EventFilter | string, listener: Listener): this
  addListener(eventName: EventFilter | string, listener: Listener): this
  removeAllListeners(eventName: EventFilter | string): this
  removeListener(eventName: any, listener: Listener): this

  interface: L1GatewayRouterInterface

  functions: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    counterpartGateway(overrides?: CallOverrides): Promise<[string]>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<[string]>

    defaultGateway(overrides?: CallOverrides): Promise<[string]>

    'defaultGateway()'(overrides?: CallOverrides): Promise<[string]>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    getGateway(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { gateway: string }>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<[string] & { gateway: string }>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>

    inbox(overrides?: CallOverrides): Promise<[string]>

    'inbox()'(overrides?: CallOverrides): Promise<[string]>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'initialize(address,address,address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    isRouter(overrides?: CallOverrides): Promise<[boolean]>

    'isRouter()'(overrides?: CallOverrides): Promise<[boolean]>

    l1TokenToGateway(arg0: string, overrides?: CallOverrides): Promise<[string]>

    'l1TokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[string]>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    owner(overrides?: CallOverrides): Promise<[string]>

    'owner()'(overrides?: CallOverrides): Promise<[string]>

    router(overrides?: CallOverrides): Promise<[string]>

    'router()'(overrides?: CallOverrides): Promise<[string]>

    setDefaultGateway(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'setDefaultGateway(address,uint256,uint256,uint256)'(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    setGateway(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'setGateway(address,uint256,uint256,uint256)'(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    setGateways(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    'setGateways(address[],address[],uint256,uint256,uint256)'(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'setOwner(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>

    whitelist(overrides?: CallOverrides): Promise<[string]>

    'whitelist()'(overrides?: CallOverrides): Promise<[string]>
  }

  calculateL2TokenAddress(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  'calculateL2TokenAddress(address)'(
    l1ERC20: string,
    overrides?: CallOverrides
  ): Promise<string>

  counterpartGateway(overrides?: CallOverrides): Promise<string>

  'counterpartGateway()'(overrides?: CallOverrides): Promise<string>

  defaultGateway(overrides?: CallOverrides): Promise<string>

  'defaultGateway()'(overrides?: CallOverrides): Promise<string>

  finalizeInboundTransfer(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  getGateway(_token: string, overrides?: CallOverrides): Promise<string>

  'getGateway(address)'(
    _token: string,
    overrides?: CallOverrides
  ): Promise<string>

  getOutboundCalldata(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  'getOutboundCalldata(address,address,address,uint256,bytes)'(
    _token: string,
    _from: string,
    _to: string,
    _amount: BigNumberish,
    _data: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>

  inbox(overrides?: CallOverrides): Promise<string>

  'inbox()'(overrides?: CallOverrides): Promise<string>

  initialize(
    _owner: string,
    _defaultGateway: string,
    _whitelist: string,
    _counterpartGateway: string,
    _inbox: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'initialize(address,address,address,address,address)'(
    _owner: string,
    _defaultGateway: string,
    _whitelist: string,
    _counterpartGateway: string,
    _inbox: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  isRouter(overrides?: CallOverrides): Promise<boolean>

  'isRouter()'(overrides?: CallOverrides): Promise<boolean>

  l1TokenToGateway(arg0: string, overrides?: CallOverrides): Promise<string>

  'l1TokenToGateway(address)'(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<string>

  outboundTransfer(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
    _token: string,
    _to: string,
    _amount: BigNumberish,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _data: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  owner(overrides?: CallOverrides): Promise<string>

  'owner()'(overrides?: CallOverrides): Promise<string>

  router(overrides?: CallOverrides): Promise<string>

  'router()'(overrides?: CallOverrides): Promise<string>

  setDefaultGateway(
    newL1DefaultGateway: string,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'setDefaultGateway(address,uint256,uint256,uint256)'(
    newL1DefaultGateway: string,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  setGateway(
    _gateway: string,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'setGateway(address,uint256,uint256,uint256)'(
    _gateway: string,
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  setGateways(
    _token: string[],
    _gateway: string[],
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  'setGateways(address[],address[],uint256,uint256,uint256)'(
    _token: string[],
    _gateway: string[],
    _maxGas: BigNumberish,
    _gasPriceBid: BigNumberish,
    _maxSubmissionCost: BigNumberish,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>

  setOwner(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'setOwner(address)'(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  updateWhitelistSource(
    newSource: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  'updateWhitelistSource(address)'(
    newSource: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>

  whitelist(overrides?: CallOverrides): Promise<string>

  'whitelist()'(overrides?: CallOverrides): Promise<string>

  callStatic: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<string>

    counterpartGateway(overrides?: CallOverrides): Promise<string>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<string>

    defaultGateway(overrides?: CallOverrides): Promise<string>

    'defaultGateway()'(overrides?: CallOverrides): Promise<string>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    getGateway(_token: string, overrides?: CallOverrides): Promise<string>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<string>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    inbox(overrides?: CallOverrides): Promise<string>

    'inbox()'(overrides?: CallOverrides): Promise<string>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: CallOverrides
    ): Promise<void>

    'initialize(address,address,address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: CallOverrides
    ): Promise<void>

    isRouter(overrides?: CallOverrides): Promise<boolean>

    'isRouter()'(overrides?: CallOverrides): Promise<boolean>

    l1TokenToGateway(arg0: string, overrides?: CallOverrides): Promise<string>

    'l1TokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<string>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>

    owner(overrides?: CallOverrides): Promise<string>

    'owner()'(overrides?: CallOverrides): Promise<string>

    router(overrides?: CallOverrides): Promise<string>

    'router()'(overrides?: CallOverrides): Promise<string>

    setDefaultGateway(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'setDefaultGateway(address,uint256,uint256,uint256)'(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    setGateway(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'setGateway(address,uint256,uint256,uint256)'(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    setGateways(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'setGateways(address[],address[],uint256,uint256,uint256)'(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>

    'setOwner(address)'(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>

    updateWhitelistSource(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: CallOverrides
    ): Promise<void>

    whitelist(overrides?: CallOverrides): Promise<string>

    'whitelist()'(overrides?: CallOverrides): Promise<string>
  }

  filters: {
    DefaultGatewayUpdated(newDefaultGateway: null): EventFilter

    GatewaySet(l1Token: string | null, gateway: string | null): EventFilter

    InboundTransferFinalized(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    OutboundTransferInitiated(
      token: null,
      _from: string | null,
      _to: string | null,
      _transferId: BigNumberish | null,
      _amount: null,
      _data: null
    ): EventFilter

    TransferRouted(
      token: string | null,
      _userFrom: string | null,
      _userTo: string | null,
      gateway: null
    ): EventFilter

    TxToL2(
      _from: string | null,
      _to: string | null,
      _seqNum: BigNumberish | null,
      _data: null
    ): EventFilter

    WhitelistSourceUpdated(newSource: null): EventFilter
  }

  estimateGas: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    counterpartGateway(overrides?: CallOverrides): Promise<BigNumber>

    'counterpartGateway()'(overrides?: CallOverrides): Promise<BigNumber>

    defaultGateway(overrides?: CallOverrides): Promise<BigNumber>

    'defaultGateway()'(overrides?: CallOverrides): Promise<BigNumber>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    getGateway(_token: string, overrides?: CallOverrides): Promise<BigNumber>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    inbox(overrides?: CallOverrides): Promise<BigNumber>

    'inbox()'(overrides?: CallOverrides): Promise<BigNumber>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'initialize(address,address,address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    isRouter(overrides?: CallOverrides): Promise<BigNumber>

    'isRouter()'(overrides?: CallOverrides): Promise<BigNumber>

    l1TokenToGateway(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    'l1TokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    owner(overrides?: CallOverrides): Promise<BigNumber>

    'owner()'(overrides?: CallOverrides): Promise<BigNumber>

    router(overrides?: CallOverrides): Promise<BigNumber>

    'router()'(overrides?: CallOverrides): Promise<BigNumber>

    setDefaultGateway(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'setDefaultGateway(address,uint256,uint256,uint256)'(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    setGateway(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'setGateway(address,uint256,uint256,uint256)'(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    setGateways(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    'setGateways(address[],address[],uint256,uint256,uint256)'(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<BigNumber>

    setOwner(newOwner: string, overrides?: Overrides): Promise<BigNumber>

    'setOwner(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<BigNumber>

    whitelist(overrides?: CallOverrides): Promise<BigNumber>

    'whitelist()'(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    calculateL2TokenAddress(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'calculateL2TokenAddress(address)'(
      l1ERC20: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    counterpartGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'counterpartGateway()'(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    defaultGateway(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'defaultGateway()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    finalizeInboundTransfer(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'finalizeInboundTransfer(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    getGateway(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getGateway(address)'(
      _token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getOutboundCalldata(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'getOutboundCalldata(address,address,address,uint256,bytes)'(
      _token: string,
      _from: string,
      _to: string,
      _amount: BigNumberish,
      _data: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    inbox(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'inbox()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    initialize(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'initialize(address,address,address,address,address)'(
      _owner: string,
      _defaultGateway: string,
      _whitelist: string,
      _counterpartGateway: string,
      _inbox: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    isRouter(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'isRouter()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    l1TokenToGateway(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    'l1TokenToGateway(address)'(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    outboundTransfer(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'outboundTransfer(address,address,uint256,uint256,uint256,bytes)'(
      _token: string,
      _to: string,
      _amount: BigNumberish,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _data: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'owner()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    router(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'router()'(overrides?: CallOverrides): Promise<PopulatedTransaction>

    setDefaultGateway(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'setDefaultGateway(address,uint256,uint256,uint256)'(
      newL1DefaultGateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    setGateway(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'setGateway(address,uint256,uint256,uint256)'(
      _gateway: string,
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    setGateways(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    'setGateways(address[],address[],uint256,uint256,uint256)'(
      _token: string[],
      _gateway: string[],
      _maxGas: BigNumberish,
      _gasPriceBid: BigNumberish,
      _maxSubmissionCost: BigNumberish,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>

    setOwner(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'setOwner(address)'(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    updateWhitelistSource(
      newSource: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    'updateWhitelistSource(address)'(
      newSource: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>

    whitelist(overrides?: CallOverrides): Promise<PopulatedTransaction>

    'whitelist()'(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}

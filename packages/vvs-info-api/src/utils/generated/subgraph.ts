export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
}






export interface Block_Height {
  readonly hash?: Maybe<Scalars['Bytes']>;
  readonly number?: Maybe<Scalars['Int']>;
}

export interface Bundle {
  readonly __typename?: 'Bundle';
  readonly id: Scalars['ID'];
  /** CRO price, in USD */
  readonly croPrice: Scalars['BigDecimal'];
}

export interface Bundle_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly croPrice?: Maybe<Scalars['BigDecimal']>;
  readonly croPrice_not?: Maybe<Scalars['BigDecimal']>;
  readonly croPrice_gt?: Maybe<Scalars['BigDecimal']>;
  readonly croPrice_lt?: Maybe<Scalars['BigDecimal']>;
  readonly croPrice_gte?: Maybe<Scalars['BigDecimal']>;
  readonly croPrice_lte?: Maybe<Scalars['BigDecimal']>;
  readonly croPrice_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly croPrice_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Bundle_OrderBy {
  Id = 'id',
  CroPrice = 'croPrice'
}

export interface Burn {
  readonly __typename?: 'Burn';
  readonly id: Scalars['ID'];
  readonly transaction: Transaction;
  readonly timestamp: Scalars['BigInt'];
  readonly pair: Pair;
  readonly liquidity: Scalars['BigDecimal'];
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly needsComplete: Scalars['Boolean'];
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
}

export interface Burn_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly transaction?: Maybe<Scalars['String']>;
  readonly transaction_not?: Maybe<Scalars['String']>;
  readonly transaction_gt?: Maybe<Scalars['String']>;
  readonly transaction_lt?: Maybe<Scalars['String']>;
  readonly transaction_gte?: Maybe<Scalars['String']>;
  readonly transaction_lte?: Maybe<Scalars['String']>;
  readonly transaction_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_contains?: Maybe<Scalars['String']>;
  readonly transaction_not_contains?: Maybe<Scalars['String']>;
  readonly transaction_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_not_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_ends_with?: Maybe<Scalars['String']>;
  readonly transaction_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly liquidity?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly sender_not?: Maybe<Scalars['Bytes']>;
  readonly sender_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_contains?: Maybe<Scalars['Bytes']>;
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly to_not?: Maybe<Scalars['Bytes']>;
  readonly to_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_contains?: Maybe<Scalars['Bytes']>;
  readonly to_not_contains?: Maybe<Scalars['Bytes']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly logIndex_not?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly needsComplete?: Maybe<Scalars['Boolean']>;
  readonly needsComplete_not?: Maybe<Scalars['Boolean']>;
  readonly needsComplete_in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly needsComplete_not_in?: Maybe<ReadonlyArray<Scalars['Boolean']>>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not?: Maybe<Scalars['Bytes']>;
  readonly feeTo_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_contains?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Burn_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  NeedsComplete = 'needsComplete',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}


export interface Mint {
  readonly __typename?: 'Mint';
  readonly id: Scalars['ID'];
  readonly transaction: Transaction;
  readonly timestamp: Scalars['BigInt'];
  readonly pair: Pair;
  readonly to: Scalars['Bytes'];
  readonly liquidity: Scalars['BigDecimal'];
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
}

export interface Mint_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly transaction?: Maybe<Scalars['String']>;
  readonly transaction_not?: Maybe<Scalars['String']>;
  readonly transaction_gt?: Maybe<Scalars['String']>;
  readonly transaction_lt?: Maybe<Scalars['String']>;
  readonly transaction_gte?: Maybe<Scalars['String']>;
  readonly transaction_lte?: Maybe<Scalars['String']>;
  readonly transaction_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_contains?: Maybe<Scalars['String']>;
  readonly transaction_not_contains?: Maybe<Scalars['String']>;
  readonly transaction_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_not_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_ends_with?: Maybe<Scalars['String']>;
  readonly transaction_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly to_not?: Maybe<Scalars['Bytes']>;
  readonly to_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_contains?: Maybe<Scalars['Bytes']>;
  readonly to_not_contains?: Maybe<Scalars['Bytes']>;
  readonly liquidity?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly liquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly liquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly sender_not?: Maybe<Scalars['Bytes']>;
  readonly sender_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_contains?: Maybe<Scalars['Bytes']>;
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>;
  readonly amount0?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly logIndex_not?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeTo?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not?: Maybe<Scalars['Bytes']>;
  readonly feeTo_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly feeTo_contains?: Maybe<Scalars['Bytes']>;
  readonly feeTo_not_contains?: Maybe<Scalars['Bytes']>;
  readonly feeLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly feeLiquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly feeLiquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Mint_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  To = 'to',
  Liquidity = 'liquidity',
  Sender = 'sender',
  Amount0 = 'amount0',
  Amount1 = 'amount1',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD',
  FeeTo = 'feeTo',
  FeeLiquidity = 'feeLiquidity'
}

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export interface Pair {
  readonly __typename?: 'Pair';
  readonly id: Scalars['ID'];
  readonly name: Scalars['String'];
  readonly token0: Token;
  readonly token1: Token;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
  readonly reserveCRO: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly trackedReserveCRO: Scalars['BigDecimal'];
  readonly token0Price: Scalars['BigDecimal'];
  readonly token1Price: Scalars['BigDecimal'];
  readonly volumeToken0: Scalars['BigDecimal'];
  readonly volumeToken1: Scalars['BigDecimal'];
  readonly volumeUSD: Scalars['BigDecimal'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly totalTransactions: Scalars['BigInt'];
  readonly block: Scalars['BigInt'];
  readonly timestamp: Scalars['BigInt'];
  readonly pairHourData: ReadonlyArray<PairHourData>;
  readonly mints: ReadonlyArray<Mint>;
  readonly burns: ReadonlyArray<Burn>;
  readonly swaps: ReadonlyArray<Swap>;
}


export interface PairPairHourDataArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
}


export interface PairMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
}


export interface PairBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
}


export interface PairSwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
}

export interface PairDayData {
  readonly __typename?: 'PairDayData';
  readonly id: Scalars['ID'];
  readonly date: Scalars['Int'];
  readonly pairAddress: Scalars['Bytes'];
  readonly token0: Token;
  readonly token1: Token;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly dailyVolumeToken0: Scalars['BigDecimal'];
  readonly dailyVolumeToken1: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyTxns: Scalars['BigInt'];
}

export interface PairDayData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_not?: Maybe<Scalars['Int']>;
  readonly date_gt?: Maybe<Scalars['Int']>;
  readonly date_lt?: Maybe<Scalars['Int']>;
  readonly date_gte?: Maybe<Scalars['Int']>;
  readonly date_lte?: Maybe<Scalars['Int']>;
  readonly date_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly pairAddress?: Maybe<Scalars['Bytes']>;
  readonly pairAddress_not?: Maybe<Scalars['Bytes']>;
  readonly pairAddress_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly pairAddress_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly pairAddress_contains?: Maybe<Scalars['Bytes']>;
  readonly pairAddress_not_contains?: Maybe<Scalars['Bytes']>;
  readonly token0?: Maybe<Scalars['String']>;
  readonly token0_not?: Maybe<Scalars['String']>;
  readonly token0_gt?: Maybe<Scalars['String']>;
  readonly token0_lt?: Maybe<Scalars['String']>;
  readonly token0_gte?: Maybe<Scalars['String']>;
  readonly token0_lte?: Maybe<Scalars['String']>;
  readonly token0_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_contains?: Maybe<Scalars['String']>;
  readonly token0_not_contains?: Maybe<Scalars['String']>;
  readonly token0_starts_with?: Maybe<Scalars['String']>;
  readonly token0_not_starts_with?: Maybe<Scalars['String']>;
  readonly token0_ends_with?: Maybe<Scalars['String']>;
  readonly token0_not_ends_with?: Maybe<Scalars['String']>;
  readonly token1?: Maybe<Scalars['String']>;
  readonly token1_not?: Maybe<Scalars['String']>;
  readonly token1_gt?: Maybe<Scalars['String']>;
  readonly token1_lt?: Maybe<Scalars['String']>;
  readonly token1_gte?: Maybe<Scalars['String']>;
  readonly token1_lte?: Maybe<Scalars['String']>;
  readonly token1_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_contains?: Maybe<Scalars['String']>;
  readonly token1_not_contains?: Maybe<Scalars['String']>;
  readonly token1_starts_with?: Maybe<Scalars['String']>;
  readonly token1_not_starts_with?: Maybe<Scalars['String']>;
  readonly token1_ends_with?: Maybe<Scalars['String']>;
  readonly token1_not_ends_with?: Maybe<Scalars['String']>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken0?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken1?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyTxns?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_not?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyTxns_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum PairDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  PairAddress = 'pairAddress',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveUsd = 'reserveUSD',
  DailyVolumeToken0 = 'dailyVolumeToken0',
  DailyVolumeToken1 = 'dailyVolumeToken1',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyTxns = 'dailyTxns'
}

export interface PairHourData {
  readonly __typename?: 'PairHourData';
  readonly id: Scalars['ID'];
  readonly hourStartUnix: Scalars['Int'];
  readonly pair: Pair;
  readonly reserve0: Scalars['BigDecimal'];
  readonly reserve1: Scalars['BigDecimal'];
  readonly totalSupply: Scalars['BigDecimal'];
  readonly reserveUSD: Scalars['BigDecimal'];
  readonly hourlyVolumeToken0: Scalars['BigDecimal'];
  readonly hourlyVolumeToken1: Scalars['BigDecimal'];
  readonly hourlyVolumeUSD: Scalars['BigDecimal'];
  readonly hourlyTxns: Scalars['BigInt'];
}

export interface PairHourData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly hourStartUnix?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_not?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_gt?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_lt?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_gte?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_lte?: Maybe<Scalars['Int']>;
  readonly hourStartUnix_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly hourStartUnix_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken0?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken1?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeToken1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeToken1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly hourlyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly hourlyTxns?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_not?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_gt?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_lt?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_gte?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_lte?: Maybe<Scalars['BigInt']>;
  readonly hourlyTxns_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly hourlyTxns_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum PairHourData_OrderBy {
  Id = 'id',
  HourStartUnix = 'hourStartUnix',
  Pair = 'pair',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveUsd = 'reserveUSD',
  HourlyVolumeToken0 = 'hourlyVolumeToken0',
  HourlyVolumeToken1 = 'hourlyVolumeToken1',
  HourlyVolumeUsd = 'hourlyVolumeUSD',
  HourlyTxns = 'hourlyTxns'
}

export interface Pair_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly token0?: Maybe<Scalars['String']>;
  readonly token0_not?: Maybe<Scalars['String']>;
  readonly token0_gt?: Maybe<Scalars['String']>;
  readonly token0_lt?: Maybe<Scalars['String']>;
  readonly token0_gte?: Maybe<Scalars['String']>;
  readonly token0_lte?: Maybe<Scalars['String']>;
  readonly token0_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token0_contains?: Maybe<Scalars['String']>;
  readonly token0_not_contains?: Maybe<Scalars['String']>;
  readonly token0_starts_with?: Maybe<Scalars['String']>;
  readonly token0_not_starts_with?: Maybe<Scalars['String']>;
  readonly token0_ends_with?: Maybe<Scalars['String']>;
  readonly token0_not_ends_with?: Maybe<Scalars['String']>;
  readonly token1?: Maybe<Scalars['String']>;
  readonly token1_not?: Maybe<Scalars['String']>;
  readonly token1_gt?: Maybe<Scalars['String']>;
  readonly token1_lt?: Maybe<Scalars['String']>;
  readonly token1_gte?: Maybe<Scalars['String']>;
  readonly token1_lte?: Maybe<Scalars['String']>;
  readonly token1_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token1_contains?: Maybe<Scalars['String']>;
  readonly token1_not_contains?: Maybe<Scalars['String']>;
  readonly token1_starts_with?: Maybe<Scalars['String']>;
  readonly token1_not_starts_with?: Maybe<Scalars['String']>;
  readonly token1_ends_with?: Maybe<Scalars['String']>;
  readonly token1_not_ends_with?: Maybe<Scalars['String']>;
  readonly reserve0?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserve1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserve1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalSupply_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalSupply_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveCRO?: Maybe<Scalars['BigDecimal']>;
  readonly reserveCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly reserveUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly reserveUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly trackedReserveCRO?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly trackedReserveCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly trackedReserveCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0Price?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_not?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_gt?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_lt?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_gte?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_lte?: Maybe<Scalars['BigDecimal']>;
  readonly token0Price_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token0Price_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1Price?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_not?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_gt?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_lt?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_gte?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_lte?: Maybe<Scalars['BigDecimal']>;
  readonly token1Price_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly token1Price_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken0?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_not?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_gt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_lt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_gte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_lte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken0_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken0_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken1?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_not?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_gt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_lt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_gte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_lte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeToken1_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeToken1_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly volumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly volumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalTransactions?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_not?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalTransactions_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly block?: Maybe<Scalars['BigInt']>;
  readonly block_not?: Maybe<Scalars['BigInt']>;
  readonly block_gt?: Maybe<Scalars['BigInt']>;
  readonly block_lt?: Maybe<Scalars['BigInt']>;
  readonly block_gte?: Maybe<Scalars['BigInt']>;
  readonly block_lte?: Maybe<Scalars['BigInt']>;
  readonly block_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly block_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum Pair_OrderBy {
  Id = 'id',
  Name = 'name',
  Token0 = 'token0',
  Token1 = 'token1',
  Reserve0 = 'reserve0',
  Reserve1 = 'reserve1',
  TotalSupply = 'totalSupply',
  ReserveCro = 'reserveCRO',
  ReserveUsd = 'reserveUSD',
  TrackedReserveCro = 'trackedReserveCRO',
  Token0Price = 'token0Price',
  Token1Price = 'token1Price',
  VolumeToken0 = 'volumeToken0',
  VolumeToken1 = 'volumeToken1',
  VolumeUsd = 'volumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TotalTransactions = 'totalTransactions',
  Block = 'block',
  Timestamp = 'timestamp',
  PairHourData = 'pairHourData',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps'
}

export interface Query {
  readonly __typename?: 'Query';
  readonly vvsFactory?: Maybe<VvsFactory>;
  readonly vvsFactories: ReadonlyArray<VvsFactory>;
  readonly bundle?: Maybe<Bundle>;
  readonly bundles: ReadonlyArray<Bundle>;
  readonly token?: Maybe<Token>;
  readonly tokens: ReadonlyArray<Token>;
  readonly pair?: Maybe<Pair>;
  readonly pairs: ReadonlyArray<Pair>;
  readonly transaction?: Maybe<Transaction>;
  readonly transactions: ReadonlyArray<Transaction>;
  readonly mint?: Maybe<Mint>;
  readonly mints: ReadonlyArray<Mint>;
  readonly burn?: Maybe<Burn>;
  readonly burns: ReadonlyArray<Burn>;
  readonly swap?: Maybe<Swap>;
  readonly swaps: ReadonlyArray<Swap>;
  readonly vvsDayData?: Maybe<VvsDayData>;
  readonly vvsDayDatas: ReadonlyArray<VvsDayData>;
  readonly pairHourData?: Maybe<PairHourData>;
  readonly pairHourDatas: ReadonlyArray<PairHourData>;
  readonly pairDayData?: Maybe<PairDayData>;
  readonly pairDayDatas: ReadonlyArray<PairDayData>;
  readonly tokenDayData?: Maybe<TokenDayData>;
  readonly tokenDayDatas: ReadonlyArray<TokenDayData>;
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
}


export interface QueryVvsFactoryArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryVvsFactoriesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VvsFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VvsFactory_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryBundleArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryBundlesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryTokenArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryTokensArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryPairArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryPairsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryTransactionArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryTransactionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryMintArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryBurnArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QuerySwapArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QuerySwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryVvsDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryVvsDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VvsDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VvsDayData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryPairHourDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryPairHourDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryPairDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryPairDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface QueryTokenDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface QueryTokenDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface Query_MetaArgs {
  block?: Maybe<Block_Height>;
}

export interface Subscription {
  readonly __typename?: 'Subscription';
  readonly vvsFactory?: Maybe<VvsFactory>;
  readonly vvsFactories: ReadonlyArray<VvsFactory>;
  readonly bundle?: Maybe<Bundle>;
  readonly bundles: ReadonlyArray<Bundle>;
  readonly token?: Maybe<Token>;
  readonly tokens: ReadonlyArray<Token>;
  readonly pair?: Maybe<Pair>;
  readonly pairs: ReadonlyArray<Pair>;
  readonly transaction?: Maybe<Transaction>;
  readonly transactions: ReadonlyArray<Transaction>;
  readonly mint?: Maybe<Mint>;
  readonly mints: ReadonlyArray<Mint>;
  readonly burn?: Maybe<Burn>;
  readonly burns: ReadonlyArray<Burn>;
  readonly swap?: Maybe<Swap>;
  readonly swaps: ReadonlyArray<Swap>;
  readonly vvsDayData?: Maybe<VvsDayData>;
  readonly vvsDayDatas: ReadonlyArray<VvsDayData>;
  readonly pairHourData?: Maybe<PairHourData>;
  readonly pairHourDatas: ReadonlyArray<PairHourData>;
  readonly pairDayData?: Maybe<PairDayData>;
  readonly pairDayDatas: ReadonlyArray<PairDayData>;
  readonly tokenDayData?: Maybe<TokenDayData>;
  readonly tokenDayDatas: ReadonlyArray<TokenDayData>;
  /** Access to subgraph metadata */
  readonly _meta?: Maybe<_Meta_>;
}


export interface SubscriptionVvsFactoryArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionVvsFactoriesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VvsFactory_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VvsFactory_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionBundleArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionBundlesArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Bundle_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Bundle_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionTokenArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionTokensArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Token_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Token_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionPairArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionPairsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionTransactionArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionTransactionsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Transaction_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Transaction_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionMintArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionBurnArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionSwapArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionSwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionVvsDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionVvsDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<VvsDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<VvsDayData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionPairHourDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionPairHourDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairHourData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairHourData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionPairDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionPairDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface SubscriptionTokenDayDataArgs {
  id: Scalars['ID'];
  block?: Maybe<Block_Height>;
}


export interface SubscriptionTokenDayDatasArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
  block?: Maybe<Block_Height>;
}


export interface Subscription_MetaArgs {
  block?: Maybe<Block_Height>;
}

export interface Swap {
  readonly __typename?: 'Swap';
  readonly id: Scalars['ID'];
  readonly transaction: Transaction;
  readonly timestamp: Scalars['BigInt'];
  readonly pair: Pair;
  readonly sender: Scalars['Bytes'];
  readonly from: Scalars['Bytes'];
  readonly amount0In: Scalars['BigDecimal'];
  readonly amount1In: Scalars['BigDecimal'];
  readonly amount0Out: Scalars['BigDecimal'];
  readonly amount1Out: Scalars['BigDecimal'];
  readonly to: Scalars['Bytes'];
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly amountUSD: Scalars['BigDecimal'];
}

export interface Swap_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly transaction?: Maybe<Scalars['String']>;
  readonly transaction_not?: Maybe<Scalars['String']>;
  readonly transaction_gt?: Maybe<Scalars['String']>;
  readonly transaction_lt?: Maybe<Scalars['String']>;
  readonly transaction_gte?: Maybe<Scalars['String']>;
  readonly transaction_lte?: Maybe<Scalars['String']>;
  readonly transaction_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly transaction_contains?: Maybe<Scalars['String']>;
  readonly transaction_not_contains?: Maybe<Scalars['String']>;
  readonly transaction_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_not_starts_with?: Maybe<Scalars['String']>;
  readonly transaction_ends_with?: Maybe<Scalars['String']>;
  readonly transaction_not_ends_with?: Maybe<Scalars['String']>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly pair?: Maybe<Scalars['String']>;
  readonly pair_not?: Maybe<Scalars['String']>;
  readonly pair_gt?: Maybe<Scalars['String']>;
  readonly pair_lt?: Maybe<Scalars['String']>;
  readonly pair_gte?: Maybe<Scalars['String']>;
  readonly pair_lte?: Maybe<Scalars['String']>;
  readonly pair_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly pair_contains?: Maybe<Scalars['String']>;
  readonly pair_not_contains?: Maybe<Scalars['String']>;
  readonly pair_starts_with?: Maybe<Scalars['String']>;
  readonly pair_not_starts_with?: Maybe<Scalars['String']>;
  readonly pair_ends_with?: Maybe<Scalars['String']>;
  readonly pair_not_ends_with?: Maybe<Scalars['String']>;
  readonly sender?: Maybe<Scalars['Bytes']>;
  readonly sender_not?: Maybe<Scalars['Bytes']>;
  readonly sender_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly sender_contains?: Maybe<Scalars['Bytes']>;
  readonly sender_not_contains?: Maybe<Scalars['Bytes']>;
  readonly from?: Maybe<Scalars['Bytes']>;
  readonly from_not?: Maybe<Scalars['Bytes']>;
  readonly from_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly from_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly from_contains?: Maybe<Scalars['Bytes']>;
  readonly from_not_contains?: Maybe<Scalars['Bytes']>;
  readonly amount0In?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0In_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0In_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1In?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1In_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1In_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0Out?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount0Out_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount0Out_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1Out?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_not?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amount1Out_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amount1Out_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly to?: Maybe<Scalars['Bytes']>;
  readonly to_not?: Maybe<Scalars['Bytes']>;
  readonly to_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_not_in?: Maybe<ReadonlyArray<Scalars['Bytes']>>;
  readonly to_contains?: Maybe<Scalars['Bytes']>;
  readonly to_not_contains?: Maybe<Scalars['Bytes']>;
  readonly logIndex?: Maybe<Scalars['BigInt']>;
  readonly logIndex_not?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lt?: Maybe<Scalars['BigInt']>;
  readonly logIndex_gte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_lte?: Maybe<Scalars['BigInt']>;
  readonly logIndex_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly logIndex_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly amountUSD?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly amountUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly amountUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Swap_OrderBy {
  Id = 'id',
  Transaction = 'transaction',
  Timestamp = 'timestamp',
  Pair = 'pair',
  Sender = 'sender',
  From = 'from',
  Amount0In = 'amount0In',
  Amount1In = 'amount1In',
  Amount0Out = 'amount0Out',
  Amount1Out = 'amount1Out',
  To = 'to',
  LogIndex = 'logIndex',
  AmountUsd = 'amountUSD'
}

export interface Token {
  readonly __typename?: 'Token';
  readonly id: Scalars['ID'];
  /** Name */
  readonly name: Scalars['String'];
  /** Symbol */
  readonly symbol: Scalars['String'];
  /** Decimals */
  readonly decimals: Scalars['BigInt'];
  readonly tradeVolume: Scalars['BigDecimal'];
  readonly tradeVolumeUSD: Scalars['BigDecimal'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly totalTransactions: Scalars['BigInt'];
  readonly totalLiquidity: Scalars['BigDecimal'];
  readonly derivedCRO?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD?: Maybe<Scalars['BigDecimal']>;
  readonly tokenDayData: ReadonlyArray<TokenDayData>;
  readonly pairDayDataBase: ReadonlyArray<PairDayData>;
  readonly pairDayDataQuote: ReadonlyArray<PairDayData>;
  readonly pairBase: ReadonlyArray<Pair>;
  readonly pairQuote: ReadonlyArray<Pair>;
}


export interface TokenTokenDayDataArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenDayData_Filter>;
}


export interface TokenPairDayDataBaseArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
}


export interface TokenPairDayDataQuoteArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<PairDayData_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<PairDayData_Filter>;
}


export interface TokenPairBaseArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
}


export interface TokenPairQuoteArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Pair_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Pair_Filter>;
}

export interface TokenDayData {
  readonly __typename?: 'TokenDayData';
  readonly id: Scalars['ID'];
  readonly date: Scalars['Int'];
  readonly token: Token;
  readonly dailyVolumeToken: Scalars['BigDecimal'];
  readonly dailyVolumeCRO: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyTxns: Scalars['BigInt'];
  readonly totalLiquidityToken: Scalars['BigDecimal'];
  readonly totalLiquidityCRO: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly priceUSD: Scalars['BigDecimal'];
}

export interface TokenDayData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_not?: Maybe<Scalars['Int']>;
  readonly date_gt?: Maybe<Scalars['Int']>;
  readonly date_lt?: Maybe<Scalars['Int']>;
  readonly date_gte?: Maybe<Scalars['Int']>;
  readonly date_lte?: Maybe<Scalars['Int']>;
  readonly date_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly token?: Maybe<Scalars['String']>;
  readonly token_not?: Maybe<Scalars['String']>;
  readonly token_gt?: Maybe<Scalars['String']>;
  readonly token_lt?: Maybe<Scalars['String']>;
  readonly token_gte?: Maybe<Scalars['String']>;
  readonly token_lte?: Maybe<Scalars['String']>;
  readonly token_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly token_contains?: Maybe<Scalars['String']>;
  readonly token_not_contains?: Maybe<Scalars['String']>;
  readonly token_starts_with?: Maybe<Scalars['String']>;
  readonly token_not_starts_with?: Maybe<Scalars['String']>;
  readonly token_ends_with?: Maybe<Scalars['String']>;
  readonly token_not_ends_with?: Maybe<Scalars['String']>;
  readonly dailyVolumeToken?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeToken_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeToken_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeCRO?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyTxns?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_not?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lt?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_gte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_lte?: Maybe<Scalars['BigInt']>;
  readonly dailyTxns_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly dailyTxns_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalLiquidityToken?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityToken_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityToken_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCRO?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly priceUSD?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly priceUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly priceUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum TokenDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  Token = 'token',
  DailyVolumeToken = 'dailyVolumeToken',
  DailyVolumeCro = 'dailyVolumeCRO',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyTxns = 'dailyTxns',
  TotalLiquidityToken = 'totalLiquidityToken',
  TotalLiquidityCro = 'totalLiquidityCRO',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  PriceUsd = 'priceUSD'
}

export interface Token_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly name_not?: Maybe<Scalars['String']>;
  readonly name_gt?: Maybe<Scalars['String']>;
  readonly name_lt?: Maybe<Scalars['String']>;
  readonly name_gte?: Maybe<Scalars['String']>;
  readonly name_lte?: Maybe<Scalars['String']>;
  readonly name_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly name_contains?: Maybe<Scalars['String']>;
  readonly name_not_contains?: Maybe<Scalars['String']>;
  readonly name_starts_with?: Maybe<Scalars['String']>;
  readonly name_not_starts_with?: Maybe<Scalars['String']>;
  readonly name_ends_with?: Maybe<Scalars['String']>;
  readonly name_not_ends_with?: Maybe<Scalars['String']>;
  readonly symbol?: Maybe<Scalars['String']>;
  readonly symbol_not?: Maybe<Scalars['String']>;
  readonly symbol_gt?: Maybe<Scalars['String']>;
  readonly symbol_lt?: Maybe<Scalars['String']>;
  readonly symbol_gte?: Maybe<Scalars['String']>;
  readonly symbol_lte?: Maybe<Scalars['String']>;
  readonly symbol_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_not_in?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly symbol_contains?: Maybe<Scalars['String']>;
  readonly symbol_not_contains?: Maybe<Scalars['String']>;
  readonly symbol_starts_with?: Maybe<Scalars['String']>;
  readonly symbol_not_starts_with?: Maybe<Scalars['String']>;
  readonly symbol_ends_with?: Maybe<Scalars['String']>;
  readonly symbol_not_ends_with?: Maybe<Scalars['String']>;
  readonly decimals?: Maybe<Scalars['BigInt']>;
  readonly decimals_not?: Maybe<Scalars['BigInt']>;
  readonly decimals_gt?: Maybe<Scalars['BigInt']>;
  readonly decimals_lt?: Maybe<Scalars['BigInt']>;
  readonly decimals_gte?: Maybe<Scalars['BigInt']>;
  readonly decimals_lte?: Maybe<Scalars['BigInt']>;
  readonly decimals_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly decimals_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly tradeVolume?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_not?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_gt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_lt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_gte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_lte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolume_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolume_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly tradeVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly tradeVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalTransactions?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_not?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalTransactions_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalLiquidity?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidity_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidity_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedCRO?: Maybe<Scalars['BigDecimal']>;
  readonly derivedCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly derivedCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly derivedCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly derivedCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly derivedCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly derivedCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedUSD?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly derivedUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly derivedUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum Token_OrderBy {
  Id = 'id',
  Name = 'name',
  Symbol = 'symbol',
  Decimals = 'decimals',
  TradeVolume = 'tradeVolume',
  TradeVolumeUsd = 'tradeVolumeUSD',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TotalTransactions = 'totalTransactions',
  TotalLiquidity = 'totalLiquidity',
  DerivedCro = 'derivedCRO',
  DerivedUsd = 'derivedUSD',
  TokenDayData = 'tokenDayData',
  PairDayDataBase = 'pairDayDataBase',
  PairDayDataQuote = 'pairDayDataQuote',
  PairBase = 'pairBase',
  PairQuote = 'pairQuote'
}

export interface Transaction {
  readonly __typename?: 'Transaction';
  readonly id: Scalars['ID'];
  readonly block: Scalars['BigInt'];
  readonly timestamp: Scalars['BigInt'];
  readonly mints: ReadonlyArray<Maybe<Mint>>;
  readonly burns: ReadonlyArray<Maybe<Burn>>;
  readonly swaps: ReadonlyArray<Maybe<Swap>>;
}


export interface TransactionMintsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Mint_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Mint_Filter>;
}


export interface TransactionBurnsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Burn_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Burn_Filter>;
}


export interface TransactionSwapsArgs {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<Swap_OrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<Swap_Filter>;
}

export interface Transaction_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly block?: Maybe<Scalars['BigInt']>;
  readonly block_not?: Maybe<Scalars['BigInt']>;
  readonly block_gt?: Maybe<Scalars['BigInt']>;
  readonly block_lt?: Maybe<Scalars['BigInt']>;
  readonly block_gte?: Maybe<Scalars['BigInt']>;
  readonly block_lte?: Maybe<Scalars['BigInt']>;
  readonly block_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly block_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp?: Maybe<Scalars['BigInt']>;
  readonly timestamp_not?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lt?: Maybe<Scalars['BigInt']>;
  readonly timestamp_gte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_lte?: Maybe<Scalars['BigInt']>;
  readonly timestamp_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly timestamp_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly mints?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly mints_not_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly burns_not_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
  readonly swaps_not_contains?: Maybe<ReadonlyArray<Scalars['String']>>;
}

export enum Transaction_OrderBy {
  Id = 'id',
  Block = 'block',
  Timestamp = 'timestamp',
  Mints = 'mints',
  Burns = 'burns',
  Swaps = 'swaps'
}

export interface VvsDayData {
  readonly __typename?: 'VvsDayData';
  readonly id: Scalars['ID'];
  readonly date: Scalars['Int'];
  readonly dailyVolumeCRO: Scalars['BigDecimal'];
  readonly dailyVolumeUSD: Scalars['BigDecimal'];
  readonly dailyVolumeUntracked: Scalars['BigDecimal'];
  readonly totalVolumeCRO: Scalars['BigDecimal'];
  readonly totalLiquidityCRO: Scalars['BigDecimal'];
  readonly totalVolumeUSD: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly totalTransactions: Scalars['BigInt'];
}

export interface VvsDayData_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly date?: Maybe<Scalars['Int']>;
  readonly date_not?: Maybe<Scalars['Int']>;
  readonly date_gt?: Maybe<Scalars['Int']>;
  readonly date_lt?: Maybe<Scalars['Int']>;
  readonly date_gte?: Maybe<Scalars['Int']>;
  readonly date_lte?: Maybe<Scalars['Int']>;
  readonly date_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly date_not_in?: Maybe<ReadonlyArray<Scalars['Int']>>;
  readonly dailyVolumeCRO?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUntracked?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_not?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_gt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_lt?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_gte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_lte?: Maybe<Scalars['BigDecimal']>;
  readonly dailyVolumeUntracked_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly dailyVolumeUntracked_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCRO?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCRO?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalTransactions?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_not?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalTransactions_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
}

export enum VvsDayData_OrderBy {
  Id = 'id',
  Date = 'date',
  DailyVolumeCro = 'dailyVolumeCRO',
  DailyVolumeUsd = 'dailyVolumeUSD',
  DailyVolumeUntracked = 'dailyVolumeUntracked',
  TotalVolumeCro = 'totalVolumeCRO',
  TotalLiquidityCro = 'totalLiquidityCRO',
  TotalVolumeUsd = 'totalVolumeUSD',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalTransactions = 'totalTransactions'
}

export interface VvsFactory {
  readonly __typename?: 'VvsFactory';
  readonly id: Scalars['ID'];
  /** Total of pairs */
  readonly totalPairs: Scalars['BigInt'];
  /** Total of transactions */
  readonly totalTransactions: Scalars['BigInt'];
  readonly totalVolumeUSD: Scalars['BigDecimal'];
  readonly totalVolumeCRO: Scalars['BigDecimal'];
  readonly untrackedVolumeUSD: Scalars['BigDecimal'];
  readonly totalLiquidityUSD: Scalars['BigDecimal'];
  readonly totalLiquidityCRO: Scalars['BigDecimal'];
}

export interface VvsFactory_Filter {
  readonly id?: Maybe<Scalars['ID']>;
  readonly id_not?: Maybe<Scalars['ID']>;
  readonly id_gt?: Maybe<Scalars['ID']>;
  readonly id_lt?: Maybe<Scalars['ID']>;
  readonly id_gte?: Maybe<Scalars['ID']>;
  readonly id_lte?: Maybe<Scalars['ID']>;
  readonly id_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly id_not_in?: Maybe<ReadonlyArray<Scalars['ID']>>;
  readonly totalPairs?: Maybe<Scalars['BigInt']>;
  readonly totalPairs_not?: Maybe<Scalars['BigInt']>;
  readonly totalPairs_gt?: Maybe<Scalars['BigInt']>;
  readonly totalPairs_lt?: Maybe<Scalars['BigInt']>;
  readonly totalPairs_gte?: Maybe<Scalars['BigInt']>;
  readonly totalPairs_lte?: Maybe<Scalars['BigInt']>;
  readonly totalPairs_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalPairs_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalTransactions?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_not?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lt?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_gte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_lte?: Maybe<Scalars['BigInt']>;
  readonly totalTransactions_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalTransactions_not_in?: Maybe<ReadonlyArray<Scalars['BigInt']>>;
  readonly totalVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCRO?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalVolumeCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalVolumeCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly untrackedVolumeUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly untrackedVolumeUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityUSD_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityUSD_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCRO?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_not?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_gt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_lt?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_gte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_lte?: Maybe<Scalars['BigDecimal']>;
  readonly totalLiquidityCRO_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
  readonly totalLiquidityCRO_not_in?: Maybe<ReadonlyArray<Scalars['BigDecimal']>>;
}

export enum VvsFactory_OrderBy {
  Id = 'id',
  TotalPairs = 'totalPairs',
  TotalTransactions = 'totalTransactions',
  TotalVolumeUsd = 'totalVolumeUSD',
  TotalVolumeCro = 'totalVolumeCRO',
  UntrackedVolumeUsd = 'untrackedVolumeUSD',
  TotalLiquidityUsd = 'totalLiquidityUSD',
  TotalLiquidityCro = 'totalLiquidityCRO'
}

export interface _Block_ {
  readonly __typename?: '_Block_';
  /** The hash of the block */
  readonly hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  readonly number: Scalars['Int'];
}

/** The type for the top-level _meta field */
export interface _Meta_ {
  readonly __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  readonly block: _Block_;
  /** The deployment ID */
  readonly deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  readonly hasIndexingErrors: Scalars['Boolean'];
}

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type PairsVolumeQueryVariables = Exact<{
  limit: Scalars['Int'];
  pairIds: ReadonlyArray<Scalars['ID']> | Scalars['ID'];
  blockNumber: Scalars['Int'];
}>;


export type PairsVolumeQuery = (
  { readonly __typename?: 'Query' }
  & { readonly pairVolumes: ReadonlyArray<(
    { readonly __typename?: 'Pair' }
    & Pick<Pair, 'id' | 'volumeToken0' | 'volumeToken1'>
  )> }
);

export type TokenQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TokenQuery = (
  { readonly __typename?: 'Query' }
  & { readonly token?: Maybe<(
    { readonly __typename?: 'Token' }
    & Pick<Token, 'id' | 'name' | 'symbol' | 'derivedCRO' | 'derivedUSD'>
  )> }
);

export type TokenInfoFragment = (
  { readonly __typename?: 'Token' }
  & Pick<Token, 'id' | 'name' | 'symbol' | 'derivedCRO' | 'derivedUSD'>
);

export type TopPairsQueryVariables = Exact<{
  limit: Scalars['Int'];
  excludeTokenIds: ReadonlyArray<Scalars['String']> | Scalars['String'];
}>;


export type TopPairsQuery = (
  { readonly __typename?: 'Query' }
  & { readonly pairs: ReadonlyArray<(
    { readonly __typename?: 'Pair' }
    & Pick<Pair, 'id' | 'reserve0' | 'reserve1' | 'volumeToken0' | 'volumeToken1' | 'reserveCRO' | 'reserveUSD'>
    & { readonly token0: (
      { readonly __typename?: 'Token' }
      & TokenInfoFragment
    ), readonly token1: (
      { readonly __typename?: 'Token' }
      & TokenInfoFragment
    ) }
  )> }
);

export const SupportedChains = [
    NetworkEnum.ETHEREUM,
    NetworkEnum.POLYGON,
    NetworkEnum.BINANCE,
    NetworkEnum.OPTIMISM,
    NetworkEnum.ARBITRUM,
    NetworkEnum.AVALANCHE,
    NetworkEnum.GNOSIS,
    NetworkEnum.COINBASE,
    NetworkEnum.ZKSYNC,
    NetworkEnum.LINEA,
    NetworkEnum.SONIC,
    NetworkEnum.UNICHAIN,
    NetworkEnum.TEZOS,
    NetworkEnum.SEPOLIA
];
export const isSupportedChain = (chain) => SupportedChains.includes(chain);
//# sourceMappingURL=chains.js.map
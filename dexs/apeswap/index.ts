import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

const adapters = univ2Adapter({
  [CHAIN.BSC]: "https://api.thegraph.com/subgraphs/name/apeswapfinance/bsc-dex",
  [CHAIN.POLYGON]: "https://api.thegraph.com/subgraphs/name/prof-sd/as-matic-graft",
  [CHAIN.ETHEREUM]: "https://api.thegraph.com/subgraphs/name/apeswapfinance/ethereum-dex",
  [CHAIN.ARBITRUM]: "https://api.thegraph.com/subgraphs/name/prof-sd/arbitrum-dex"
  // [CHAIN.TELOS]: "https://telos.apeswapgraphs.com/subgraphs/name/ape-swap/apeswap-graph"
}, {});

adapters.adapter.bsc.start = async () => 1613273226;
adapters.adapter.polygon.start = async () => 1623814026;
adapters.adapter.ethereum.start = async () => 1652239626;
// adapters.adapter.telos.start = async () => 1665880589;
adapters.adapter.arbitrum.start = async () => 1678406400;

export default adapters;

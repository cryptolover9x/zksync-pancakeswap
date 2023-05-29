import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x12990287506fDDAe0E0fCA3701551738d7f9A909', // TODO
  [ChainId.BSCTESTNET]: '0x12990287506fDDAe0E0fCA3701551738d7f9A909'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

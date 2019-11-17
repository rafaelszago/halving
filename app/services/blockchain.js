import { create } from 'apisauce';

const BlockchainService = create({
  baseURL: 'https://blockchain.info'
});

export default BlockchainService;

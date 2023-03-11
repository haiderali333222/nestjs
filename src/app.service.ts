import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';

const CONTRACT = '0xF87E4c0d83f54e51FE5e911FaF4ce9D4D8e05310';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getContractAddress(): string {
    return CONTRACT;
  }
  getTotalSupply(): number {
    const provider = ethers.getDefaultProvider('goerli');
    const contract = new ethers.Contract(CONTRACT, tokenJson.abi, provider);
    const totalSupply = contract.totalSupply();
    const formattedTotalSupply = ethers.utils.formatEther(totalSupply);
    return totalSupply;
  }
}

import {HashProvider} from './hash.provider';

export class HashProviderFake implements HashProvider {
  async hash(value: string): Promise<string> {
    return value;
  }
  async verify(hash: string, value: string): Promise<boolean> {
    return hash === value;
  }
}

import {hash, verify} from 'argon2';
import {HashProvider} from './hash.provider';

export class HashProviderImpl implements HashProvider {
  async hash(value: string): Promise<string> {
    return hash(value);
  }
  async verify(hash: string, value: string): Promise<boolean> {
    return verify(hash, value);
  }
}

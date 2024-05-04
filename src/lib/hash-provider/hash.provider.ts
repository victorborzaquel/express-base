export abstract class HashProvider {
  abstract hash(value: string): Promise<string>;
  abstract verify(hash: string, value: string): Promise<boolean>;
}

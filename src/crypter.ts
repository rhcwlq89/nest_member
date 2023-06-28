import * as CryptoJS from 'crypto-js';

export class Crypter {
  public static encrypt(key: string, value: string) {
    key = CryptoJS.enc.Utf8.parse(key);
    const ciphertext = CryptoJS.AES.encrypt(value, key, {
      iv: key,
    }).toString();

    return ciphertext;
  }

  public static decrypt(key: string, value: string) {
    key = CryptoJS.enc.Utf8.parse(key);
    const decryptedData = CryptoJS.AES.decrypt(value, key, {
      iv: key,
    });
    return decryptedData.toString(CryptoJS.enc.Utf8);
  }
}

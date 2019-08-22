import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';
@Injectable({
  providedIn: 'root'
})
export class AESEncryptDecryptServiceService {
  secretKey = "YourSecretKeyForEncryption&Descryption";
  constructor() { }
  // encrypt(value: any) {
  //   return crypto.AES.encrypt(value, this.secretKey.trim());
  // }

  // decrypt(textToDecrypt: string) {

  //   var bytes = crypto.AES.decrypt(textToDecrypt, this.secretKey.trim());
  //   var decryptedData = bytes.toString(crypto.enc.Utf8);

  //   console.log(decryptedData);

  //   return crypto.AES.decrypt(textToDecrypt, this.secretKey.trim()).toString(crypto.enc.Utf8);
  // }


  Encrypt(object: any):string {
    return crypto.AES.encrypt(object, 'secret key 123').toString()
  }

  Decrypt(object: any):any {
    var bytes = crypto.AES.decrypt(object.toString(), 'secret key 123');
    var plaintext = bytes.toString(crypto.enc.Utf8);
    return plaintext;
  }



}

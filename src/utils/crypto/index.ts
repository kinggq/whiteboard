import CryptoJS from 'crypto-js'

const CryptoSecret = '__CryptoJS_Secret'

/**
 * 解密数据
 * @param cipherText 密文
 * @returns
 */
export function decrypto(cipherText: string) {
  const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret)
  const originalText = bytes.toString(CryptoJS.enc.Utf8)
  if (originalText)
    return JSON.parse(originalText)

  return null
}

/**
 * 加密数据
 * @param data 数据
 * @returns
 */
export function encrypto(data: any) {
  const newData = JSON.stringify(data)
  return CryptoJS.AES.encrypt(newData, CryptoSecret).toString()
}

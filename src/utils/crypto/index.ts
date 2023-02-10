import CryptoJS from 'crypto-js'

const CryptoSecret = '__CryptoJS_Secret'

export function decrypto(cipherText: string) {
    const bytes = CryptoJS.AES.decrypt(cipherText, CryptoSecret)
    const originalText = bytes.toString(CryptoJS.enc.Utf8)
    if (originalText) {
        return JSON.parse(originalText)
    }
    return null
}

import CryptoJS from 'crypto-js';

const ENCRYPTION_KEY = 'your-encryption-key'; // 使用安全的密钥

// 加密用户数据的函数
export function encryptUserData(userData) {
    const ciphertext = CryptoJS.AES.encrypt(JSON.stringify(userData), ENCRYPTION_KEY).toString();
    return ciphertext;
}

// 将用户数据存储到 localStorage 的函数，带有过期时间
export function storeUserData(userData) {
    const encryptedData = encryptUserData(userData);
    const expirationTime = new Date().getTime() + 6 * 60 * 60 * 1000; // 6 小时的毫秒数
    const dataToStore = {
        data: encryptedData,
        expires: expirationTime
    };
    localStorage.setItem('userData', JSON.stringify(dataToStore));
}

// 从 localStorage 中检索用户数据的函数
export function getUserData() {
    const storedData = localStorage.getItem('userData');
    if (!storedData) return null;
    const { data, expires } = JSON.parse(storedData);
    const currentTime = new Date().getTime();

    // 检查数据是否过期
    if (currentTime > expires) {
        localStorage.removeItem('userData'); // 删除过期数据
        return null;
    }

    // 解密并返回用户数据
    const bytes = CryptoJS.AES.decrypt(data, ENCRYPTION_KEY);
    const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    return decryptedData;
}
// 清除用户数据的函数
export function clearUserData() {
    localStorage.removeItem('userData');
}
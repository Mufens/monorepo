/**
 * 格式化工具函数
 */

/**
 * 格式化日期
 * @param {Date|string|number} date 日期
 * @param {string} format 格式，默认 'YYYY-MM-DD HH:mm'
 * @returns {string} 格式化后的日期字符串
 */
export function formatDate(date, format = "YYYY-MM-DD HH:mm") {
  if (!date) return "";

  const d = new Date(date);
  if (isNaN(d.getTime())) return "";

  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  const hours = String(d.getHours()).padStart(2, "0");
  const minutes = String(d.getMinutes()).padStart(2, "0");
  const seconds = String(d.getSeconds()).padStart(2, "0");

  return format
    .replace("YYYY", year)
    .replace("MM", month)
    .replace("DD", day)
    .replace("HH", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);
}

/**
 * 格式化数字（千分位）
 * @param {number} num 数字
 * @param {number} decimals 小数位数
 * @returns {string} 格式化后的数字字符串
 */
export function formatNumber(num, decimals = 0) {
  if (isNaN(num)) return "0";
  const fixed = Number(num).toFixed(decimals);
  const parts = fixed.split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

/**
 * 格式化金额
 * @param {number} amount 金额
 * @param {string} symbol 货币符号，默认 '¥'
 * @param {number} decimals 小数位数，默认 2
 * @returns {string} 格式化后的金额字符串
 */
export function formatMoney(amount, symbol = "¥", decimals = 2) {
  return symbol + formatNumber(amount, decimals);
}

/**
 * 格式化手机号（中间四位用*代替）
 * @param {string} phone 手机号
 * @returns {string} 格式化后的手机号
 */
export function formatPhone(phone) {
  if (!phone) return "";
  const phoneStr = String(phone);
  if (phoneStr.length !== 11) return phoneStr;
  return phoneStr.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

/**
 * 格式化身份证号（中间用*代替）
 * @param {string} idCard 身份证号
 * @returns {string} 格式化后的身份证号
 */
export function formatIdCard(idCard) {
  if (!idCard) return "";
  const idCardStr = String(idCard);
  if (idCardStr.length < 8) return idCardStr;
  const start = idCardStr.substring(0, 4);
  const end = idCardStr.substring(idCardStr.length - 4);
  const middle = "*".repeat(idCardStr.length - 8);
  return start + middle + end;
}

/**
 * 公共工具库类型声明
 */

declare module 'common' {
  /**
   * 格式化日期
   */
  export function formatDate(
    date: Date | string | number,
    format?: string
  ): string;

  /**
   * 格式化数字（千分位）
   */
  export function formatNumber(num: number, decimals?: number): string;

  /**
   * 格式化金额
   */
  export function formatMoney(
    amount: number,
    symbol?: string,
    decimals?: number
  ): string;

  /**
   * 格式化手机号（中间四位用*代替）
   */
  export function formatPhone(phone: string): string;

  /**
   * 格式化身份证号（中间用*代替）
   */
  export function formatIdCard(idCard: string): string;

  /**
   * 防抖函数
   */
  export function debounce<T extends (...args: unknown[]) => unknown>(
    func: T,
    wait?: number,
    immediate?: boolean
  ): (...args: Parameters<T>) => void;

  /**
   * 节流函数
   */
  export function throttle<T extends (...args: unknown[]) => unknown>(
    func: T,
    limit?: number
  ): (...args: Parameters<T>) => void;

  /**
   * 深拷贝
   */
  export function deepClone<T>(obj: T): T;

  /**
   * 判断是否为空值
   */
  export function isEmpty(value: unknown): boolean;

  /**
   * 生成唯一ID
   */
  export function generateId(prefix?: string): string;

  /**
   * 格式化文件大小
   */
  export function formatFileSize(bytes: number): string;

  /**
   * 获取URL参数
   */
  export function getUrlParam(name: string, url?: string): string | null;

  /**
   * 获取所有URL参数
   */
  export function getAllUrlParams(url?: string): Record<string, string>;

  /**
   * 设置 localStorage
   */
  export function setStorage(key: string, value: unknown): void;

  /**
   * 读取 localStorage
   */
  export function getStorage<T = unknown>(key: string, defaultValue?: T): T;
}


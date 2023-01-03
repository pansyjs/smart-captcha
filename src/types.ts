import type { CSSProperties } from 'react';

export interface SmartCaptchaResult {
  sessionId: string;
  sig: string;
  token: string;
}

export class SmartCaptcha {
  constructor() {}
}

export interface SmartCaptchaData extends SmartCaptchaResult {
  token: string;
  appKey: string;
  scene: string;
}

export interface SmartCaptchaProps {
  /** 应用类型标识 */
  appkey?: string;
  /** 使用场景标识 */
  scene?: string;
  /** 节点类名 */
  className?: string;
  /** 节点样式 */
  style?: CSSProperties;
  /**
   * 渲染的目标元素ID
   * @default 'smart-captcha'
   */
  elementId?: string;
  /**
   * 智能验证组件初始状态文案
   */
  defaultTxt?: string;
  /**
   * 智能验证组件验证通过状态文案
   */
  successTxt?: string;
  /**
   * 智能验证组件验证失败（拦截）状态文案
   */
  failTxt?: string;
  /**
   * 验证组件的语言
   * @default 'cn'
   */
  language?: string;
  /**
   * 二次验证时，用于自定义文案。
   */
  upLang?: Record<string, {
    LOADING?: string;
    SLIDE?:  string;
    SUCCESS?: string;
    ERROR?: string;
    FAIL?: string;
  }>;
  /**
   * 测试字段，用于测试验证码的不同状态
   */
  test?: string;
  /**
   * 智能验证组件验证中状态文案
   */
  scaningTxt?: string;
  /** 组件宽度 */
  width?: number;
  /** 组件高度 */
  height?: number;
  /**
   * 验证通过时触发
   */
  onSuccess?: (data: SmartCaptchaData) => void;
  /**
   * 验证失败时触发
   */
  onFailed?: () => void;
  /**
   * 验证通过/失败都会触发
   */
  onChange?: (data?: SmartCaptchaData | undefined) => void;
}

export interface SmartCaptchaRef {
  reset: () => void;
}

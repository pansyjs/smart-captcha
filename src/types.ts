import type { CSSProperties } from 'react';

export interface SmartCaptchaResult {
  sessionId: string;
  sig: string;
}

export class SmartCaptcha {
  constructor() {

  }
}

export interface SmartCaptchaData extends SmartCaptchaResult {
  token: string;
  appKey: string;
  scene: string;
}

export interface SmartCaptchaProps {
  /** 节点类名 */
  className?: string;
  /** 节点样式 */
  style?: CSSProperties;
  /**
   * 渲染的目标元素ID
   * @default 'smart-captcha'
   */
  elementId?: string;
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

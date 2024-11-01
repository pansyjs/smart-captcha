import type { CSSProperties } from 'react';

export interface SmartCaptchaResult {
  sessionId: string;
  sig: string;
  token: string;
}

export interface Lang {
  /** 加载状态提示 */
  LOADING?: string;
  /** 等待滑动状态提示 */
  SLIDE?: string;
  /** 验证通过状态提示 */
  SUCCESS?: string;
  /** 验证失败触发拦截状态提示 */
  ERROR?: string;
  /** 验证失败触发拦截状态提示 */
  FAIL?: string;
}

export class SmartCaptcha {
  constructor() {}
}

export interface SmartCaptchaData extends SmartCaptchaResult {
  token: string;
  appKey: string;
  scene: string;
}

export interface CommonProps {
  /** 节点类名 */
  className?: string;
  /** 节点样式 */
  style?: CSSProperties;
  /** 应用类型标识 */
  appkey: string;
  /** 使用场景标识 */
  scene: string;
  /** 渲染的目标元素ID */
  elementId?: string;
  /** 加载过程中 dom */
  loading?: React.ReactNode;
  /**
   * 测试字段，用于测试验证码的不同状态
   */
  test?: string;
  /**
   * 用于验证码的自定义文案
   */
  upLang?: Record<string, Lang>;
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
  /**
   * 验证通过/失败都会触发
   */
  onError?: (data?: any) => void;
}

export interface SmartCaptchaProps extends CommonProps {
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
   * 智能验证组件验证中状态文案
   */
  scaningTxt?: string;
  /** 组件宽度 */
  width?: number;
  /** 组件高度 */
  height?: number;
}

export interface SliderCaptchaProps extends CommonProps {
  /** 请求国外需配置为true */
  foreign?: boolean;
  /** 语言，默认值为cn（中文） */
  language?: string;
  /**
   * 滑动条的宽度（单位：px）
   * @default 300
   */
  width?: number;
  /**
   * 滑动组件展示的字体大小
   * @default 12
   */
  fontSize?: number;
  /**
   * 隐藏验证时的错误码
   * @default false。
   */
  hideErrorCode?: boolean;
}

export interface SmartCaptchaRef {
  /** 重置为初始状态 */
  reset: () => void;
}

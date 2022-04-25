export interface SmartCaptchaData {
  token?: string;
  sessionId?: string;
  sig?: string;
  appKey?: string;
  scene?: string;
}

export interface SmartCaptchaProps {
  className?: string;
  style?: React.CSSProperties;
  elementId?: string;
  width?: number;
  height?: number;
  onSuccess?: (data: SmartCaptchaData) => void;
  onFailed?: () => void;
}

export interface SmartCaptchaRef {
  reset: () => void;
}

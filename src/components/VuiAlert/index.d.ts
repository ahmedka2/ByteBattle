import { ReactNode } from 'react';

export interface VuiAlertProps {
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
  dismissible?: boolean;
  children: ReactNode;
}

declare const VuiAlert: React.FC<VuiAlertProps>;

export default VuiAlert;

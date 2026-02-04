import { ReactNode } from 'react';

export interface VuiPaginationProps {
  item?: boolean;
  variant?: 'gradient' | 'contained';
  color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark' | 'white';
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  children: ReactNode;
  onClick?: () => void;
}

declare const VuiPagination: React.FC<VuiPaginationProps>;

export default VuiPagination;

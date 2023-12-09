import { IIconProps } from '@interfaces';
import Icon from './Icon';

export const User = (props: IIconProps) => {
  const { title = 'User', size = '32', ...otherProps } = props;
  return (
    <Icon viewBox="0 0 32 32" size={size} title={title} {...otherProps}>
      <path
        d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27M21 9.5C21 11.9853 18.9853 14 16.5 14C14.0147 14 12 11.9853 12 9.5C12 7.01472 14.0147 5 16.5 5C18.9853 5 21 7.01472 21 9.5Z"
        stroke={props.color || 'black'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

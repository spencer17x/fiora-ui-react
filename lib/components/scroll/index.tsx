import React from 'react';
import { getScrollbarWidth } from '../../utils';
import './index.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  return <div {...restProps} className='f-scroll'>
    <div className='f-scroll--inner' style={{right: `-${getScrollbarWidth() || 15}px`}}>
      {children}
    </div>
  </div>;
};

export default Scroll;

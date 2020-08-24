import React, { UIEventHandler, useEffect, useRef, useState } from 'react';
import { getScrollbarWidth } from '../../utils';
import './index.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  const scrollWidth = `${getScrollbarWidth() || 20}px`;
  const [barHeight, setBarHeight] = useState(0);
  const [barScrollTop, setBarScrollTop] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const onScroll: UIEventHandler = event => {
    const dom = containerRef.current;
    if (dom) {
      const { scrollTop } = event.currentTarget;
      const { height } = dom.getBoundingClientRect();
      const scrollHeight = dom.scrollHeight;
      const barScrollTop = scrollTop * height / scrollHeight;
      setBarScrollTop(barScrollTop);
    }
  }
  useEffect(() => {
    const dom = containerRef.current;
    if (dom) {
      const scrollHeight = dom.scrollHeight;
      const { height } = dom.getBoundingClientRect();
      const barHeight = height * height / scrollHeight;
      setBarHeight(barHeight);
    }
  }, []);
  return <div {...restProps} className='f-scroll'>
    <div
      onScroll={onScroll}
      ref={containerRef}
      className='f-scroll--inner'
      style={{ right: `-${scrollWidth}` }}
    >
      {children}
    </div>
    <div className='f-scroll--container' style={{ width: scrollWidth }}>
      <div
        className='f-scroll--bar'
        style={{height: barHeight, transform: `translateY(${barScrollTop}px)`}}
      ></div>
    </div>
  </div>;
};

export default Scroll;

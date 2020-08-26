import React, { MouseEventHandler, UIEventHandler, useEffect, useRef, useState } from 'react';
import { getScrollbarWidth } from '../../utils';
import './index.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  const scrollWidth = `${getScrollbarWidth() || 20}px`;
  const [barHeight, setBarHeight] = useState(0);
  const [barScrollTop, setBarScrollTop] = useState(0);
  const move = useRef(false);
  const startY = useRef(0);
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
  const onMouseDown: MouseEventHandler = event => {
    const { clientY } = event;
    move.current = true;
    startY.current = clientY;
  }
  const onMouseMove = (event: MouseEvent) => {
    const { clientY } = event;
    if (move.current) {
      setBarScrollTop(clientY - startY.current);
    }
  }
  const onMouseUp = () => {
    move.current = false;
  }
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    }
  }, []);
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
    <div className='f-scroll--container'>
      <div
        onMouseDown={onMouseDown}
        className='f-scroll--bar'
        style={{height: barHeight, transform: `translateY(${barScrollTop}px)`}}
      ></div>
    </div>
  </div>;
};

export default Scroll;

import React, { MouseEventHandler, TouchEventHandler, UIEventHandler, useEffect, useRef, useState } from 'react';
import { getScrollbarWidth } from '../../utils';
import './index.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, ...restProps } = props;
  const scrollWidth = `${getScrollbarWidth() || 20}px`;
  const [barHeight, setBarHeight] = useState(0);
  const [barScrollTop, setBarScrollTop] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const move = useRef(false);
  const startY = useRef(0);
  const cacheBarTop = useRef(0);
  const cacheBarHeight = useRef(0);
  const barContainerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [barVisible, setBarVisible] = useState(false);
  const timer = useRef<number | null>(null);
  const touchStartY = useRef(0);
  const onScroll: UIEventHandler = event => {
    const innerDom = innerRef.current;
    setBarVisible(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setBarVisible(false);
    }, 1500)
    if (innerDom) {
      const { scrollTop } = event.currentTarget;
      const { height } = innerDom.getBoundingClientRect();
      const scrollHeight = innerDom.scrollHeight;
      const barScrollTop = scrollTop * height / scrollHeight;
      setBarScrollTop(barScrollTop);
    }
  }
  const onMouseDown: MouseEventHandler = event => {
    const { clientY } = event;
    move.current = true;
    startY.current = clientY;
    cacheBarTop.current = barScrollTop;
  }
  const onMouseMove = (event: MouseEvent) => {
    const { clientY } = event;
    const barContainerDom = barContainerRef.current!;
    const innerDom = innerRef.current!;
    const scrollHeight = barContainerDom && barContainerDom.scrollHeight || 0;
    const maxBarScrollTop = scrollHeight - barHeight;
    const diffValue = clientY - startY.current;
    let barScrollTop = cacheBarTop.current + diffValue;
    if (barScrollTop <= 0) barScrollTop = 0;
    if (barScrollTop >= maxBarScrollTop) barScrollTop = maxBarScrollTop;
    if (move.current) {
      innerRef.current!.scrollTop = barScrollTop / barContainerDom.clientHeight * innerDom.scrollHeight;
      setBarScrollTop(barScrollTop);
    }
  }
  const onMouseUp = () => {
    move.current = false;
  }
  const onSelectStart = (e: Event) => {
    if (move.current) {
      e.preventDefault();
    }
  }
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('selectstart', onSelectStart);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('selectstart', onSelectStart);
    }
  }, [barHeight]);
  useEffect(() => {
    const innerDom = innerRef.current;
    if (innerDom) {
      const scrollHeight = innerDom.scrollHeight;
      const { height } = innerDom.getBoundingClientRect();
      const barHeight = height * height / scrollHeight;
      cacheBarHeight.current = barHeight;
      setBarHeight(barHeight);
    }
  }, []);
  const moveCount = useRef(0);
  const pulling = useRef(false);
  const onTouchStart: TouchEventHandler = e => {
    if (barScrollTop !== 0) return;
    touchStartY.current = e.touches[0].clientY;
    moveCount.current = 0;
    pulling.current = true;
  }
  const onTouchMove: TouchEventHandler = e => {
    const deltaY = e.touches[0].clientY - touchStartY.current;
    moveCount.current += 1;
    if (moveCount.current === 1 && deltaY < 0) {
      pulling.current = false;
    }
    if (pulling.current && translateY + deltaY < 0) {
      setTranslateY(0);
      return;
    }
    if (pulling.current) {
      setTranslateY(translateY + deltaY);
      touchStartY.current = e.touches[0].clientY;
    }
  }
  const onTouchEnd: TouchEventHandler = e => {
    if (pulling.current) {
      setTranslateY(0);
      pulling.current = false;
    }
  }
  return <div {...restProps} className='f-scroll'>
    <div
      onScroll={onScroll}
      ref={innerRef}
      className='f-scroll--inner'
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      style={{ right: `-${scrollWidth}`, transform: `translateY(${translateY}px)` }}
    >
      {children}
    </div>
    {
      barVisible && <div ref={barContainerRef} className='f-scroll--container'>
				<div
					onMouseDown={onMouseDown}
					className='f-scroll--bar'
					style={{height: barHeight, transform: `translateY(${barScrollTop}px)`}}
				></div>
			</div>
    }
  </div>;
};

export default Scroll;

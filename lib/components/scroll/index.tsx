import React, {
  MouseEventHandler,
  ReactNode,
  TouchEventHandler,
  UIEventHandler,
  useEffect,
  useRef,
  useState
} from 'react';
import { getScrollbarWidth } from '../../utils';
import Icon from '../icon';
import './index.scss';

interface ScrollProps extends React.HTMLAttributes<HTMLDivElement> {
  maxPullHeight?: number;
  onPull?: () => Promise<any>;
  pullLoadingContent?: ReactNode;
  pullDownContent?: ReactNode;
  pullDownMaxContent?: ReactNode;
}

const Scroll: React.FC<ScrollProps> = props => {
  const { children, maxPullHeight = 160, pullLoadingContent, pullDownMaxContent, pullDownContent, onPull, ...restProps } = props;
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
    }, 1500);
    if (innerDom) {
      const { scrollTop } = event.currentTarget;
      const { height } = innerDom.getBoundingClientRect();
      const scrollHeight = innerDom.scrollHeight;
      const barScrollTop = scrollTop * height / scrollHeight;
      setBarScrollTop(barScrollTop);
    }
  };
  const onMouseDown: MouseEventHandler = event => {
    const { clientY } = event;
    move.current = true;
    startY.current = clientY;
    cacheBarTop.current = barScrollTop;
  };
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
  };
  const onMouseUp = () => {
    move.current = false;
  };
  const onSelectStart = (e: Event) => {
    if (move.current) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('selectstart', onSelectStart);
    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('selectstart', onSelectStart);
    };
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
  const [pullLoading, setPullLoading] = useState(false);
  const onTouchStart: TouchEventHandler = e => {
    if (barScrollTop !== 0) return;
    touchStartY.current = e.touches[0].clientY;
    moveCount.current = 0;
    pulling.current = true;
  };
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
    if (pulling.current && translateY + deltaY >= maxPullHeight) {
      setTranslateY(maxPullHeight);
      return;
    }
    if (pulling.current) {
      setTranslateY(translateY + deltaY);
      touchStartY.current = e.touches[0].clientY;
    }
  };
  const onTouchEnd: TouchEventHandler = e => {
    if (pulling.current) {
      const resetPull = () => {
        pulling.current = false;
        setTranslateY(0);
        setPullLoading(false);
      }
      if (onPull && translateY >= maxPullHeight) {
        setPullLoading(true);
        onPull().then(resetPull, resetPull);
      } else {
        resetPull();
      }
    }
  };
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
					style={{ height: barHeight, transform: `translateY(${barScrollTop}px)` }}
				></div>
			</div>
    }
    <div className='f-scroll--pulling' style={{ height: `${translateY}px` }}>
      {
        pullLoading ?
          (pullLoadingContent ? pullLoadingContent : '数据加载中...') : <>
            {
              translateY >= maxPullHeight ?
                (pullDownMaxContent ? pullDownMaxContent : '松开即可刷新') :
                (pullDownContent ? pullDownContent : <Icon type="pull-down" className="f-scroll--pulling-icon"/>)
            }
          </>
      }
    </div>
  </div>;
};

Scroll.defaultProps = {
  maxPullHeight: 220
};

export default Scroll;

import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Scroll } from '../../../../lib';

const ScrollDemo = () => (
  <div>
    <CodeShow
      title="基本用法"
    >
      <Scroll />
    </CodeShow>
  </div>
);

export default ScrollDemo;

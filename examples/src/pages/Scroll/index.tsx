import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Scroll } from '../../../../lib';

const ScrollDemo = () => {
  const onPull = () => {
    return new Promise((resolve, reject) => {
      setTimeout(reject, 3000)
    });
  }
  return <div>
    <CodeShow
      title="基本用法"
      code={`
        <Scroll
          onPull={onPull}
          style={{ height: 400}}
        >
          <p>1</p>
          <p>2</p><p>3</p><p>4</p><p>5</p>
          <p>6</p><p>7</p><p>8</p><p>9</p><p>10</p>
          <p>11</p><p>12</p><p>13</p><p>14</p><p>15</p>
        </Scroll>
      `}
    >
      <Scroll
        onPull={onPull}
        style={{ height: 400}}
      >
        <p>1</p>
        <p>2</p><p>3</p><p>4</p><p>5</p>
        <p>6</p><p>7</p><p>8</p><p>9</p><p>10</p>
        <p>11</p><p>12</p><p>13</p><p>14</p><p>15</p>
      </Scroll>
    </CodeShow>
  </div>
};

export default ScrollDemo;

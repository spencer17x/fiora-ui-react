import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Form, Input } from '../../../../lib';

const DemoForm = () => {
  const [] = useState({
    username: '',
    password: ''
  });
  return <div>
    <CodeShow
      title='基础用法'
    >
      <Form>
        <Form.Item
          label="Username"
          name="usr"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="pwd"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </CodeShow>
  </div>;
};

export default DemoForm;
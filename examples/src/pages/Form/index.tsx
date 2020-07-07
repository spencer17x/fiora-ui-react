import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Form, FormProps } from '../../../../lib';

const DemoForm = () => {
  const [formData, setFormData] = useState<FormProps['data']>({
    username: '',
    password: ''
  });
  const [fields] = useState<FormProps['fields']>([
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' }
  ]);
  const [rules] = useState<FormProps['rules']>([
    { name: 'username', required: true, minlength: 5, maxlength: 15 },
    { name: 'password', required: true, minlength: 5, maxlength: 15 }
  ]);
  const onSubmit = () => {
    console.log(formData);
  };
  return <div>
    <CodeShow
      title='基础用法'
    >
      <Form
        data={formData}
        fields={fields}
        rules={rules}
        onChange={data => setFormData(data)}
        buttons={[
          <Button type='primary' onClick={onSubmit}>提交</Button>
        ]}
      />
    </CodeShow>
  </div>;
};

export default DemoForm;
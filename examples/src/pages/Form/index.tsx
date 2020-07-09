import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Form, FormProps, validate } from '../../../../lib';

const DemoForm = () => {
  const [formData, setFormData] = useState<FormProps['data']>({
    username: '',
    password: '',
    text: ''
  });

  const [fields] = useState<FormProps['fields']>([
    { name: 'username', type: 'text', label: 'Username' },
    { name: 'password', type: 'password', label: 'Password' },
    { name: 'text', type: 'text', label: 'Text' }
  ]);
  const [rules] = useState<FormProps['rules']>([
    { name: 'username', required: true, message: '必填' },
    { name: 'username', minlength: 5, message: '不得小于5' },
    { name: 'username', maxlength: 15, message: '不得大于15' },
    { name: 'password', required: true, message: '必填' },
    { name: 'password', minlength: 5, message: '不得小于5' },
    { name: 'password', maxlength: 15, message: '不得大于15' }
  ]);
  const [errors, setErrors] = useState<FormProps['errors']>();
  const onSubmit = () => {
    const errors = validate(formData, rules);
    setErrors(errors);
  };
  return <div>
    <CodeShow
      title='基础用法'
      style={{ marginBottom: 20 }}
      code={`
const [formData, setFormData] = useState<FormProps['data']>({
  username: '',
  password: '',
  text: ''
});

const [fields] = useState<FormProps['fields']>([
  { name: 'username', type: 'text', label: 'Username' },
  { name: 'password', type: 'password', label: 'Password' },
  { name: 'text', type: 'text', label: 'Text' }
]);
const [rules] = useState<FormProps['rules']>([
  { name: 'username', required: true, message: '必填' },
  { name: 'username', minlength: 5, message: '不得小于5' },
  { name: 'username', maxlength: 15, message: '不得大于15' },
  { name: 'password', required: true, message: '必填' },
  { name: 'password', minlength: 5, message: '不得小于5' },
  { name: 'password', maxlength: 15, message: '不得大于15' }
]);

<Form
  data={formData}
  fields={fields}
  rules={rules}
  onChange={data => setFormData(data)}
  errors={errors}
  buttons={
    [
      <Button type='primary' onClick={onSubmit}>提交</Button>
    ]
  }
></Form>
      `}
    >
      <Form
        data={formData}
        fields={fields}
        rules={rules}
        onChange={data => setFormData(data)}
        errors={errors}
        buttons={
          [
            <Button type='primary' onClick={onSubmit}>提交</Button>
          ]
        }
      ></Form>
    </CodeShow>

    <CodeShow
      title='layout 布局'
      code={`
<h3>vertical</h3>
<Form
  layout='vertical'
  data={formData}
  fields={fields}
  rules={rules}
  onChange={data => setFormData(data)}
  errors={errors}
  style={{ marginBottom: 20 }}
  buttons={
    [
      <Button type='primary' onClick={onSubmit}>提交</Button>
    ]
  }
></Form>

<h3>inline</h3>
<Form
  layout='inline'
  data={formData}
  fields={fields}
  rules={rules}
  onChange={data => setFormData(data)}
  errors={errors}
  buttons={
    [
      <Button type='primary' onClick={onSubmit}>提交</Button>
    ]
  }
>
</Form>
      `}
    >
      <h3>vertical</h3>
      <Form
        layout='vertical'
        data={formData}
        fields={fields}
        rules={rules}
        onChange={data => setFormData(data)}
        errors={errors}
        style={{ marginBottom: 20 }}
        buttons={
          [
            <Button type='primary' onClick={onSubmit}>提交</Button>
          ]
        }
      ></Form>

      <h3>inline</h3>
      <Form
        layout='inline'
        data={formData}
        fields={fields}
        rules={rules}
        onChange={data => setFormData(data)}
        errors={errors}
        buttons={
          [
            <Button type='primary' onClick={onSubmit}>提交</Button>
          ]
        }
      >
      </Form>
    </CodeShow>
  </div>;
};

export default DemoForm;

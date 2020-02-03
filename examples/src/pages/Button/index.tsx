import React, { useState } from 'react';
import { Button } from '../../../../lib';
import CodeCard from '../../components/CodeCard';
import './index.scss';

const ExampleButton = () => {

	const [buttonLoading, setButtonLoading] = useState(false);

	return <div className='example-button'>
		<CodeCard
			title='基本用法'
			code={`
				<Button className='marginRight10'>Default</Button>
	      <Button type='primary' className='component-margin'>Primary</Button>
	      <Button type='primary' className='component-margin' disabled>Primary Disbaled</Button>
	      <Button type='dashed' className='component-margin'>Dashed</Button>
	      <Button type='danger' className='component-margin'>Danger</Button>
	      <Button type='link' className='component-margin'>Link</Button>
	      <Button type='link' className='component-margin'>
	        <span>Hello World</span>
				</Button>
			`}
		>
			<Button className='component-margin'>Default</Button>
			<Button type='primary' className='component-margin'>Primary</Button>
			<Button type='primary' className='component-margin' disabled>Primary Disbaled</Button>
			<Button type='dashed' className='component-margin'>Dashed</Button>
			<Button type='danger' className='component-margin'>Danger</Button>
			<Button type='link' className='component-margin'>Link</Button>
			<Button type='link' className='component-margin'>
				<span>Hello World</span>
			</Button>
		</CodeCard>

		<CodeCard
			title='Size大小'
			style={{ marginTop: 30 }}
			code={`
				<Button size='small' className='component-margin'>Default</Button>
				<Button size='default' type='primary' className='component-margin'>Primary</Button>
				<Button size='large' className='component-margin'>Dashed</Button>
			`}
		>
			<Button size='small' className='component-margin'>Default</Button>
			<Button size='default' type='primary' className='component-margin'>Primary</Button>
			<Button size='large' className='component-margin'>Dashed</Button>
		</CodeCard>

		<CodeCard
			title='带icon的button'
			style={{ marginTop: 30 }}
			code={`
				import React, { useState } from 'react';
				const [buttonLoading, setButtonLoading] = useState(false);			 
				<Button className='component-margin' icon='add'>Add Button</Button>
				<Button className='component-margin' loading>Loading Button</Button>
				<Button type='primary' className='component-margin' loading>Loading Button</Button>
				<Button
					type='primary'
					className='component-margin'
					loading={buttonLoading}
					onClick={() => setButtonLoading(!buttonLoading)}
				>loading : ${buttonLoading}</Button>
			`}
		>
			<Button className='component-margin' icon='add'>Add Button</Button>
			<Button className='component-margin' loading>Loading Button</Button>
			<Button type='primary' className='component-margin' loading>Loading Button</Button>
			<Button
				type='primary'
				className='component-margin'
				loading={buttonLoading}
				onClick={() => setButtonLoading(!buttonLoading)}
			>loading : {`${buttonLoading}`}</Button>
		</CodeCard>
	</div>;
};

export default ExampleButton;

import React from 'react';
import { Button } from '../../../../lib';
import './index.scss';

const ExampleButton = () => {
	return <div className='example-button'>
		<div className='example-button_container'>
			<h1>基本用法</h1>
			<div className='example-button_demo-1'>
				<Button className='marginRight10'>Default</Button>
				<Button type='primary' className='marginRight10'>Primary</Button>
				<Button type='dashed' className='marginRight10'>Dashed</Button>
				<Button type='danger' className='marginRight10'>Danger</Button>
				<Button type='link' className='marginRight10'>Link</Button>
				<Button type='link' className='marginRight10'>
					<span>Hello World</span>
				</Button>
			</div>
		</div>

		<div className='example-button_container'>
			<h1>Size 大小</h1>
			<div className='example-button_demo-1'>
				<Button size='small' className='marginRight10'>Default</Button>
				<Button size='default' type='primary' className='marginRight10'>Primary</Button>
				<Button size='large' className='marginRight10'>Dashed</Button>
			</div>
		</div>
	</div>;
};

export default ExampleButton;

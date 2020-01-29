import React from 'react';
import { Icon } from '../../../../lib';
import './index.scss';

const ExampleIcon = () => {
	return <div className='example-icon'>
		<div className='example-icon_container'>
			<h1>基本用法</h1>
			<div className='example-icon_demo-1'>
				<Icon type='close' className='marginRight10' />
				<Icon type='all' className='marginRight10' />
				<Icon type='filter' className='marginRight10' />
				<Icon type='copy' className='marginRight10' fill='red' />
				<Icon type='good' className='marginRight10' fill='green' />
				<Icon type='auto' spin={true} className='marginRight10' />
				<Icon type='add' spin={true} className='marginRight10' />
				<Icon type='loading' spin={true} interval={1200} className='marginRight10' />
				<Icon type='atm' interval={500} className='marginRight10' />
			</div>
		</div>
	</div>;
};

export default ExampleIcon;

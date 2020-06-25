import React from 'react';
import { Icon } from '../../../../lib';
import CodeShow from '../../components/CodeCard';
import './index.scss';

const DemoIcon = () => {
	return <div className='example-icon'>
		<CodeShow
			title='基本用法'
			code={`
				<Icon type='add' className='marginRight10' />
				<Icon type='all' className='marginRight10' />
				<Icon type='atm' className='marginRight10' />
				<Icon type='auto' className='marginRight10' />
				<Icon type='bad' className='marginRight10' />
				<Icon type='close' className='marginRight10' />
				<Icon type='code' className='marginRight10' />
				<Icon type='copy' className='marginRight10' />
				<Icon type='editor' className='marginRight10' />
				<Icon type='exchangerate' className='marginRight10' />
				<Icon type='filter' className='marginRight10' />
				<Icon type='gift' className='marginRight10' />
				<Icon type='good' className='marginRight10' />
				<Icon type='history' className='marginRight10' />
				<Icon type='hot' className='marginRight10' />
				<Icon type='link' className='marginRight10' />
				<Icon type='loading' className='marginRight10' />
				<Icon type='map' className='marginRight10' />
				<Icon type='operation' className='marginRight10' />
				<Icon type='password' className='marginRight10' />
				<Icon type='phone' className='marginRight10' />
				<Icon type='pic' className='marginRight10' />
				<Icon type='play' className='marginRight10' />
				<Icon type='search' className='marginRight10' />
				<Icon type='selected' className='marginRight10' />
			`}
		>
			<Icon type='add' className='marginRight10' />
			<Icon type='all' className='marginRight10' />
			<Icon type='atm' className='marginRight10' />
			<Icon type='auto' className='marginRight10' />
			<Icon type='bad' className='marginRight10' />
			<Icon type='close' className='marginRight10' />
			<Icon type='code' className='marginRight10' />
			<Icon type='copy' className='marginRight10' />
			<Icon type='editor' className='marginRight10' />
			<Icon type='exchangerate' className='marginRight10' />
			<Icon type='filter' className='marginRight10' />
			<Icon type='gift' className='marginRight10' />
			<Icon type='good' className='marginRight10' />
			<Icon type='history' className='marginRight10' />
			<Icon type='hot' className='marginRight10' />
			<Icon type='link' className='marginRight10' />
			<Icon type='loading' className='marginRight10' />
			<Icon type='map' className='marginRight10' />
			<Icon type='operation' className='marginRight10' />
			<Icon type='password' className='marginRight10' />
			<Icon type='phone' className='marginRight10' />
			<Icon type='pic' className='marginRight10' />
			<Icon type='play' className='marginRight10' />
			<Icon type='search' className='marginRight10' />
			<Icon type='selected' className='marginRight10' />
		</CodeShow>

		<CodeShow
			style={{ marginTop: 30 }}
			title='带颜色的图标'
			code={`
				<Icon fill='green' type='add' className='marginRight10' />
				<Icon fill='green' type='all' className='marginRight10' />
				<Icon fill='green' type='atm' className='marginRight10' />
				<Icon fill='green' type='auto' className='marginRight10' />
				<Icon fill='green' type='bad' className='marginRight10' />
				<Icon fill='green' type='close' className='marginRight10' />
				<Icon fill='green' type='code' className='marginRight10' />
				<Icon fill='green' type='copy' className='marginRight10' />
				<Icon fill='green' type='editor' className='marginRight10' />
				<Icon fill='green' type='exchangerate' className='marginRight10' />
				<Icon fill='green' type='filter' className='marginRight10' />
				<Icon fill='green' type='gift' className='marginRight10' />
				<Icon fill='green' type='good' className='marginRight10' />
				<Icon fill='green' type='history' className='marginRight10' />
				<Icon fill='green' type='hot' className='marginRight10' />
				<Icon fill='green' type='link' className='marginRight10' />
				<Icon fill='green' type='loading' className='marginRight10' />
				<Icon fill='green' type='map' className='marginRight10' />
				<Icon fill='green' type='operation' className='marginRight10' />
				<Icon fill='green' type='password' className='marginRight10' />
				<Icon fill='green' type='phone' className='marginRight10' />
				<Icon fill='green' type='pic' className='marginRight10' />
				<Icon fill='green' type='play' className='marginRight10' />
				<Icon fill='green' type='search' className='marginRight10' />
				<Icon fill='green' type='seleted' className='marginRight10' />
			`}
		>
			<Icon fill='green' type='add' className='marginRight10' />
			<Icon fill='green' type='all' className='marginRight10' />
			<Icon fill='green' type='atm' className='marginRight10' />
			<Icon fill='green' type='auto' className='marginRight10' />
			<Icon fill='green' type='bad' className='marginRight10' />
			<Icon fill='green' type='close' className='marginRight10' />
			<Icon fill='green' type='code' className='marginRight10' />
			<Icon fill='green' type='copy' className='marginRight10' />
			<Icon fill='green' type='editor' className='marginRight10' />
			<Icon fill='green' type='exchangerate' className='marginRight10' />
			<Icon fill='green' type='filter' className='marginRight10' />
			<Icon fill='green' type='gift' className='marginRight10' />
			<Icon fill='green' type='good' className='marginRight10' />
			<Icon fill='green' type='history' className='marginRight10' />
			<Icon fill='green' type='hot' className='marginRight10' />
			<Icon fill='green' type='link' className='marginRight10' />
			<Icon fill='green' type='loading' className='marginRight10' />
			<Icon fill='green' type='map' className='marginRight10' />
			<Icon fill='green' type='operation' className='marginRight10' />
			<Icon fill='green' type='password' className='marginRight10' />
			<Icon fill='green' type='phone' className='marginRight10' />
			<Icon fill='green' type='pic' className='marginRight10' />
			<Icon fill='green' type='play' className='marginRight10' />
			<Icon fill='green' type='search' className='marginRight10' />
			<Icon fill='green' type='seleted' className='marginRight10' />
		</CodeShow>

		<CodeShow
			style={{ marginTop: 30 }}
			title='旋转跳转我不停歇'
			code={`
				<Icon type='auto' spin={true} className='marginRight10' />
				<Icon type='add' spin={true} className='marginRight10' />
				<Icon
					type='loading'
					spin={true}
					fill='#1890ff'
					interval={1200}
					className='marginRight10'
				/>
				<Icon type='atm' interval={500} className='marginRight10' />
			`}
		>
			<Icon type='auto' spin={true} className='marginRight10' />
			<Icon type='add' spin={true} className='marginRight10' />
			<Icon
				type='loading'
				spin={true}
				fill='#1890ff'
				interval={600}
				className='marginRight10'
			/>
			<Icon type='atm' interval={500} className='marginRight10' />
		</CodeShow>
	</div>;
};

export default DemoIcon;

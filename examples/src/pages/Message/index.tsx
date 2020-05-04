import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, message } from '../../../../lib';
import './index.scss';

const ExpMessage = () => {
	const info = () => {
		message.info('This is a normal message');
	};

	const success = () => {
		message.success('This is a success message');
	};

	const error = () => {
		message.error('This is an error message');
	};

	const warning = () => {
		message.warning('This is a warning message');
	};
	return <div className='exp-message'>
		<CodeShow
			title='基本用法'
		>
			<Button type="primary" onClick={info}>
				Display normal message
			</Button>
		</CodeShow>

		<CodeShow
			style={{ marginTop: 30 }}
			title='其他类型用法'
		>
			<Button onClick={success}>Success</Button>
			<Button style={{ marginLeft: 20 }} onClick={error}>Error</Button>
			<Button style={{ marginLeft: 20 }} onClick={warning}>Warning</Button>
		</CodeShow>
	</div>;
};

export default ExpMessage;

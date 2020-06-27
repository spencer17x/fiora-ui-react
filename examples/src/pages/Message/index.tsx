import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, message } from '../../../../lib';

const DemoMessage = () => {
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
			code={`
const info = () => {
  message.info('This is a normal message');
};
<Button type="primary" onClick={info}>
	Display normal message
</Button>
			`}
		>
			<Button type="primary" onClick={info}>
				Display normal message
			</Button>
		</CodeShow>

		<CodeShow
			style={{ marginTop: 30 }}
			title='其他类型用法'
			code={`
const success = () => {
	message.success('This is a success message');
};

const error = () => {
	message.error('This is an error message');
};

const warning = () => {
	message.warning('This is a warning message');
};
<Button onClick={success}>Success</Button>
<Button onClick={error}>Error</Button>
<Button onClick={warning}>Warning</Button>
			`}
		>
			<Button onClick={success}>Success</Button>
			<Button onClick={error}>Error</Button>
			<Button onClick={warning}>Warning</Button>
		</CodeShow>

		<CodeShow
			style={{ marginTop: 30 }}
			title='修改延时'
			code={`
<Button onClick={() => {
	message.info('info 1 s', 1);
}}>info 1 s</Button>
			`}
		>
			<Button onClick={() => {
				message.info('info 1 s', 1);
			}}>info 1 s</Button>
		</CodeShow>

		<CodeShow
			style={{ marginTop: 30 }}
			title='message 动画结束时回调'
			code={`
<Button
	onClick={() => {
		message.info('message 动画结束时回调1', 1, () => {
			console.log('message 动画结束时回调1');
		});
	}}
>message 动画结束时回调1</Button>
<Button
	onClick={() => {
		message.info('message 动画结束时回调2', () => {
			console.log('message 动画结束时回调2');
		});
	}}
>message 动画结束时回调2</Button>
			`}
		>
			<Button
				onClick={() => {
					message.info('message 动画结束时回调1', 1, () => {
						console.log('message 动画结束时回调1');
					});
				}}
			>message 动画结束时回调1</Button>
			<Button
				onClick={() => {
					message.info('message 动画结束时回调2', () => {
						console.log('message 动画结束时回调2');
					});
				}}
			>message 动画结束时回调2</Button>
		</CodeShow>
	</div>;
};

export default DemoMessage;

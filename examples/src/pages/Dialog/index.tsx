import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Dialog } from '../../../../lib';

const DemoDialog = () => {
	const [v, setV] = useState(false);
	const onCloseV = () => setV(false);
	const onModal = () => {
		Dialog.alert({
			title: '标题',
			content: '内容内容内容内容'
		}).then(action => console.log(action));
	};
	return <>
		<CodeShow title='基本用法' style={{ marginBottom: '20px' }}>
			<Button onClick={() => setV(true)}>打开dialog</Button>
			<Dialog
				title='Dialog 对话框'
				visible={v}
				onClose={onCloseV}
				buttons={[
					<Button onClick={onCloseV}>取消</Button>,
					<Button type='primary' onClick={onCloseV}>确认</Button>,
				]}
			>
				<span>这是一段信息</span>
			</Dialog>
		</CodeShow>
		<CodeShow title='编码式弹窗'>
			<Button onClick={onModal}>Modal</Button>
		</CodeShow>
	</>;
};

export default DemoDialog;

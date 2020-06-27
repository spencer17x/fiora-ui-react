import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Button, Dialog } from '../../../../lib';

const DemoDialog = () => {
	const [v, setV] = useState(false);
	const onCloseV = () => setV(false);
	const onDialogAlert = () => {
		Dialog.alert({
			title: '标题',
			content: '内容内容内容内容'
		}).then(action => console.log(action));
	};
	const onDialogConfirm = () => {
		Dialog.confirm({
			title: '标题',
			content: '内容内容内容内容'
		}).then(action => console.log(action));
	};
	const onDialogPrompt = () => {
		Dialog.prompt({
			title: '标题',
			content: '内容内容内容内容'
		}).then(value => console.log(value));
	};
	return <>
		<CodeShow
			title='基本用法'
			code={`
const [v, setV] = useState(false);
const onCloseV = () => setV(false);
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
			`}
			style={{ marginBottom: '20px' }}
		>
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
		<CodeShow
			title='编码式弹窗' code={`
const onDialogAlert = () => {
	Dialog.alert({
		title: '标题',
		content: '内容内容内容内容'
	}).then(action => console.log(action));
};
const onDialogConfirm = () => {
	Dialog.confirm({
		title: '标题',
		content: '内容内容内容内容'
	}).then(action => console.log(action));
};
const onDialogPrompt = () => {
	Dialog.prompt({
		title: '标题',
		content: '内容内容内容内容'
	}).then(value => console.log(value));
};
<Button onClick={onDialogAlert}>Dialog Alert</Button>
<Button onClick={onDialogConfirm}>Dialog Confirm</Button>
<Button onClick={onDialogPrompt}>Dialog Prompt</Button>
		`}>
			<Button onClick={onDialogAlert}>Dialog Alert</Button>
			<Button onClick={onDialogConfirm}>Dialog Confirm</Button>
			<Button onClick={onDialogPrompt}>Dialog Prompt</Button>
		</CodeShow>
	</>;
};

export default DemoDialog;

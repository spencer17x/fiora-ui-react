import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Input } from '../../../../lib';

const DemoInput = () => {
	return <>
		<CodeShow
			title='基本用法'
			style={{ marginBottom: 20 }}
			code={`
<Input placeholder="Basic usage" />
			`}
		>
			<Input placeholder="Basic usage" />
		</CodeShow>

		<CodeShow
			title='三种大小'
			code={`
<>
	<Input
		size="large"
		placeholder="large size"
	/>
	<br />
	<br />
	<Input
		placeholder="default size"
	/>
	<br />
	<br />
	<Input
		size="small"
		placeholder="small size"
	/>
</>
			`}
		>
			<>
				<Input
					size="large"
					placeholder="large size"
				/>
				<br />
				<br />
				<Input
					placeholder="default size"
				/>
				<br />
				<br />
				<Input
					size="small"
					placeholder="small size"
				/>
			</>
		</CodeShow>
	</>;
};

export default DemoInput;

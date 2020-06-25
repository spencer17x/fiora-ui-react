import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import { Affix, Button } from '../../../../lib';
import './index.scss';

const DemoAffix = () => {
	const [top1, setTop1] = useState(100);
	return <div className='exp-affix'>
		<CodeShow
			title='基本用法'
			code={`
				<>
					<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<Affix offsetTop={top1}>
		\t\t\t\t<Button type="primary" onClick={() => setTop1(top1 + 10)}>
		\t\t\t\t\tAffix top
		\t\t\t\t</Button>
		\t\t\t</Affix>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
		\t\t\t<p>hello world hello world hello world hello world hello world</p>
				</>
			`}
		>
			<p>hello world hello world hello world hello world hello world</p>
			<Affix offsetTop={top1}>
				<Button type="primary" onClick={() => setTop1(top1 + 10)}>
					Affix top
				</Button>
			</Affix>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
			<p>hello world hello world hello world hello world hello world</p>
		</CodeShow>
	</div>;
};

export default DemoAffix;

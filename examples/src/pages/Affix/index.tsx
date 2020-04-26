import React, { useState } from 'react';
import CodeShow from '../../components/CodeCard';
import './index.scss';
import { Affix, Button } from '../../../../lib';

const ExpAffix = () => {
	const [top1, setTop1] = useState(100);
	return <div className='exp-affix'>
		<CodeShow
			title='基本用法'
			style={{ height: 1500 }}
		>
			<Affix offsetTop={top1}>
				<Button type="primary" onClick={() => setTop1(top1 + 10)}>
					Affix top
				</Button>
			</Affix>
		</CodeShow>
	</div>;
};

export default ExpAffix;

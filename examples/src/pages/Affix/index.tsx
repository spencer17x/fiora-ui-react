import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Affix, Button } from '../../../../lib/components';
import './index.scss';

const ExpAffix = () => {
	return <div className='exp-affix'>
		<CodeShow className='scroll-height'>
			<Affix offsetTop={20}>
				<Button type="primary" onClick={() => console.log('button click')}>
					Affix top
				</Button>
			</Affix>
		</CodeShow>
	</div>;
};

export default ExpAffix;

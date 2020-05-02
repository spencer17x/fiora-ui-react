import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Steps, StepItem } from '../../../../lib/components';

const ExpSteps = () => {
	return <div>
		<CodeShow
			title='基本用法'
		>
			<Steps current={1}>
				<StepItem title="Finished" description="This is a description." />
				<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
				<StepItem title="Waiting" description="This is a description." />
			</Steps>
		</CodeShow>
	</div>;
};

export default ExpSteps;

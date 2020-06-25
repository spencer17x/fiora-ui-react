import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Steps, StepItem } from '../../../../lib/components';

const DemoSteps = () => {
	return <div>
		<CodeShow
			title='基本用法'
			code={`
				<Steps current={1}>
	\t\t\t\t<StepItem title="Finished" description="This is a description." />
	\t\t\t\t<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
	\t\t\t\t<StepItem title="Waiting" description="This is a description." />
	\t\t\t</Steps>
	
	\t\t\t<Steps direction="vertical" current={1} style={{ marginTop: 20 }}>
	\t\t\t\t<StepItem title="Finished" description="This is a description." />
	\t\t\t\t<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
	\t\t\t\t<StepItem title="Waiting" description="This is a description." />
	\t\t\t</Steps>
			`}
		>
			<Steps current={1}>
				<StepItem title="Finished" description="This is a description." />
				<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
				<StepItem title="Waiting" description="This is a description." />
			</Steps>

			<Steps direction="vertical" current={1} style={{ marginTop: 20 }}>
				<StepItem title="Finished" description="This is a description." />
				<StepItem title="In Progress" subTitle="Left 00:00:08" description="This is a description." />
				<StepItem title="Waiting" description="This is a description." />
			</Steps>
		</CodeShow>
	</div>;
};

export default DemoSteps;

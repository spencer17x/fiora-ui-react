import React, { useState } from 'react';
import { Button, Icon } from '../../../../lib';
import CodeCard from '../../components/CodeCard';

const DemoButton = () => {
	const [buttonLoading, setButtonLoading] = useState(false);

	return (
		<div className="example-button">
			<CodeCard
				title="基本用法"
				code={`
			<Button className='component-margin'>Default</Button>
\t\t\t<Button type='primary' className='component-margin'>Primary</Button>
\t\t\t<Button type='primary' className='component-margin' disabled>Primary Disbaled</Button>
\t\t\t<Button type='dashed' className='component-margin'>Dashed</Button>
\t\t\t<Button type='danger' className='component-margin'>Danger</Button>
\t\t\t<Button type='link' className='component-margin'>Link</Button>
\t\t\t<Button type='link' className='component-margin'>
\t\t\t\t<span>Hello World</span>
\t\t\t</Button>
			`}
			>
				<Button>Default</Button>
				<Button type="primary">
					Primary
				</Button>
				<Button type="primary" disabled>
					Primary Disbaled
				</Button>
				<Button type="dashed">
					Dashed
				</Button>
				<Button type="danger">
					Danger
				</Button>
				<Button type="link">
					Link
				</Button>
				<Button type="link">
					<span>Hello World</span>
				</Button>
			</CodeCard>

			<CodeCard
				title="按钮尺寸"
				style={{ marginTop: 30 }}
				code={`
			<Button size='small' className='component-margin'>Default</Button>
\t\t\t<Button size='default' type='primary' className='component-margin'>Primary</Button>
\t\t\t<Button size='large' className='component-margin'>Dashed</Button>
			`}
			>
				<Button size="small">
					Default
				</Button>
				<Button size="default" type="primary">
					Primary
				</Button>
				<Button size="large">
					Dashed
				</Button>
			</CodeCard>

			<CodeCard
				title="带图标的按钮"
				style={{ marginTop: 30 }}
				code={`
			import React, { useState } from 'react';
			const [buttonLoading, setButtonLoading] = useState(false);			 
			<Button className='component-margin' icon='add'>Add Button</Button>
\t\t\t<Button className='component-margin' loading>Loading Button</Button>
\t\t\t<Button type='primary' className='component-margin' loading>Loading Button</Button>
\t\t\t<Button
\t\t\t\ttype='primary'
\t\t\t\tclassName='component-margin'
\t\t\t\tloading={buttonLoading}
\t\t\t\tonClick={() => setButtonLoading(!buttonLoading)}
\t\t\t>loading : {\`${buttonLoading}\`}</Button>
\t\t\t<Button className='component-margin' shape='circle'>A</Button>
\t\t\t<Button className='component-margin' icon='search' shape='circle' />
\t\t\t<Button type='primary' className='component-margin' shape='circle'>A</Button>
\t\t\t<Button type='primary' className='component-margin' icon='search' shape='circle'>ABC</Button>
\t\t\t<Button shape='circle' type='dashed' className='component-margin'>D</Button>
\t\t\t<Button shape='circle' type='primary' className='component-margin' loading></Button>
\t\t\t<Button shape='circle' type='danger' className='component-margin' loading></Button>
			`}
			>
				<Button icon="add">
					Add Button
				</Button>
				<Button loading>
					Loading Button
				</Button>
				<Button type="primary" loading>
					Loading Button
				</Button>
				<Button
					type="primary"
					loading={buttonLoading}
					onClick={() => setButtonLoading(!buttonLoading)}
				>
					loading:{`${buttonLoading}`}
				</Button>
				<Button shape="circle">
					A
				</Button>
				<Button icon="search" shape="circle" />
				<Button type="primary" shape="circle">
					A
				</Button>
				<Button
					type="primary"
					icon="search"
					shape="circle"
				>
					ABC
				</Button>
				<Button shape="circle" type="dashed">
					D
				</Button>
				<Button
					shape="circle"
					type="primary"
					loading
				></Button>
				<Button
					shape="circle"
					type="danger"
					loading
				></Button>
			</CodeCard>

			<CodeCard
				title="按钮组合"
				style={{ marginTop: 30 }}
				code={`
			<Button.Group className='component-margin'>
\t\t\t\t<Button>Cancel</Button>
\t\t\t\t<Button>OK</Button>
\t\t\t\t<Button>OK</Button>
\t\t\t\t<Button>OK</Button>
\t\t\t</Button.Group>

\t\t\t<Button.Group className='component-margin'>
\t\t\t\t<Button disabled>L</Button>
\t\t\t\t<Button disabled>M</Button>
\t\t\t\t<Button disabled>R</Button>
\t\t\t\t<Button disabled>R</Button>
\t\t\t\t<Button disabled>R</Button>
\t\t\t\t<Button disabled>R</Button>
\t\t\t\t<Button disabled>R</Button>
\t\t\t</Button.Group>

\t\t\t<Button.Group className='component-margin'>
\t\t\t\t<Button>L</Button>
\t\t\t\t<Button>M</Button>
\t\t\t\t<Button>R</Button>
\t\t\t</Button.Group>

\t\t\t<Button.Group className='component-margin'>
\t\t\t\t<Button type="primary">
\t\t\t\t\t<Icon type="add" fill='#fff'/>
\t\t\t\t\tGo back
\t\t\t\t</Button>
\t\t\t\t<Button type="primary">
\t\t\t\t\tGo forward
\t\t\t\t\t<Icon type="add" fill='#fff'/>
\t\t\t\t</Button>
\t\t\t</Button.Group>

\t\t\t<Button.Group className='component-margin'>
\t\t\t\t<Button type="primary" icon='add'>
\t\t\t\t\tGo back
\t\t\t\t</Button>
\t\t\t\t<Button type="primary" icon='add'>
\t\t\t\t\tGo forward
\t\t\t\t</Button>
\t\t\t</Button.Group>
			`}
			>
				<Button.Group>
					<Button>Cancel</Button>
					<Button>OK</Button>
					<Button>OK</Button>
					<Button>OK</Button>
				</Button.Group>

				<Button.Group>
					<Button disabled>L</Button>
					<Button disabled>M</Button>
					<Button disabled>R</Button>
					<Button disabled>R</Button>
					<Button disabled>R</Button>
					<Button disabled>R</Button>
					<Button disabled>R</Button>
				</Button.Group>

				<Button.Group>
					<Button>L</Button>
					<Button>M</Button>
					<Button>R</Button>
				</Button.Group>

				<Button.Group>
					<Button type="primary">
						<Icon type="add" fill="#fff" />
						Go back
					</Button>
					<Button type="primary">
						Go forward
						<Icon type="add" fill="#fff" />
					</Button>
				</Button.Group>

				<Button.Group>
					<Button type="primary" icon="add">
						Go back
					</Button>
					<Button type="primary" icon="add">
						Go forward
					</Button>
				</Button.Group>
			</CodeCard>
		</div>
	);
};

export default DemoButton;

import React from 'react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, Icon } from '../../../../lib';
import CodeShow from '../../components/CodeCard';
import './index.scss';

const DemoBreadcrumb = () => {
	return <div className='exp-breadcrumb'>
		<CodeShow
			title='基本用法'
			code={`
				<Breadcrumb>
	\t\t\t\t<BreadcrumbItem>Home</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>
	\t\t\t\t\t<a href="">Application Center</a>
	\t\t\t\t</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>
	\t\t\t\t\t<a href="">Application List</a>
	\t\t\t\t</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>An Application</BreadcrumbItem>
	\t\t\t</Breadcrumb>
			`}
		>
			<Breadcrumb>
				<BreadcrumbItem>Home</BreadcrumbItem>
				<BreadcrumbItem>
					<a href="">Application Center</a>
				</BreadcrumbItem>
				<BreadcrumbItem>
					<a href="">Application List</a>
				</BreadcrumbItem>
				<BreadcrumbItem>An Application</BreadcrumbItem>
			</Breadcrumb>
		</CodeShow>

		<CodeShow
			title='带有图标的'
			style={{marginTop: 30}}
			code={`
				<Breadcrumb>
	\t\t\t\t<BreadcrumbItem>
	\t\t\t\t\t<Icon type='filter'/>
	\t\t\t\t</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem href=''>
	\t\t\t\t\t<Icon type='filter'/>
	\t\t\t\t\t<span>Application List</span>
	\t\t\t\t</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>Application</BreadcrumbItem>
	\t\t\t</Breadcrumb>
			`}
		>
			<Breadcrumb>
				<BreadcrumbItem>
					<Icon type='filter'/>
				</BreadcrumbItem>
				<BreadcrumbItem href=''>
					<Icon type='filter'/>
					<span>Application List</span>
				</BreadcrumbItem>
				<BreadcrumbItem>Application</BreadcrumbItem>
			</Breadcrumb>
		</CodeShow>

		<CodeShow
			title='分隔符'
			style={{marginTop: 30}}
			code={`
				<Breadcrumb separator=">">
	\t\t\t\t<BreadcrumbItem>Home</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>Application Center</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>Application List</BreadcrumbItem>
	\t\t\t\t<BreadcrumbItem>An Application</BreadcrumbItem>
	\t\t\t</Breadcrumb>
			`}
		>
			<Breadcrumb separator=">">
				<BreadcrumbItem>Home</BreadcrumbItem>
				<BreadcrumbItem>Application Center</BreadcrumbItem>
				<BreadcrumbItem>Application List</BreadcrumbItem>
				<BreadcrumbItem>An Application</BreadcrumbItem>
			</Breadcrumb>
		</CodeShow>

		<CodeShow
			title='自定义分隔符'
			style={{marginTop: 30}}
			code={`
				<Breadcrumb>
	\t\t\t\t<BreadcrumbItem>Location</BreadcrumbItem>
	\t\t\t\t<BreadcrumbSeparator>:</BreadcrumbSeparator>
	\t\t\t\t<BreadcrumbItem href='/'>Application Center</BreadcrumbItem>
	\t\t\t\t<BreadcrumbSeparator />
	\t\t\t\t<BreadcrumbItem href="">Application List</BreadcrumbItem>
	\t\t\t\t<BreadcrumbSeparator />
	\t\t\t\t<BreadcrumbItem>An Application</BreadcrumbItem>
	\t\t\t</Breadcrumb>
			`}
		>
			<Breadcrumb>
				<BreadcrumbItem>Location</BreadcrumbItem>
				<BreadcrumbSeparator>:</BreadcrumbSeparator>
				<BreadcrumbItem href='/'>Application Center</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem href="">Application List</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>An Application</BreadcrumbItem>
			</Breadcrumb>
		</CodeShow>
	</div>;
};

export default DemoBreadcrumb;

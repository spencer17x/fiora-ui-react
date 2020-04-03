import React from 'react';
import { Breadcrumb } from '../../../../lib';
import CodeShow from '../../components/CodeCard';
import './index.scss';

const ExpBreadcrumb = () => {
	return <div className='exp-breadcrumb'>
		<CodeShow
			title='基本用法'
		>
			<Breadcrumb />
		</CodeShow>
	</div>;
};

export default ExpBreadcrumb;

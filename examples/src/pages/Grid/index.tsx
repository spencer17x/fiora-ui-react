import React, { ReactNode } from 'react';
import CodeShow from '../../components/CodeCard';
import { Row, Col } from '../../../../lib';
import { useWindowSize } from '../../../../lib/hooks';
import './index.scss';

const DemoBox = (
	{ children, value }: { children: ReactNode; value: number; }
) => <div style={{
	height: value,
	backgroundColor: '#0092ff',
	color: '#fff',
	textAlign: 'center',
	lineHeight: `${value}px`
}}>{children}</div>;

export default function DemoGrid() {
	const size = useWindowSize();
	const style: React.CSSProperties = {
		backgroundColor: '#0092ff',
		textAlign: 'center',
		height: '60px',
		lineHeight: '60px',
		color: '#fff'
	};
	return (
		<div className='example-grid'>
			<CodeShow
				style={{ marginBottom: 30 }}
				title='基本用法'
				code={`
          <>
            <Row style={{ marginBottom: 20 }}>
              <Col className='example-grid-col light' span={24}>
                col
              </Col>
            </Row>
            <Row style={{ marginBottom: 20 }}>
              <Col className='example-grid-col light' span={12}>
                col-12
              </Col>
              <Col className='example-grid-col dark' span={12}>
                col-12
              </Col>
            </Row>
            <Row style={{ marginBottom: 20 }}>
              <Col className='example-grid-col light' span={8}>
                col-8
              </Col>
              <Col className='example-grid-col dark' span={8}>
                col-8
              </Col>
              <Col className='example-grid-col light' span={8}>
                col-8
              </Col>
            </Row>
            <Row style={{ marginBottom: 20 }}>
              <Col className='example-grid-col light' span={6}>
                col-6
              </Col>
              <Col className='example-grid-col dark' span={6}>
                col-6
              </Col>
              <Col className='example-grid-col light' span={6}>
                col-6
              </Col>
              <Col className='example-grid-col dark' span={6}>
                col-6
              </Col>
            </Row>
          </>
        `}
			>
				<>
					<Row style={{ marginBottom: 20 }}>
						<Col className='example-grid-col light' span={24}>
							col
						</Col>
					</Row>
					<Row style={{ marginBottom: 20 }}>
						<Col className='example-grid-col light' span={12}>
							col-12
						</Col>
						<Col className='example-grid-col dark' span={12}>
							col-12
						</Col>
					</Row>
					<Row style={{ marginBottom: 20 }}>
						<Col className='example-grid-col light' span={8}>
							col-8
						</Col>
						<Col className='example-grid-col dark' span={8}>
							col-8
						</Col>
						<Col className='example-grid-col light' span={8}>
							col-8
						</Col>
					</Row>
					<Row style={{ marginBottom: 20 }}>
						<Col className='example-grid-col light' span={6}>
							col-6
						</Col>
						<Col className='example-grid-col dark' span={6}>
							col-6
						</Col>
						<Col className='example-grid-col light' span={6}>
							col-6
						</Col>
						<Col className='example-grid-col dark' span={6}>
							col-6
						</Col>
					</Row>
				</>
			</CodeShow>
			<CodeShow
				title='间隔'
				style={{ marginBottom: 30 }}
				code={`
          <>
            <h2>gutter</h2>
            <Row gutter={16}>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
  
            <h2>Responsive, width: {size.width}, height: {size.height}</h2>
            <Row
              style={{ marginTop: 20 }}
              gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}
            >
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
  
            <h2>Vertical</h2>
            <Row gutter={[16, { xs: 4, sm: 8, md: 16, lg: 24 }]}>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
              <Col className='gutter-row' span={6}>
                <div style={style}>col-6</div>
              </Col>
            </Row>
          </>
        `}
			>
				<>
					<h2>gutter</h2>
					<Row gutter={16}>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
					</Row>

					<h2>Responsive, width: {size.width}, height: {size.height}</h2>
					<Row
						style={{ marginTop: 20 }}
						gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}
					>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
					</Row>

					<h2>Vertical</h2>
					<Row gutter={[16, { xs: 4, sm: 8, md: 16, lg: 24 }]}>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
						<Col className='gutter-row' span={6}>
							<div style={style}>col-6</div>
						</Col>
					</Row>
				</>
			</CodeShow>
			<CodeShow
				title='排版'
				style={{ marginBottom: 30 }}
				code={`
          <>
            <Row justify='start'
                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
            </Row>
            <Row justify='center'
                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
            </Row>
            <Row justify='end'
                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
            </Row>
            <Row justify='space-between'
                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
            </Row>
            <Row justify='space-around'
                 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
              <Col className='example-grid-col light' span={4}>col-4</Col>
              <Col className='example-grid-col dark' span={4}>col-4</Col>
            </Row>
          </>
        `}
			>
				<>
					<Row justify='start'
							 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
					</Row>
					<Row justify='center'
							 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
					</Row>
					<Row justify='end'
							 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
					</Row>
					<Row justify='space-between'
							 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
					</Row>
					<Row justify='space-around'
							 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20, padding: '16px 0' }}>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
						<Col className='example-grid-col light' span={4}>col-4</Col>
						<Col className='example-grid-col dark' span={4}>col-4</Col>
					</Row>
				</>
			</CodeShow>
			<CodeShow
				title='子元素垂直对齐'
				style={{ marginBottom: 30 }}
				code={`
          <>
            <Row justify='center' align='top' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>
              <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
              </Col>
            </Row>
            <Row justify="space-around" align='middle' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>
              <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
              </Col>
            </Row>
            <Row justify="space-between" align='bottom' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)' }}>
              <Col span={4}>
                <DemoBox value={100}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={50}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={120}>col-4</DemoBox>
              </Col>
              <Col span={4}>
                <DemoBox value={80}>col-4</DemoBox>
              </Col>
            </Row>
          </>
        `}
			>
				<>
					<Row justify='center' align='top' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>
						<Col span={4}>
							<DemoBox value={100}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={50}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={120}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={80}>col-4</DemoBox>
						</Col>
					</Row>
					<Row justify="space-around" align='middle'
							 style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)', marginBottom: 20 }}>
						<Col span={4}>
							<DemoBox value={100}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={50}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={120}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={80}>col-4</DemoBox>
						</Col>
					</Row>
					<Row justify="space-between" align='bottom' style={{ backgroundColor: 'rgba(128, 128, 128, 0.08)' }}>
						<Col span={4}>
							<DemoBox value={100}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={50}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={120}>col-4</DemoBox>
						</Col>
						<Col span={4}>
							<DemoBox value={80}>col-4</DemoBox>
						</Col>
					</Row>
				</>
			</CodeShow>
			<CodeShow
				title='通过 Order 来改变元素的排序'
				style={{ marginBottom: 30 }}
				code={`
          <Row>
            <Col style={{
              ...style,
              backgroundColor: '#0092ffbf'
            }} span={6} order={4}>
              1 col-order-4
            </Col>
            <Col style={style} span={6} order={3}>
              2 col-order-3
            </Col>
            <Col style={{
              ...style,
              backgroundColor: '#0092ffbf'
            }} span={6} order={2}>
              3 col-order-2
            </Col>
            <Col style={style} span={6} order={1}>
              4 col-order-1
            </Col>
          </Row>
        `}
			>
				<Row>
					<Col style={{
						...style,
						backgroundColor: '#0092ffbf'
					}} span={6} order={4}>
						1 col-order-4
					</Col>
					<Col style={style} span={6} order={3}>
						2 col-order-3
					</Col>
					<Col style={{
						...style,
						backgroundColor: '#0092ffbf'
					}} span={6} order={2}>
						3 col-order-2
					</Col>
					<Col style={style} span={6} order={1}>
						4 col-order-1
					</Col>
				</Row>
			</CodeShow>

			<CodeShow
				title='宽度响应式'
				code={`
          <Row>
            <Col style={{
              ...style,
              backgroundColor: '#0092ffbf'
            }} xs={2} sm={4} md={6} lg={10}>
              Col
            </Col>
            <Col style={style} xs={20} sm={16} md={12} lg={4}>
              Col
            </Col>
            <Col style={{
              ...style,
              backgroundColor: '#0092ffbf'
            }} xs={2} sm={4} md={6} lg={10}>
              Col
            </Col>
          </Row>
        `}
			>
				<Row>
					<Col style={{
						...style,
						backgroundColor: '#0092ffbf'
					}} xs={2} sm={4} md={6} lg={10}>
						Col
					</Col>
					<Col style={style} xs={20} sm={16} md={12} lg={4}>
						Col
					</Col>
					<Col style={{
						...style,
						backgroundColor: '#0092ffbf'
					}} xs={2} sm={4} md={6} lg={10}>
						Col
					</Col>
				</Row>
			</CodeShow>
		</div>
	);
}

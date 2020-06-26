import React from 'react';
import CodeShow from '../../components/CodeCard';
import { Layout, Header, Content, Aside, Footer } from '../../../../lib';
import './index.scss';

const DemoLayout = () => {
	return (
		<div className="example-layout">
			<CodeShow
				title="示例1"
				code={`
        <Layout>
          <Header
            className='text-center-center light'
            style={{ height: '60px' }}
          >Header</Header>
          <Content
            className='text-center-center dark'
            style={{ height: '120px' }}
          >Content</Content>
          <Footer
            className='text-center-center light'
            style={{ height: '60px' }}
          >Footer</Footer>
        </Layout>
      `}
			>
				<Layout className="fill-width">
					<Header
						className="text-center-center light"
						style={{ height: '60px' }}
					>
						Header
					</Header>
					<Content
						className="text-center-center dark"
						style={{ height: '120px' }}
					>
						Content
					</Content>
					<Footer
						className="text-center-center light"
						style={{ height: '60px' }}
					>
						Footer
					</Footer>
				</Layout>
			</CodeShow>

			<CodeShow
				title="示例2"
				code={`
        <Layout>
          <Header
            style={{ height: '60px' }}
            className='text-center-center light'
          >Header</Header>
          <Layout style={{ height: '120px' }}>
            <Aside
              className='text-center-center light-dark'
            >Aside</Aside>
            <Content
              className='text-center-center dark'
            >Content</Content>
          </Layout>
          <Footer
            className='text-center-center light'
            style={{ height: '60px' }}
          >Footer</Footer>
        </Layout>
      `}
				style={{ marginTop: 30 }}
			>
				<Layout className="fill-width">
					<Header
						style={{ height: '60px' }}
						className="text-center-center light"
					>
						Header
					</Header>
					<Layout style={{ height: '120px' }}>
						<Aside className="text-center-center light-dark">Aside</Aside>
						<Content className="text-center-center dark">Content</Content>
					</Layout>
					<Footer
						className="text-center-center light"
						style={{ height: '60px' }}
					>
						Footer
					</Footer>
				</Layout>
			</CodeShow>

			<CodeShow
				title="示例3"
				code={`
        <Layout>
          <Header
            style={{ height: '60px' }}
            className='text-center-center light'
          >Header</Header>
          <Layout style={{ height: '120px' }}>
            <Content
              className='text-center-center dark'
            >Content</Content>
            <Aside
              className='text-center-center light-dark'
            >Aside</Aside>
          </Layout>
          <Footer
            style={{ height: '60px' }}
            className='text-center-center light'
          >Footer</Footer>
        </Layout>
      `}
				style={{ marginTop: 30 }}
			>
				<Layout className="fill-width">
					<Header
						style={{ height: '60px' }}
						className="text-center-center light"
					>
						Header
					</Header>
					<Layout style={{ height: '120px' }}>
						<Content className="text-center-center dark">Content</Content>
						<Aside className="text-center-center light-dark">Aside</Aside>
					</Layout>
					<Footer
						style={{ height: '60px' }}
						className="text-center-center light"
					>
						Footer
					</Footer>
				</Layout>
			</CodeShow>

			<CodeShow
				title="示例4"
				code={`
        <Layout style={{ height: '240px' }}>
          <Aside className='text-center-center light-dark'>Aside</Aside>
          <Layout>
            <Header style={{ height: '60px' }} className='text-center-center light'>Header</Header>
            <Content style={{ height: '120px' }} className='text-center-center dark'>Content</Content>
            <Footer style={{ height: '60px' }} className='text-center-center light'>Footer</Footer>
          </Layout>
        </Layout>
      `}
				style={{ marginTop: 30 }}
			>
				<Layout style={{ height: '240px' }} className="fill-width">
					<Aside className="text-center-center light-dark">Aside</Aside>
					<Layout>
						<Header
							style={{ height: '60px' }}
							className="text-center-center light"
						>
							Header
						</Header>
						<Content
							style={{ height: '120px' }}
							className="text-center-center dark"
						>
							Content
						</Content>
						<Footer
							style={{ height: '60px' }}
							className="text-center-center light"
						>
							Footer
						</Footer>
					</Layout>
				</Layout>
			</CodeShow>
		</div>
	);
};

export default DemoLayout;

import React, { useEffect } from "react";
import CodeShow from "../../components/CodeCard";
import { Row, Col } from "../../../../lib";
import "./index.scss";
import { useWindowSize } from "../../../../lib/hoooks";

export default function ExampleGrid() {
  const size = useWindowSize();
  const style: React.CSSProperties = {
    backgroundColor: "#0092ff",
    textAlign: "center",
    height: "60px",
    lineHeight: "60px",
    color: "#fff"
  };
  return (
    <div className='example-grid'>
      <CodeShow title='基本用法'>
        <Row>
          <Col className='example-grid-col light' span={24}>
            col
          </Col>
        </Row>
        <Row>
          <Col className='example-grid-col light' span={12}>
            col-12
          </Col>
          <Col className='example-grid-col dark' span={12}>
            col-12
          </Col>
        </Row>
        <Row>
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
        <Row>
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
      </CodeShow>
      <CodeShow title='间隔' style={{ marginTop: 30 }}>
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
        <Row gutter={{ xs: 4, sm: 8, md: 16, lg: 24 }}>
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
      </CodeShow>
    </div>
  );
}

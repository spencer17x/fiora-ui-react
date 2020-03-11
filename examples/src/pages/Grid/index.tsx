import React from "react";
import CodeShow from "../../components/CodeCard";
import { Row, Col } from "../../../../lib";
import "./index.scss";

export default function ExampleGrid() {
  return (
    <div className="example-grid">
      <CodeShow
        title="基本用法"
        code={`
          <>
            <Row>
              <Col className='example-grid-col light' span={24}>col</Col>
            </Row>
            <Row>
              <Col className='example-grid-col light' span={12}>col-12</Col>
              <Col className='example-grid-col dark' span={12}>col-12</Col>
            </Row>
            <Row>
              <Col className='example-grid-col light' span={8}>col-8</Col>
              <Col className='example-grid-col dark' span={8}>col-8</Col>
              <Col className='example-grid-col light' span={8}>col-8</Col>
            </Row>
            <Row>
              <Col className='example-grid-col light' span={6}>col-6</Col>
              <Col className='example-grid-col dark' span={6}>col-6</Col>
              <Col className='example-grid-col light' span={6}>col-6</Col>
              <Col className='example-grid-col dark' span={6}>col-6</Col>
            </Row>
          </>
        `}
      >
        <>
          <Row>
            <Col className="example-grid-col light" span={24}>
              col
            </Col>
          </Row>
          <Row>
            <Col className="example-grid-col light" span={12}>
              col-12
            </Col>
            <Col className="example-grid-col dark" span={12}>
              col-12
            </Col>
          </Row>
          <Row>
            <Col className="example-grid-col light" span={8}>
              col-8
            </Col>
            <Col className="example-grid-col dark" span={8}>
              col-8
            </Col>
            <Col className="example-grid-col light" span={8}>
              col-8
            </Col>
          </Row>
          <Row>
            <Col className="example-grid-col light" span={6}>
              col-6
            </Col>
            <Col className="example-grid-col dark" span={6}>
              col-6
            </Col>
            <Col className="example-grid-col light" span={6}>
              col-6
            </Col>
            <Col className="example-grid-col dark" span={6}>
              col-6
            </Col>
          </Row>
        </>
      </CodeShow>
    </div>
  );
}

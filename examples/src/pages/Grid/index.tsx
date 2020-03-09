import React from "react";
import CodeShow from "../../components/CodeCard";
import { Row, Col } from "../../../../lib";

export default function ExampleGrid() {
  return (
    <div className="example-grid">
      <CodeShow title="基本用法">
        <>
          <Row>
            <Col span={24}>col</Col>
          </Row>
          <Row>
            <Col span={12}>col-12</Col>
            <Col span={12}>col-12</Col>
          </Row>
          <Row>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
        </>
      </CodeShow>
    </div>
  );
}

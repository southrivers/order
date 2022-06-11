import {React, useState} from "react";
import "antd/dist/antd.min.css";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";

const UserForm = () => {

  const [userName, setUserName] = useState("")
  const [passwd, setPasswd] = useState("")
  const [desc, setDesc] = useState("")
  function changeUserName(value) {
    console.log(value)
  }

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col span={19} offset={1}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入用户名",
              },
            ]}
          >
            <Input autoComplete="off"/>
          </Form.Item>

          <Form.Item
            label="年龄"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入年龄",
              },
            ]}
          >
            <Input autoComplete="off" />
          </Form.Item>
          <Form.Item
            label="描述"
            name="desc"
            rules={[
              {
                // required: true,
                message: "描述信息",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default UserForm;

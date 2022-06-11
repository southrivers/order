import "antd/dist/antd.min.css";
import { Form, Button, Divider } from "antd";
import { Col, Row } from "antd";
import { Modal } from "antd";
import React, { useState } from "react";
import UserForm from "./UserForm";
import { useDispatch, useSelector } from "react-redux";
import {selectUsers, addUser, modifyUser, deleteUser} from "../userSlice";
import { Input } from "antd";

// 点击新增用户，弹出弹框
const UserHeader = () => {

    const users = useSelector(selectUsers)
    const dispatch = useDispatch()
    // 使用这种方式可以获取表单输入
    const [form] = Form.useForm();
    // const dispatch = useDispatch()
  // 不涉及到组件之间的交互的状态应该可以考虑使用useState卸载
  const [isModalVisible, setIsModalVisible] = useState(false);


  const addUserChange = () => {

    setIsModalVisible(true);
    // 获取输入的值并更新到users中
  };

  const handleOk = () => {
    let user = form.getFieldsValue(['username', 'password', 'desc']);
    // 新增用户
    dispatch(addUser([{
        address: `${user.desc}`,
        age: `${user.password}`,
        key: `${user.desc}`,
        name: `${user.username}`
    }]))
    // 表单数据重置
    form.resetFields(['username', 'password', 'desc'])
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Row justify="end">
        <Col span={3} offset={20}>
          <Button type="primary" onClick={addUserChange}>
            新增用户
          </Button>
          <Modal
            title="请输入用户信息"
            visible={isModalVisible}
            onOk={handleOk}
            onCancel={handleCancel}
            maskClosable={false}
            destroyOnClose={false}
          >
            <Row>
      <Col span={19} offset={1}>
        <Form form={form}
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
            <Input />
          </Form.Item>

          <Form.Item
            label="工作岗位"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入岗位",
              },
            ]}
          >
            <Input />
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
          </Modal>
        </Col>
      </Row>
      <Divider />
    </div>
  );
};

export default UserHeader;

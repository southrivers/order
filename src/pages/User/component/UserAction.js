import "antd/dist/antd.min.css";
import { Button, Col, Row } from "antd";
import { selectUsers, deleteUser } from "../userSlice";
import { useDispatch, useSelector } from "react-redux";

const UserAction = ({info}) => {
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  function delUser() {
    // console.log("dispatch del user")
    dispatch(deleteUser(info))
    // console.log(info)
  }
  return (
    <Row>
      <Col span={4}>
        <Button type="primary" ghost>
          修改
        </Button>
      </Col>
      <Col span={4} offset={8}>
        <Button type="primary" danger ghost onClick={delUser}>
          删除
        </Button>
      </Col>
    </Row>
  );
};

export default UserAction;

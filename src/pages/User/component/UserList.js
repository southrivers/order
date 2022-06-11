import "antd/dist/antd.css";
import { Col, Row, Table } from "antd";
import UserAction from "./UserAction";
import { useDispatch, useSelector } from "react-redux";
import { selectUsers } from "../userSlice";
import { useCallback, useEffect, useRef, useState } from "react";

import { addUser, modifyUser, deleteUser} from "../userSlice";

const columns = [
  {
    title: "姓名",
    width: 20,
    dataIndex: "name",
    key: "name",
    fixed: "left",
  },
  {
    title: "岗位描述",
    width: 20,
    dataIndex: "age",
    key: "age",
    fixed: "left",
  },
  {
    title: "描述信息",
    dataIndex: "address",
    key: "1",
    width: 150,
  },
  {
    title: "操作",
    key: "operation",
    fixed: "right",
    width: 30,
    render: ({name}) => <UserAction info={name}/>,
  },
];
const data = [];

// for (let i = 0; i < 5; i++) {
//   data.push({
//     key: i,
//     name: `Edrward ${i}`,
//     age: 320,
//     address: `London Park no. ${i}`,
//   });
// }

const UserList = () => {
  // 初始化列表信息，按道理来说这里应该是从后台获取数据并更新到store中，并且不可以直接操作store中的数据，只能通过dispatch操作
  // 使用users取刷新表单信息
  const users = useSelector(selectUsers)
  const dispatch = useDispatch()
  // useEffect
  const [us, setUs] = useState(users)

  const init = useRef(true)
  useEffect(() => {
    // FIXME这里默认会执行两次，原因尚不明确
    // fecthData
    // console.log(init)
    if (init.current) {
      let d = data;
      dispatch(addUser(d))
      init.current = false;
      // 通过这种方式可以讲数据的变化反馈到页面上
      setUs(d)
    }
  });

  return (
    <div>
      <Row justify="center">
        <Col span={22}>
          <Table
            columns={columns}
            dataSource={users}
            scroll={{
              x: 1500,
            }}
            sticky
          />
        </Col>
      </Row>
    </div>
  );
};

export default UserList;

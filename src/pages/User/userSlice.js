import { createSlice, current } from "@reduxjs/toolkit";

// 定义了一个管道，并且定义了这个管道的生产、消费API
const userSlice = createSlice({
  name: 'userList',
  initialState: {
    value: [],
  },
  reducers: {
    // 新增用户信息
    addUser: (state, action) => {
      // console.log("action", action.payload)
      action.payload.forEach(element => {
        // 将数据写入数组
        console.log(current(state))
        state.value.push(element);
      });
      // state中获取当前的值不能直接打印，需要调用current函数才可以获取到真正的值
      // console.log("add users", current(state))
    },
    // 修改用户信息
    modifyUser: (state, action) => {
      // TODO 要锁定主键进行修改操作
    },
    deleteUser: (state, action) => {
      console.log(current(state))
      // console.log(action.payload)
      // FIXME 这里必须要返回才会更新store里面的数据，经过调测发现直接更新state.value就可以了
      state.value = state.value.filter(item => {
        return current(item).name !== action.payload
      })
      // TODO 要锁定主键并执行filter的操作
    },
  },
});

// 如何理解下面的这几个导出操作？
export const { addUser, modifyUser, deleteUser } = userSlice.actions;
// value的含义是转换成数值
// export const selectUsers = (state) => state.userList.value

export const selectUsers = (state) => {
  // 这里是state中注册的内容，不是在slice文件中注册的内容
  return state.users.value
};

export default userSlice.reducer;

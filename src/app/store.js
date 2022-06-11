import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../pages/User/userSlice";

const store = configureStore({
  reducer: {
    // 这里暴露被封装对象的API接口，或者可以认为是消息队列中的生产者和消费者接口
    users: userReducer,
  },
});

export default store;

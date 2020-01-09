<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- 导航栏 -->

    <!-- 表单 -->
    <van-cell-group>
      <van-field
      v-model="user.mobile"
      left-icon="phone"
      placeholder="请输入手机号" />

      <van-field
      v-model="user.code"
      left-icon="like"
      placeholder="请输入验证码">
        <van-button
        slot="button"
        size="small"
        type="primary"
        round>发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- /表单 -->

    <!-- 登录按钮 -->
    <div class="login-btn-wrap">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
    <!-- /登录按钮 -->
  </div>
</template>

<script>
import { login } from '@/api/user'
export default {

  data () {
    return {
      user: {
        mobile: '', // 手机号
        code: ''// 验证码
      }
    }
  },
  methods: {
    async onLogin () {
      // 1.获取表单数据
      const user = this.user
      // 2.表单验证
      // 开启登录的loading
      this.$toast.loading({
        duration: 0, // 持续展示 toast
        message: '登录中...',
        forbidClick: true
      })

      // 3.请求登录
      try {
        const res = await login(user)
        console.log(res)

        // 提示成功
        this.$toast.success('登陆成功')
      } catch (err) {
        console.log('登陆失败', err)
        this.$toast.fail('登陆失败')
      }
      // 4.根据后端返回的结果执行后续业务处理
    }
  }
}
</script>

<style scoped lang='less'>

.login-container {
  .login-btn-wrap {
    padding: 27px 16px;
  }
}
  .van-cell{
    align-items: center;
  }
  .van-button {
  width: 100%;
}
</style>

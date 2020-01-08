<template>

  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录"/>
    <!-- 导航栏 -->

    <!-- 表单 -->
    <van-cell-group>
      <van-field clearable
      left-icon="contact"
      placeholder="请输入手机号" />

      <van-field
      left-icon="contact"
      placeholder="请输入验证码">
    <van-button
    slot="button"
    size="small"
    type="primary"
    round
    >发送验证码</van-button>
      </van-field>
    </van-cell-group>
    <!-- /表单 -->

    <!-- 登录按钮 -->
    <div class="login-btn-wrap">
      <van-button type="info" >登录</van-button>
    </div>
    <!-- /登录按钮 -->
  </div>

</template>

<script>

export default {

}
</script>

<style scoped lang='less'>
.login-container {
  .login-btn-wrap{
    padding: 27px 16px;
  }
}
.van-button{
  width: 100%
}

</style>

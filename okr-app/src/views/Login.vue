<template>
  <div>
    <div class="Login">
      <div class="LoginHeader">
        <h1>Hello</h1>
        <p>欢迎来到OKR管理系统</p>
      </div>

      <cell-group class="LoginForm">
        <Field v-model="userInfo.username" label="账号/手机号" required></Field>
        <Field v-model="userInfo.password" label="请输入密码" required type="password"></Field>
        <Button type="info" class="submit" @click="submit">登陆</Button>
      </cell-group>

      <div class="LoginFooter">
        <img :src="imgUrl">
      </div>
    </div>
  </div>
</template>

<script>
import { Field, CellGroup, Button } from 'vant'
import Vue from 'vue'
import { isMobile } from 'utilities/device-identify'
export default {
  name: 'Login',

  components: {
    Field,
    CellGroup,
    Button,
  },
  data() {
    return {
      imgUrl: require('assets/background.png'),
      userInfo: {
        username: '',
        password: '',
      },
    }
  },
  methods: {
    submit() {
      Vue.api.login.signIn(this.userInfo).then(res => {
        if (res.success) {
          this.$router.replace({ name: 'HistoryWork' })
        }
      })
    },
  },
  mounted() {
    if (process.env.NODE_ENV === 'production') {
      if (!isMobile()) {
        window.location.href = '/login.htm'
      }
    }
  },
}
</script>
<style lang="scss">
  .Login {
    height: 100%;
    padding: 56px 35px;
    box-sizing: border-box;
    overflow: hidden;

    .LoginHeader {
      margin-bottom: 80px;
      text-align: left;
      h1 {
        margin: 0;
      }
    }

    .van-cell {
      margin-bottom: 36px;

      &:not(:last-child)::after {
        border-bottom: 2px solid #c0c4cb;
      }
    }

    .submit {
      width: 100%;
      margin-top: 32px;
    }

    .LoginFooter {
      margin-left: -35px;
      margin-right: -35px;
      margin-top: 80px;

      img {
        max-width: 100%;
      }
    }
  }

  .LoginForm {
    .van-field {
      position: relative;

      &::before {
        top: -20px;
      }
    }

    .van-cell__title {
      position: absolute;
      top: -22px;
    }

    .van-field__control {
      text-align: left !important;
    }
  }
</style>

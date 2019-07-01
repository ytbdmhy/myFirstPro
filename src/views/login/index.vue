<template>
  <div>
    <el-card class="login-form-layout">
      <el-form :model="loginForm"
               :rules="loginRules"
               ref="loginForm">
        <el-image :src="loginToolUrl"
                  :fit="loginToolFit" style="width: 70px;height: 70px"></el-image>
        <h2 class="login-title" style="color: #409EFF">Mhy Tool</h2>
        <el-form-item prop="username">
          <el-input v-model="loginForm.username"
                    placeholder="请输入用户名"
                    maxlength="15"
                    clearable>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password"
                    placeholder="请输入密码"
                    show-password
                    clearable>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 30px">
          <el-button style="width: 100%"
                     type="primary"
                     :loading="loading"
                     @click.native.prevent="handleLogin">
            登录
          </el-button>
        </el-form-item>
        <el-form-item style="margin-bottom: 0px">
          <el-link type="primary"
                   :underline="false">
            立即注册
          </el-link>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import {isValidUsername} from '@/utils/validate'
import loginToolUrl from '@/assets/images/login_tool.jpg'
import axios from 'axios'
// import {getSupport, setSupport} from '@/utils/support'

export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('请输入用户名'))
      } else {
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length === 0) {
        callback(new Error('请输入密码'))
      } else if (value.length < 6) {
        callback(new Error('密码不能小于6位'))
      } else {
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePassword}]
      },
      loading: false,
      loginToolUrl,
      loginToolFit: 'fill'
    }
  },
  methods: {
    handleLogin () {
      axios.post('http://localhost:8888/login?username=' + this.loginForm.username + '&password=' + this.loginForm.password)
        .then(response => {
          console.info(response)
          if (response.data.code === 200) {
            this.loading = false
            this.$router.push({path: '/home'})
          } else {
            this.loading = false
            this.$alert('用户名或密码错误', '', {
              confirmButtonText: '确定'
            })
          }
        }).catch(response => {
        })
      this.loading = true
    }
  }
}
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 40px auto;
  border-top: 20px solid #409EFF;
}

.login-title {
  text-align: center;
}
</style>

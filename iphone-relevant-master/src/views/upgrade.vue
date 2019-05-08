<template>
  <div>
    <x-header title="防止系统升级"></x-header>
    <x-button type="warn" style="border-radius: 99px;width: 30%;margin-top: 20px" link="https://beta.thuthuatios.com/tvos/tvOS_12_Beta_Profile.mobileconfig">安装</x-button>
    <div style="margin-top: 20px">
      <h2>前言</h2>
      <p>IOS会不时弹出更新提示弹框</p>
      <p>有时会误触而更新</p>
      <p>该功能会去除掉更新提示</p>
      <h2>步骤</h2>
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade001.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade002.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade003.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade004.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade005.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade006.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade007.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/upgrade008.png" style="width: 80%;height: 80%;margin-top: 20px">
      <nv-top></nv-top>
    </div>
  </div>
</template>

<script>
  import { XButton, XHeader } from 'vux'
  import nvTop from '../components/backtotop.vue';
  export default {
  name: 'upgrade',
  components: {
    XButton,
    XHeader,
    nvTop
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div>
    <el-container>
      <el-aside width="20%">
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/pattern_left.png" style="width: 90%">
      </el-aside>
      <el-main>
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/unc0ver.png" style="width: 80px; height: 80px; border-radius: 17.54%; margin-top: 60px">
        <p style=" font-size: 1.5em">unc0ver</p>
        <p>适用于IOS 12.0-12.1.2</p>
        <x-button type="warn" style="border-radius: 99px;width: 50%;margin-top: 20px" link="itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/matengxiang001/iPhoneBreakOut/master/unc0ver.plist">安装</x-button>
        <p style="margin-top: 40px">3.0.0（Build 48）- 21.7 MB</p>
        <p>更新于: 2019 - 04 - 06</p>
      </el-main>
      <el-aside width="20%">
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/pattern_right.png" style="width: 90%">
      </el-aside>
    </el-container>
  </div>
</template>
<script>
  import { XButton } from 'vux'
  export default {
    name: 'YaLu',
    components: { XButton }
  }
</script>

<template>
  <div>
    <x-header title="IOS-10"></x-header>
    <el-container>
      <el-aside width="20%">
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/pattern_left.png" style="width: 90%">
      </el-aside>
      <el-main>
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/yalu.png" style="width: 80px; height: 80px; border-radius: 17.54%; margin-top: 80px">
        <p style=" font-size: 1.5em">YaLu102</p>
        <p>适用于IOS 10.0-10.2.1</p>
        <x-button type="warn" style="border-radius: 99px;width: 50%;margin-top: 20px" link="itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/matengxiang001/iPhoneBreakOut/master/yalu.plist">安装</x-button>
        <p style="margin-top: 40px">1.1（Build 1）- 8 MB</p>
        <p>更新于: 2019 - 04 - 06</p>
      </el-main>
      <el-aside width="20%">
        <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/pattern_right.png" style="width: 90%">
      </el-aside>
    </el-container>
  </div>
</template>
<script>
  import { XButton, XHeader } from 'vux'
  export default {
    name: 'YaLu',
    components: { XButton, XHeader }
  }
</script>

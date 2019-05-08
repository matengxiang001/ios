<template>
  <div>
    <x-header title="下载越狱软件"></x-header>
    <el-tabs :stretch="true">
      <el-tab-pane label="IOS 10">
        <YaLu></YaLu>
      </el-tab-pane>
      <el-tab-pane label="IOS 11">
        <Electra></Electra>
      </el-tab-pane>
      <el-tab-pane label="IOS 12">
        <Unc0ver></Unc0ver>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import { XButton, XHeader, Tab, TabItem } from 'vux'
  import YaLu from './YaLu';
  import Electra from './Electra';
  import Unc0ver from './Unc0ver';
  import data from '../common/json/data.json';
  export default {
  name: 'breakout',
  components: {
    XButton,
    XHeader,
    Tab,
    TabItem,
    YaLu,
    Electra,
    Unc0ver
  },
  data () {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

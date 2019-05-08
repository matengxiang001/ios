<template>
  <div>
    <x-header title="Cydia一键加源"></x-header>

    <group v-for="item in list" :key="item.id">
      <cell-box :link="item.url" is-link>
        {{item.name}}
      </cell-box>
    </group>

    <div style="margin-top: 20px">
      <h2>前言</h2>
      <p>Cydia添加软件源需要输入URL</p>
      <p>该功能可以一键添加源</p>
      <h2>步骤</h2>
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/addsource001.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/addsource002.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/addsource003.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/addsource004.png" style="width: 80%;height: 80%;margin-top: 20px">
      <img src="http://app-cloudcontrol.test.upcdn.net/ios/img/addsource005.png" style="width: 80%;height: 80%;margin-top: 20px">
      <nv-top></nv-top>
    </div>
  </div>
</template>

<script>
  import { Group, CellBox, XHeader } from 'vux'
  import nvTop from '../components/backtotop.vue';
  import data from '../common/json/data.json';
  export default {
  name: 'addSource',
  components: {
    Group,
    CellBox,
    XHeader,
    nvTop
  },
  data () {
    return {
      list: []
    }
  },
    created() {
      this.list = data.source
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

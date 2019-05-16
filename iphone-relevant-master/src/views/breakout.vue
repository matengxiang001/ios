<template>
  <div>
    <x-header title="下载越狱软件"></x-header>

    <group v-for="item in breakoutData" :key="item.id">
      <cell-box :link="item.url" is-link>
        {{item.name}}
      </cell-box>
    </group>

  </div>
</template>

<script>
  import { XHeader, Group, CellBox } from 'vux'
  import data from '../common/json/data.json';
  export default {
  name: 'breakout',
  components: {
    XHeader,
    Group,
    CellBox
  },
  data () {
    return {
      breakoutData: []
    }
  },
  created() {
    this.breakoutData = data.breakout
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

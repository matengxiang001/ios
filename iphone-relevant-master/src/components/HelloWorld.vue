<template>
  <div>
    <x-header title="越狱工具" :left-options="{showBack: false}"></x-header>

    <group v-for="item in list" :key="item.id">
      <cell-box :link="item.url" is-link>
        {{item.name}}
      </cell-box>
    </group>

  </div>
</template>

<script>
  import { Group, CellBox, XHeader } from 'vux'
  import data from '../common/json/data.json';
  export default {
  name: 'HelloWorld',
  components: {
    Group,
    CellBox,
    XHeader
  },
  data () {
    return {
      list: []
    }
  },
    created() {
      this.list = data.page
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

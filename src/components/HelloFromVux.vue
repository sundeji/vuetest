<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/logo.gif">
      <h1> </h1>
    </div>
    <group>
      <cell title="N2真题" value="開始" is-link link='/N2List'></cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from 'vux'

export default {
  components: {
    Group,
    Cell
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100%;
  height: 100px
}
</style>

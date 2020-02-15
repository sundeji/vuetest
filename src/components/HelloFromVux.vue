<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/vux_logo.png" />
      <h1></h1>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
    </group>
  </div>
</template>

<script>
import { Cell, Group, Badge, Divider } from "vux";

export default {
  components: {
    Cell,
    Group,
    Badge,
    Divider
  },
  data() {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!"
    };
  }
};
</script>

<style>
.vux-demo {
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>

<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/logo.gif" />
      <h1></h1>
    </div>
    <group>
      <cell
        title="n2 2010.7真题"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001"
      ></cell>

      <template v-if="showContent001">
        <cell-box :border-intent="false" class="sub-item" link="/N2_201007_01" is-link>言語知識（文字・語彙・文法）</cell-box>
      </template>

      <cell
        title="n2 2010.12真题"
        is-link
        :border-intent="false"
        :arrow-direction="showContent002 ? 'up' : 'down'"
        @click.native="showContent002 = !showContent002"
      ></cell>

      <template v-if="showContent002">
        <cell-box :border-intent="false" class="sub-item" is-link>言語知識（文字・語彙・文法）</cell-box>
      </template>

      <cell
        title="n2 2011.7真题"
        is-link
        :border-intent="false"
        :arrow-direction="showContent003 ? 'up' : 'down'"
        @click.native="showContent003 = !showContent003"
      ></cell>

      <template v-if="showContent003">
        <cell-box :border-intent="false" class="sub-item" is-link>言語知識（文字・語彙・文法）</cell-box>
      </template>
    </group>
  </div>
</template>

<script>
import { Cell, CellBox, CellFormPreview, Group, Badge } from "vux";

export default {
  components: {
    Group,
    Cell,
    CellFormPreview,
    CellBox,
    Badge
  },
  data() {
    return {
      msg: "Hello World!",
      showContent001: false,
      showContent002: false,
      showContent003: false,
      showContent004: false,
      showContent005: false,
      showContent006: false,
      showContent007: false,
      showContent008: false,
      showContent009: false,
      showContent010: false,
      showContent011: false,
      showContent012: false,
      showContent013: false,
      showContent014: false,
      showContent015: false,
      showContent016: false
    };
  }
};
</script>

<style scoped>
.sub-item {
  color: #888;
}
</style>

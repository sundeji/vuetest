<template>
  <div>
    <div class="vux-demo">
      <img class="logo" src="../assets/logo.gif" />
      <h1></h1>
    </div>
    {{ question0 }}{{ question1 }}{{ question2 }}
    <checklist
      ref="demoObject"
      :options="objectList"
      v-model="objectListValue"
      @on-change="change"
      :max="1"
    ></checklist>
    <group class="aa">
      <cell-box>{{ fullValues }}</cell-box>
    </group>
    <div style="padding:15px;">
      <x-button
        type="primary"
        @click.native="fullValues = $refs.demoObject.getFullValue()"
      >提交</x-button>
    </div>
  </div>
</template>

<script>
import { Group, CellBox, Checklist, Cell, Divider, XButton } from "vux";

export default {
  components: {
    Group,
    Checklist,
    Cell,
    Divider,
    XButton,
    CellBox
  },
  methods: {
    change(val, label) {
      console.log("change", val, label);
    },
    commitClick(fullValues){

    }
  },
  data() {
    return {
      fullValues: [],
      msg: "Hello World!",
      radioValue: [],
      objectList: [
        { key: "1", value: "しょうご" },
        { key: "2", value: "しょうごう" },
        { key: "3", value: "そうご" },
        { key: "4", value: "そうごう" }
      ],
      objectListValue: ["1", "2"],
      question0: "1.これからも様々な国との",
      question1: "相互",
      question2: "理解を深めていこうと思う。"
    };
  }
};
</script>

<style scoped>
.sub-item {
  color: #888;
}
</style>

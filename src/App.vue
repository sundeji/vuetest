<template>
  <div id="app">
    <x-header style="background-color:#FF69B4;">
      <span>jlpt真题</span>
      <x-icon
        slot="overwrite-left"
        type="navicon"
        size="35"
        style="fill:#fff;position:relative;top:-8px;left:-3px;"
      ></x-icon>
    </x-header>
    <router-view></router-view>
  </div>
</template>

<script>
import {
  Radio,
  Group,
  Cell,
  Badge,
  Drawer,
  Actionsheet,
  ButtonTab,
  ButtonTabItem,
  ViewBox,
  XHeader,
  Tabbar,
  TabbarItem,
  Loading,
  TransferDom
} from "vux";
import { mapState, mapActions } from "vuex";

export default {
  name: "app",
  components: {
    Radio,
    Group,
    Cell,
    Badge,
    Drawer,
    ButtonTab,
    ButtonTabItem,
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Loading,
    Actionsheet
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
.logo {
  width: 100%;
  height: 100px;
}
.vux-demo {
  text-align: center;
}
</style>

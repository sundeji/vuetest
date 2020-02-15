<template>
  <div style="height:100%;">
    <drawer
      width="200px;"
      :show.sync="drawerVisibility"
      :show-mode="showModeValue"
      :placement="showPlacementValue"
      :drawer-style="{'background-color':'#35495e', width: '200px'}"
    >
      <div slot="drawer">
        <!-- 菜单内容 -->
      </div>

      <!-- rourer-view 作为默认插槽内容 -->
      <div id="app">
        <router-view></router-view>
      </div>
    </drawer>
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
  TRANSFERDOM
} from "vux";
export default {
  name: "app",
  components: {
    Drawer
  },
  data() {
    return {
      entryUrl: document.location.href,
      showMenu: false,
      drawerVisibility: false,
      showMode: "push",
      showModeValue: "push",
      showPlacement: "left",
      showPlacementValue: "left"
    };
  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
</style>

<template>
  <div class="container-default shaded vertical-flex" :style="this.hideBgColor ? bgStyle : ''">
    <div class="top-heading">
      <h1>{{ title.toUpperCase() }}</h1>
    </div>
    <div class="cards-in-row">
      <div v-for="item in itemList" :key="item.index">
        <item-card :item="item" :linkName="linkName" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemGroup",

  props: {
    title: {
      type: String,
      default: "",
    },
    itemList: {
      type: Array,
      default: [],
    },
    linkName: {
      type: String,
      default: "",
    },
    hideBgColor: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    bgStyle() {
      return {
        "background-color": "transparent",
      };
    },
  },
};
</script>

<style scoped lang="scss">
.view-all {
  padding-top: 2.38rem;
  text-align: center;

  a {
    font-weight: 600;
  }
}
</style>

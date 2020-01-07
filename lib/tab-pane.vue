<template>
<div class="tab-pane-container" ref="tab">
  <div class="tab-pane" @click="handleTabClick" :style="tabStyle">{{label}}</div>
</div>
</template>
<script>
export default {
  name: 'TabPane',
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      width: 0
    }
  },
  watch: {
    tabActive(val) {
      if (val) {
        this.$parent.handleContent(this.$slots.default);
      }
    }
  },
  computed: {
    tabActive() {
      return this.$parent.value === this.name;
    },
    tabStyle() {
      return {color: this.tabActive ? 'red': (this.disabled ? '#ddd' : '#ccc')}
    }
  },
  mounted() {
    if (this.tabActive) {
      this.$parent.handleContent(this.$slots.default);
    }
    this.width = this.$refs.tab.offsetWidth;
  },
  methods: {
    handleTabClick() {
      if (!this.disabled) {
        this.$parent.$emit('input', this.name);
        this.$parent.$emit('tab-click', this);
      }
    }
  }
}
</script>
<style scoped lang="css">
.tab-pane-container {
  display: inline-block;
  padding: 0 8px;
  cursor: pointer;
}
</style>

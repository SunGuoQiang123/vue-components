<script>
export default {
  name: "Tabs",
  props: {
    value: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      tabContent: '',
      tabListWidth: 0,
      tabs: []
    };
  },
  computed: {
    activeBarStyle(){
      const index = this.tabs.findIndex(tab => tab.name === this.value);
      if (index > -1) {
        const width = this.tabs[index].width;
        let offset = 0;
        for(let i = 0; i < index; i++) {
          offset += this.tabs[i].width
        }
        return {
          width: width+'px', transform: `translateX(${offset}px)`
        }
      }
    }
  },
  methods: {
    handleContent(content) {
      this.tabContent = content;
    }
  },
  mounted() {
    this.$children.forEach(pane => {
      this.tabs.push({name: pane.name, width: pane.width});
    });
    this.tabListWidth = this.$refs.tabList.offsetWidth;
  },
  render() {
    return (
      <div>
        <div class='tab-wrapper'>
          <div class='tab-scroll'></div>
          <div class='tab-list' ref='tabList'>
            <div class='active-tab-bar' style={this.activeBarStyle}></div>
            {this.$slots.default}
          </div>
        </div>
        {this.tabContent}
      </div>
    )
  }
};
</script>
<style scoped lang="css">
.tab-wrapper {
  position: relative;
  text-align: initial;
}
.tab-scroll {
  position: absolute;
  height: 2px;
  background: #e4e7ed;
  left: 0;
  bottom: 0;
  width: 100%;
}
.tab-list {
  position: relative;
  display: inline-block;
}
.active-tab-bar {
  height: 2px;
  bottom: 0;
  left: 0;
  position: absolute;
  background: blue;
}
</style>

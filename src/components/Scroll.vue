<template>
  <div scroll class="wrapper" ref="wrapper">
    <div class="content" ref="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    data() {
      return {
        config: {
          click: true
        },
        scroll: null
      }
    },
    methods: {
      initScroll() {
        this.$nextTick(() => {
          if (this.$refs.wrapper) {
            this.scroll = new BScroll(this.$refs.wrapper, this.config)
          }
        })
      },
      refreshScroll() {
        this.$nextTick(() => this.scroll.refresh())
      }
    },
    created() {
      this.scroll ? this.refreshScroll() : this.initScroll()
    }
  }
</script>

<style lang="less">
  [scroll].wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .content {
      min-height: 100.3%;
      padding-bottom: .3%;
    }
  }
</style>

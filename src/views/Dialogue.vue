<template>
  <div class="dialogue">
    <DialogueCard v-for="item in dialogues" :key="item.id" :style="cardStyle" :value="item" @try="handleTry(item)"> </DialogueCard>

    <DialogueEmulator v-model="emulator" :dialogue="currentItem"></DialogueEmulator>
  </div>
</template>

<script>
import Masonry from "masonry-layout"
import dialogues from "./../dict/dialogue.js"
import DialogueEmulator from "./../components/DialogueEmulator"
import DialogueCard from "./../components/DialogueCard"

export default {
  name: "Dialogue",
  components: {
    DialogueCard,
    DialogueEmulator
  },
  data() {
    return {
      dialogues: dialogues,
      emulator: false,
      currentItem: {},
      columnWidth: 0,
      cardStyle: {}
    }
  },
  mounted() {
    this.columnWidth = this.getColumnWidth()
    this.cardStyle = {
      width: this.columnWidth + "px"
    }

    this.$nextTick(() => {
      new Masonry(".dialogue", {
        itemSelector: ".dialogue-card",
        columnWidth: this.columnWidth,
        gutter: 10
      })
    })
  },
  methods: {
    handleTry(item) {
      this.emulator = true
      this.currentItem = item
    },
    getColumnWidth() {
      const innerWith = this.$el.clientWidth
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return innerWith
        case "sm":
          return innerWith
        case "md":
          return innerWith / 3
        default:
          return 400
      }
    }
  }
}
</script>

<style lang="scss">
.dialogue-card {
  margin-bottom: 10px;
}
</style>

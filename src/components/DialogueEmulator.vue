<template>
  <v-dialog v-model="value" persistent :fullscreen="mobile" :hide-overlay="mobile" :transition="mobile ? 'dialog-bottom-transition' : 'fade-transition'">
    <v-card class="rounded-0">
      <v-toolbar dark color="indigo">
        <v-toolbar-title>{{ dialogue.title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('input', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>

      <div ref="chatBox" class="chat-box">
        <v-slide-y-reverse-transition group>
          <div :class="['chat-msg', item.t === 'LEFT' ? 'left' : 'right']" v-for="(item, i) in msgs" :key="i">
            <div class="chat-msg__inner">
              {{ item.text }}
            </div>
          </div>
        </v-slide-y-reverse-transition>
      </div>
      <div class="chat-action">
        <v-btn :disabled="!qa.length" color="indigo" block @click="pushMsg">下一步</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "DialogEmulator",
  props: {
    value: {
      type: Boolean,
      default: false
    },
    dialogue: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      msgs: [],
      qa: []
    }
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        if (val) {
          this.init()
        }
      }
    }
  },
  computed: {
    mobile() {
      return this.$vuetify.breakpoint.mobile
    }
  },
  methods: {
    init() {
      this.qa = []
      this.msgs = []

      const { qa } = this.dialogue

      qa.forEach(el => {
        if (el.zh) {
          this.qa.push({ t: el.t, text: el.zh })
        }
        if (el.en) {
          this.qa.push({ t: el.t, text: el.en })
        }
      })

      this.$nextTick(this.pushMsg)
    },
    pushMsg() {
      this.msgs.push(this.qa.shift())

      this.$nextTick(() => {
        const $new = this.$refs.chatBox.querySelector(".chat-msg:last-child")
        if ($new) {
          $new.scrollIntoView()
        }
      })
    }
  }
}
</script>

<style lang="scss">
.v-dialog:not(.v-dialog--fullscreen) {
  width: 600px;
  height: 600px;
  .v-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    background-color: #fafafa;
  }
}
</style>

<style lang="scss" scoped>
.v-dialog--fullscreen > .v-card {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #fafafa;
}
.v-toolbar {
  flex-grow: 0;
}
.chat-box {
  overflow: scroll;
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
}
.chat-action {
  padding: 10px;
  text-align: center;
}
.v-btn {
  color: #fff;
}
.chat-msg {
  display: flex;
  &.left {
    .chat-msg__inner {
      border-top-left-radius: 0px;
      background-color: #fff;
      color: #000;
      box-shadow: 0 0 12px 4px rgba(189, 189, 189, 0.2);
    }
  }
  &.right {
    justify-content: flex-end;
    .chat-msg__inner {
      border-top-right-radius: 0px;
      background-color: #00796b;
      color: #fff;
      box-shadow: 0 0 12px 4px rgba(0, 121, 107, 0.2);
    }
  }
  .chat-msg__inner {
    padding: 10px;
    max-width: 80%;
    margin-bottom: 15px;
    border-radius: 4px;
  }
}
</style>

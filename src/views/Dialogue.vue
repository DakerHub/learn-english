<template>
  <div class="dialogue">
    <v-container>
      <v-row dense>
        <v-col cols="12">
          <DialogueCard v-for="item in dialogues" :key="item.id" :value="item" @try="handleTry(item)"> </DialogueCard>
        </v-col>
      </v-row>
    </v-container>

    <DialogueEmulator v-model="emulator"></DialogueEmulator>
  </div>
</template>

<script>
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
      currentItem: {}
    }
  },
  methods: {
    handleTry(item) {
      this.emulator = true
      this.currentItem = item
    }
  }
}
</script>

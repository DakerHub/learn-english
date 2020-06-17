<template>
  <v-card class="dialogue-card" color="#385F73" dark>
    <v-card-title class="subtitle-1" v-text="value.title"></v-card-title>
    <v-card-text>
      <ul>
        <li v-for="(tip, i) in value.tips" :key="i">{{ tip }}</li>
      </ul>
    </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="yellow" text @click="$emit('try')">TRY</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="sass" scoped></style>

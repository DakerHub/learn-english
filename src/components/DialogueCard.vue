<template>
  <v-card color="#385F73" dark>
    <v-card-title class="headline" v-text="value.title"></v-card-title>
    <v-card-text>
      <div v-for="(tip, i) in value.tips" :key="i">{{ tip }}</div>
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

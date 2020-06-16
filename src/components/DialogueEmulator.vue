<template>
  <v-dialog v-model="value" fullscreen hide-overlay transition="dialog-bottom-transition">
    <v-card class="rounded-0">
      <v-toolbar dark color="indigo">
        <v-toolbar-title>Settings</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon dark @click="$emit('input', false)">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
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
    }
  }
}
</script>

<style lang="scss" scoped></style>

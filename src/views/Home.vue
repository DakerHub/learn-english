<template>
  <div class="home">
    <v-expansion-panels accordion flat>
      <v-expansion-panel v-for="item in phrases" :key="item.id">
        <v-expansion-panel-header>{{ item.zh }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <p class="grey--text">{{ item.en }}</p>
          <p>
            <v-chip v-for="(tag, i) in item.tag" :key="i" class="mr-2 lighten-4 amber--text text--darken-4" label small color="amber">{{ tag }}</v-chip>
          </p>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import phrases from "./../dict/phrase.js"

export default {
  name: "Home",
  components: {},
  data() {
    return {
      phrases: phrases
    }
  }
}
</script>

<style lang="scss">
.v-expansion-panel {
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 0 8px 1px rgba(113, 113, 113, 0.1);
}
</style>

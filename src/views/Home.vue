<template>
  <div class="home">
    <v-card class="filter" flat="" color="blue-grey">
      <v-chip-group column active-class="amber--text" dark @change="handleFilterChange">
        <v-chip v-for="tag in tags" :key="tag" color="#78909C">
          {{ tag }}
        </v-chip>
      </v-chip-group>
    </v-card>

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
import { tagArr } from "./../dict/tag.js"
import phrases from "./../dict/phrase.js"

export default {
  name: "Home",
  components: {},
  data() {
    return {
      tags: tagArr,
      phrases: phrases
    }
  },
  methods: {
    handleFilterChange(index) {
      if (index === undefined) {
        this.phrases = phrases
        return
      }

      const currentTag = this.tags[index]
      this.phrases = phrases.filter(p => p.tag.includes(currentTag))
    }
  }
}
</script>

<style lang="scss">
.filter {
  z-index: 2;
  margin-bottom: 20px;
  padding: 0 10px;
}
.v-expansion-panel {
  margin: 10px 0;
  border-radius: 4px;
  box-shadow: 0 0 8px 1px rgba(113, 113, 113, 0.1);
}
</style>

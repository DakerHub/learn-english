<template>
  <div>
    <v-text-field v-model="search" label="Solo" placeholder="搜索关键词" solo clearable></v-text-field>

    <div>
      <v-card v-for="item in listFiltered" :key="item.id" style="margin-bottom:15px">
        <v-card-title>{{ item.title }}</v-card-title>

        <v-card-text>{{ item.desc }}</v-card-text>
        <v-divider></v-divider>

        <v-expansion-panels flat>
          <v-expansion-panel class="elevation-0">
            <v-expansion-panel-header>例句</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ol class="body-2">
                <li v-for="(example, i) in item.examples" :key="i">
                  <p class="font-weight-bold">{{ example.en }}</p>
                  <p>{{ example.ch }}</p>
                </li>
              </ol>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </div>
  </div>
</template>

<script>
import grammar from "./../dict/grammar.js"

export default {
  name: "Grammar",
  data() {
    return {
      grammar: grammar,
      search: ""
    }
  },
  computed: {
    listFiltered() {
      if (!this.search) {
        return this.grammar
      }
      return this.grammar.filter(el => {
        const exp = new RegExp(this.search, "g")
        const { title, desc } = el
        return exp.test(title) || exp.test(desc)
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>

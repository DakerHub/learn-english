<template>
  <div class="home">
    <PhraseCard v-for="item in phrases" :key="item.id" :value="item"></PhraseCard>
  </div>
</template>

<script>
import phrases from "./../dict/phrase.js"
import PhraseCard from "./../components/PhraseCard"

export default {
  name: "Home",
  components: {
    PhraseCard
  },
  data() {
    return {
      phrases: phrases
    }
  }
}
</script>

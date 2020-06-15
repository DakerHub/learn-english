<template>
  <article>
    <h3>{{ value.zh }}</h3>
    <p>{{ value.en }}</p>
    <p>{{ value.tag }}</p>
  </article>
</template>

<script>
export default {
  name: "PhraseCard",
  props: {
    value: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss" scoped></style>

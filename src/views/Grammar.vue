<template>
  <div>
    <v-text-field label="Solo" placeholder="搜索关键词" solo clearable></v-text-field>

    <div>
      <v-card>
        <v-card-title>虚拟条件句</v-card-title>

        <v-card-text>会计法那司空见惯萨克就</v-card-text>
        <v-divider></v-divider>

        <v-expansion-panels flat>
          <v-expansion-panel class="elevation-0">
            <v-expansion-panel-header>例句</v-expansion-panel-header>
            <v-expansion-panel-content>
              <ol class="body-2">
                <li>
                  <p class="font-weight-bold">asf sa s asd asdas assf dfgdf dfgdf sdfsdg sdgdsg sdf sdf d</p>
                  <p>阿斯钢吧上看过吧</p>
                </li>
                <li>
                  <p class="font-weight-bold">asf sa s asd asdas</p>
                  <p>阿斯钢吧上看过吧</p>
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
export default {
  name: "Grammar"
}
</script>

<style lang="scss" scoped></style>

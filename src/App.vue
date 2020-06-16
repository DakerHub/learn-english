<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app right>
      <v-list dense>
        <v-list-item v-for="(nav, i) in routes" :key="i" link :to="nav.path">
          <v-list-item-action>
            <v-icon>{{ nav.meta.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>{{ nav.meta.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>

    <v-main class="grey lighten-4">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { routes } from "./router"

export default {
  name: "LayoutsDemosBaselineFlipped",
  props: {
    source: String
  },
  data: () => ({
    routes,
    drawer: null
  }),
  computed: {
    title() {
      return this.$route.meta.name
    }
  }
}
</script>

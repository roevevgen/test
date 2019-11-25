<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
    >

      <v-divider></v-divider>

      <v-list
              dense
              nav
      >
        <v-list-item
                v-for="link in links"
                :key="link.title"
                :to="link.url"
                flat
        >
          <v-list-item-content>
            <v-list-item-title>{{ link.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Company name</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn text>
        Sign out
      </v-btn>
    </v-app-bar>

    <v-content>

          <router-view></router-view>

    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
      links: [
        {title: 'Registration',  url: '/registration'},
        {title: 'Project', url: '/project'},

      ]
    }),
    created () {
      this.$vuetify.theme.dark = true
    },
  }
</script>
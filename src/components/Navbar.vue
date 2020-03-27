<template>
	<nav>
		<v-app-bar flat app class="grey lighten-4">
			<v-app-bar-nav-icon class="grey--text" @click="drawer =!drawer"></v-app-bar-nav-icon>
			<v-toolbar-title class="text-uppercase grey--text">
				<span class="font-weight-light">ToDo</span>
				<span class="font-weight-bold">NINJA</span>
			</v-toolbar-title>
			<v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="primary" class="mr-2" dark v-on="on">
            <v-icon left>mdi-chevron-down</v-icon>  
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" router :to="item.route">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

			<v-btn outlined class="grey--text">
				<span>Sign Out</span>
				<v-icon right>mdi-exit-to-app</v-icon>
			</v-btn>
		</v-app-bar>

		<v-navigation-drawer app v-model="drawer" :color="color" :expand-on-hover="expandOnHover" :mini-variant="miniVariant" dark>
			<v-list dense nav class="py-0">
        <v-list-item two-line :class="miniVariant && 'px-0'">
          <v-list-item-avatar>
            <img src="@/assets/njslyr.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>

        </v-list-item>
          
        <v-list-item class="my-2">
          <Popup />
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link router :to="item.route">
          <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
			</v-list>
    </v-navigation-drawer>

	</nav>
</template>

<script>
import Popup from './Popup.vue'
export default {
  components: { Popup },
	data() {
		return {
			drawer: false,
			items: [
				{ title: 'Dashboard', icon: 'mdi-view-dashboard', route: '/dashboard' },
				{ title: 'My Project', icon: 'mdi-folder', route: '/projects'},
				{ title: 'Team', icon: 'mdi-account', route: '/team' },
        { title: 'Dojo', icon: 'mdi-hand-right', route: '/dojo'}
      ],
			color: 'red accent-4',
			miniVariant: false,
			expandOnHover: false,
		}
	},
}
</script>

<style lang="scss" scoped>

</style>
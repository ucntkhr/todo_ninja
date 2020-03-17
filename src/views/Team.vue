<template>
  <div class="team">
    <v-subheader class="grey--text">Team</v-subheader>

    <v-container class="my-5">

      <v-row dence>
        <v-col xs=12 sm=6 md=4 lg=3 v-for="person in team" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small class="mr-2">mdi-message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

    </v-container>

  </div>
</template>
 
<script>
export default {
  data() {
    return {
      team : [
        { name: 'NinjaSlayer', role: 'Web developer', avatar: '/njslyr_fromanim.jpg'},
        { name: 'Dragon Yukano', role: 'Graphic designer', avatar: '/DragonYukano.jpg' },
        { name: 'Clone Yakuza', role: 'Web developer', avatar: '/CloneYakuza.png'},
        { name: 'Yamoto Koki', role: 'Social media maverick', avatar:'/Yamoto.jpg' },
        { name: 'Silver KARASU', role: 'Sales guru', avatar: '/SilverKaras.png'}
      ]
    }
  } 
}
</script>

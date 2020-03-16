<template>
  <div class="dashboard">
    <v-subheader class="grey--text">Dashboard</v-subheader>
    <v-container class="my-5">

      <v-row class="mb-3">
        <v-btn small text color="grey" @click="sortBy('title')">
          <v-icon left small>mdi-folder</v-icon>
          <span class="caption text-lowercase">By Project name</span>
        </v-btn>
        <v-btn small text color="grey" @click="sortBy('person')">
          <v-icon left small>mdi-account</v-icon>
          <span class="caption text-lowercase">By Person</span>
        </v-btn>
      </v-row>

      <v-card flat v-for="project in projects" :key="project.title">
        <v-row dence :class="`pa-3 project ${project.status}`"> 
          <v-col cols=12 md=6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs=6 sm=4 md=2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-col>
          <v-col xs=6 sm=4 md=2>
            <div class="caption grey--text">Due to</div>
            <div>{{ project.due }}</div>
          </v-col>
          <v-col xs=2 sm=4 md=2>
            <div class="float-right mr-2">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      projects: [
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ],
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
}
</script>

<style lang="scss">

.project.complete {
  border-left: 4px solid #4DD0E1
}
.project.ongoing{
  border-left: 4px solid orange
} 
.project.overdue{
  border-left: 4px solid #FF5252
}
.theme--light.v-chip.ongoing {
  background: orange;
}
.theme--light.v-chip.complete {
  background: #4DD0E1
}
.theme--light.v-chip.overdue {
  background: #FF5252;
}

</style>
<template>
  <div class="projects">
    <!-- <div class="projects">
      <h1 class="subheading grey--text">Projects</h1>
      <v-container class="my-5">
        <v-expansion-panel>
          <v-expansion-panel-content>
            <div slot="header">Project title</div>
            <v-card>
              <v-card-text>
                <div class="font-weight-bold">due by xx.xx.xx</div>
                <div>Info</div>

              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-container>
    </div> -->
    <v-row align="center">
      <!-- <v-row justify="space-around">
        <v-switch v-model="accordion" class="ma-2" label="Accordion"></v-switch>
        <v-switch v-model="popout" class="ma-2" label="Popout"></v-switch>
        <v-switch v-model="inset" class="ma-2" label="Inset"></v-switch>
        <v-switch v-model="multiple" class="ma-2" label="Multiple"></v-switch>
        <v-switch v-model="disabled" class="ma-2" label="Disabled"></v-switch>
        <v-switch v-model="readonly" class="ma-2" label="Readonly"></v-switch>
        <v-switch v-model="focusable" class="ma-2" label="Focusable"></v-switch>
        <v-switch v-model="flat" class="ma-2" label="Flat"></v-switch>
        <v-switch v-model="hover" class="ma-2" label="Hover"></v-switch>
        <v-switch v-model="tile" class="ma-2" label="Tile"></v-switch>
      </v-row> -->

      <v-expansion-panels
        :accordion="accordion"
        :popout="popout"
        :inset="inset"
        :multiple="multiple"
        :focusable="focusable"
        :disabled="disabled"
        :readonly="readonly"
        :flat="flat"
        :hover="hover"
        :tile="tile"
      >

        <!-- <v-expansion-panels>

          <v-expansion-panel-content v-for="project in projects" :key="project.title">

            <div slot="header">{{ project.title }}</div>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">due by {{ project.due }}</div>
                <div>{{ project.content }}</div>
              </v-card-text>
            </v-card>
            
          </v-expansion-panel-content>
        </v-expansion-panels> -->

        <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="font-weight-bold">{{ project.date }}</div>
          <div>{{ project.content }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      </v-expansion-panels>
    </v-row>
  </div>
</template>
 
<script> 
import { firestore } from "@/firebase/fireStore.js"
export default {
  data: () => ({
    accordion: false,
    popout: false,
    inset: false,
    multiple: false,
    disabled: false,
    readonly: false,
    focusable: false,
    flat: false,
    hover: false,
    tile: false,

    projects: [
    // { title: 'Design a new website', person: 'NinjaSlayer', date: '01/01/2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    // { title: 'Code up the homepage', person: 'Clone Yakuza', date: '10/01/2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    // { title: 'Design video thumbnails', person: 'Dragon Yukano', date: '20/12/2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    // { title: 'Create a community forum', person: 'Yamoto Koki', date: '20/10/2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    // { title: 'Kill the Ninja', person: 'NinjaSlayer', date: '01/01/2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ]
  }),
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'NinjaSlayer'
      })
    }
  },
  created() {
    firestore.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      })
    })
  }
}

</script>
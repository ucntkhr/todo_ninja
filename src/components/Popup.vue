<template>
  <v-dialog max-width="600px">
		<template v-slot:activator="{ on }">
			<v-btn text class="success" v-on="on">Add New Project</v-btn>
		</template>
		<v-card>
			
			<v-card-title>
				<h2>Add a New Project</h2>
			</v-card-title>
			<v-card-text>
				<v-form class="px-3" ref="form">
					<v-text-field label="title" v-model="title" prepend-icon="mdi-folder" :rules="inputRules"></v-text-field>
					<v-textarea label="Information" v-model="content" prepend-icon="mdi-pencil" :rules="inputRules"></v-textarea>


          <v-menu
            ref="menu1"
            v-model="menu1"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            max-width="290px"
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                v-model="dateFormatted"
                label="Due date"
                persistent-hint
                prepend-icon="mdi-calendar"
                @blur="date = parseDate(dateFormatted)"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
          </v-menu>



					<v-btn text class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
				</v-form>

			</v-card-text>


		</v-card>

	</v-dialog>



</template>

<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    title: '',
    content: '',
    inputRules: [
      v => v.length >= 3 || 'Minimum length in 3 characters'
    ]
  }),
	methods: {
		submit() {
      if(this.$refs.form.validate()) {
       console.log(this.title, this.content)  
      }
		},
    formatDate (date) {
      if (!date) return null

      const [year, month, day] = date.split('-')
      return `${month}/${day}/${year}`
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
	},
  computed: {
    computedDateFormatted () {
      return this.formatDate(this.date)
    },
  },

  watch: {
    date () {
      this.dateFormatted = this.formatDate(this.date)
    },
  },
}
</script>
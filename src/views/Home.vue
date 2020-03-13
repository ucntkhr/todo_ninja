<template>
  <div class="home">
    <h1>This is Home</h1>

    <v-btn class="pink white--text mr-2">click me</v-btn>
    <v-btn depressed dark color="pink" class="mr-2">click me</v-btn>
    <v-btn text color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text mr-2">
      <v-icon left>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn depressed small class="pink white--text mr-2">
      <v-icon left small>mdi-email</v-icon>
      <span>email me</span>
    </v-btn>

    <v-btn fab depressed small dark color="red">
      <v-icon small>mdi-heart</v-icon>
    </v-btn>
    

  </div>
</template>
 
<script>
export default {
  
}
</script>

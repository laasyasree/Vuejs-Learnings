<template>
  <v-row>
  <h1>{{ title }}</h1>
    <Child  @changeTitle="ChangeT($event)" :parentmessage="parentmessage"></Child>
          <button @click="sendMessage" class="btn btn-info">Send Child A Message</button>
  </v-row>

</template>
<script>
import Child from "@/components/Child"
export default {
  name: 'parent',
  components: {
    Child,
  },
  data() {
    return {
      title: 'Parent',
      thecardtitle: 'Parent Component!',
      parentmessage: ''
    }
  },

  methods: {
    ChangeT(title) {
      this.title = title;
    },

    sendMessage() {
      this.parentmessage = '<b>Message From Parent:</b> Do Your Homework'
    }
  }
}
</script>


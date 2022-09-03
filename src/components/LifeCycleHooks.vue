<template>
  <v-row>
    <div ref="example-element">{{ propertyComputed }}</div>
    <div ref="example-element1"> {{counter}}  </div>
  </v-row>
</template>

<script>
export default {
  name: "lifecycle-hooks",
  data() {
    return {
      property: 'Example property.',
      counter: 0,
      exampleLeakyProperty: 'This represents a property that will leak memory if not cleaned up.'
    }
  },

  computed: {
    propertyComputed() {
      return this.property
    }
  },

  beforeCreate() {
    console.log('Events and lifecycle have been initialized.')
  },

  created() {
    console.log('This.property is now reactive and propertyComputed will update.')
    this.property = 'Example property updated.'
    // setInterval(() => {
    //   this.counter++
    // }, 1000)
  },

  beforeMount() {
    console.log(`vm.$el has not been created yet.`)
  },

  mounted() {
    console.log(`vm.$el has been created and el has been replaced.`);
    this.property = 'Example property updated.'
    console.log(this.$el.textContent) // Example component.
  },

  beforeUpdate() {
    console.log(`At this point, Virtual DOM has not re-rendered or patched yet.`)
    // Logs the counter value every second, before the DOM updates.
    console.log(this.counter)
  },

  updated() {
    console.log(`At this point, Virtual DOM has re-rendered and patched.`)
    console.log(this.counter)
    // Fired every second, should always be true
    console.log(this.$refs['example-element1'].textContent === this.counter)
  },

  beforeDestroy() {
    console.log(`At this point, watchers, child components, and event listeners have not been teared down yet.`)
    // Perform the teardown procedure for exampleLeakyProperty.
    // (In this case, effectively nothing)
    this.exampleLeakyProperty = null
    delete this.exampleLeakyProperty
  },

  destroyed() {
    console.log(`At this point, watchers, child components, and event listeners have been torn down.`)
    console.log(this)
  }


}
</script>

<template>
  <div>
    <div id="on" @click="switchValue(true)" :class="{active: value}">On</div>
    <div id="off" @click="switchValue(false)" :class="{active: !value}">Off</div>
  </div>
</template>

<script>
export default {
  // data() {
  //   return {
  //     isOn: true
  //   };
  // },
  props: ["value"],
  methods: {
    switchValue(value) {
      this.$emit("input", value);
    }
  }
};
</script>

<style scoped>
#on,
#off {
  width: 40px;
  height: 20px;
  background-color: lightgray;
  padding: 2px;
  display: inline-block;
  margin: 10px -2px;
  box-sizing: content-box;
  cursor: pointer;
  text-align: center;
}

#on:hover,
#on.active {
  background-color: lightgreen;
}

#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
export const FruitMixin = {
  data() {
    return ({
      fruits: ['Banana', 'Apple', 'Orange'],
      filterText: ''
    })
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((element) => {
        return element.match(this.filterText);
      })
    }
  }
}
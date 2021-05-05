<template>
  <div class="counter">
    <h2 class="counter__title">Dummy Counter</h2>
      <div class="count">
        <CustomButton @on-click="decrement" :disabled="count <= -5">-</CustomButton>
        <input :class="getCountValueClasses" v-model.number="count" type="number"/>
        <CustomButton @on-click="increment">+</CustomButton>
      </div>
      <div v-if="historyExists" class="history">
        <h3>Your history:</h3>
         <p
          v-for="(operation, index) in history"
          class="history__entry"
          :key="index"
        >
          {{ operation }}
        </p>
        <CustomButton @on-click="reset">
          Reset
        </CustomButton>
      </div>
      <p v-else>No history found</p>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue';

export default {
  components: {
    CustomButton,
  },
  data () {
    return {
      count: 0,
      history: []
    }
  },
  methods: {
    increment() {
      this.count++;
      this.history.push('Increment');
    },
    decrement() {
      this.count--;
      this.history.push('Decrement');
    },
    reset() {
      this.count = 0;
      this.history = []
    },
  },
  computed: {
    getCountValueClasses() {
      return [
        'count__value',
        {
          'count__value--positive': this.count > 0,
          'count__value--negative': this.count < 0
        }
      ];
    },
    historyExists() {
      return this.history.length > 0;
    }
  }
}
</script>

<style scoped>
/* .cta::v-deep {
  padding: 10px 20px;
} */

.counter {
  padding: 50px 0px;
}

.counter__title {
  margin-top: 0px;
}

.count__value {
  font-size: 1.2rem;
  text-align: center;
  margin: 0 1rem;
}

.count__value--positive {
  border: 2px solid green;
  color: green;
}

.count__value--negative {
  border: 2px solid red;
  color: red;
}

.history {
  margin-top: 30px;
}

.history__entry {
  font-size: 1.2rem;
}
</style>
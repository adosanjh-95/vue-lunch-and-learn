<template>
  <button
    class="cta" 
    :disabled="disabled"
    @click="$emit('on-click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  }
}
</script>

<style scoped>
.cta {
  padding: 20px 40px;
  font-size: 1.5rem;
  background-color: lightblue;
  outline: none;
  border: none;
  cursor: pointer;
}

.cta:hover {
  opacity: 0.5;
  text-decoration: none;
}
</style>
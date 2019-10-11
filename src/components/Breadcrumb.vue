<template>
  <a-breadcrumb style="padding: 16px 0px 0px 20px; font-size: 16px;">
    <a-breadcrumb-item v-for="(item, index) in $route.meta.breadcrumb" :key="index">{{item}}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  data () {
    return {

    }
  }
}
</script>

<style scoped>

</style>

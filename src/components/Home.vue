<template>
  <a-layout class="home">
    <sidebar></sidebar>
    <a-layout>
      <a-layout-header style="background: #fff;" />
      <breadcrumb></breadcrumb>
      <a-layout-content :style="{ margin: '24px 16px', padding: '0px',background: '#fff', minHeight: '280px' }">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </a-layout-content>
      <a-layout-footer style="textAlign: center">
        &copy;2019 Demo created by Leif
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
import Breadcrumb from './Breadcrumb'
import Sidebar from './Sidebar'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  components: {
    Breadcrumb,
    Sidebar
  }
}
</script>

<style scoped>

</style>

<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:06:56
 * @FilePath: \vue3-system-test\src\views\HomeView.vue
 * @LastEditTime: 2023-03-04 09:48:22
-->
<template>
  <NavBar></NavBar>
  <FrameWork> 首页 </FrameWork>
</template>

<script>

import FrameWork from '@/components/FrameWork.vue';
import NavBar from '@/components/NavBar.vue';


export default {
  name: 'HomeView',
  components: {
    FrameWork,
    NavBar
  }

}
</script>

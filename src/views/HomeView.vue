<!--
 * @Author: NEFU AB-IN
 * @Date: 2023-02-28 18:06:56
 * @FilePath: \vue3-system-test\src\views\HomeView.vue
 * @LastEditTime: 2023-03-05 10:18:51
-->
<template>
  <NavBar></NavBar>
  <FrameWork>
    <h1 style="text-align: center;"> 首页 </h1>
    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            简介栏
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>本项目仿照Acwing Web开发应用课所做！</strong>
            一个简易的QQ空间平台
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo"
            aria-expanded="false" aria-controls="collapseTwo">
            功能栏
          </button>
        </h2>
        <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            支持登录、注册、文章的增删功能、用户的关注功能。
            其余功能未开放，因无对应的API
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
            注意！！！
          </button>
        </h2>
        <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
          data-bs-parent="#accordionExample">
          <div class="accordion-body">
            由于Vue的特性，以及vuex一刷新就会丢失数据的特性，导致一刷新就会掉登录状态
            站长已经尝试将token以及user存在localstorage中，但这样就不能做到局部刷新的效果，因为站长采用的验证方式是JWT验证，会不时用refresh刷新access
            每次如果都通过函数重新获取access，会导致页面加载bug，所以 登录后<strong>不 刷 新！</strong>
          </div>
        </div>
      </div>
    </div>
  </FrameWork>
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

<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>

    <h3>HomeContainer</h3>
  </div>
</template>

<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunboruList: [
        //保存轮播图的数组
        {
          img: "https://i.loli.net/2020/09/19/nwszEioL5WROFbl.jpg",
          url: "https://i.loli.net/2020/09/19/nwszEioL5WROFbl.jpg",
        },
        {
          img: "https://i.loli.net/2020/09/19/nwszEioL5WROFbl.jpg",
          url: "https://i.loli.net/2020/09/19/nwszEioL5WROFbl.jpg",
        },
        {
          img: "https://i.loli.net/2020/09/19/nwszEioL5WROFbl.jpg",
          url: "https://i.loli.net/2020/09/19/nwszEioL5WROFbl.jpg",
        },
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: green;
    }
    &:nth-child(3) {
      background-color: blue;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
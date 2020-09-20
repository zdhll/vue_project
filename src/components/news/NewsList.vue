<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars1.githubusercontent.com/u/67267330?s=60&v=4"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2020.12.12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars1.githubusercontent.com/u/67267330?s=60&v=4"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2020.12.12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://avatars1.githubusercontent.com/u/67267330?s=60&v=4"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2020.12.12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$http.get("http://localhost:3000/api/news").then((response) => {
      console.log(response);
    });
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 12px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
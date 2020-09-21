<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要评论的内容(最多120字)..." maxlength="120" v-model="content">

        </textarea>
        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

        <div class="cmt-list">
            <div class="cmt-item" v-for="item in list" :key="item.id">
                <div class="cmt-title">
                    第{{ item.id }}楼&nbsp;&nbsp;匿名用户&nbsp;&nbsp;发表时间:{{ item.date }}
                </div>
                <div class="cmt-body">
                    {{ item.content }}
                </div>
            </div>

        </div>


        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [],
            content: ''
        }
    },
    methods: {

        loadComments() {
            var list = JSON.parse(localStorage.getItem('cmts') || '[]');
            this.list = list;
        },

        postComment() {
            var comment = { id: Date.now(), date: Date.now(), content: this.content };

            var list = JSON.parse(localStorage.getItem('cmts') || '[]');
            list.unshift(comment);
            localStorage.setItem('cmts', JSON.stringify(list));
            this.content = '';
            this.loadComments();
        },
    },
    created() {
        this.loadComments();
    }
}
</script>

<style lang="scss" scoped>
.cmt-container {
    h3{
        font-size: 18px;
    }
    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }

    .cmt-list {
        margin: 5px 0;
        .cmt-item {
            font-size: 13px;
            .cmt-title {
                line-height: 30px;
                background-color: #ccc;
            }
            .cmt-body {
                line-height: 35px;
                text-indent: 2em;
            }
        }
    }
}

</style>
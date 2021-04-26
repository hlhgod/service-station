<template>
    <div class="container">
        <Headbar title="党建服务">
            <i
                class="iconfont icon-web-icon-"
                slot="left"
                @click="handleReturn"
            ></i>
        </Headbar>
        <div class="article" :style="heightstyle">
            <div class="title">
                {{ article.title }}
            </div>
            <div class="time">
                {{ article.created_at }}
            </div>
            <div class="content" v-html="article.content">
                <!-- {{ article.content }} -->
            </div>
        </div>
    </div>
</template>
<script>
import fetch from "../api/fetch";
import Headbar from "../components/Headbar";
export default {
    data() {
        return {
            article: {},
            heightstyle: {
                height: "300px",
            },
        };
    },
    mounted() {
        this.heightstyle.height =
            document.documentElement.clientHeight - 120 + "px";
        this.getDetailData();
    },
    methods: {
        async getDetailData() {
            let article = await fetch(
                `/party-building/${this.$route.params.id}`
            );
            console.log(article);
            this.article = article;
        },
        handleReturn() {
            this.$router.back(-1);
        },
    },
    components: {
        Headbar,
    },
};
</script>
<style lang="scss" scoped>
.container {
    i {
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #eee;
    }
    .article {
        background: #fff;
        position: absolute;
        top: 40px;
        width: 90%;
        overflow-y: auto;
        // box-sizing: border-box;
        display: flex;
        flex-direction: column;
        // margin: 10px;
        padding: 5%;
        align-items: center;
        // text-align: center;
        .title {
            font-size: 24px;
            text-align: center;
            margin-bottom: 10px;
        }
        .time {
            font-size: 12px;
            margin-bottom: 10px;
        }
        .content {
            font-size: 20px;
            
        }
    }
}
</style>
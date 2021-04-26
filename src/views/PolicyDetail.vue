<template>
    <div class="container">
        <Headbar title="政策法规">
            <i
                class="iconfont icon-web-icon-"
                slot="left"
                @click="handleReturn"
            ></i>
        </Headbar>
        <div class="policy" :style="heightstyle">
            <div class="title">
                {{ policy.title }}
            </div>
            <div class="time">
                {{ policy.created_at }}
            </div>
            <div class="content" v-html="policy.content">
                <!-- {{ policy.content }} -->
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
            policy: {},
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
            let policy = await fetch(
                `/policies/${this.$route.params.id}`
            );
            console.log(policy);
            this.policy = policy;
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
    .policy {
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
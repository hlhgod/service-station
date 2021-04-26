<template>
    <div class="container">
        <Headbar title="招商详细信息">
            <i
                class="iconfont icon-web-icon-"
                slot="left"
                @click="handleReturn"
            ></i>
        </Headbar>
        <div class="investmentInfo" :style="heightstyle">
            <div class="title">
                {{ investmentInfo.title }}
            </div>
            <div class="time">
                {{ investmentInfo.created_at }}
            </div>
            <div class="content">
                {{ investmentInfo.content }}
            </div>
            <div class="dv1">
                <div class="liner"></div>
                <div class="dv2">
                    <!-- <i class="iconfont icon-star"></i> -->
                    <span>附件下载</span>
                </div>
            </div>
            <div class="attachmentWrap">
                <div
                    class="attachment"
                    v-for="(attachment, index) in investmentInfo.attachment"
                    :key="index"
                >
                <i class="iconfont icon-fujian"></i>
                    <a :href="attachment.url" v-if="attachment.rul!==''">
                        
                        <span>attachment.name</span>
                    </a>
                </div>
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
            investmentInfo: {},

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
            let investmentInfo = await fetch(
                `/merchant/${this.$route.params.id}`
            );

            this.investmentInfo = investmentInfo;
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
@import "../assets/css/mixin.scss";
.container {
    i {
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #eee;
    }
    .investmentInfo {
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
        .dv1 {
            width: 327px;
            height: 22px;
            position: relative;
            margin: 10px auto;
        }
        .liner {
            width: 100%;
            height: 1px;
            background-color: #eee;
            position: relative;
            top: 50%;
        }
        .dv2 {
            text-align: center;
            width: 120px;
            height: 22px;
            line-height: 22px;
            margin: 0 auto;
            background-color: #eee;
            position: relative;
            z-index: 3;
            border-radius: 3px;
        }
        .attachmentWrap {
            // @include top-border-1px(#e4e4e4);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: flex-start;
            // height: 80px;
            .attachment span{
                margin-left: 10px;
            }
            i{
                font-size: 24px;
                color: brown;
            }
        }
    }
}
</style>
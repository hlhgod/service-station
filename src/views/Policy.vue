<template>
    <div class="container">
        <!-- 头部图片 -->
        <Headbar title="政策法规">
            <i class="iconfont icon-web-icon-" slot="left" @click="handleReturn"></i>
        </Headbar>
        <div class="titlePic">
            <img :src="titlePic" alt="" />
        </div>
        <!-- 文章列表 -->
        <div  class="wrapper" ref="wrapper" :style="heightstyle">
            <div class="wrapper-scroll">
                <div
                    class="policy"
                    v-for="policy in policys" 
                    :key="policy.id" @click="handleToDetail(policy.id)"
                >
                    <div class="title">
                        {{ policy.title }}
                    </div>
                    <div class="subtitle">
                        {{ policy.brief }}
                    </div>
                    <div class="createdtime">
                        {{ policy.created_at }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import fetch from "../api/fetch";
import Headbar from "../components/Headbar";
export default {
    data() {
        return {
            titlePic:
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2722626145,4174498025&fm=26&gp=0.jpg",
            policys: [],
            heightstyle: {
                height: "300px",
            },
        };
    },
    components:{
         Headbar
    },
    mounted() {
        
        this.heightstyle.height =
            document.documentElement.clientHeight - 240 + "px";
        this.getDangjianList();
        
    },
    methods: {
        async getDangjianList() {
            let policys = await fetch("/policies");
            console.log(policys);
            this.policys=policys
        },
        handleToDetail(e){
            this.$router.push(`/policydetail/${e}`)
        },
        handleReturn(){
            this.$router.back(-1)
        }
    },
    watch:{
        policys(val){
            this.$nextTick(() => {
            if (!this.scroll) {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    click: true,
                    scrollY: true,
                    bindToWrapper: true
                });
                // this.scroll.on("touchend", (pos) => {
                //   // 下拉动作
                //   if (pos.y > 50) {
                //     this.loadData();
                //   }
                // });
            } else {
                this.scroll.refresh();
            }
            });
        }
    }
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
    .titlePic {
        position: absolute;
        top: 40px;
        height: 150px;
        width: 100%;
        img {
            height: 150px;
            width: 100%;
        }
    }
    .wrapper {
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 190px;
        // padding: 10px;
        // box-sizing: border-box;
        .wrapper-scroll {
            position: relative;
            .policy {
                overflow: hidden;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: left;
                margin: 10px;
                padding: 10px;
                // box-sizing: border-box;
                .title {
                    width: 90%;
                    font-size: 20px;
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                    margin-bottom: 10px;
                }
                .subtitle {
                    font-size: 14px;
                }
                .createdtime {
                    font-size: 12px;
                    align-self: flex-end;
                }
                @include bottom-border-1px(#e4e4e4);
            }
        }
    }
}
</style>
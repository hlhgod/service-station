<template>
    <div class="container">
        <!-- 头部图片 -->
        <Headbar title="百企招百商">
            <i class="iconfont icon-web-icon-" slot="left" @click="handleReturn"></i>
        </Headbar>
    
        <!-- 文章列表 -->
        <div  class="wrapper" ref="wrapper" :style="heightstyle">
            <div class="wrapper-scroll">
                <div
                    class="investmentInfo"
                    v-for="investmentInfo in investmentInfos" 
                    :key="investmentInfo.id" @click="handleToDetail(investmentInfo.id)"
                >
                    
                        <p class="title">{{ investmentInfo.title }}</p>
                        <p class="createdtime">{{ investmentInfo.created_at }}</p>
                        
                    
                    
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
            investmentInfos: [],
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
            document.documentElement.clientHeight - 90 + "px";
        this.getInvestmentInfos();
        
    },
    methods: {
        async getInvestmentInfos() {
            let investmentInfos = await fetch("/merchant");
            console.log(investmentInfos);
            this.investmentInfos=investmentInfos
        },
        handleToDetail(e){
            this.$router.push(`/investmentinfodetail/${e}`)
        },
        handleReturn(){
            this.$router.back(-1)
        }
    },
    watch:{
        investmentInfos(val){
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
    
    .wrapper {
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 40px;
        background: #fff;
        // padding: 10px;
        // box-sizing: border-box;
        .wrapper-scroll {
            position: relative;
            .investmentInfo {
                // overflow: hidden;
                // display: flex;
                // flex-direction: column;
                // align-items: flex-start;
                // justify-content: space-between;
                margin: 10px;
                // padding: 10px;
                // box-sizing: border-box;
                .title {
                    // width: 90%;
                    font-size: 20px;
                    // overflow: hidden;
                    // white-space: nowrap;
                    // text-overflow: ellipsis;
                    margin-bottom: 10px;
                    flex:1;
                }
                
                .createdtime {
                    font-size: 12px;
                    // align-self: flex-end;
                }
                @include bottom-border-1px(#e4e4e4);
            }
        }
    }
}
</style>
<template>
    <div>
        <Headbar title="蒙商智慧服务站">
            <i class="iconfont icon-zhihuijianwu logo" slot="left"></i>
        </Headbar>
        <div class="home">
            <div class="swiper">
                <div class="swiper-container" v-if="swiperList.length">
                    <div class="swiper-wrapper">
                        <div
                            class="swiper-slide"
                            v-for="(pic, index) in swiperList"
                            :key="index"
                        >
                            <img :src="pic" />
                        </div>
                    </div>
                    <!-- 如果需要分页器 -->
                    <div class="swiper-pagination"></div>
                </div>
                <div v-else>
                    <img src="../../public/images/home_back.svg" />
                </div>
            </div>

            <!-- 中间图片展示内容 -->
            <div class="content">
                <div class="left">
                    <div class="service" @click="handleDangjianServer">
                        <i class="iconfont icon-dangyuan"></i>
                        <span>党建服务</span>
                    </div>
                    <div class="hurrey" @click="handleHurreyBusiness">
                        <i class="iconfont icon-wenhao"></i>
                        <span>兴百企</span>
                    </div>
                </div>
                <div class="right">
                  <div class="talk" @click="handleTalk">
                        <i class="iconfont icon-xinzangke"></i>
                        <span>政企恳谈</span>
                    </div>
                    
                    <div class="investment" @click="handleInvestment">
                        <i class="iconfont icon-qiyegongchangjianzhu2"></i>
                        <span>百企招百商</span>
                    </div>
                </div>
            </div>
            <!-- 相关推荐 -->
            <div class="recomment">
                <div class="dv1">
                    <div class="liner"></div>
                    <div class="dv2">
                        <!-- <i class="iconfont icon-star"></i> -->
                        <span>热门推荐</span>
                    </div>
                </div>
                <div class="recommentItem">
                    <div @click="handlePolicy">政策信息</div>
                    <div @click="handleFinance">金融服务</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
import Headbar from "../components/Headbar";
// import Vue from 'vue'

// @ is an alias to /src

export default {
    data() {
        return {
            swiperList: [
                "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1079901460,3687655931&fm=26&gp=0.jpg",
                "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2722626145,4174498025&fm=26&gp=0.jpg",
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1785020966,1770603187&fm=26&gp=0.jpg",
            ],
        };
    },
    components: { Headbar },
    methods: {
        handleDangjianServer() {
            this.$router.push("/dangjian");
        },
        handleHurreyBusiness(){
            this.$router.push("/hurreybusiness");
        },
        handleInvestment(){
            this.$router.push("/investmentinfo");
        },
        handlePolicy(){
            this.$router.push("/policy")
        },
        
        handleTalk(){
            this.$router.push("/talk")
        },
        handleFinance(){
            this.$router.push("/bridge")
        }
    },
    mounted() {
        new Swiper(".swiper-container", {
            loop: true, // 可以循环轮播
            // 如果需要分页器
            pagination: {
                el: ".swiper-pagination",
            },
        });
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";
.logo {
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #eee;
    }
.home {
    width: 100%;
    position: fixed;
    top: 40px;
    bottom: 50px;
    
}
.swiper {
    width: 100%;
    height: 150px;
    .swiper-container {
        width: 100%;
        height: 100%;
        .swiper-slide {
            img {
                height: 150px;
                width: 100%;
            }
        }
    }
}
.content {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-around;
    padding: 10px;
    box-sizing: border-box;
    width: 100%;
    height: 55%;

    .left {
        display: flex;
        height: 100%;

        flex: 1;
        margin-right: 10px;
        flex-direction: column;
        .service {
            margin-bottom: 10px;
            border-radius: 5%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: cadetblue;
            i {
                font-size: 50px;
                color: #eee;
            }
            span {
                font-size: 16px;
                color: #eee;
            }
        }
        .hurrey {
            border-radius: 5%;
            
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 1;
            background: gray;
            span {
                font-size: 16px;
                color: #eee;
            }
        }
    }
    .right {
        display: flex;
        flex: 1;
        height: 100%;

        flex-direction: column;
        .talk {
            border-radius: 5%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            flex: 2;
            margin-bottom: 10px;
            background: gray;
            span {
                font-size: 16px;
                color: #eee;
            }
        }
        
        .investment {
            i {
                font-size: 45px;
            }
            border-radius: 5%;
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            background: cadetblue;
            span {
                font-size: 16px;
                color: #eee;
            }
        }
    }
}
i {
    font-size: 50px;
    color: #fff;
}
.recomment {
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
    .recommentItem {
        width: 100%;
        display: flex;
        justify-content: center;

        div {
            width: 40%;
            background: #eee;
            border-radius: 5px;
            height: 30px;
            margin: 10px;
            line-height: 30px;
            text-align: center;
        }
    }
}
a{
    text-decoration:none;
    color: #000;
}
</style>

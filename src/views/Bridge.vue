<template>
    <div class="container">
        <!-- 头部栏 -->
        <Headbar title="银企桥">
            <i
                class="iconfont icon-web-icon-"
                slot="left"
                @click="handleReturn"
            ></i>
        </Headbar>

        <!-- 企业列表 -->
        <div class="wrapper" ref="wrapper" :style="heightstyle">
            <div class="wrapper-scroll">
                <div
                    class="bridge"
                    v-for="bridge in bridges"
                    :key="bridge.id"
                >
                    <div class="logo">
                        <img :src="bridge.icon" alt="" />
                    </div>
                    <div class="bridgeinfo">
                        <div class="message">
                            <div class="title">
                                {{ bridge.name }}
                            </div>
                            <div class="website">
                                To：<a :href="bridge.url">{{
                                    bridge.url
                                }}</a>
                            </div>
                            
                        </div>
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
            bridges: [],
            heightstyle: {
                height: "300px",
            },
        };
    },
    components: {
        Headbar,
    },
    mounted() {
        this.heightstyle.height =
            document.documentElement.clientHeight - 90 + "px";
        this.getbridgeList();
    },
    methods: {
        async getbridgeList() {
            let bridges = await fetch("/bank-enterprise");
            this.bridges = bridges;
        },
        handleToDetail(e) {
            // this.$router.push(`/dangjiandetail/${e}`);
        },
        handleReturn() {
            this.$router.back(-1);
        },
    },
    watch: {
        bridges(val) {
            this.$nextTick(() => {
                if (!this.scroll) {
                    this.scroll = new BScroll(this.$refs.wrapper, {
                        click: true,
                        scrollY: true,
                        bindToWrapper: true,
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
        },
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
        // color: #eee;
    }

    .wrapper {
        background: #fff;
        position: absolute;
        overflow: hidden;
        width: 100%;
        top: 40px;
        // padding: 10px;
        // box-sizing: border-box;
        .wrapper-scroll {
            position: relative;
            .bridge {
                display: flex;
                flex-direction: row;
                .logo img {
                    width: 50px;
                    height: 50px;
                    margin: 10px 10px;
                    border-radius: 10px;
                }
                // box-sizing: border-box;
                .bridgeinfo {
                    overflow: hidden;
                    align-items: flex-start;
                    justify-content: left;
                    margin: 10px;
                    // padding: 10px;
                    .title {
                        width: 90%;
                        font-size: 20px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        // margin-bottom: 10px;
                    }
                    .weblink {
                        font-size: 14px;
                    }
                    .website {
                        font-size: 14px;
                        
                    }
                    
                }

                @include bottom-border-1px(#e4e4e4);
            }
        }
    }
}
</style>
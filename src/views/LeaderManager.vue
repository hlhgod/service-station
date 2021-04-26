<template>
    <div class="container">
        <!-- 头部栏 -->
        <Headbar title="领导构成">
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
                    class="leader"
                    v-for="leader in leaders"
                    :key="leader.id"
                    @click="handleToDetail(leader.id)"
                >
                    <div class="logo">
                        <img :src="leader.avatar" alt="" />
                    </div>
                    <div class="leaderinfo">
                        <div class="message">
                            <div class="title">
                                {{ leader.name }}
                                <span class="office">{{ leader.office }}</span>
                            </div>
                            <div class="department">
                                部门：{{ leader.department }}
                            </div>
                            <div class="contact">
                                联系方式：{{ leader.contact_way }}
                            </div>
                            <div class="identity">
                                <div>
                                    <span>出生年月：{{ leader.birth }}</span
                                    ><span
                                        >性别：{{
                                            leader.gender === 1 ? "男" : "女"
                                        }}</span
                                    >
                                </div>
                                <div>
                                    <div>籍贯：{{ leader.domicile }}</div>
                                    <div>住址：{{ leader.address }}</div>
                                </div>
                                
                            </div>
                            <div class="detail">
                                工作经历：{{ leader.detail }}
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
            leaders: [],
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
        this.getleaderList();
    },
    methods: {
        async getleaderList() {
            let leaders = await fetch("/leader-team");
            this.leaders = leaders;
        },
        handleToDetail(e) {
            // this.$router.push(`/dangjiandetail/${e}`);
        },
        handleReturn() {
            this.$router.back(-1);
        },
    },
    watch: {
        leaders(val) {
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
            .leader {
                display: flex;
                flex-direction: row;
                .logo img {
                    width: 100px;
                    height: 100px;
                    margin: 10px 10px;
                    border-radius: 10px;
                }
                // box-sizing: border-box;
                .leaderinfo {
                    
                    align-items: flex-start;
                    justify-content: left;
                    margin: 10px;
                    // padding: 10px;
                    .title {
                        width: 90%;
                        font-size: 20px;
                        
                        white-space: nowrap;
                        
                        .office {
                            font-size: 12px;
                            margin-left: 10px;
                        }
                    }
                    .department,
                    .contact,
                    .detail {
                        font-size: 12px;
                    }
                    .identity {
                        font-size: 12px;
                        
                    }

                    .address {
                        font-size: 12px;
                    }
                }

                @include bottom-border-1px(#e4e4e4);
            }
        }
    }
}
</style>
<template>
    <div class="container">
        <!-- 头部栏 -->
        <Headbar title="兴百企">
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
                    class="official"
                    v-for="official in officials"
                    :key="official.id"
                    @click="handleToDetail(official.id)"
                >
                    <div class="logo">
                        <img :src="official.icon" alt="" />
                    </div>
                    <div class="officialinfo">
                        <div class="message">
                            <div class="title">
                                {{ official.name }}
                            </div>
                            <div class="website">
                                网址：<a :href="official.official_website">{{
                                    official.official_website
                                }}</a>
                            </div>
                            <div class="address">
                                地址：{{ official.address }}
                            </div>
                            <div class="contact_way">
                                联系方式： {{ official.contact_way }}
                            </div>
                            <div class="introduction">
                                简介： {{ official.introduction }}
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
            officials: [],
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
        this.getOfficialList();
    },
    methods: {
        async getOfficialList() {
            let officials = await fetch("/promote-enterprise");
            this.officials = officials;
        },
        handleToDetail(e) {
            // this.$router.push(`/dangjiandetail/${e}`);
        },
        handleReturn() {
            this.$router.back(-1);
        },
    },
    watch: {
        officials(val) {
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
            .official {
                display: flex;
                flex-direction: row;
                .logo img {
                    width: 100px;
                    height: 100px;
                    margin: 10px 10px;
                    border-radius: 10px;
                }
                // box-sizing: border-box;
                .officialinfo {
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
                        align-self: flex-end;
                    }
                    .address {
                        font-size: 14px;
                    }
                    .contact_way {
                        font-size: 14px;
                    }
                    .introduction {
                        font-size: 14px;
                        // overflow: hidden;
                        // white-space: nowrap;
                        // text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 4;
                        overflow: hidden;
                    }
                }

                @include bottom-border-1px(#e4e4e4);
            }
        }
    }
}
</style>
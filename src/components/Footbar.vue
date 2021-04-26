<template>
    <div >
        <ul class="footer">
            <router-link to="/home" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-shouye"></i>
                    <p>首页</p>
                </span>
            </router-link>
            <router-link to="/leadermanager" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-huiyuanguanli"></i>
                    <p>领导构成</p>
                </span>
            </router-link>
            <router-link to="profiles" tag="li" activeClass="myactive">
                <span>
                    <i class="iconfont icon-huiyuan"></i>
                    <p>会员展示</p>
                </span>
            </router-link>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
@import '../assets/css/mixin.scss';
    .myactive{
        color:red;
    }
   
    div{
        position:fixed;
        bottom:0px;
        left:0px;
        
        height:50px;
        width:100%;
        background: #eee;
        color:#39a9ed;
        ul{
            @include top-border-1px(#e4e4e4);
            display: flex;
            height: 50px;
            li{
                flex:1;
                text-align: center;
                span{
                    font-size: 14px;
                    display: flex;
                    height: 100%;
                    flex-direction: column;
                    justify-content: space-around;
                    align-items: center;
                    i{
                        font-size: 24px;
                    }
                }

                
            }
            
        }
    }
</style>
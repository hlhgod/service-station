<template>
    <div class="container">
        <!-- 头部图片 -->
        <Headbar title="政企恳谈">
            <i
                class="iconfont icon-web-icon-"
                slot="left"
                @click="handleReturn"
            ></i>
        </Headbar>
        <div class="talkcontent">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="department"
                    name="department"
                    label="单位名称"
                    placeholder="单位名称"
                    :rules="[{ required: true, message: '请填写单位名称' }]"
                />
                <van-field
                    v-model="linkman"
                    name="linkman"
                    label="联系人"
                    placeholder="联系人"
                    :rules="[{ required: true, message: '请填写联系人' }]"
                />
                <van-field
                    v-model="phone"
                    type="tel"
                    name="phone"
                    label="联系电话"
                    placeholder="联系电话"
                    :rules="[{ required: true, message: '请填写联系电话' }]"
                />
                <van-field name="radio" label="建议类型">
                    <template #input>
                        <van-radio-group
                            v-model="advanceType"
                            direction="horizontal"
                        >
                            <van-radio name="建议">建议</van-radio>
                            <van-radio name="投诉">投诉</van-radio>
                            <van-radio name="其他">其他</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>
                <van-field
                    v-model="content"
                    name="content"
                    label="意见建议"
                    type="textarea"
                    placeholder="意见建议"
                    :rules="[{ required: true, message: '' }]"
                />
                <van-field name="uploader" label="图片上传" multiple>
                    <template #input>
                        <van-uploader
                            v-model="uploader"
                            :max-count="6"
                            preview-size="60px"
                        />
                    </template>
                </van-field>

                <van-field
                    name="uploader"
                    label="文件上传"
                    multiple
                    :max-count="3"
                >
                    <template #input>
                        <van-uploader :max-count="3" :before-read="filebeforeRead" v-model="attachments" preview-size="60px" 
                          accept=".doc,.docx,.xls,.xlsx,.pdf">
                            <i class="iconfont icon-fujian" style="color:#000"></i>
                        </van-uploader>
                    </template>
                </van-field>

                <div style="margin: 16px">
                    <van-button round block type="info" native-type="submit"
                        >提交</van-button
                    >
                </div>
            </van-form>
        </div>
    </div>
</template>
<script>
import BScroll from "better-scroll";
import fetch from "../api/fetch";
import Headbar from "../components/Headbar";
import Vue from "vue";
import axios from 'axios'
import {HOST} from '../api/host'
import { Form, Field, Uploader, Button, RadioGroup, Radio, Toast } from "vant";


Vue.use(Form).use(Field).use(Uploader).use(Button).use(Radio).use(RadioGroup).use(Toast);

export default {
    data() {
        return {
            department: "", //单位名称
            linkman: "", ///联系人
            phone: "", //电话
            content: "", //意见
            pics: [], //图片
            attachments: [], //附件
            advanceType: "", //建议类型
            uploader: [],
            uploaderfiles: [],

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
    },
    methods: {
        onSubmit(values) {
            // console.log('uploader:',this.uploader);
            
            // this.attachments.map((item,index)=>item.file)
            // console.log("upload_map:",uploader)
            const formData=new FormData()
            formData.append("enterprise_name",this.department);
            formData.append("name",this.linkman);
            formData.append("contact_way",this.phone);
            formData.append("talks_type",this.advanceType);
            formData.append("detail",this.content);
            // formData.append("attachment_pic",uploader);
            
            // formData.append("attachment_file",attachments);
            this.uploader.map((item,index)=>{
                formData.append(`image${index}`,item.file);
                })
            this.attachments.map((item,index)=>{
                formData.append(`file${index}`,item.file);
                })
            axios.post(`${HOST}/talks`,formData,{
                header:{
                    "content-type":"multipart/form-data"
                }
            })
            .then(res=>{
                console.log(res);
            })

        },
        handleReturn() {
            this.$router.back(-1);
        },
        filebeforeRead(file) {
            console.log(this.attachments)
            if(this.attachments.length>3){
                Toast("文件不能超过3个")
                return false;
            }
            
            return true;
        },
    },
};
</script>

<style lang="scss" scoped>
@import "../assets/css/mixin.scss";
van-radio-group {
    margin: 30px;
}
.container {
    i {
        font-size: 32px;
        line-height: 40px;
        text-align: center;
        color: #eee;
    }
    .talkcontent {
        background: #eee;
        position: absolute;
        top: 40px;
        width: 100%;
        height: 1000px;
    }
}
</style>
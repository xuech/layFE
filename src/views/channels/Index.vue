<template>
    <div class="layui-container">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md8">
                <Top />
                <List />
            </div>
            <div class="layui-col-md4">
                <Tips />
                <Sign />
                <HotList />
                <Ads />
                <Links />
            </div>
        </div>
    </div>
</template>

<script>

import Top from "@/components/content/LayTop.vue";
import Tips from '@/components/sideBar/LayTips'
import Sign from '@/components/sideBar/LaySign'
import HotList from '@/components/sideBar/LayHotList'
import Ads from '@/components/sideBar/LayAds'
import Links from '@/components/sideBar/LayLinks'
import List from '@/components/content/LayList'

export default {
    name: 'Home',
    components: {
        Tips,
        Sign,
        HotList,
        Ads,
        Links,
        Top,
        List
    }
}
</script>

<style lang="scss" scoped>

</style>
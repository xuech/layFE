<template>
    <div class="layui-container">
        <div class="layui-row layui-col-space15">
            <div class="layui-col-md8">
                <List />
            </div>
            <div class="layui-col-md4">
                <!-- <HotList /> -->
                <Ads />
                <Links />
            </div>
        </div>
    </div>
</template>

<script>

import Tips from '@/components/sideBar/LayTips'
import Ads from '@/components/sideBar/LayAds'
import Links from '@/components/sideBar/LayLinks'
import List from '@/components/content/LayList'

export default {
    name: 'template1',
    components: {
        Tips,
        Ads,
        Links,
        List
    }
}
</script>

<style lang="scss" scoped>

</style>
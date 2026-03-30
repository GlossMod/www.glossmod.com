<script setup lang="ts">
type FriendLink = {
    name: string;
    url: string;
};

const friendLinks = ref<FriendLink[]>([]);
const pending = ref(true);
const failed = ref(false);

async function loadFriendLinks() {
    try {
        const response = await fetch("https://api.aoe.top/api/friendly/links");
        if (!response.ok) {
            throw new Error(`Failed to load links: ${response.status}`);
        }

        const data = await response.json();
        friendLinks.value = Array.isArray(data) ? data : [];
    } catch (error) {
        console.error(error);
        failed.value = true;
    } finally {
        pending.value = false;
    }
}

onMounted(loadFriendLinks);
</script>
<template>
    <footer
        class="flex items-center justify-center p-4 text-sm text-muted-foreground">
        <div class="flex w-full max-w-6xl flex-col items-center gap-5">
            <div>
                Copyright © 2019 - {{ new Date().getFullYear() }} Gloss Mod组.
                All rights reserved.
            </div>
            <div class="flex items-center justify-center">
                <a
                    href="https://beian.miit.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center justify-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-full border border-transparent px-3 py-1.5 hover:bg-card/50"
                    >沪ICP备2026003781号-2</a
                >
            </div>
            <div class="w-full rounded-[2rem] border border-border/60 bg-card/60 p-5 text-left shadow-sm">
                <p class="text-sm font-semibold tracking-[0.24em] text-primary uppercase">友情链接</p>
                <p class="mt-2 text-sm text-muted-foreground">实时同步站群最新友链，为 Gloss Mod 组站点页脚补齐统一入口。</p>

                <div v-if="pending" class="mt-4 rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                    友链加载中...
                </div>
                <div v-else-if="failed" class="mt-4 rounded-2xl border border-border/50 bg-background/70 px-4 py-3 text-sm text-muted-foreground">
                    友链加载失败，请稍后重试。
                </div>
                <div v-else class="mt-4 flex flex-wrap gap-3">
                    <a
                        v-for="link in friendLinks"
                        :key="link.url"
                        :href="link.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="rounded-full border border-border/70 bg-background px-4 py-2 text-sm text-foreground/80 transition hover:-translate-y-0.5 hover:border-primary/50 hover:text-primary"
                    >
                        {{ link.name }}
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped></style>

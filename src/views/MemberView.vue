<template>
  <div class="page members">
    <h1>Members</h1>

    <section v-for="group in groups" :key="group.title">
      <h2>{{ group.title }}</h2>
      <ul class="members__list">
        <li v-for="member in group.members" :key="member.name">
          <h3>{{ member.name }}</h3>
          <span class="members__research">{{ member.research }}</span>
        </li>
      </ul>
    </section>

    <p class="members__others">他 +20人</p>
  </div>
</template>

<script setup lang="ts">
const groups: {
  title: string
  members: { name: string; research: string }[]
}[] = [
  {
    title: '博士課程',
    members: [
      { name: 'D3 quantan', research: '物体検出' },
      { name: 'D3 hamachu', research: '行動変容' }
    ]
  },
  {
    title: '修士課程',
    members: [
      { name: 'M2 hiyon', research: 'メタ学習' },
      { name: 'M2 ojus', research: '分布外検知' },
      { name: 'M1 zackey', research: '動画検索' }
    ]
  },
  {
    title: '学部生',
    members: [
      { name: 'B4 aokiti', research: '物体検出改善' },
      { name: 'B4 ouga', research: '反実仮想' },
      { name: 'B4 tyler', research: '音楽モデル' },
      { name: 'B4 shuuya', research: '野球判定' },
      { name: 'B4 komiya', research: '降雨量推定' },
      { name: 'B4 mashu', research: '音楽分類' },
      { name: 'B4 mint', research: '飛距離補正' },
      { name: 'B4 itta', research: '種目分類' },
      { name: 'B3 kojo', research: 'LLMメタ学習' },
      { name: 'B3 FuwaKing', research: '継続学習' }
    ]
  }
]
</script>

<style lang="scss">
.members {
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
    gap: 0 clamp(20px, 3vw, 40px);

    li {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      gap: 16px;
      padding: calc(var(--u) * 0.5) 0;
      border-bottom: 1px solid var(--rule);
    }
  }

  &__research {
    color: var(--dim);
    text-align: right;
  }

  &__others {
    color: var(--dim);
  }
}
</style>

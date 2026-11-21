<template>
  <div class="page research">
    <h1>Research</h1>
    <p>
      d-hacksでは人工知能に関する多様な個人研究のほか、地域自治体や民間企業との共同プロジェクトにも多数取り組んでいます。
    </p>

    <p v-if="loading" class="research__state">研究データを読み込み中...</p>

    <p v-else-if="error" class="research__state research__state--error">{{ error }}</p>

    <ul v-else class="research__list">
      <li v-for="item in researchItems" :key="item._id" class="research__item">
        <div class="research__thumbnail">
          <img :src="imageSrc(item)" :alt="item.title" loading="lazy" />
        </div>
        <div class="research__content">
          <h2>{{ item.title }}</h2>
          <ul class="research__tags" v-if="item.tags.length">
            <li v-for="tag in item.tags" :key="tag.label" :class="getTagClass(tag.color)">
              {{ tag.label }}
            </li>
          </ul>
          <p>{{ item.description }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Tag {
  label: string
  color: string
}

interface ResearchItem {
  _id: string
  imageUrl: string
  title: string
  tags: Tag[]
  description: string
}

interface ApiResponse {
  success: boolean
  data: ResearchItem[]
}

// On the official site the API is same-origin (/api). A build hosted elsewhere
// points at the lab server for images and reads the list from a saved copy,
// because the API does not answer cross-origin requests.
const apiOrigin = import.meta.env.VITE_API_ORIGIN ?? ''
const listUrl = import.meta.env.VITE_RESEARCH_JSON
  ? `${import.meta.env.BASE_URL}${import.meta.env.VITE_RESEARCH_JSON}`
  : `${apiOrigin}/api/research-items`

const researchItems = ref<ResearchItem[]>([])
const loading = ref(true)
const error = ref<string | null>(null)

const fetchResearchItems = async () => {
  try {
    loading.value = true
    error.value = null

    const response = await axios.get<ApiResponse>(listUrl)

    if (response.data.success) {
      researchItems.value = response.data.data
    } else {
      error.value = '研究データの取得に失敗しました'
    }
  } catch (err) {
    console.error('API Error:', err)
    error.value = 'サーバーとの通信でエラーが発生しました'
  } finally {
    loading.value = false
  }
}

const imageSrc = (item: ResearchItem) => `${apiOrigin}/api${item.imageUrl}`

const getTagClass = (color: string) => {
  if (color === '#2ab0bf') {
    return 'pj'
  } else if (color === '#616161') {
    return 'internal'
  } else {
    return 'international'
  }
}

onMounted(() => {
  fetchResearchItems()
})
</script>

<style lang="scss">
.research {
  &__state {
    color: var(--dim);

    &--error {
      color: #b3261e;
    }
  }

  &__list {
    margin-top: calc(var(--u) * 2);
    border-top: 1px solid var(--rule);
  }

  &__item {
    display: grid;
    grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
    gap: var(--u) clamp(24px, 4vw, 56px);
    align-items: start;
    padding: calc(var(--u) * 1.6) 0;
    border-bottom: 1px solid var(--rule);

    h2 {
      margin-top: 0;
      padding-bottom: 0;
      border-bottom: 0;
    }

    p {
      margin-top: calc(var(--u) * 0.6);
    }
  }

  &__thumbnail img {
    width: 100%;
    border: 1px solid var(--rule);
    background: #fff;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0 1.2em;
    margin-top: calc(var(--u) * 0.2);
    color: var(--dim);

    .pj {
      color: var(--brand);
    }
  }
}

@media (max-width: 760px) {
  .research__item {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>

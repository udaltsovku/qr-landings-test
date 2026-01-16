<script setup>
definePageMeta({
  layout: "default",
});

const route = useRoute();

const number = computed(() => Number(route.query.number));

const { data, pending, error } = await useFetch('/api/partners', {
  query: {
    number,
    fakeRequest: false,
  },
})

const email = ref('')
const password = ref('')
const loading = ref(false)
const err = ref(null)
const success = ref(false)

const submit = async () => {
  err.value = null
  success.value = false

  if (!email.value || !password.value) {
    err.value = 'Заполни email и password'
    return
  }

  loading.value = true
  try {
    await $fetch('/api/users', {
      method: 'POST',
      body: {
        email: email.value,
        password: password.value,
      },
    })

    success.value = true
    email.value = ''
    password.value = ''
  } catch (e) {
    error.value = e?.data?.message || 'Ошибка создания'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <h1>Страница админки {{ number }}</h1>
  <img :src="`${data.logoUrl}?w=200&h=100&fit=fill&f=center`" alt="">
  {{ data }}
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id deleniti dolore quo ullam animi facilis rem quisquam
    maxime odit beatae dignissimos minima mollitia voluptatem, commodi possimus cumque, veniam optio autem!
  </p>

  <div style="max-width: 320px; display: flex; flex-direction: column; gap: 12px">
    <input
      v-model="email"
      type="email"
      placeholder="Email"
    />

    <input
      v-model="password"
      type="text"
      placeholder="Password (promo)"
    />

    <button @click="submit" :disabled="loading">
      {{ loading ? 'Создаю…' : 'Создать user' }}
    </button>

    <p v-if="error" style="color: red">{{ error }}</p>
    <p v-if="success" style="color: green">✅ User создан</p>
  </div>
</template>

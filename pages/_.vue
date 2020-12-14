<template>
  <div>
    {{ fetched }}
    <ul>
      <li><NuxtLink to="/"> / </NuxtLink></li>
      <li><NuxtLink to="/test/slash/"> /test/slash/ </NuxtLink></li>
      <li><NuxtLink to="/test/noslash"> /test/noslash </NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  data: () => ({ fetched: false }),
  asyncData() {
    if (process.client) {
      throw new Error('Fetched unnecessarily')
    }
    return {
      fetched: true,
    };
  },
};
</script>

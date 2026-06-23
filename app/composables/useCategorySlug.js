export const useCategorySlug = () => {
  const route = useRoute();

  const categorySlug = computed(() => {
    const segments = route.path.split("/").filter(Boolean);
    const categoryIndex = segments.indexOf("category");

    if (categoryIndex === -1) {
      return null;
    }
    const data = segments[categoryIndex + 1].split("-") ?? null;

    return data.join(" ");
  });

  return {
    categorySlug,
  };
};

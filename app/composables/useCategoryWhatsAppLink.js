import { createWhatsAppLink } from "~/utils/createWhatsAppLink";

export const useCategoryWhatsAppLink = () => {
  const { categorySlug } = useCategorySlug();

  const whatsappLink = computed(() => {
    if (!categorySlug.value) {
      return null;
    }

    return createWhatsAppLink(categorySlug.value);
  });

  return {
    whatsappLink,
  };
};

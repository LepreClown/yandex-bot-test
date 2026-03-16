import { getRequestConfig } from "next-intl/server";

const DEFAULT_LOCALE = "ru";

export default getRequestConfig(async (params) => {
  const locale = params.locale || DEFAULT_LOCALE;

  const [common] = await Promise.all([
    import(`./src/messages/ru.json`).then((module) => module.default),
  ]);

  return {
    locale,
    messages: {
      ...common,
    },
  };
});

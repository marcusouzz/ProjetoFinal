import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      login: 'Entrar',
      email: 'Email',
      senha: 'Senha',
      // Adicione outras traduções conforme necessário
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

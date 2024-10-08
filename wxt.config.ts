import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
  modules: ['@wxt-dev/module-react'],
  manifest: {
    name: 'LinkedIn AI Reply',
    version: '0.0.1',
    description: 'An extension to assist users with AI-generated replies on LinkedIn.',
    content: {
      scripts: ['content'],
      matches: ['https://*.linkedin.com/*'],
      runAt: 'document_idle',
    },
  },
});

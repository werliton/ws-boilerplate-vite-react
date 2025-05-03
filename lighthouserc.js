export default {
    ci: {
        collect: {
            url: ['http://localhost:4173/'],
            startServerCommand: 'pnpm run preview',
            startServerReadyPattern: 'Local:',
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            assertions: {
              'meta-description': 'off',
              'select-name': 'off',
              'unused-javascript': 'off',
              'render-blocking-resources': 'off',
              // ou desativar tudo com:
              // preset: 'off',
            },
          },
    },
};
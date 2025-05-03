export default {
    ci: {
        collect: {
            url: ['http://localhost:4173/'],
            startServerCommand: 'pnpm run preview',
            startServerReadyPattern: 'Local:',
            settings: {skipAudits: ['canonical', 'uses-http2', 'uses-long-cache-ttl']}
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            preset: 'lighthouse:no-pwa',
            assertions: {
              'meta-description': 'off',
              'select-name': 'off',
              'unused-javascript': 'off',
              'render-blocking-resources': 'off'
            },
          },
    },
};
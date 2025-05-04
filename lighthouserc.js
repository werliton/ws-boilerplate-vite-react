export default {
    ci: {
        collect: {
            url: ['http://localhost:4173/'],
            startServerCommand: 'pnpm run preview',
            startServerReadyPattern: 'Local:'
        },
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            preset: 'lighthouse:recommended'
          },
    },
};
export default {
    ci: {
        collect: {
            startServerCommand: 'pnpm run preview',
            startServerReadyPattern: 'Local:', // regex que ajuda o LHCI saber quando o servidor está pronto
            url: ['http://localhost:4173/'],
          },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
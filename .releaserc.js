module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/micell/micell.git',
  tagFormat: '${version}',
  plugins: [
    [
      '@semantic-release/commit-analyzer',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
      },
    ],
    [
      '@semantic-release/release-notes-generator',
      {
        preset: 'angular',
        parserOpts: {
          noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
        },
        writerOpts: {
          commitGroupsSort: (a, b) => {
            const commitGroupOrder = [
              'Reverts',
              'Performance Improvements',
              'Bug Fixes',
              'Features',
            ]
            const gRankA = commitGroupOrder.indexOf(a.title)
            const gRankB = commitGroupOrder.indexOf(b.title)
            if (gRankA >= gRankB) {
              return -1
            } else {
              return 1
            }
          },
          commitsSort: ['subject', 'scope'],
        },
      },
    ],
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'build',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['package.json'],
        message:
          'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
      },
    ],
    ['@semantic-release/github'],
  ],
}

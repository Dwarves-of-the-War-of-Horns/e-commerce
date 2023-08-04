const configuration = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [2, 'always', 120],
    'jira-issue-key-empty': [2, 'always'],
  },
  plugins: [
    {
      rules: {
        'jira-issue-key-empty': ({ subject }) => {
          const PROJECT_KEY = 'EC'
          const JIRA_TICKET_REGEX = new RegExp(`\\(${PROJECT_KEY}-\\d+|NO-JIRA\\)$`)

          if (!JIRA_TICKET_REGEX.test(subject || '')) {
            return [
              false,
              `Your commit subject should contain Jira issue key in the format (${PROJECT_KEY}-000)` +
                ' or (NO-JIRA) if the commit is not related to any Jira issue',
            ]
          }

          return [true]
        },
      },
    },
  ],
}

module.exports = configuration

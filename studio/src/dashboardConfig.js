export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ff30a309727120d90fd5855',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-b348fvay',
                  apiId: '821aecae-f613-4da9-89af-f8453296545b'
                },
                {
                  buildHookId: '5ff30a313c295001504f4b67',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9e1pt35p',
                  apiId: '949ec92c-74c5-4396-b890-2dec88b0b0fa'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankmeeuwsen/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9e1pt35p.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}

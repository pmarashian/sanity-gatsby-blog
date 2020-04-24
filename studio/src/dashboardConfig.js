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
                  buildHookId: '5ea35a351a021b071c0baf59',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dn2429a1',
                  apiId: '8d8588a9-0dab-4fa5-80f6-f80c73be11a2'
                },
                {
                  buildHookId: '5ea35a35b83dec98440c4799',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-f4nu9qvx',
                  apiId: 'a3aee824-fe9c-4f08-bb25-77f03f67c3d0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pmarashian/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-f4nu9qvx.netlify.app', category: 'apps' }
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

module.exports = {
  toc: [
    {
      title: 'Get Started',
      pathSegment: 'get-started',
      type: 'menu',
      children: [
        {
          pathSegment: 'introduction',
          title: 'Introduction',
          type: 'bullet-link',
        },
        {
          pathSegment: 'install',
          title: 'Install',
          type: 'bullet-link',
          description: 'Install the Storybook package in your project',
        },
        {
          pathSegment: 'whats-a-story',
          title: "What's a story?",
          type: 'bullet-link',
          description: 'Learn how to save component examples as stories',
        },
        {
          pathSegment: 'browse-stories',
          title: 'Browse stories',
          type: 'bullet-link',
          description: 'Learn how to explore your stories within Storybook',
        },
        {
          pathSegment: 'setup',
          title: 'Setup',
          type: 'bullet-link',
          description:
            'Write your first story & adjust Storybook configuration for your environment',
        },
        {
          pathSegment: 'conclusion',
          title: 'Conclusion',
          type: 'bullet-link',
          description: 'Take your Storybook skills to the next level',
        },
      ],
    },
    {
      title: 'Writing Stories',
      pathSegment: 'writing-stories',
      type: 'menu',
      children: [
        {
          pathSegment: 'introduction',
          title: 'Introduction',
          type: 'link',
        },
        {
          pathSegment: 'args',
          title: 'Args',
          type: 'link',
        },
        {
          pathSegment: 'parameters',
          title: 'Parameters',
          type: 'link',
        },
        {
          pathSegment: 'decorators',
          title: 'Decorators',
          type: 'link',
        },
        {
          pathSegment: 'naming-components-and-hierarchy',
          title: 'Naming components and hierarchy',
          type: 'link',
        },
      ],
    },
    {
      title: 'Writing Docs',
      pathSegment: 'writing-docs',
      type: 'menu',
      children: [
        {
          pathSegment: 'introduction',
          title: 'Introduction',
          type: 'link',
        },
        {
          pathSegment: 'docs-page',
          title: 'DocsPage',
          type: 'link',
        },
        {
          pathSegment: 'mdx',
          title: 'MDX',
          type: 'link',
        },
        {
          pathSegment: 'doc-blocks',
          title: 'Doc Blocks',
          type: 'link',
        },
        {
          pathSegment: 'build-documentation',
          title: 'Preview and build docs',
          type: 'link',
        },
      ],
    },
    {
      title: 'Essential addons',
      pathSegment: 'essentials',
      type: 'menu',
      children: [
        {
          pathSegment: 'introduction',
          title: 'Introduction',
          type: 'link',
        },
        {
          pathSegment: 'controls',
          title: 'Controls',
          type: 'link',
        },
        {
          pathSegment: 'actions',
          title: 'Actions',
          type: 'link',
        },
        {
          pathSegment: 'viewports',
          title: 'Viewports',
          type: 'link',
        },
        {
          pathSegment: 'backgrounds',
          title: 'Backgrounds',
          type: 'link',
        },
        {
          pathSegment: 'toolbars-and-globals',
          title: 'Toolbars & globals',
          type: 'link',
        },
      ],
    },
    {
      title: 'Configure',
      pathSegment: 'configure',
      type: 'menu',
      children: [
        {
          pathSegment: 'overview',
          title: 'Overview',
          type: 'link',
        },
        {
          pathSegment: 'integration',
          title: 'Integration',
          type: 'link',
        },
        {
          pathSegment: 'story-rendering',
          title: 'Story rendering',
          type: 'link',
        },
        {
          pathSegment: 'user-interface',
          title: 'User interface',
          type: 'menu',
          children: [
            {
              pathSegment: 'features-and-behavior',
              title: 'Features and behavior',
              type: 'link',
            },
            {
              pathSegment: 'theming',
              title: 'Theming',
              type: 'link',
            },
            {
              pathSegment: 'sidebar-and-urls',
              title: 'Sidebar & URLS',
              type: 'link',
            },
            {
              pathSegment: 'storybook-addons',
              title: 'Storybook Addons',
              type: 'link',
            },
          ],
        },
        {
          pathSegment: 'environment-variables',
          title: 'Environment variables',
          type: 'link',
        },
      ],
    },
    {
      title: 'Workflows',
      pathSegment: 'workflows',
      type: 'menu',
      children: [
        {
          pathSegment: 'publish-storybook',
          title: 'Publish Storybook',
          type: 'link',
        },
        {
          pathSegment: 'build-pages-with-storybook',
          title: 'Building pages with Storybook',
          type: 'link',
        },
        {
          pathSegment: 'stories-for-multiple-components',
          title: 'Stories for multiple components',
          type: 'link',
        },
        {
          title: 'Testing with Storybook',
          // Despite having a child menu, this does not currently affect the path
          pathSegment: '',
          type: 'menu',
          children: [
            {
              pathSegment: 'testing-with-storybook',
              title: 'Introduction',
              type: 'link',
            },
            {
              pathSegment: 'unit-testing',
              title: 'Unit testing',
              type: 'link',
            },
            {
              pathSegment: 'visual-testing',
              title: 'Visual testing',
              type: 'link',
            },
            {
              pathSegment: 'interaction-testing',
              title: 'Interaction testing',
              type: 'link',
            },
            {
              pathSegment: 'snapshot-testing',
              title: 'Snapshot testing',
              type: 'link',
            },
          ],
        },
        {
          pathSegment: 'composition',
          title: 'Composition',
          type: 'link',
        },
        {
          pathSegment: 'package-composition',
          title: 'Package Composition',
          type: 'link',
        },
      ],
    },
    {
      title: 'API',
      pathSegment: 'api',
      type: 'menu',
      children: [
        {
          pathSegment: 'stories',
          title: 'Stories',
          type: 'menu',
          children: [
            {
              pathSegment: 'csf',
              title: 'Component Story Format',
              description: 'Learn about the Component Story Format API',
            },
            {
              pathSegment: 'mdx',
              title: 'MDX syntax',
              description: 'Learn how to add MDX to your Storybook',
            },
            {
              pathSegment: 'argtypes',
              title: 'ArgTypes',
              description: 'Learn how to use Argtypes with your Storybook',
            },
          ],
        },
        {
          title: 'Addons',
          pathSegment: 'addons',
          type: 'menu',
          children: [
            {
              pathSegment: 'addons',
              title: 'Addons',
              type: 'link',
            },
            {
              pathSegment: 'presets',
              title: 'Presets',
              type: 'link',
            },
            {
              pathSegment: 'writing-presets',
              title: 'Writing Presets',
              type: 'link',
            },
            {
              pathSegment: 'addons-api',
              title: 'Addons API',
              type: 'link',
            },
          ],
        },
        {
          pathSegment: 'new-frameworks',
          title: 'Frameworks',
          type: 'link',
        },
        {
          pathSegment: 'cli-options',
          title: 'CLI Options',
          type: 'link',
        },
        {
          pathSegment: 'frameworks-feature-support',
          title: 'Feature support for frameworks',
          type: 'link',
        },
      ],
    },
  ],
};

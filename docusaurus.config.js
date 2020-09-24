module.exports = {
  title: 'IITJ Catalog & Infosaurus',
  tagline: 'Enter IITJ Catalog & Infosaurus',
  url: 'https://gauhararfaat.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'gauhararfaat', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'IIT Jammu',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Academics', position: 'left'},
        {
          href: 'https://iitjammu.ac.in',
          label: 'Main',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Senate',
              to: 'docs/',
            },
            {
              label: 'BoG',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Curriculum',
          items: [
            {
              label: 'Catalog',
             to: 'docs/'
	  // href: 'https://iitjammu.ac.in',//
            },
            {
              label: 'Reports',
              href: 'https://iitjammu.ac.in',
            },
            {
              label: 'Minutes',
              href: 'https://iitjammu.ac.in',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Covid19',
              to: 'blog',
            },
            {
              label: 'PostDoc',
              href: 'https://iitjammu.ac.in',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} IITJ`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://iitjammu.ac.in',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://iitjammu.ac.in',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

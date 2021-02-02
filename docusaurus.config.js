/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'VASS6 PLC Creator',
  tagline: 'Documentation for VASS6 PLC Creator application',
  url: 'https://plcgenerator-documentation.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BMGK', // Usually your GitHub org/user name.
  projectName: 'PLCGenerator-GUI-documentation', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'VASS6 PLC Creator',
      logo: {
        alt: 'PLC Creator Logo',
        src: 'img/PlcCreator.svg',
      },
      items: [
        {
          to: 'docs/generation/programBlocks/ob/OB1',
          activeBasePath: 'docs/generation',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'docs/manual/home/entry',
          activeBasePath: 'docs/manual',
          label: 'Manual',
          position: 'left',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href:
            'https://github.com/bartoszgolebiowski/PLCGenerator-GUI-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
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
            'https://github.com/bartoszgolebiowski/PLCGenerator-GUI-documentation/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

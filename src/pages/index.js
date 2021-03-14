/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
    {
    title: 'Created with PLC TIA .Net Library',
    imageUrl: 'img/PlcCreator.svg',
    href: 'https://plctianetlibrary.bmgk.tech/',
    description: (
      <>
        Logic created in static typed c# library with easy to use functions.
        Make changes in generation result fast and simple.
      </>
    ),
  },
  {
    title: 'TIA PORTAL V16 SUPPORT',
    imageUrl: 'img/TiaV16.svg',    
    description: (
      <>
        Library with support to TIA Portal V16. Make your work full
        automaticlly.
      </>
    ),
  },
  {
    title: 'Application adventages',
    imageUrl: 'img/undraw_ideation_re_8i2h.svg',
    description: <>Let us list adventages of VASS6 PLC Creator</>,
  },
  {
    title: 'SPEED',
    imageUrl: 'img/undraw_Account_re_o7id.svg',
    description: <>Speeds up the PLC writing process. </>,
  },
  {
    title: 'BETTER',
    imageUrl: 'img/undraw_Balloons_re_8ymj.svg',
    description: <>Better and more convenient form of programming. </>,
  },
  {
    title: 'COSTS',
    imageUrl: 'img/undraw_Bookmarks_re_mq1u.svg',
    description: <>Reduction of PLC program writing costs. </>,
  },
  {
    title: 'QUALITY',
    imageUrl: 'img/undraw_Content_creator_re_pt5b.svg',
    description: <>Improving the quality of logic within the standard.</>,
  },
  {
    title: 'REDUCE COPYING ERRORS',
    imageUrl: 'img/undraw_Goals_re_lu76.svg',
    description: (
      <>
        Avoids the often and tedious process of copying and pasting and the
        associated errors.
      </>
    ),
  },
  {
    title: 'QUALITY',
    imageUrl: 'img/undraw_Plans_re_s9mf.svg',
    description: <>Improving the quality of the PLC program.</>,
  },
  {
    title: 'MANAGEMENT',
    imageUrl: 'img/undraw_Selecting_team_re_ndkb.svg',
    description: (
      <>
        Facilitating the management of the program languages (generating web
        titles and other texts in standardized forms).
      </>
    ),
  },
  {
    title: 'STANDARD',
    imageUrl: 'img/undraw_Sorting_thoughts_re_fgli.svg',
    description: (
      <>
        Better management of know-how for a specific technology within the
        standard.
      </>
    ),
  },
  {
    title: 'FACILITATION',
    imageUrl: 'img/undraw_Success_factors_re_ce93.svg',
    description: (
      <>
        Facilitation of the programming process (reduction of required offline
        competencies).
      </>
    ),
  },
];

function Feature({imageUrl, title, description, href}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <a href={href} target="_blank" rel="noreferrer">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </a>
        </div>
      )}
      {href ? (
        <h3>
          <a href={href} target="_blank" rel="noreferrer">
            {title}
          </a>
        </h3>
      ) : (
        <h3>{title}</h3>
      )}
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Tool for generation PLC Program">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/generation/programBlocks/ob/OB1')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description, href}) => (
                  <Feature
                    href={href}
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;

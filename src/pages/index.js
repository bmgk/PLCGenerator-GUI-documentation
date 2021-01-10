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
    title: 'Titule 1',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Id minim irure cupidatat nostrud magna sunt commodo eiusmod exercitation
        nostrud. Lorem nulla ut cupidatat id est laborum nulla veniam eiusmod ut
        ullamco. Veniam ullamco cillum qui aliquip ullamco laboris Lorem
        proident non. Culpa aute sit deserunt cupidatat ex exercitation Lorem
        non dolor. Eiusmod ullamco eiusmod fugiat cupidatat proident aliquip id
        aute. Amet laborum ex cillum sit est Lorem elit enim id dolore
        consectetur. Irure non nisi cillum do. Qui eiusmod magna non ea occaecat
        eu est quis. Ipsum adipisicing velit et irure.
      </>
    ),
  },
  {
    title: 'Titule 2',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Id minim irure cupidatat nostrud magna sunt commodo eiusmod exercitation
        nostrud. Lorem nulla ut cupidatat id est laborum nulla veniam eiusmod ut
        ullamco. Veniam ullamco cillum qui aliquip ullamco laboris Lorem
        proident non. Culpa aute sit deserunt cupidatat ex exercitation Lorem
        non dolor. Eiusmod ullamco eiusmod fugiat cupidatat proident aliquip id
        aute. Amet laborum ex cillum sit est Lorem elit enim id dolore
        consectetur. Irure non nisi cillum do. Qui eiusmod magna non ea occaecat
        eu est quis. Ipsum adipisicing velit et irure.
      </>
    ),
  },
  {
    title: 'Titule 3',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Id minim irure cupidatat nostrud magna sunt commodo eiusmod exercitation
        nostrud. Lorem nulla ut cupidatat id est laborum nulla veniam eiusmod ut
        ullamco. Veniam ullamco cillum qui aliquip ullamco laboris Lorem
        proident non. Culpa aute sit deserunt cupidatat ex exercitation Lorem
        non dolor. Eiusmod ullamco eiusmod fugiat cupidatat proident aliquip id
        aute. Amet laborum ex cillum sit est Lorem elit enim id dolore
        consectetur. Irure non nisi cillum do. Qui eiusmod magna non ea occaecat
        eu est quis. Ipsum adipisicing velit et irure.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
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
      description="plc generator optimalization c# tia siemens">
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
              to={useBaseUrl('docs/')}>
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
                {features.map(({title, imageUrl, description}) => (
                  <Feature
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

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import Link from '@docusaurus/Link';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <div className={clsx("text-part", styles.left)}>
          <h1 className={clsx("hero__title", styles.title)}> {siteConfig.title} </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <ul className={clsx("hero__subtitle", styles.subtitle)}>
            <li className={styles.subtitle_li}>
              <strong>Zero Gas Fees</strong>
              -
              All transactions without the need for gas fees
            </li>
            <li className={styles.subtitle_li}>
              <strong>Lightning Fast</strong>
              -
              Transactions will be confirmed in seconds
            </li>
            <li className={styles.subtitle_li}>
              <strong>Cross Chains</strong>
              -
              Supports all mainstream blockchains
            </li>
            <li className={styles.subtitle_li}>
              <strong>High Collateral Rate</strong>
              -
              Pando Stablecoin's collateral rates are always higher than 200%
            </li>
          </ul>
          <div className={styles.buttons}>
            <Link
              className={clsx('button button--primary button--lg', styles.button)}
              to="/docs/intro">
              Manuals
            </Link>
            <br/>
            <Link
              className={clsx('button button--secondary button--lg', styles.button)}
              to="/developer/intro">
              Developer Docs
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={`${siteConfig.title}`} description="">
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}

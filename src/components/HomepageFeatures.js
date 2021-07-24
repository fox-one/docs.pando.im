import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Pando Lake',
    image: require('../../static/img/products/lake.png').default,
    description: (
      <>
        A fully decentralized protocol for automated liquidity provision.
      </>
    ),
    user_manuals_path: '/docs/lake/intro',
    dev_manuals_path: '/docs/developer/lake/intro',
  },
  {
    title: 'Pando Leaf',
    image: require('../../static/img/products/leaf.png').default,
    description: (
      <>
        A decentralized financial network, implement a derivatives liquidity protocol.
      </>
    ),
    user_manuals_path: '/docs/leaf/intro',
    dev_manuals_path: '/docs/developer/leaf/intro',
  },
  {
    title: 'Pando Rings',
    image: require('../../static/img/products/rings.png').default,
    description: (
      <>
        An algorithmic, autonomous interest rate protocol.
      </>
    ),
    user_manuals_path: '/docs/rings/intro',
    dev_manuals_path: '/docs/developer/rings/intro',
  },
];

function Feature({image, title, description, user_manuals_path}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImage} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="text--center padding-horiz--md">
        <Link
          className="button button--secondary button--sm padding-horiz--md margin-horiz--md"
          to={user_manuals_path}>
          Learn more
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

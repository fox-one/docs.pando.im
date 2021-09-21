import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

export default function Improvment({msg}) {
  let msgEl = '';
  if (msg) {
    msgEl = <div className={styles.msg}>
      {msg}
    </div>
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Translate>This Article needs additional information.</Translate>
      </div>
      <div className={styles.subtitle}>
        <Translate>Please help improve it by </Translate>
        <a href="https://docs.pando.im/docs/community/contribute">
          <Translate>polishing the content</Translate>
        </a>
      </div>
      {msgEl}
    </div>
  );
}

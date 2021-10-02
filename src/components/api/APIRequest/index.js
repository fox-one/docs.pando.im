import React from 'react';
import clsx from 'clsx';
import CodeBlock from '@theme/CodeBlock';
import styles from './styles.module.css';
import Translate, {translate} from '@docusaurus/Translate';

export default function Request({title, url, method, isPublic, base, data}) {
  const apiBase = base || 'https://api.4swap.org';
  return (
    <div className="request">
      <h3>
        <Translate>com.api_request</Translate>
      </h3>
      <CodeBlock className={`language-bash`}>
curl -X {method || 'GET'} {`"${apiBase}${url}"`} -H "Content-Type: application/json"
          {isPublic ? ' ' : ' -H "Bearer: $TOKEN"'}
          {data ? ` ${data}` : ''}
      </CodeBlock>
    </div>
  );
}

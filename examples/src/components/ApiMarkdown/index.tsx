import React from 'react';
import ReactMarkdown from 'react-markdown';
import './index.scss';

interface ApiMarkdownProps {
  source: string;
}

const ApiMarkdown: React.FC<ApiMarkdownProps> = props => {
  const { source } = props;
  return <ReactMarkdown
    className='api-markdown'
    source={source}
  />;
};

export default ApiMarkdown;
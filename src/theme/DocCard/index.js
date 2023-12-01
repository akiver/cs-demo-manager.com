import React from 'react';
import DocCard from '@theme-original/DocCard';

// TODO Remove it when Docusaurus support custom description for categories
// https://github.com/facebook/docusaurus/issues/7818
export default function DocCardWrapper(props) {
  const description = props.item.customProps?.description ?? props.item.description;

  return <DocCard item={{ ...props.item, description }} />;
}

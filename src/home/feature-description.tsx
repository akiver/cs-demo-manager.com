import React from 'react'
import { useMarkdownLoader } from '../hooks/use-markdown-loader'
import { MarkdownRenderer } from '../markdown-renderer'

type Props = {
  markdownFilePath: string
}

export const FeatureDescription = ({ markdownFilePath }: Props) => {
  const markdown = useMarkdownLoader(markdownFilePath)
  return <MarkdownRenderer className="column is-4 feature-description" markdown={markdown} />
}

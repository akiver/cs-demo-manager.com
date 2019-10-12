import React, { useEffect } from 'react'
import { useMarkdownLoader } from '../hooks/use-markdown-loader'
import { MarkdownRenderer } from '../markdown-renderer'

type Props = {
  markdownFilePath: string
}

export const DocPage = ({ markdownFilePath }: Props) => {
  useEffect(() => {
    if (window.location.hash === '') return
    const id = window.location.hash.replace('#', '')
    setTimeout(() => {
      const element: HTMLElement | null = document.getElementById(id)
      if (element === null) return
      element.scrollIntoView(true)
    }, 500)
  }, [])

  const markdown = useMarkdownLoader(markdownFilePath)
  return <MarkdownRenderer className="doc-page" markdown={markdown} />
}

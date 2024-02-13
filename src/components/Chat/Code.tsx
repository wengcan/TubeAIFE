import { PrismAsyncLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

export default function Code({ children, className, node, ...rest }: any){
    const match = /language-(\w+)/.exec(className || '')
    return match ? (
        <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={a11yDark}
            showLineNumbers={true}
        />
    ) : (
        <code {...rest} className={className}>
            {children}
        </code>
    )
}
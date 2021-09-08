interface ContentTitleProps {
  title: string;
}

export function ContentTitle(props: ContentTitleProps) {
  const {
    title
  } = props

  return (
    <header>
      <span className="category">Categoria:<span> {title}</span></span>
    </header>
  )
}
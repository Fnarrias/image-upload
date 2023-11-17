
type PrivateProps = {
    Component: React.FunctionComponent
}
function Home({Component}: PrivateProps) {
  return (
    <Component></Component>
  )
}

export default Home
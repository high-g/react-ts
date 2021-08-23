interface AppProps {
  message: string
}

const App: React.FunctionComponent<AppProps> = ({ message }) => {
  return <div>{message}</div>
}

export default App

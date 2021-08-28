import { GlobalStyles } from "./styles/GlobalStyles"
import { Header } from "./components/Header"
import { SubHeader } from "./components/SubHeader"
import { Tasks } from "./components/Tasks"

export const App = () => (
  <>
    <GlobalStyles />
    <Header />
    <SubHeader />
    <Tasks />
  </>
)
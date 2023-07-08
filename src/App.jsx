
import Navigation from "./components/navigation/navigation"
import LastPodcast from "./components/last_podcast/last_podcast"
import TrendingPodcast from "./components/trending_podcast/trending_podcast"
import Shortly from "./components/shortly/shortly"

function App() {
  return (
    <main>
      <Navigation/>
      <LastPodcast/>
      <TrendingPodcast/>
      <Shortly/>
    </main>
  )
}

export default App;
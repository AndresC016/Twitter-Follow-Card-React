import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="sanda_sandia" name="DJSANDIA" />
            <TwitterFollowCard userName="freddier" name="Freddy Vega" />
            <TwitterFollowCard  userName="MrBeast" name="MrBeast" />
            <TwitterFollowCard  userName="elonmusk" name="Elon Musk" />
        </section>
    )
}
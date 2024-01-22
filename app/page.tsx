import Banner from './components/Banner/index';
import Work from './components/Work/index';
import Table from './components/Table/index';
import Features from './components/Features/index';
import Simple from './components/Simple/index';
import Trade from './components/Trade/index';
import Extra from './components/extra';


export default function Home() {
  return (
    <main>
      <Banner />
      <Work />
      <Extra />
      <Table />
      <Features />
      <Simple />
      <Trade />
    </main>
  )
}

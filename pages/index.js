import Layout from '../components/layout/layout'
import Sidebar from '../components/sidebar/sidebar'
import Hero from '../components/hero/hero';
import { getHeroes, getServerURL } from '../lib/api';

export async function getStaticProps() {
  const heroes = await getHeroes();
  //const heros = out.map(x => { x.node.image.url, x.node.hero[0].text });
  return { props: { heroes } };
}

export default function Index({ heroes }) {
  return (
    <section >
      <h2>Home</h2>
      <div className='container'>
        {
          heroes.map(hero => (
            <Hero hero={hero} key={hero.node.id}></Hero>
          ))}
      </div>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}

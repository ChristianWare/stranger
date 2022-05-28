import Hero from '../src/comps/hero/Hero'
import IndvQuestion from '../src/comps/indivdQuest/IndvQuestion'
import Layout from '../src/comps/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <IndvQuestion
          text='1.'
          fz='medium'
          heading='Will Eleven get her powers back?'
          price='100'
        />
        <IndvQuestion
          text='2.'
          fz='medium'
          heading='Will Season 4 air this year?'
          price='200'
          direction='reverse'
          outlineDirection='l'
          rr='yes'
        />
        <IndvQuestion
          text='3.'
          fz='medium'
          heading='Will Hopper be eaten by a demogorgon?'
          price='100'
        />
        <IndvQuestion
          text='4.'
          fz='medium'
          heading='Will Dustin ever top Max in Dig Dug?'
          price='200'
          direction='reverse'
          outlineDirection='l'
          rr='yes'
        />
      </Layout>
    </>
  );
}

import Hero from '../src/comps/hero/Hero'
import IndvQuestion from '../src/comps/indivdQuest/IndvQuestion'
import Layout from '../src/comps/layout/Layout'
import Outro from '../src/comps/outro/Outro';
import QuestionAnswer from '../src/comps/q&a/QuestionAnswer';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <IndvQuestion
          fz='medium'
          heading='Will Eleven get her powers back?'
        />
        <IndvQuestion
          fz='medium'
          heading='Will Season 4 air this year?'
          direction='reverse'
          rr='yes'
        />
        <IndvQuestion
          fz='medium'
          heading='Will Hopper be eaten by a demogorgon?'
        />
        <IndvQuestion
          fz='medium'
          heading='Will Dustin ever top Max in Dig Dug?'
          direction='reverse'
          rr='yes'
        />
        <QuestionAnswer />
        <Outro />
      </Layout>
    </>
  );
}

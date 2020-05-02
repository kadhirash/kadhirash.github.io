import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import One from '../components/One'
import Two from '../components/Two'
import Projects from '../components/Projects'
import Five from '../components/Five'

class Home extends React.Component {
  render() {
    return (
      <Layout location="/">
        <Helmet
          htmlAttributes={{ lang: 'en' }}
          title="My Website"
          meta={[
            { name: 'description', content: 'Landed Gatsby Starter' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        ></Helmet>
        <Banner />
        <One />
        <Two />
        <Projects />
        <Five />
      </Layout>
    )
  }
}

export default Home
import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">🚀 Building Scalable Solutions with Java, MERN & IoT</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
            style={{borderRadius: '25px', padding: '12px 30px', fontWeight: 'bold'}}>
            Explore My Work 📂
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Gowri K | Portfolio"
      description="Professional Portfolio of Gowri K - Student Developer specializing in Java & Web Technologies">
      <HomepageHeader />
      <main style={{padding: '60px 0'}}>
        <div className="container">
          {/* About Section */}
          <div className="row" style={{marginBottom: '50px'}}>
            <div className="col col--12 text--center">
              <Heading as="h2" style={{fontSize: '2.5rem', marginBottom: '20px'}}>About Me</Heading>
              <p style={{fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto', color: 'var(--ifm-color-emphasis-700)'}}>
                I am a passionate Computer Science student at <strong>Jai Shriram Engineering College</strong> (2023-2027). 
                I specialize in building full-stack applications and integrating hardware with software through IoT.
              </p>
            </div>
          </div>

          {/* Core Skills - Visual Layout */}
          <div className="row" style={{backgroundColor: 'var(--ifm-color-emphasis-100)', borderRadius: '15px', padding: '30px', marginBottom: '50px'}}>
            <div className="col col--6">
              <Heading as="h3">🛠️ Technical Stack</Heading>
              <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '15px'}}>
                {['Java', 'React.js', 'Node.js', 'SQL', 'C', 'JavaScript', 'MERN Stack', 'IoT'].map((skill) => (
                  <span key={skill} style={{backgroundColor: 'var(--ifm-color-primary)', color: 'white', padding: '5px 15px', borderRadius: '20px', fontSize: '0.9rem'}}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="col col--6">
              <Heading as="h3">🎓 Education & Certs</Heading>
              <p style={{marginTop: '15px'}}><strong>B.E. Computer Science</strong><br/>Jai Shriram Engineering College (Current)</p>
              <p><strong>Focus:</strong> Scalable Systems & AI Enthusiast</p>
            </div>
          </div>

          {/* Featured Projects Highlight */}
          <Heading as="h2" className="text--center" style={{marginBottom: '30px'}}>Featured Projects</Heading>
          <div className="row">
            {[
              {title: 'IoT Power Monitor', desc: 'Real-time energy tracking using IoT sensors.'},
              {title: 'MERN Train Booking', desc: 'Full-stack ticket reservation system.'},
              {title: 'Java Billing System', desc: 'Advanced department store billing automation.'}
            ].map((proj, idx) => (
              <div key={idx} className="col col--4" style={{marginBottom: '20px'}}>
                <div className="card" style={{height: '100%', border: '1px solid var(--ifm-color-primary-light)'}}>
                  <div className="card__body">
                    <h4>{proj.title}</h4>
                    <p>{proj.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

import reactLogo from '@/shared/assets/react.svg'
import { Card } from '@/shared/ui/Card'
import styles from './HomePage.module.css'

const layers = [
  {
    name: 'app',
    description: 'App init, providers, global styles',
    path: 'src/app',
  },
  {
    name: 'pages',
    description: 'Route-level compositions',
    path: 'src/pages',
  },
  {
    name: 'widgets',
    description: 'Composite UI blocks',
    path: 'src/widgets',
  },
  {
    name: 'features',
    description: 'User interactions and flows',
    path: 'src/features',
  },
  {
    name: 'entities',
    description: 'Business entities and models',
    path: 'src/entities',
  },
  {
    name: 'shared',
    description: 'Reusable UI, lib, and assets',
    path: 'src/shared',
  },
]

const stack = [
  { label: 'UI', value: 'React' },
  { label: 'Language', value: 'TypeScript' },
  { label: 'Bundler', value: 'Vite' },
  { label: 'Architecture', value: 'Feature-Sliced' },
]

const principles = [
  {
    title: 'Layered ownership',
    description: 'Each slice owns its responsibility and stays focused.',
  },
  {
    title: 'Predictable imports',
    description: 'Dependencies flow downward to keep slices decoupled.',
  },
  {
    title: 'Scalable by default',
    description: 'Add features without rewiring the whole app.',
  },
]

export function HomePage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.brand}>
          <span className={styles.logo}>
            <img src={reactLogo} alt="React logo" />
          </span>
          <div>
            <p className={styles.brandTitle}>KTB Final Frontend</p>
            <p className={styles.brandSubtitle}>React + TypeScript + Vite</p>
          </div>
        </div>
        <div className={styles.headerActions}>
          <a className={styles.headerLink} href="https://feature-sliced.design/">
            FSD Docs
          </a>
          <a className={styles.headerButton} href="https://vite.dev/">
            Vite Docs
          </a>
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroText}>
            <span className={styles.kicker}>Feature-Sliced Architecture</span>
            <h1 className={styles.title}>
              Ship fast without losing structure.
            </h1>
            <p className={styles.subtitle}>
              This starter keeps your React app layered, clean, and ready to
              scale from day one.
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.primary} type="button">
                Start Building
              </button>
              <button className={styles.secondary} type="button">
                Explore Structure
              </button>
            </div>
            <div className={styles.metrics}>
              {stack.map((item) => (
                <div className={styles.metric} key={item.label}>
                  <span className={styles.metricLabel}>{item.label}</span>
                  <span className={styles.metricValue}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>Layer Map</div>
            <ul className={styles.layerList}>
              {layers.map((layer) => (
                <li className={styles.layerItem} key={layer.name}>
                  <div>
                    <span className={styles.layerName}>{layer.name}</span>
                    <span className={styles.layerDescription}>
                      {layer.description}
                    </span>
                  </div>
                  <span className={styles.layerPath}>{layer.path}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.grid}>
          {principles.map((item) => (
            <Card
              key={item.title}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <span>Aliases: @/ maps to src/ for fast imports.</span>
        <span>Ready for routing, state, and API layers.</span>
      </footer>
    </div>
  )
}

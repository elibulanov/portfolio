import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Blade Mobile App",
    url: "https://github.com/elibulanov/blade",
    description:
      "Blade is a mobile app built for rollerbladers. The idea of this app is to find skatepark and street spots near you. This app is a joy to work on and I have learned a ton working on it. I want to create a better version as I continue to grow as a developer. ",
  },
  {
    text: "Blade Web App",
    url: "https://github.com/elibulanov/blade_webapp",
    description:
      "This is a NodeJS web app I have built that is like the mobile version, sharing the same database as the mobile app and renders those skateparks on a map. User authentication aswell as the ability to leave reviews at skateparks.",
  },
  {
    text: "IVMET",
    url: "https://github.com/elibulanov/IVMETstore",
    description:
      "A website for a small Amazon business. I learned about SSR and SSG while building a marketing website for my client. The goal as to create a site that was fast, optimized and mobile responsive.",
  },
  {
    text: "React Calendar",
    url: "https://github.com/elibulanov/reactCalendar",
    description:
      "A simple React calendar app using hooks and state.",
  }
]

const moreLinks = [
  {
    text: "GitHub",
    url: "https://github.com/elibulanov",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/eli-bulanov-1b566a226/",
  }
]

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.heroSection}>
      <div className={styles.heroText}>
       <h1>
       <b> Welcome to my portfolio!</b>
      </h1>
      <h3>
        My name is Eli and 
        I'm a self-taught Web Developer based in Vancouver, WA.
        I work with frontend frameworks such as React, React-Native, NextJS and Gatsby.
      </h3>
      {/* <Link
      to="about"
      style={{
        fontSize: `var(--font-sm)`,
        textDecoration: `none`,
      }}
    >
      About Me
    </Link> */}
      </div>
     
      <StaticImage
        src="../images/portrait.jpg"
        loading="eager"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>

    <div className={styles.textCenter}>
      <p className={styles.intro}>
       <h2>Projects</h2>
       <StaticImage
        src="../images/phone.png"
        loading="eager"
        width={30}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <StaticImage
        src="../images/laptop.png"
        loading="eager"
        width={80}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      </p>
    </div>

    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}`}
          >
            {link.text} 
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export default IndexPage

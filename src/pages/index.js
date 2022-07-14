import * as React from "react"
import { Link } from "gatsby"
import { GatsbyImage, StaticImage } from "gatsby-plugin-image"
import webappGIF from "../images/webapp.gif"
import mobileGIF from "../images/mobileGif.gif"
import ivmet from "../images/ivmet.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Blade Mobile App",
    url: "https://github.com/elibulanov/blade",
    image: mobileGIF,
    description:
      "Blade is a mobile app built for rollerbladers. The idea of this app is to find skatepark and street spots near you. This app is a joy to work on and I have learned a ton working on it. I want to create a better version as I continue to grow as a developer. ",
  },
  {
    text: "Blade Web App",
    url: "https://github.com/elibulanov/blade_webapp",
    image: webappGIF,
    description:
      "This is a NodeJS web app I have built that is like the mobile version, sharing the same database as the mobile app and renders those skateparks on a map. User authentication aswell as the ability to leave reviews at skateparks.",
  },
  {
    text: "IVMET",
    url: "https://ivmet.com",
    description:
      "A website for a small Amazon business. I learned about SSR and SSG while building a marketing website for my client. The goal as to create a site that was fast, optimized and mobile responsive.",
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
          <b>Hey, i'm Eli.</b>
        </h1>
        <h3>
          I'm a self-taught Web Developer based in Vancouver, WA.
          I work with frontend frameworks such as React, React-Native, NextJS and Gatsby.
        </h3>
      </div>

      <StaticImage
        src="../images/portrait.png"
        loading="eager"
        width={400}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
    </div>

    {/* about section */}

    <div className={styles.aboutText} id="about">
      <div className={styles.intro}>
        <h2>About</h2>
        <StaticImage
          src="../images/blades.png"
          loading="eager"
          width={100}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />

      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aspernatur temporibus impedit, optio aliquid esse quas odit!
        Culpa excepturi illo dicta soluta dolor enim, eveniet corrupti id architecto consequuntur odit beatae!
      </p>

      <div className={styles.aboutContent1}>
        <StaticImage
          src="../images/truck.jpg"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur temporibus impedit, optio aliquid esse quas odit!
          Culpa excepturi illo dicta soluta dolor enim, eveniet corrupti id architecto consequuntur odit beatae!
        </p>

      </div>
      <div className={styles.aboutContent2}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Aspernatur temporibus impedit, optio aliquid esse quas odit!
          Culpa excepturi illo dicta soluta dolor enim, eveniet corrupti id architecto consequuntur odit beatae!
        </p>
        <StaticImage
          src="../images/skiing.jpg"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/blading.jpg"
          loading="eager"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />

      </div>
    </div>

    {/* project section */}

    <div className={styles.textCenter} id="projects">

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

      <li className={styles.listItem}>
        <div className={styles.projectText}>
          <a
            className={styles.listItemLink}
            href="https://github.com/elibulanov/blade"
          >
            Blade Mobile
          </a>
          <p className={styles.listItemDescription}>
            Blade is a mobile app built for rollerbladers. The idea of this app is to find skatepark and street spots near you. This app is a joy to work on and I have learned a ton working on it.
          </p>
        </div>
        <div className={styles.image1}>
          <img src={mobileGIF} width={300} />
        </div>
      </li>
      <li className={styles.listItem}>
        <div className={styles.projectText}>
          <a
            className={styles.listItemLink}
            href="https://github.com/elibulanov/blade"
          >
            Blade Mobile
          </a>
          <p className={styles.listItemDescription}>
            "Blade is a mobile app built for rollerbladers. The idea of this app is to find skatepark and street spots near you. This app is a joy to work on and I have learned a ton working on it. I want to create a better version as I continue to grow as a developer. "
          </p>
        </div>
        <div className={styles.image2}>
          <img src={webappGIF} width={1000} />
        </div>

      </li>
      <li className={styles.listItem}>
        <div className={styles.projectText}>
          <a
            className={styles.listItemLink}
            href="https://github.com/elibulanov/blade"
          >
            Blade Mobile
          </a>
          <p className={styles.listItemDescription}>
            "Blade is a mobile app built for rollerbladers. The idea of this app is to find skatepark and street spots near you. This app is a joy to work on and I have learned a ton working on it. I want to create a better version as I continue to grow as a developer. "
          </p>
        </div>
        <div className={styles.image2}>
          <img src={ivmet} width={1000} />
        </div>

      </li>
    </ul>

    {/* footer */}

    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export default IndexPage

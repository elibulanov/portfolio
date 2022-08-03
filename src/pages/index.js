import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import webapp from "../images/webapp.webm"
import mobile from "../images/blademobile.webm"
import mobileGIF from "../images/mobileGif.gif"
import ivmet from "../images/ivmet.png"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"



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
          I'm a self-taught Web Developer who is passionate about refining his craft
          and a lifelong learner.

        </h3>
      </div>
      <div className={styles.heroImg}>
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
        I became interested in coding when thinking of how to build a app that i could use and would be useful for skaters like me.

      </p>

      <div className={styles.aboutContent1}>
        <div className={styles.aboutImg}>
          <StaticImage
            src="../images/truckin.jpg"
            loading="eager"
            width={800}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>

        <p>
          I currently work as a long haul truck driver. I love traveling and learning at the same time,
          my job gives me a opportunity to learn about the tech industry as well as coding a few hours per day.
        </p>

      </div>
      <div className={styles.aboutContent2}>
        <p>
          When not working on my apps, I’m skating or hitting the slopes! I've been rollerblading for 15 years and its been a sport that i love improving on, anywhere from competing, to street skating or at the skatepark.
          I put this same dicsipline into coding and am motivated to excell in whatever I learn.
        </p>
        <div>
          <div className={styles.aboutContentImg2}>
            <StaticImage
              src="../images/collage.png"
              loading="eager"
              width={700}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{
                marginBottom: `var(--space-3)`
              }}
            />
          </div>

        </div>
      </div>
    </div>

    <div className={styles.textCenter} >
      <p className={styles.skills}>
        <h2>Skills</h2>
        <StaticImage
          src="../images/javascript.png"
          loading="eager"
          width={45}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)`, marginRight: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/typescript.png"
          loading="eager"
          width={45}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)`, marginRight: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/react.png"
          loading="eager"
          width={50}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)`, marginRight: `var(--space-3)` }}
        />
        <StaticImage
          src="../images/mongodb.png"
          loading="eager"
          width={185}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)`, marginRight: `var(--space-3)` }}
        />
      </p>

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

    <div>
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
              <li>Mobile app that renders interactive skatepark.</li>
              <li>React-Native navigation, expo and android studio.</li>
              <li>User authentication with a database.</li>
              <li>Learned about state/props as well as redux.</li>
            </p>
            <div className={styles.btn}>
            <a href="https://github.com/elibulanov/blade">
              <button className={styles.button}>
                
                  CODE
                
              </button>
              </a>
            </div>
          </div>

          <video autoPlay loop width={350} className={styles.mobileVid}>
            <source src={mobile} type="video/mp4" />
          </video>


        </li>
        <li className={styles.listItem}>
          <div className={styles.projectText}>
            <a
              className={styles.listItemLink}
              href="https://github.com/elibulanov/blade"
            >
              IVMET Home and Office Goods
            </a>
            <p className={styles.listItemDescription}>
              <li>A website for a small Amazon business. I learned about SSR and SSG while building a marketing website for my client.
                The goal was to create a site that was fast, optimized and mobile responsive including a blog feature.</li>
            </p>
            <div className={styles.btn}>
              <button className={styles.button}>
                CODE
              </button>
            </div>
          </div>
          <div className={styles.ivmet}>
            <StaticImage
              src="../images/ivmet.png"
              loading="eager"
              width={3250}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
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
              <li>NodeJS project using MVC architecture and RESTful routing. </li>
              <li>Renders skatepark, with user authentication sharing a database with the mobile app.</li>
              <li>I learned express js to build a back-end for CRUD operations.</li>
            </p>
            <div className={styles.btn}>
              <button className={styles.button}>
                CODE
              </button>
            </div>
          </div>
          <div >
            <video autoPlay loop width={750} className={styles.video}>
              <source src={webapp} type="video/mp4" />
            </video>

          </div>

        </li>

      </ul>

      <div className={styles.contactSection} id="contact">
        <div className={styles.test}>
          <h2>Contact</h2>
          <h1>elibulanov@gmail.com</h1>
          <h5>resume avaliable upon request</h5>
        </div>
      </div>

      {moreLinks.map((link, i) => (
        <React.Fragment key={link.url}>
          <a href={`${link.url}`}>{link.text}</a>
          {i !== moreLinks.length - 1 && <> · </>}
        </React.Fragment>
      ))}

    </div>
  </Layout>
)

export default IndexPage

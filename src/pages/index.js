import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import webapp from "../images/webapp.webm"
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
          src="../images/truckin.jpg"
          loading="eager"
          width={400}
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
        <div>
          <StaticImage
            src="../images/collage.png"
            loading="eager"
            width={700}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt=""
            style={{ marginBottom: `var(--space-3)` }}
          />
        </div>
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
              <li>Mobile app that renders interactive skatepark data on a map.</li>
              <li>React-Native navigation, expo and android studio.</li>
              <li>User authentication with a database.</li>
              <li>Learned about state/props as well as redux.</li>
            </p>
          </div>
          <div className={styles.image1}>
            <img src={mobileGIF} width={300} alt="mobile" />
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
          </div>
          <div >
            <video autoPlay loop width={850}>
              <source src={webapp} type="video/mp4" />
            </video>

          </div>

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
          </div>
          <div className={styles.test}>
            <StaticImage
              src="../images/ivmet.png"
              loading="eager"
              width={1000}
              quality={95}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
          </div>

        </li>
      </ul>

      <div className={styles.contactSection} id="contact">
        <div className={styles.test}>
          <h2>Get In Touch</h2>
          <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input name="name" placeholder="Your Name" class="name" required />
            <input name="emailaddress" placeholder="Email" class="email" type="email" required />
            <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="message" required></textarea>
            <input name="submit" class="btn" type="submit" value="Send" />
          </form>

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

module.exports = {
  siteMetadata: {
    title: `Elijah Bulanov`,
    description: `My personal portfolio`,
    author: `Elijah Bulanov`,
    siteUrl: `http://localhost:8000/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Elijah Bulanov`,
        short_name: `portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/blades.png`, // This path is relative to the root of the site.
      },
    },
  ],
}

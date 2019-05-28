module.exports = {
  siteMetadata: {
    title: `Connor Ocampo's Website`,
    author: `Connor Ocampo`,
    description: `Connor Ocampo's Website.`,
    siteUrl: `https://www.connorocampo.com/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Connor Ocampo`,
        short_name: `Connor`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#345d7e`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
  ]
}


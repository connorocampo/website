module.exports = {
  pathPrefix: "/catherineocampo",
  siteMetadata: {
    title: `Cat Ocampo's Website`,
    author: `Cat Ocampo`,
    description: `Cat Ocampo's Website.`,
    siteUrl: `https://catherineocampo.github.io/catherineocampo/`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cat Ocampo`,
        short_name: `Cat`,
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
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
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
    {
      resolve: "gatsby-plugin-categories",
      options: {
        templatePath: `${__dirname}/src/templates/category.js`,
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        useMozJpeg: false,
        stripMetadata: true,
        defaultQuality: 75,
      },
    },
  ]
}


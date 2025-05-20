<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
>
    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html>
            <head>
                <title>Pixxel City Photography - XML Sitemap</title>
                <link rel="icon" type="image/x-icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <style>
                    body {
                    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
                    color: #333;
                    margin: 0;
                    padding: 2rem;
                    }
                    header {
                    border-bottom: 1px solid #eee;
                    padding-bottom: 1rem;
                    margin-bottom: 2rem;
                    display: flex;
                    align-items: center;
                    }
                    header img {
                    margin-right: 1rem;
                    }
                    h1 {
                    margin: 0;
                    font-size: 1.5rem;
                    color: #333;
                    }
                    table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 1rem;
                    }
                    th, td {
                    padding: 0.75rem;
                    text-align: left;
                    border-bottom: 1px solid #eee;
                    }
                    th {
                    background-color: #f8f8f8;
                    font-weight: 600;
                    }
                    tr:hover td {
                    background-color: #f8f8f8;
                    }
                    a {
                    color: #0077cc;
                    text-decoration: none;
                    }
                    a:hover {
                    text-decoration: underline;
                    }
                    .stats {
                    margin-bottom: 2rem;
                    background-color: #f8f8f8;
                    padding: 1rem;
                    border-radius: 5px;
                    }
                    footer {
                    margin-top: 2rem;
                    border-top: 1px solid #eee;
                    padding-top: 1rem;
                    color: #777;
                    font-size: 0.85rem;
                    }
                    @media (max-width: 768px) {
                    body {
                    padding: 1rem;
                    }
                    .mobile-hide {
                    display: none;
                    }
                    }
                </style>
            </head>
            <body>
                <header>
                    <img src="/favicon.ico" alt="Pixxel City Logo" width="32" height="32" />
                    <h1>Pixxel City Photography - XML Sitemap</h1>
                </header>

                <div class="stats">
                    <p> This sitemap contains <xsl:choose>
                            <xsl:when test="count(sitemap:urlset/sitemap:url) = 1">1 URL</xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="count(sitemap:urlset/sitemap:url)" /> URLs </xsl:otherwise>
                        </xsl:choose>
                    </p>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>URL</th>
                            <th class="mobile-hide">Last Modified</th>
                            <th class="mobile-hide">Change Frequency</th>
                            <th class="mobile-hide">Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="sitemap:urlset/sitemap:url">
                            <tr>
                                <td>
                                    <a href="{sitemap:loc}">
                                        <xsl:value-of select="sitemap:loc" />
                                    </a>
                                </td>
                                <td class="mobile-hide">
                                    <xsl:if test="sitemap:lastmod">
                                        <xsl:value-of select="sitemap:lastmod" />
                                    </xsl:if>
                                </td>
                                <td class="mobile-hide">
                                    <xsl:if test="sitemap:changefreq">
                                        <xsl:value-of select="sitemap:changefreq" />
                                    </xsl:if>
                                </td>
                                <td class="mobile-hide">
                                    <xsl:if test="sitemap:priority">
                                        <xsl:value-of select="sitemap:priority" />
                                    </xsl:if>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>

                <footer>
                    <p>Generated by <a href="https://astro.build" target="_blank"
                            rel="noopener noreferrer">Astro</a> with the @astrojs/sitemap
        integration</p>
                </footer>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
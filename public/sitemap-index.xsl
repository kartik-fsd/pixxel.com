<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet
    version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
>
    <xsl:output method="html" encoding="UTF-8" indent="yes" />

    <xsl:template match="/">
        <html>
            <head>
                <title>Pixxel City Photography - Sitemap Index</title>
                <link rel="icon" type="image/x-icon" href="/pixelcity_.png" />
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
                    <h1>Pixxel City Photography - Sitemap Index</h1>
                </header>

                <div class="stats">
                    <p> This sitemap index contains <xsl:choose>
                            <xsl:when test="count(sitemap:sitemapindex/sitemap:sitemap) = 1">1
        sitemap</xsl:when>
                            <xsl:otherwise>
                                <xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)" />
        sitemaps </xsl:otherwise>
                        </xsl:choose>
                    </p>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>Sitemap URL</th>
                            <th class="mobile-hide">Last Modified</th>
                        </tr>
                    </thead>
                    <tbody>
                        <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
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
                            </tr>
                        </xsl:for-each>
                    </tbody>
                </table>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
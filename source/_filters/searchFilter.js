const Fuse = require('fuse.js');
const fs = require('fs');
const path = require('path');
const nunjucks = require('nunjucks');

// NOTA: I filtri Nunjucks di default sono SINCRONI.
// Per accedere a templateContent in modo affidabile, un filtro asincrono o un
// approccio diverso (es. evento 'eleventy.after') sarebbe meglio.
// Questa è una BEST EFFORT per un filtro sincrono.

module.exports = function(collection) {
  const baseUrl = this.ctx.app?.baseUrl || '';

  const pages = collection
      .filter((page) => page.url !== false)
      .map((page) => {
        let contentForProcessing = '';

        // Prova ad accedere a page.templateContent, ma preparati al fatto che potrebbe non essere pronto.
        // In Eleventy v3, l'accesso diretto a page.templateContent in un filtro sincrono
        // che itera su una collezione può essere prematuro.
        // Se page.data contiene un riassunto o un campo di testo primario, usalo.
        if (page.data && typeof page.data.description === 'string') {
          contentForProcessing = page.data.description; // Usa la descrizione se disponibile
        } else if (page.data && typeof page.data.content === 'string') {
        // Se hai un campo 'content' ESPLICITO nel tuo front matter
          contentForProcessing = page.data.content;
        }
        // Se non hai un campo adatto in page.data, e page.templateContent dà errore,
        // potresti dover omettere il 'content' dall'indice per questo filtro,
        // o passare a un filtro asincrono / evento 'eleventy.after'.
        // Per ora, lasciamo contentForProcessing vuoto se non troviamo nulla di sicuro.

        const strippedContent = nunjucks
            .renderString('{{ content | striptags | truncate(600, true, "") }}', {content: contentForProcessing});

        let image = page.data.coverPreview;
        if (image && image.startsWith('./')) {
          let pageDir = page.url;
          if (pageDir === false) pageDir = '/';
          if (pageDir && !pageDir.endsWith('/')) {
            pageDir = path.dirname(pageDir);
            if (pageDir === '.') pageDir = '/';
            pageDir = pageDir + '/';
          }
          image = pageDir + image.substring(2);
        }
        if (image && image.startsWith('/') && !image.startsWith(baseUrl) && baseUrl) {
          image = baseUrl + image;
        }

        return {
          url: page.url.startsWith(baseUrl) ? page.url : baseUrl + (page.url === '/' && baseUrl.endsWith('/') ? '' : page.url),
          date: page.data.pubDate,
          title: page.data.title,
          description: page.data.description, // Usa la descrizione del front matter
          image,
          content: strippedContent // Questo userà description o il campo 'content' del front matter
        };
      });

  let outputPathForIndex = '_site/search-index.json';
  if (this.page && this.page.outputPath) {
    if (this.page.inputPath.endsWith('.json.njk')) {
      outputPathForIndex = this.page.outputPath;
    } else {
      outputPathForIndex = path.join(path.dirname(this.page.outputPath), 'search-index.json');
    }
  } else {
    if (this.eleventy && this.eleventy.directories && this.eleventy.directories.output) {
      outputPathForIndex = path.join(this.eleventy.directories.output, 'search-index.json');
    }
    // console.warn(`[searchFilter] Output path for search index defaulted to: ${outputPathForIndex}`);
  }

  const outputDir = path.dirname(outputPathForIndex);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, {recursive: true});
  }
  fs.writeFileSync(outputPathForIndex, JSON.stringify(pages));

  return Fuse.createIndex(['title', 'description', 'content'], pages).toJSON();
};

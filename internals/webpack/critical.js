'use strict';

const chalk = require('chalk');
const critical = require('critical');
const path = require('path');
const fs = require('fs');

class HtmlWebpackCriticalPlugin {
  constructor(options) {
    this.options = options || {};
    this.criticalOptions = this.options.critical || {};
  }

  apply(compiler) {
    compiler.hooks.afterEmit.tapAsync('CriticalPlugin', (chunk, callback) => {
      const indexSpa = chunk.assets['index.spa.html'];
      if (!indexSpa) return callback();

      const filePath = indexSpa.existsAt;
      const basePath = path.dirname(filePath);

      const html = fs.readFileSync(filePath, 'utf-8');
      const css = this.findCssFiles(html, basePath);

      if (css.length) {
        critical
          .generate({
            inline: true,
            minify: true,
            src: filePath,
            css,
          })
          .then(result => {
            return this.writeFile(this.rewriteHtmlAttr(result), filePath);
          })
          .then(callback);
      } else {
        callback();
      }
    });
  }

  findCssFiles(html, basePath) {
    const results = [];
    const linkRegexp = /<link.*href="(.*\.css)"/gi;

    let result = linkRegexp.exec(html);
    while (result) {
      const filename = result[1].replace(/^\/_nuxt/, '');
      const fullpath = path.join(basePath, filename);

      results.push(fullpath);
      result = linkRegexp.exec(html);
    }

    return results;
  }

  rewriteHtmlAttr(html) {
    html = html.toString();
    html = html.replace('{{="" html_attrs="" }}=""', '{{ HTML_ATTRS }}');
    html = html.replace('{{="" body_attrs="" }}=""', '{{ BODY_ATTRS }}');
    return html;
  }

  writeFile(html, filename) {
    return new Promise((resolve, reject) => {
      if (!filename)
        return reject(
          new Error('outputPath & filename must be set to update output file'),
        );

      if (!html) return resolve();

      fs.writeFile(filename, html, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve();
      });
    });
  }
}

module.exports = HtmlWebpackCriticalPlugin;

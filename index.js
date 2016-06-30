'use strict';

class TextCompiler {
  constructor(config) {
    this.config = config && config.plugins && config.plugins.text || {};
    if (this.config.pattern) {
      this.pattern = this.config.pattern;
    }
  }
  
  compile(file) {
    try {
      const payload = JSON.stringify(file.data);
      const data = 'module.exports = ' + payload;
      return Promise.resolve({path: file.path, data});
    } catch (err) {
      return Promise.reject(err);
    }
  }
}

TextCompiler.prototype.brunchPlugin = true;
TextCompiler.prototype.type = 'template';
TextCompiler.prototype.extension = 'txt';

module.exports = TextCompiler;
(function(/*! Brunch !*/) {
  'use strict';

  if (!this.require) {
    var modules = {};
    var cache = {};
    var __hasProp = ({}).hasOwnProperty;

    var expand = function(root, name) {
      var results = [], parts, part;
      if (/^\.\.?(\/|$)/.test(name)) {
        parts = [root, name].join('/').split('/');
      } else {
        parts = name.split('/');
      }
      for (var i = 0, length = parts.length; i < length; i++) {
        part = parts[i];
        if (part == '..') {
          results.pop();
        } else if (part != '.' && part != '') {
          results.push(part);
        }
      }
      return results.join('/');
    };

    var getFullPath = function(path, fromCache) {
      var store = fromCache ? cache : modules;
      var dirIndex;
      if (__hasProp.call(store, path)) return path;
      dirIndex = expand(path, './index');
      if (__hasProp.call(store, dirIndex)) return dirIndex;
    };
    
    var cacheModule = function(name, path, contentFn) {
      var module = {id: path, exports: {}};
      try {
        cache[path] = module.exports;
        contentFn(module.exports, function(name) {
          return require(name, dirname(path));
        }, module);
        cache[path] = module.exports;
      } catch (err) {
        delete cache[path];
        throw err;
      }
      return cache[path];
    };

    var require = function(name, root) {
      var path = expand(root, name);
      var fullPath;

      if (fullPath = getFullPath(path, true)) {
        return cache[fullPath];
      } else if (fullPath = getFullPath(path, false)) {
        return cacheModule(name, fullPath, modules[fullPath]);
      } else {
        throw new Error("Cannot find module '" + name + "'");
      }
    };

    var dirname = function(path) {
      return path.split('/').slice(0, -1).join('/');
    };

    this.require = function(name) {
      return require(name, '');
    };

    this.require.brunch = true;
    this.require.define = function(bundle) {
      for (var key in bundle) {
        if (__hasProp.call(bundle, key)) {
          modules[key] = bundle[key];
        }
      }
    };
  }
}).call(this);
(this.require.define({
  "application": function(exports, require, module) {
    (function() {
  var Application;

  Application = {
    initialize: function() {
      var HomeView, Router;
      HomeView = require('views/home_view');
      Router = require('lib/router');
      this.homeView = new HomeView();
      this.router = new Router();
      return typeof Object.freeze === "function" ? Object.freeze(this) : void 0;
    }
  };

  module.exports = Application;

}).call(this);

  }
}));
(this.require.define({
  "initialize": function(exports, require, module) {
    (function() {
  var application;

  application = require('application');

  $(function() {
    application.initialize();
    return Backbone.history.start();
  });

}).call(this);

  }
}));
(this.require.define({
  "lib/router": function(exports, require, module) {
    (function() {
  var Router, application,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  application = require('application');

  module.exports = Router = (function(_super) {

    __extends(Router, _super);

    function Router() {
      Router.__super__.constructor.apply(this, arguments);
    }

    Router.prototype.routes = {
      '': 'home'
    };

    Router.prototype.home = function() {
      return $('body').html(application.homeView.render().el);
    };

    return Router;

  })(Backbone.Router);

}).call(this);

  }
}));
(this.require.define({
  "lib/view_helper": function(exports, require, module) {
    (function() {



}).call(this);

  }
}));
(this.require.define({
  "models/collection": function(exports, require, module) {
    (function() {
  var Collection,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  module.exports = Collection = (function(_super) {

    __extends(Collection, _super);

    function Collection() {
      Collection.__super__.constructor.apply(this, arguments);
    }

    return Collection;

  })(Backbone.Collection);

}).call(this);

  }
}));
(this.require.define({
  "models/model": function(exports, require, module) {
    (function() {
  var Model,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  module.exports = Model = (function(_super) {

    __extends(Model, _super);

    function Model() {
      Model.__super__.constructor.apply(this, arguments);
    }

    return Model;

  })(Backbone.Model);

}).call(this);

  }
}));
(this.require.define({
  "views/home_view": function(exports, require, module) {
    (function() {
  var HomeView, View, template,
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  View = require('./view');

  template = require('./templates/home');

  module.exports = HomeView = (function(_super) {

    __extends(HomeView, _super);

    function HomeView() {
      HomeView.__super__.constructor.apply(this, arguments);
    }

    HomeView.prototype.id = 'home-view';

    HomeView.prototype.template = template;

    return HomeView;

  })(View);

}).call(this);

  }
}));
(this.require.define({
  "views/templates/home": function(exports, require, module) {
    module.exports = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "    <!-- Le styles -->\n    <style type=\"text/css\">\n    </style>\n\n    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->\n    <!--[if lt IE 9]>\n      <script src=\"http://html5shim.googlecode.com/svn/trunk/html5.js\"></script>\n    <![endif]-->\n\n  </head>\n\n  <body>\n\n    <div class=\"navbar navbar-fixed-top\">\n      <div class=\"navbar-inner\">\n        <div class=\"container-fluid\">\n          <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </a>\n          <a class=\"brand\" href=\"#\">Project name</a>\n          <div class=\"btn-group pull-right\">\n            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"icon-user\"></i> Username\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li><a href=\"#\">Profile</a></li>\n              <li class=\"divider\"></li>\n              <li><a href=\"#\">Sign Out</a></li>\n            </ul>\n          </div>\n          <div class=\"nav-collapse\">\n            <ul class=\"nav\">\n              <li class=\"active\"><a href=\"#\">Home</a></li>\n              <li><a href=\"#about\">About</a></li>\n              <li><a href=\"#contact\">Contact</a></li>\n            </ul>\n          </div><!--/.nav-collapse -->\n        </div>\n      </div>\n    </div>\n\n    <div class=\"container-fluid\">\n      <div class=\"row-fluid\">\n        <div class=\"span3\">\n          <div class=\"well sidebar-nav\">\n            <ul class=\"nav nav-list\">\n              <li class=\"nav-header\">Sidebar</li>\n              <li class=\"active\"><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li class=\"nav-header\">Sidebar</li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li class=\"nav-header\">Sidebar</li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n              <li><a href=\"#\">Link</a></li>\n            </ul>\n          </div><!--/.well -->\n        </div><!--/span-->\n        <div class=\"span9\">\n          <div class=\"hero-unit\">\n            <h1>Hello, world!</h1>\n            <p>This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.</p>\n            <p><a class=\"btn btn-primary btn-large\">Learn more &raquo;</a></p>\n          </div>\n          <div class=\"row-fluid\">\n            <div class=\"span4\">\n              <h2>Heading</h2>\n              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n              <p><a class=\"btn\" href=\"#\">View details &raquo;</a></p>\n            </div><!--/span-->\n            <div class=\"span4\">\n              <h2>Heading</h2>\n              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n              <p><a class=\"btn\" href=\"#\">View details &raquo;</a></p>\n            </div><!--/span-->\n            <div class=\"span4\">\n              <h2>Heading</h2>\n              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n              <p><a class=\"btn\" href=\"#\">View details &raquo;</a></p>\n            </div><!--/span-->\n          </div><!--/row-->\n          <div class=\"row-fluid\">\n            <div class=\"span4\">\n              <h2>Heading</h2>\n              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n              <p><a class=\"btn\" href=\"#\">View details &raquo;</a></p>\n            </div><!--/span-->\n            <div class=\"span4\">\n              <h2>Heading</h2>\n              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n              <p><a class=\"btn\" href=\"#\">View details &raquo;</a></p>\n            </div><!--/span-->\n            <div class=\"span4\">\n              <h2>Heading</h2>\n              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>\n              <p><a class=\"btn\" href=\"#\">View details &raquo;</a></p>\n            </div><!--/span-->\n          </div><!--/row-->\n        </div><!--/span-->\n      </div><!--/row-->\n\n      <hr>\n\n      <footer>\n        <p>&copy; Company 2012</p>\n      </footer>\n\n    </div><!--/.fluid-container-->\n";});
  }
}));
(this.require.define({
  "views/view": function(exports, require, module) {
    (function() {
  var View,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = Object.prototype.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor; child.__super__ = parent.prototype; return child; };

  require('lib/view_helper');

  module.exports = View = (function(_super) {

    __extends(View, _super);

    function View() {
      this.render = __bind(this.render, this);
      View.__super__.constructor.apply(this, arguments);
    }

    View.prototype.template = function() {};

    View.prototype.getRenderData = function() {};

    View.prototype.render = function() {
      this.$el.html(this.template(this.getRenderData()));
      this.afterRender();
      return this;
    };

    View.prototype.afterRender = function() {};

    return View;

  })(Backbone.View);

}).call(this);

  }
}));

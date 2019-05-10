'use strict';

define("ember-routes/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/org.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org.js should pass ESLint\n\n');
  });
  QUnit.test('routes/org/repo.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repo.js should pass ESLint\n\n');
  });
  QUnit.test('routes/org/repo/contributors.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repo/contributors.js should pass ESLint\n\n');
  });
  QUnit.test('routes/org/repo/issues.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repo/issues.js should pass ESLint\n\n');
  });
  QUnit.test('routes/org/repos.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repos.js should pass ESLint\n\n');
  });
  QUnit.test('routes/orgs.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/orgs.js should pass ESLint\n\n');
  });
});
define("ember-routes/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('ember-routes/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/application.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-routes/templates/org.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/org.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-routes/templates/org/repo.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/org/repo.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-routes/templates/org/repo/contributors.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/org/repo/contributors.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-routes/templates/org/repo/issues.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/org/repo/issues.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-routes/templates/org/repos.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/org/repos.hbs should pass TemplateLint.\n\n');
  });
  QUnit.test('ember-routes/templates/orgs.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'ember-routes/templates/orgs.hbs should pass TemplateLint.\n\n');
  });
});
define("ember-routes/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/org-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/org/repo-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/org/repo/contributors-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo/contributors-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/org/repo/issues-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo/issues-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/org/repos-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repos-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/routes/orgs-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/orgs-test.js should pass ESLint\n\n');
  });
});
define("ember-routes/tests/test-helper", ["ember-routes/app", "ember-routes/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("ember-routes/tests/unit/routes/org-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | org', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:org');
      assert.ok(route);
    });
  });
});
define("ember-routes/tests/unit/routes/org/repo-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | org/repo', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:org/repo');
      assert.ok(route);
    });
  });
});
define("ember-routes/tests/unit/routes/org/repo/contributors-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | org/repo/contributors', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:org/repo/contributors');
      assert.ok(route);
    });
  });
});
define("ember-routes/tests/unit/routes/org/repo/issues-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | org/repo/issues', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:org/repo/issues');
      assert.ok(route);
    });
  });
});
define("ember-routes/tests/unit/routes/org/repos-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | org/repos', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:org/repos');
      assert.ok(route);
    });
  });
});
define("ember-routes/tests/unit/routes/orgs-test", ["qunit", "ember-qunit"], function (_qunit, _emberQunit) {
  "use strict";

  (0, _qunit.module)('Unit | Route | orgs', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:orgs');
      assert.ok(route);
    });
  });
});
define('ember-routes/config/environment', [], function() {
  var prefix = 'ember-routes';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('ember-routes/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map

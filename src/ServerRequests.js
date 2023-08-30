/*
 * This is an auto-generated file.
 * ----- DO NOT MODIFY -----
 * */
import s from './ServerRequestsHandler';
import {
  internalRouteParser as r,
  parseUrlStrict as p
} from '@trapcode/xpresser-frontend-helpers';

const a = [
  ['get', 'index', '/', {}],
  ['get', 'api.pulse', '/v1/pulse', {}],
  ['post', 'api.login', '/v1/auth/login', {}],
  ['post', 'api.register', '/v1/auth/register', {}],
  ['patch', 'api.booking.update', '/v1/api/bookings/:bookingUuid', {
    bookingUuid: true
  }],
  ['post', 'api.booking.new', '/v1/api/bookings', {}],
  ['get', 'api.packages.all', '/v1/api/packages', {}],
  ['get', 'admin.packages.all', '/v1/admin/packages', {}],
  ['post', 'admin.packages.new', '/v1/admin/packages', {}],
  ['get', 'admin.packages.one', '/v1/admin/packages/:packageUuid', {
    packageUuid: true
  }],
  ['patch', 'admin.packages.update', '/v1/admin/packages/:packageUuid', {
    packageUuid: true
  }],
  ['delete', 'admin.packages.delete', '/v1/admin/packages/:packageUuid', {
    packageUuid: true
  }],
  ['patch', 'admin.packages.updatefeature', '/v1/admin/packages/:packageUuid/update-package-feature', {
    packageUuid: true
  }],
  ['get', 'admin.features.all', '/v1/admin/features', {}],
  ['post', 'admin.features.new', '/v1/admin/features', {}],
  ['get', 'admin.features.one', '/v1/admin/features/:featureUuid', {
    featureUuid: true
  }],
  ['patch', 'admin.features.update', '/v1/admin/features/:featureUuid', {
    featureUuid: true
  }],
  ['delete', 'admin.features.delete', '/v1/admin/features/:featureUuid', {
    featureUuid: true
  }],
  ['get', 'admin.all', '/v1/admin/bookings/', {}],
];

// Autogenerate useful objects
const b = {},
  c = {};
for (const d of a) {
  // name => [url, params]
  c[d[1]] = [d[2], d[3]];
  // method.name => [url, params]
  c[`${d[0]}.${d[1]}`] = [d[2], d[3]];
  // method.name => [method, url, params]
  b[`${d[0]}.${d[1]}`] = [d[0], d[2], d[3]];
}

export function route(name, params = null, query = {}) {
  return r(c, name, params, query);
}

export function routeStrict(name, params = null, query = {}) {
  return r(c, name, params, query, true);
}

export default {
  get: {
    index: (...args) => s(...p(b['get.index'], args)),
    api: {
      pulse: (...args) => s(...p(b['get.api.pulse'], args)),
      packages: {
        all: (...args) => s(...p(b['get.api.packages.all'], args)),
      },
    },
    admin: {
      packages: {
        all: (...args) => s(...p(b['get.admin.packages.all'], args)),
        one: (...args) => s(...p(b['get.admin.packages.one'], args)),
      },
      features: {
        all: (...args) => s(...p(b['get.admin.features.all'], args)),
        one: (...args) => s(...p(b['get.admin.features.one'], args)),
      },
      all: (...args) => s(...p(b['get.admin.all'], args)),
    },
  },
  post: {
    api: {
      login: (...args) => s(...p(b['post.api.login'], args)),
      register: (...args) => s(...p(b['post.api.register'], args)),
      booking: {
        new: (...args) => s(...p(b['post.api.booking.new'], args)),
      },
    },
    admin: {
      packages: {
        new: (...args) => s(...p(b['post.admin.packages.new'], args)),
      },
      features: {
        new: (...args) => s(...p(b['post.admin.features.new'], args)),
      },
    },
  },
  patch: {
    api: {
      booking: {
        update: (...args) => s(...p(b['patch.api.booking.update'], args)),
      },
    },
    admin: {
      packages: {
        update: (...args) => s(...p(b['patch.admin.packages.update'], args)),
        updatefeature: (...args) => s(...p(b['patch.admin.packages.updatefeature'], args)),
      },
      features: {
        update: (...args) => s(...p(b['patch.admin.features.update'], args)),
      },
    },
  },
  delete: {
    admin: {
      packages: {
        delete: (...args) => s(...p(b['delete.admin.packages.delete'], args)),
      },
      features: {
        delete: (...args) => s(...p(b['delete.admin.features.delete'], args)),
      },
    },
  },
};
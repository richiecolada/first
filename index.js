


const req = require.context('./components', true, /^\.\/[^_][\w-]+\/style\/index\.tsx?$/);

req.keys().forEach((mod) => {
  let v = req(mod);
  if (v && v.default) {
    v = v.default;
  }
  const match = mod.match(/^\.\/([^_][\w-]+)\/index\.tsx?$/);
  if (match && match[1]) {
    if (match[1] === 'message' || match[1] === 'notification') {
      // message & notification should not be capitalized
      exports[match[1]] = v;
    } else {
      exports[camelCase(match[1])] = v;
    }
  }
});


export * from "./components";

// module.exports = require('./components');
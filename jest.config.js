const jestConfig = {
  globals: {
    $ENV: "test"
  },
  setupFilesAfterEnv: ["<rootDir>/src/config/testing.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};

module.exports = jestConfig;

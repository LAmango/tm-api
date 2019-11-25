module.exports = {
  apps: [
    {
      name: "api_dev",
      script: "./src/server.js",

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 4000,
        NODE_ENV: "development"
      }
    },
    {
      name: "test-master-app",
      script: "./src/server.js",

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 4000,
        NODE_ENV: "production"
      }
    }
  ]
};

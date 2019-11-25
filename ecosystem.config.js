module.exports = {
  apps: [
    {
      name: "tm-api",
      script: "./src/server.js",

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
      env: {
        PORT: 8000,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 4000,
        NODE_ENV: "production"
      }
    }
  ]
};

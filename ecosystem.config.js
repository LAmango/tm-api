module.exports = {
  apps : [{
    name: 'tm-api',
    script: './src/server.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      key: "/root/.ssh/github-tm",
      user : 'root',
      host : '142.93.122.56',
      ref  : 'origin/master',
      repo : 'git@github.com:LAmango/tm-api.git',
      path : '/root/test-master/tm-api',
      'post-deploy' : 'yarn add && pm2 reload ecosystem.config.js --env production && pm2 save'
    }
  }
};

module.exports = {
  apps: [{
    name: 'iwill',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/iwill',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3012
    }
  }]
}
module.exports = {  
  apps : [{
    name: "app",
    script: "./src/server.js",  // caminho do server
    instances: "max",
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}
module.exports = {
    apps: [
        {
            name: "estacionamientoapi",
            script: "./index.js",
            instances: 2,
            exec_mode: "cluster",
            watch: true,
            increment_var: 'PORT',
            env: {
                "PORT": 9000,
                "NODE_ENV": "development"
            }
        }
    ]
}
module.exports = {
    apps: [{
        name: "portfolio",
        script: "npm",
        args: "run start",
        env: {
            "NODE_OPTIONS": "--openssl-legacy-provider"
        }
    }]
};
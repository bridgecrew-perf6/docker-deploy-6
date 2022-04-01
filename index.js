const { dockerCommand } = require('docker-cli-js');

// default options
const options = {
    machineName: undefined, // uses local docker
    currentWorkingDirectory: undefined, // uses current working directory
    echo: true, // echo command output to stdout/stderr
    env: undefined,
    stdin: undefined,
};

const data = await dockerCommand('build -t tachidesk .', options);
const run = await dockerCommand('run -d -p 8080:4567 -h docker-deploy-production.up.railway.app tachidesk', options);
const run1 = await dockerCommand('run -d -p 443:4567 -h docker-deploy-production.up.railway.app tachidesk', options);
const run2 = await dockerCommand('run -d -p 4567:4567 -h docker-deploy-production.up.railway.app tachidesk', options);

//docker run -p 4567:4567 ghcr.io/suwayomi/tachidesk
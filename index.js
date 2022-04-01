const { dockerCommand } = require('docker-cli-js');

// default options
const options = {
    machineName: undefined, // uses local docker
    currentWorkingDirectory: undefined, // uses current working directory
    echo: true, // echo command output to stdout/stderr
    env: undefined,
    stdin: undefined,
};

const data = await dockerCommand('build -t nginximg .', options);
const run = await dockerCommand('run -d -p 80:4567 nginximg', options);
//docker run -p 4567:4567 ghcr.io/suwayomi/tachidesk
function buildOutput({testCoverage, testCoverageBefore}) {
    let diff = testCoverage - testCoverageBefore;

    let outputParts = [`Test coverage: **${formatNumber(testCoverage)}%**`];

    if(!testCoverageBefore) {
        outputParts.push('\n\n:rotating_light: No before coverage could be loaded');
        return outputParts.join('');
    }

    if (diff > 0) {
        outputParts.push(`\n\n:tada: Increased by +${formatNumber(diff)}% (was ${formatNumber(testCoverageBefore)}%)`)
    } else if (diff === 0) {
        outputParts.push(`\n\n:man_shrugging: Did not change`)
    } else {
        outputParts.push(`\n\n:rotating_light: Decreased by ${formatNumber(diff)}% (was ${formatNumber(testCoverageBefore)}%)`)
    }

    return outputParts.join('');
}

module.exports = {buildOutput};

function formatNumber(num) {
    return num.toFixed(2) * 1;
}

function buildOutput({testCoverage, testCoverageBefore}) {
    let diff = testCoverage - testCoverageBefore;

    let outputParts = [`Test coverage: **${testCoverage}%**`];

    if (diff > 0) {
        outputParts.push(`\n\n:tada: Increased by +${diff}% (was ${testCoverageBefore}%)`)
    } else if (diff === 0) {
        outputParts.push(`\n\n:man_shrugging: 🚨🚨Did not change`)
    } else {
        outputParts.push(`\n\n:rotating_light: Decreased by ${diff}% (was ${testCoverageBefore}%)`)
    }

    return outputParts.join('');
}

module.exports = {buildOutput};

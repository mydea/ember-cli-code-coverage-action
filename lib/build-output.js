function buildOutput(mainMessageTemplate,{testCoverage, testCoverageBefore}) {
    let diff = testCoverage - testCoverageBefore;

    let outputParts = [
        processTemplate(mainMessageTemplate,{testCoverage:formatNumber(testCoverage)}),
    ];

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

function processTemplate(template,dict){
    let result = template;
    Object.entries(dict).forEach(([key,value])=>{
        const regexp = `{\\s*${key}\\s*}`
        result = result.replace(new RegExp(regexp,'gmi'),value)
    })
    return result;
}

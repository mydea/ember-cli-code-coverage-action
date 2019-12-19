# ember-cli-code-coverage action

This action will calculate the code coverage for each PR. It will then comment with the change in coverage on each PR.

## Example usage

Create a file named `.github/workflows/ember-code-coverage.yml` in your repo and add the following:

```yaml
name: ember-cli-code-coverage

on: [pull_request]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@master
    - uses: mydea/actions-ember-testing@v1
    - name: Install dependencies
      run: yarn install
    - uses: mydea/ember-cli-code-coverage-action@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
```

Note that the `GITHUB_TOKEN` secret is automatically available, so you don't need to do anything else about that.


## Setting up

`repo-token` **required**
Token to post statuses and comments on yore repo. Note that the `GITHUB_TOKEN` secret is automatically available, so you don't need to do anything else about that.


`test-command` *optional*
Default: `yarn test-coverage`
The command to run your tests.
Either you add something like this: `"test-coverage": "COVERAGE=true ember test"` to your package.json file, or you can specify a custom test command.

`coverage-file` *optional*
Default: `./coverage/coverage-summary.json`
The location of coverage summary.json file.

`coverage-indicator` *indicator*
Default: `statements`
The coverage type to use. One of: `statements`, `lines`, `functions`, `branches`.

`working-directory` *directory*
Default: `./`
Ember app directory.

`message` *optional*
Default: `Test coverage: **{testCoverage}%**`
Message title that will be used when posting status on PR comments section.
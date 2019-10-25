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

By default, it will run `yarn test-coverage`. 
Either you add something like this: `"test-coverage": "COVERAGE=true ember test"` to your package.json file, 
or you can specify a custom test command:

```yaml
- uses: mydea/ember-cli-code-coverage-action@v1
  with:
    repo-token: "${{ secrets.GITHUB_TOKEN }}"
    test-command: "yarn my-test-command"
```

You can also specify a custom `coverage-file` (defaults to `./coverage/coverage-summary.json`), 
If ember app located not in the root of a repo you should also specify  `working-directory` option.

and a `coverage-indicator`, which defaults to `statement` (which defines which type of coverage will be used).

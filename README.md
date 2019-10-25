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
    - uses: mydea/ember-cli-code-coveage-action@v1
      with:
        repo-token: "${{ secrets.GITHUB_TOKEN }}"
```

Note that the `GITHUB_TOKEN` secret is automatically available, so you don't need to do anything else about that.

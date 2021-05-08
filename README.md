# Sanity CMS Backend

---

## Work in progress

We're using Github Projects to keep track of issues in progress and todo's. Here is our
[Board](https://github.com/orgs/React-Vancouver/projects)

People actively working on this project: @AkimaLunar.

## Contribute

Our commitment to Open Source can be found [here](https://github.com/React-Vancouver/cms).

1. [Fork](https://help.github.com/articles/fork-a-repo/) this repository to your own GitHub account and then [clone](https://help.github.com/articles/cloning-a-repository/) it to your local device.
2. Create a new branch `git checkout -b MY_BRANCH_NAME`
3. Install yarn: `npm install -g yarn`
4. Install the dependencies: `yarn`
5. Duplicate `.env.template` and rename it to `.env.local`.
6. Add proper store values to `.env.local`.
7. Run `yarn dev` to build and watch for code changes
8. The development branch is `develop` (this is the branch pull requests should be made against).
   On a release, `develop` branch is rebased into `production`.

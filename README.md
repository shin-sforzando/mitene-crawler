# mitene-crawler

<!-- Badges -->

[![Last Commit](https://img.shields.io/github/last-commit/shin-sforzando/mitene-crawler)](https://github.com/shin-sforzando/mitene-crawler/graphs/commit-activity)
[![CI](https://github.com/shin-sforzando/mitene-crawler/actions/workflows/ci.yml/badge.svg)](https://github.com/shin-sforzando/mitene-crawler/actions/workflows/ci.yml)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

<!-- Screenshots -->

| ![Screenshot 1](https://placehold.jp/32/3d4070/ffffff/720x480.png?text=Screenshot%201) | ![Screenshot 2](https://placehold.jp/32/703d40/ffffff/720x480.png?text=Screenshot%202) |
| :------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------: |
|                                      Screenshot 1                                      |                                      Screenshot 2                                      |

<!-- Synopsis -->

Download all images/videos from personal mitene web.

I hope to see the day when this tool will no longer be necessary with the official implementation of mitene.

<!-- TOC -->

- [Prerequisites](#prerequisites)
- [How to](#how-to)
  - [Setup](#setup)
  - [Configure](#configure)
  - [Start](#start)
  - [Lint](#lint)
  - [Format](#format)
- [Misc](#misc)
- [Notes](#notes)
  - [LICENSE](#license)
  - [Contributors](#contributors)

## Prerequisites

- [Volta](https://volta.sh) as _JS Tool Manager_
  - [Node.js](https://nodejs.org/) (Version 18 LTS or higher)
    - [Playwright](https://playwright.dev) (Version 1.36.2 or higher)
    - [Rome](https://rome.tools) (Version 12.1.3)
    - [husky](https://typicode.github.io/husky/) (Version 8.0.3 or higher)
- [git-secret](https://git-secret.io) as _Secret File Manager_
- [direnv](https://direnv.net) as _`.env` Loader_

## How to

```shell
$ npm run
Lifecycle scripts included in mitene-crawler@1.0.0:
  start
    playwright test

available via `npm run-script`:
  prepare
    husky install
  lint
    rome check --apply .
  format
    rome format --write .
```

### Setup

`npm install` to install dependencies.

### Configure

Prepare `.env` with reference to `.env.sample`.

```.env
BASE_URL=https://mitene.us/f/xxxxxxxxxxxxx
```

`xxxxxxxxxxxxx` should be your url of personal mitene web.

Currently, crawling under password protection is not supported.

### Start

(T. B. D.)

### Lint

`npm run lint` to lint all scripts.

### Format

`npm run format` to format all scripts.

## Misc

## Notes

This repository is [Commitizen](https://commitizen.github.io/cz-cli/) friendly, following [GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow).
See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

### LICENSE

See [LICENSE](LICENSE).

### Contributors

- [sforzando LLC. and Inc.](https://sforzando.co.jp/)
  - [Shin'ichiro Suzuki](https://github.com/shin-sforzando)

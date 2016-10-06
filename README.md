# scienceleadership-interims
Interim report customizations for Science Leadership Academy schools

## Release Process
1. Commit or merge changes into the `master` branch
2. Run from the root of the repository: `./update-build.sh`
3. Inspect new commits to `builds/v1` branch
4. Push `builds/v1` branch: `git push origin builds/v1`
5. Push tags: `git push --tags`
6. Add release notes to new tag on GitHub

## Installation Process
1. Copy [sample `scienceleadership-interims.php` git config script](https://github.com/SlateFoundation/scienceleadership-interims/blob/master/php-config/Git.config.d/scienceleadership-interims.php) into site
2. Visit `/git/status` and initialize the `scienceleadership-interims` layer
3. Return to `/git/status` and click <kbd>Disk → VFS</kbd> for the `scienceleadership-interims` layer

## Getting started with client-side UI application development
1. Follow [SlateAdmin's README section on getting started with development](https://github.com/SlateFoundation/slate-admin#getting-started-with-client-side-ui-application-development)
2. Clone the `scienceleadership-interims` repository somewhere outside the slate-admin repository
3. `cd slate-admin/sencha-workspace/packages`
4. `ln -s ../../../scienceleadership-interims/sencha-workspace/packages/scienceleadership-interims`: Symlink scienceleadership-interims package into slate-admin packages directory
5. `cd ../SlateAdmin`
6. Add `scienceleadership-interims` to the `requires` array within `app.json`
7. `sencha app build`

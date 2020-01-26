# scienceleadership-interims

Interim report customizations for Science Leadership Academy schools

## Adding to a school site

1. Create `scienceleadership-interims` source using `master` branch:

    ```bash
    git holo source create https://github.com/SlateFoundation/scienceleadership-interims --ref=master
    ```

1. Create `.holo/branches/emergence-site/_scienceleadership-interims.toml` to map all content in the `emergence-layer` holobranch into the root of your site projection:

    ```toml
    [holomapping]
    holosource="=>emergence-layer"
    files = "**"
    ```

## Getting started with client-side UI application development

1. Follow [SlateAdmin's README section on getting started with development](https://github.com/SlateFoundation/slate-admin#getting-started-with-client-side-ui-application-development)
2. Clone the `scienceleadership-interims` repository somewhere outside the slate-admin repository
3. `cd slate-admin/sencha-workspace/packages`
4. `ln -s ../../../scienceleadership-interims/sencha-workspace/packages/scienceleadership-interims`: Symlink scienceleadership-interims package into slate-admin packages directory
5. `cd ../SlateAdmin`
6. Add `scienceleadership-interims` to the `requires` array within `app.json`
7. `sencha app build`

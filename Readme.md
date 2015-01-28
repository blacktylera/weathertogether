# NSS Cohort 8 Grunt Template

1. Create new project on Github. Do not initialize with a Readme, gitignore, or a License.
2. Make a directory on your local machine for the project.
3. Copy all files from this template into the project directory.
    * `cp -r c8-grunt-template/ new-project`
4. Delete the `.git` directory in the new-project that was copied in the prior step.
    * `rm -rf new-project/.git`
5. `npm init` and `bower init`
6. Add npm dependencies to the `package.json` file and then run `npm install`

    ```json
    "devDependencies": {
      "grunt": "^0.4.5",
      "grunt-contrib-clean": "^0.6.0",
      "grunt-contrib-connect": "^0.9.0",
      "grunt-contrib-copy": "^0.7.0",
      "grunt-contrib-jade": "^0.14.0",
      "grunt-contrib-watch": "^0.6.1",
      "grunt-sass": "^0.17.0",
      "load-grunt-tasks": "^2.0.0"
    }
    ```

7. Install and save any bower dependencies to your project
    ```bash
    bower install angular jquery bootstrap --save
    ```

8. Run `grunt serve` to load the web server

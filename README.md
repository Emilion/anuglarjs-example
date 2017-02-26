# General Info

# Start
For starting the project you will need to download **current**
version of node.js from here https://nodejs.org/en/.
Next step is to download all dependencies. For that purpose you`ll have to
open an Terminal(Unix) or CMD(Windows) and navigate to the project folder.
```
cd path/to/your/project
```
Then execute ``` npm install ```.
Once the npm(node package manager) finishing downloading your dependencies you will be able to start developing.

It is recommended to use integrated lite-server.

Execute:
``` npm run lite ```

# SCOPE
* Basics in angularJs custom directives

# Valuable Materials
* Directives http://www.ng-newsletter.com/posts/directives.html


# Example REQUIREMENT

## Dashboard



* List of all Directors
    * on Director click - navigate to Directors/[selectedPerson] page
* List of all Banks Regions
    * on Bank Region click - open dropdown with 2 options
        * edit here
        * navigate to Banks page
    * **on Bank Region right click - open simple context menu (optional)

    **List example**

    |bank id | bank name      | Region     | Director    |
    |:-------|:---------------|:-----------|:------------|
    |  1     | some bank Name | California | James Davis |
    |...

    * On director click -  open dropdown with 2 options
        * view here
        * navigate to Directors /[selectedPerson] page

## Directors

This view should be separate in 2 pieces

* left - List of all Directors
* right - changeable content -

## Banks



# TECHNOLOGIES
* Node.js https://nodejs.org/en/
* AngularJS https://angularjs.org
* Bootstrap http://getbootstrap.com
* angular-ui-router
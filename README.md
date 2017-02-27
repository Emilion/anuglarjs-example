# Training app for AngularJS
This is an simple app that have to be written on AngularJS.

#### SCOPE
* Basics in angularJS custom directives
* Basics in angular-ui-router
* Basics in $http
* Basics in unit testing using Jasmine and Karma
* Basics in e2e tests using protractor

# Start
Make sure that you have installed **current**
version of [node.js and npm](https://nodejs.org/en/).

You also will need git on your machine. If it is not installed yet, download it from [here](https://git-scm.com/downloads)

1. Create a project folder (you can call it ``exampleApp``, and rename it later)
2. Clone or download this repository.
3. Next step is to download all dependencies. For that purpose you`ll have to
open Terminal(Unix) or CMD(Windows) and to navigate to the project folder.
```
cd path/to/exampleApp
```
4. Then execute ```npm install``` .
5. Now you have all dependencies installed. It`s time to develop.
Run ```npm run lite```.

This will start node server on port 3000. If this port conflicts, you can change it in
```bs-config.js```

## Folder structure
```
```
project Folder
|
|- app/
|       |
|       |- app.js
|       |- your/folder/structure/
|
|- specs/
|       |
|       |- specs.js
|       |
|       |- *.spec.js
|
|
|
|-index.html

```

## Valuable Materials
* [AngularJS Directives](http://www.ng-newsletter.com/posts/directives.html)
* [JavaScript](https://github.com/getify/You-Dont-Know-JS)
* [angular-ui-router](https://github.com/angular-ui/ui-router/wiki)
* [e2e tests - protractor](http://www.protractortest.org/#/api?view=ProtractorBrowser)
* [unit testing instructions](https://docs.angularjs.org/guide/unit-testing)

## Example REQUIREMENT

### Dashboard
* List of all Directors
    * on Director click - navigate to Directors/[selectedPerson] page
* List of all Banks Regions
    * on Bank Region click - open dropdown with 2 options
        * edit here
        * navigate to Banks page
    * **on Bank Region right click - open simple context menu (optional)
        * context menu items - edit Bank info, edit Director info

    **Bank List example**

    |bank id | bank name      | Region     | Director    |
    |:-------|:---------------|:-----------|:------------|
    |  1     | some bank Name | California | James Davis |
    |...

    * On director click -  open dropdown with 2 options
        * view here
        * navigate to Directors /[selectedPerson] page

### Directors

This view should be separate in 2 pieces

* left - List of all Directors
    * on click on the director right side should be replaced with edit Directors view.
* right - view with 3 tabs
    * explanation: (use bootstrap, custom directives for every tab content, filters)

    | Children                                      |  Salary                           | male female ratio      |
    |---                                            |---                                |---                     |
    | first 3 persons with large amount of children |first 5 with the largest salary    | men/women proportion   |



### Banks

This view will also have 2 parts

* left - List of all Banks (should be shown bank ID, Bank name and Director Name)
    * on Bank click right side have to populated.
* right - add/edit Bank

    **hint:**


## TECHNOLOGIES
* [Node.js](https://nodejs.org/en/)
* [AngularJS](https://angularjs.org)
* [Bootstrap](http://getbootstrap.com)
* [angular-ui-router](https://ui-router.github.io/ng1/)
* protractor
* Karma
* Jasmine

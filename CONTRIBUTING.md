# Contributing instructions

Thank you for considering to contribute to the Developers Italia repository!
In the following file you will find instructions and guidelines for
contributing efficiently. 

Before proceeding further, please review our [Code of Conduct](CODE_OF_CONDUCT.md).


# Index
[Bugs](#bugs)  
[Issues](#issues)  
[Gitflow](#gitflow)  
[Releases](#releases)  
[Pull Requests](#pull-request)  
[Commits](#commits)  
[Labels](#labels)  
[Community](#community)   


# Bugs

When you encounter a bug or an issue with the [Developers Italia](https://developers.italia.it) website or some part of this specific repository you may decide to let the developers know what the issue is
about (and we really appreciate it! :rocket:).
Please read on if you want to understand how to efficiently contribute.

## Issues

1. Browse the [issue section](https://github.com/italia/developers.italia.it/issues) and use the search functionality to look if the
   issue you encountered has already been filed. 
  * If this is the case, please avoid creating a new issue in order to avoid
    creating more entropy. Instead, you can add more info to such issue or, if
    the information are already present, you can insert the :+1: symbol in the
    first message. This will help the maintainers identify the relevant issues
    to be prioritized. 
  * If there is not a previous issue in the list, please proceed.
2. Create a new issue.
  * While creating a new issue, you can see that there are three different
    possibilities: 
    * Bug report
    * Feature request
    * General issue

    As such, please be careful to select the nature of the issue in order to be
    able to provide the relevant information to the maintainers of the project. 
    In fact, for each one of the aforementioned categories, there is
    a different template containing sections that allow to provide detailed
    information to reproduce and, subsequently, provide a fix to the issue.
    If the issue does not fall in one of the first two categories it is
    possible to pick the third one but, if you do so, please provide a decent
    amount of detail in order to let other people clearly understand the issue.


After the creation of the issue, the maintainers team will promptly read it and triage it. The triage process involves the assignment of a proper label and a first response by the Developers Italia team.
Therefore, when the issue has been triaged, a corresponding label will be
assigned. Please see all the possible [labels](#labels). 

## Gitflow

This repository adopts a simplified branch management system as follows:

* master is stable. Never touch it, never push directly on it;
* feature or fix branches are derived directly from master.

As such, please continue to read in order to understand how to properly propose your contribution. 


### Releases

When the code is ready for a new release, a new `release` branch is cut from `master`. 

Please check the [Releases](https://github.com/italia/developers.italia.it/releases) page to see the ones already out. 

To see which are the next ones, please check our [Milestones](https://github.com/italia/developers.italia.it/milestones).

The maintainers try to keep the milestones updated in order to show what will be fixed soon and, when possible, they also try to set a consistent end date for such a milestone to be hit.


## Pull Requests

After opening an issue, you may want to further help the developers. If the issue has been triaged and there is endorsement from the maintainers, you may want to propose a solution for such an issue. That's great and always appreciated! :rocket:
As such, the tool you need to use for this use case is the `Pull Request` one.

> :warning: Please ensure that there is a pertinent issue related to what you are proposing and also make sure that someone has already reviewed it before proceeding further

The first step you need to do in order to correctly open a `Pull Request` is to `Fork` the project. As such, first of all you need to have an account on the GitHub platform and be logged in. Then, you have to select the `Fork` button in the landing page of the repository. This will allow you to work on a dedicated fork, push your changes over there and then, if you want to contribute back to upstream, you can create a `Pull Request` targeting this repository. For more extended information, please read [this](https://help.github.com/articles/creating-a-pull-request-from-a-fork/) guide.

When creating a Pull Request, the first thing to do is to pick a name for the PR.
PR names should follow the following convention:

* `[#ISSUE_NUMBER] Name of PR` where `ISSUE_NUMBER` represents the number of the issue you are going to solve with this PR.

By following this convention we can ensure that the commit history will remain clean and it will be easy to spot what a commit does. 

After picking the right name there is already a template in place for what concerns the body of the PR.
The template is the following:

```
<!--- IMPORTANT: Please review [how to contribute](../CONTRIBUTING.md) before proceeding further. -->
<!--- IMPORTANT: If this is a Work in Progress PR, please mark it as such in GitHub. -->
<!--- Insert a title following the convention: [#ISSUE_NUMBER] where ISSUE_NUMBER is the number of the issue that this PR is going to solve. -->

## Description
<!--- Describe in details the proposed mods -->
As already mentioned in #ISSUE_NUMBER, this PR tackles:
* ...
* ...
* ...

In particular, the ...

## Checklist
<!--- Please insert and `x` when each of the following steps is done -->
- [ ] I followed the indications in the [CONTRIBUTING](../CONTRIBUTING.md)
- [ ] The documentation related to the proposed change has been updated accordingly (also comments in code).
- [ ] Have you written new tests for your core changes, as applicable?
- [ ] Have you successfully ran tests with your changes locally?
- [ ] Ready for review! :rocket:

## Fixes
<!-- Please insert the issue numbers after the # symbol -->
- Fixes #
```

Please review each line of such a template before proceeding in order to make sure that the project guidelines have been followed. 
Also, there is a checklist indicating the different steps to be done. When each of the step is ready, please insert an `x` in between the `[ ]` to mark it as ready.
When all the steps will be ready the review process will start.

:warning: Please make sure that all the relevant tests have been run and the CI processes triggered by the commits in the PR are passing without failures. If this is not the case, the PR will not be reviewed so you have to fix them before requesting help :warning:

Also, there is a Netlify integration that allows you to see the results of your tests: please check it carefully and, if you spot any problem, uncheck the `Ready for review` tick, we appreciate it!

## Commits

The name of the commits should be simple and self-explanatory. We decided not to use a strict naming convention but something like `Add CONTRIBUTING file` can work, so first term should be a verb in the present tense, then there should be a set of words to explain the mods. Do not add dots or commas, use plain English. [This] is a great guide regarding this topic.


# Labels
| Label name | Description
| --- | --- |
| API | API related issues |
| bug | Indicates an unexpected problem or unintended behavior
| dependencies | Issues with the dependencies
| documentation | Indicates a need for improvements or additions to documentation
| duplicate | Indicates similar issues or pull requests
| enhancement |  Indicates new feature requests
| frontend | Issues with the frontend
| good first issue | Indicates a good issue for first-time contributors
| help wanted | Indicates that a maintainer wants help on an issue or pull request
| invalid | Indicates that an issue or pull request is no longer relevant
| javascript | Indicates that an issue is referring to JS
| question | Indicates that an issue or pull request needs more information
| wontfix | Indicates that work won't continue on an issue or pull request
| need-triage | When the issue still needs to be triaged
| backend | Issue dedicated to the backend side

# Community

In order to get involved with the community of developers please browse [this](https://developers.italia.it/en/get-involved/) page.
---
title: Google Summer of Code - Ideas list
subtitle: Want to get involved with Google Summer of Code? Here are a few ideas
lang: en
layout: page
---
# Information for Students
First of all, welcome!

These ideas were contributed by our developers and users. They are sometimes vague or incomplete. If you wish to submit a proposal based on these ideas, you may wish to contact the developers and find out more about the particular suggestion you're looking at.

Being accepted as a Google Summer of Code student is quite competitive. Accepted students typically have thoroughly researched the technologies of their proposed project and have been in frequent contact with potential mentors. Simply copying and pasting an idea here will not work. On the other hand, creating a completely new idea without first consulting potential mentors is unlikely to work out.

When writing your proposal or asking for help from the general community of Developers Italia, and don't assume everyone is familiar with the ideas here.

If there is no specific contact given you can ask questions on our [Slack](https://slack.developers.italia.it/). You can get an invite [here](https://slack.developers.italia.it/). If you don't know who your point of contact should be, don't be shy, there is a channel called [#welcome](https://developersitalia.slack.com/messages/C8U3ZSM5M) just for this!

## Open ideas

Well prepared proposals from capable students have an outstanding chance of getting selected. We consider proposals for all skill levels ranging from simple to crazy hard and everything in between. Introduce yourself, and we'll help you plan one right for you.

Remember that project descriptions are just initial ideas. You must expand with considerably more detail. Change the goals to fit your experience and interests.

Note for the community: each project on the Ideas list should include: a) a project title/description b) more detailed description of the project (2-5 sentences) c) expected outcomes d) skills required/preferred e) possible mentors. And if possible, an easy, medium or hard rating of each project.

<table id="issues_table" class="display responsive dataTable no-footer dtr-inline" cellspacing="0" width="100%" role="grid" style="width: 100%;">
    <thead>
        <tr role="row">
            <th data-priority="2" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 40px;">Project</th>
            <th data-priority="0" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 400px;">Brief description</th>
            <th data-priority="11" class="sorting_disabled" rowspan="1" colspan="1" style="width: 30px;">Difficulty</th>
            <th data-priority="10" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 64px;">Contact</th>
        </tr>
    </thead>


    <tbody>
        <tr role="row" class="odd">
            <td tabindex="0">DAF</td>
            <td>
                <b>Create a new pipeline for ingesting data into DAF </b><br /> Data & Analytics Framework (DAF in short) is an infrastructure to consume and distribute many different kind of datasets coming from many different sources. Find an interesting
                data source (with a certain platform) and convert it so it's usable within DAF. We have several mentors available, with different expertises, so make sure you discuss with your mentor which kind of application would be useful.
                <br />
                <b>Mentor:</b> Ask on the #daf channel on our slack once you start having a basic idea
                <br />
                <b>Expected outcome:</b> A working pipeline to ingest data into DAF
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- Scala</li>
                    <li>- Data management</li>
                    <li>- (preferred) Kylo</li>
                </ul>
                <br /> Full description on the issue:
                <a href="https://github.com/italia/daf/issues/215">#215</a></td>
            <td>Hard</td>
            <td><a href="https://developersitalia.slack.com/messages/C760XQX9Q/">#daf</a></td>
        </tr>
        <tr role="row" class="even">
            <td tabindex="0">DAF</td>
            <td>
                <b>Create a data product based on a DAF dataset</b><br /> Create an application based on a DAF dataset You can choose any technology you want, but you should be creating an interesting dashboard, visualization, or useful program which
                exploits the possibilities of the DAF framework. We have several mentors available, with different expertises, so make sure you discuss with your mentor which kind of application would be useful. We have several mentors available, with
                different expertises, so make sure you discuss with your mentor which kind of application would be useful.
                <br />
                <b>Mentor:</b> Ask on the #daf channel on our slack once you start having a basic idea
                <br />
                <b>Expected outcome:</b> An application (web or otherwise) which makes use of DAF datasets
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- (preferred) Data visualization</li>
                    <li>- Data management</li>
                </ul>
                <br /> Full description on the issue:
                <a href="https://github.com/italia/daf/issues/214">#214</a></td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C760XQX9Q/">#daf</a></td>
        </tr>
        <tr role="row" class="odd">

            <td tabindex="0">OpenFisca</td>
            <td>
                <b>Adapt OpenFisca to the Italian Fiscal system</b><br />
                <a href="http://openfisca.org/doc/index.html">OpenFisca</a> is an open source project created by the French government<br /><br /> It supports multiple countries. Implement an "Italia" country which implements the Italian fiscal laws.
                This task is interesting to students with a background in
                <br />
                <b>Mentor:</b> You will have two mentors from the Digital Transformation Team: one for the python code and an expert of the tax system. Find them on #welcome.
                <br />
                <b>Expected outcome:</b> A working implementation of Italy in the OpenFisca system.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- Python</li>
                    <li>- A general understanding of taxation systems</li>
                </ul>
                <br /> Full description on the issue:
                <a href="https://github.com/italia/developers.italia.it/issues/105">#105</a></td>
            <td>Easy</td>
            <td><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
        <tr role="row" class="even">
            <td tabindex="0">Design</td>
            <td>
                <b>Create a Joomla theme that implements the Italia Design Guidelines</b><br /> Create a theme for Joomla based on the User Interface design guidelines. Do include the design web toolkit as a dependency, and make sure you write your code
                in a way which is generic enough so that, later on, it be replaced by another toolkit (e.g. bootstrap) without too much effort.
                <br />
                <b>Mentor:</b> Francesco Zaia, with the help of others in the #design team
                <br />
                <b>Expected outcome:</b> A working implementation of the Italia Design System as a Joomla theme.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- CSS</li>
                    <li>- Frontend development</li>
                    <li>- Joomla</li>
                </ul>
                <br /> Full description on the issue:
                <a href="https://github.com/italia/design-joomla-theme/issues/1">#1</a></td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C7658JRJR">#design</a>
                <a href="https://developersitalia.slack.com/messages/C7VPAUVB3">#design-js</a></td>
        </tr>
        <tr role="row" class="odd">
            <td tabindex="0">Design</td>
            <td>
                <b>Create a Drupal theme that implements the Italia Design Guidelines</b><br /> Create a theme for Drupal based on the User Interface design guidelines. Do include the design web toolkit as a dependency, and make sure you write your code
                in a way which is generic enough so that, later on, it be replaced by another toolkit (e.g. bootstrap) without too much effort.
                <br />
                <b>Mentor:</b> Francesco Zaia, with the help of others in the #design team
                <br />
                <b>Expected outcome:</b> A working implementation of the Italia Design System as a Drupal theme.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- CSS</li>
                    <li>- Frontend development</li>
                    <li>- Drupal</li>
                </ul>
                <br /> Full description on the issue:
                <a href="https://github.com/italia/design-drupal-theme/issues/1">#1</a></td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C7658JRJR">#design</a>
                <a href="https://developersitalia.slack.com/messages/C7VPAUVB3">#design-js</a></td>
        </tr>
        <tr role="row" class="even">
            <td tabindex="0">General</td>
            <td>
                <b>Your own idea!!</b><br /> Something that you're totally excited about!<br />Do you have an awesome idea you want to work on with Developers Italia but that is not among the ideas below? That's cool. We love that! But please do us a
                favor: Get in touch with a mentor early on and make sure your project is realistic and within the scope of Developers Italia. That will spare you and us a lot of frustration.
                <br />
                <b>Mentor:</b> Propose your idea and ask who in Developers Italia is interested in what you want to work on and approach them. If you are unsure you can always ask in <a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a>.
                <br />
                <b>Expected outcome:</b> To be discussed with your mentor...
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- Up to you :-)</li>
                </ul>
                </td>
                <td>Up to you</td>
                <td><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
        <tr role="row" class="odd">
            <td tabindex="0">DAF</td>
            <td>
                <b>CI and Automation for DAF</b><br /> DAF is currently organized as a number of microservices with a complex deploy structure. It is not the most developer-friendly environment to set-up. Write a series of CI/CD pipelines to automate the testing and development phases, and complement it with some ansible sugar to configure hacking and production environments.
                <br />
                <b>Mentor:</b> Our dev-ops are always hanging on the #daf channel. Fabio Fumarola or Alessandro Ercolani will help you get started.
                <br />
                <b>Expected outcome:</b> A set of pipelines to create a more structured DAF infrastructure.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- A CI/CD system</li>
                    <li>- Ansible</li>
                </ul></td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C760XQX9Q/">#daf</a></td>
        </tr>
        <tr role="row" class="even">
            <td tabindex="0">DAF</td>
            <td>
                <b>Data science - datastories</b><br /> DAF offers Jupiter notebooks for data scientists to explore public datasets. The whole environment is set up in a way so that you can create your "data stories", combining notebooks, Metabase plots and other visualization from Superset. Use the platform to create new dashboards useful to citizens and journalists.
                <br />
                <b>Mentor:</b> Data science team #daf channel. Fabiana Lanotte.
                <br />
                <b>Expected outcome:</b> A set of datastories that create insights on public data.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- Python</li>
                    <li>- Data Science</li>
                </ul></td>
            <td>Easy</td>
            <td><a href="https://developersitalia.slack.com/messages/C760XQX9Q/">#daf</a></td>
        </tr>
        <tr role="row" class="odd">
            <td tabindex="0">General</td>
            <td>
                <b>Plan and develop a novel <i>electronic class register</i> for the hospital school</b><br /> The Italian <i>hospital schools</i> need a specialized class register with features slightly different from the traditional registers. Together with an ad-hoc team of the Polytechnic University of Turin, you should analyze the current solutions in the FOSS panorama, design the novel architecture, develop the code and define a deployment strategy. The starting point of the project will be the working solution already deployed by the team several years ago (that needs restyling).
                <br />
                <b>Mentor:</b> The Open Education team at Politecnico di Torino
                <br />
                <b>Expected outcome:</b> A working alpha release.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>- Python</li>
                    <li>- Django</li>
                    <li>- PostgreSQL</li>
                    <li>- GNU/Linux</li>
                    <li>- Web development/deployment techniques</li>
                </ul>
                Meet me on Slack in the #welcome channel.</td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
    </tbody>
</table>

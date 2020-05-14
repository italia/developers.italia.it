---
title: "Google Summer of Code: information for students"
subtitle: Want to get involved with Google Summer of Code? Here are a few ideas
lang: en 
ref:
  it: /it/idee-gsoc
layout: internal-simple
image: /assets/images/comelouso-temp-img.jpg
---

First of all, welcome!

These ideas were contributed by our developers and users. They are sometimes
vague or incomplete. If you wish to submit a proposal based on these ideas, you
may wish to contact the developers and find out more about the particular
suggestion you're looking at.

Being accepted as a Google Summer of Code student is quite competitive.
Accepted students typically have thoroughly researched the technologies of
their proposed project and have been in frequent contact with potential
mentors. Simply copying and pasting an idea here will not work. On the other
hand, creating a completely new idea without first consulting potential mentors
is unlikely to work out.

When writing your proposal or asking for help from the general community of
Developers Italia don't assume everyone is familiar with the ideas here.

If there is no specific contact given you can ask questions on our
[Slack](https://slack.developers.italia.it/). You can get an invite
[here](https://slack.developers.italia.it/). If you don't know who your point
of contact should be, don't be shy, there is a channel called
[#welcome](https://developersitalia.slack.com/messages/C8U3ZSM5M) just for
this!

## Open ideas

Well prepared proposals from capable students have an outstanding chance of
getting selected. We consider proposals for all skill levels ranging from
simple to crazy hard and everything in between. Introduce yourself, and we'll
help you plan one right for you.

Remember that project descriptions are just initial ideas. You must expand with
considerably more detail. Change the goals to fit your experience and
interests.

**Note for the community**.
Each project on the Ideas list should include:
1. a project title/description;
2. more detailed description of the project (2-5 sentences);
3. expected outcomes;
4. skills required/preferred;
5. possible mentors.

And, if possible, an *easy, medium or hard* rating of each project.


<table id="issues_table" class="table table-striped table-bordered" cellspacing="0" width="100%" role="grid" style="width: 100%;">
    <thead>
        <tr role="row">
            <th data-priority="2" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 40px;">Project</th>
            <th data-priority="0" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 400px;">Brief description</th>
            <th data-priority="11" class="sorting_disabled" rowspan="1" colspan="1" style="width: 30px;">Difficulty</th>
            <th data-priority="10" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" style="width: 64px;">Contact</th>
        </tr>
    </thead>
    <tbody>
        <tr role="row" class="odd" id="agave">
            <td tabindex="0">Developers</td>
            <td>
                <b>Agave CMS</b><br /> 
                Agave is a free and open source static website generator. The Agave project is currently active and some major milestones have already been reached. As such, this GSoC project will be focused on consolidating the application in order to be considered production ready. Activities will span fullstack from the consolidation of the infrastructure technologies (i.e., prepare the easy deployment) to the templating side, where some work is needed in order to produce solid final templates.
                <br />
                <b>Mentor:</b> Ask on the #design-dev channel on our slack once you start having a basic idea.
                <br />
                <b>Expected outcome:</b> 
                On the infrastructure side, desired outcomes involve a robust, tested and production ready dockerized environment. For what concerns the templating end, the complete implementation of the Bootstrap Italia directives has to be achieved so that the websites created by using Agave end up being 100% compatible with the Italian design guidelines.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li> React</li>
                    <li> Ruby on Rails </li>
                    <li> Docker and CI/CD technologies </li>
                </ul>
            </td>
            <td>Medium</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="even" id="api1">
            <td tabindex="0">API</td>
            <td>
                <b>Implementation of several rate-limit header fields for HTTP inside renowned software products</b> <br />
                The aim of this project is to work on the new <a href="https://tools.ietf.org/id/draft-polli-ratelimit-headers-01.html">rate-limit header fields for HTTP</a> internet draft. In practice, such novelty has to be implemented in the form of plugins inside world known products, such as traefik, nginx, envoy-proxy and 3scale. As such, it will also be important to interact with the already existing communities built around those tools to ensure the code gets merged.
                <br />
                <b>Mentor:</b> Ask on the #api channel on our slack once you start having a basic idea.
                <br />
                <b>Expected outcome:</b>
                Working plugins for traefik, nginx, envoy-proxy et al. implementing the rate-limit headers. The student should provide a working environment for testing the implementations. 
                <br />
                <b>Required skills:</b>
                <ul>
                    <li> Golang, JS, Python, Java, C depending on the target platform</li>
                    <li> Basic Linux knowledge</li>
                    <li> Docker and CI/CD related technologies</li>
                </ul>
            </td>
            <td>Hard</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></td>
        </tr>
        <tr role="row" class="odd" id="api2">
            <td tabindex="0">API</td>
            <td>
                <b>Implement conf API Gateway</b><br /> 
                This project aims at setting up full fledged API Gateways capable of supporting a set of interoperability technologies like:
                <ul>
                    <li> exposing APIs via  OpenAPI3 specifications;</li>
                    <li> returning  RateLimit header fields;</li>
                    <li> return errors conformant to RFC7807 (Problem Details for HTTP APIs).</li>
                </ul>
                Students will study, install and setup opensource API gateways and reverse proxies like Kong, 3scale, Nginx, WSO2 ensuring that the exposed features are implemented in the more standard way.
                Where those features require implementing plugins, filters or integration components, students should do it previously contacting the gateway communities. For the ratelimit part, they will interact with students working on <a href="#api1">proposal#2</a>. 
                <br />
                <b>Mentor:</b> Ask on the #api channel on our slack once you start having a basic idea.
                <br />
                <b>Expected outcome:</b> 
                The outcome is a docker-compose or helm chart providing a redundant setup of an API Gateway infrastructure, useful to expose APIs descibed by OAS3 specification files.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li> Docker and CI/CD related technologies</li>
                    <li> HTTP protocol</li>
                    <li> Python, Java, C depending on the target platforms. </li>
                    <li> Optional: Kubernetes </li>
                </ul>
            </td>
            <td>Hard</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></td>
        </tr>
        <tr role="row" class="even" id="des1">
            <td tabindex="0">Design</td>
            <td>
                <b>Design system kit for React</b><br /> 
                Complete the <a href="https://github.com/italia/design-react-kit/">Designers Italia Design React Kit</a> by updating its dependencies and add/fix any missing components. Update the <a href="https://storybook.js.org/">Storybook</a> and improve documentation to make things easier for users. On a separate repository, implement a <a href="https://www.gatsbyjs.org/">Gatsby</a> template in order to ease the adoption of the kit within the public administration and spread its usage.
                <br />
                <b>Mentor:</b> Designers or developers from the Designers Italia team.
                <br />
                <b>Expected outcome:</b> 
                A new stable version of the <a href="https://github.com/italia/design-react-kit/">Design React Kit</a>, implementing most of the components from Bootstrap Italia, and a Gatsby template that is easy to use and fully compliant with accessibility rules.
                This project can be used as a solid starting point:
                <ul>
                    <li> <a href="https://github.com/italia/design-italia-gatsby-starterkit">Design Italia Gatsby Starter Kit</a> (additional details can be found on its thread on Forum Italia).</li>
                </ul>
                <b>Required skills:</b>
                <ul>
                    <li> Design systems</li>
                    <li> Javascript/ES/React</li>
                    <li> Basic understanding of StorybookJS and GatsbyJS</li>
                </ul>
            </td>
            <td>Medium</td>
            <td><a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="odd" id="des2">
            <td tabindex="0">Design</td>
            <td>
                <b>A Wordpress theme for municipalities</b><br /> 
                Create a Wordpress theme for municipalities based on the Italian design system.
                The code will be crafted upon <a href="https://italia.github.io/bootstrap-italia/">Bootstrap Italia</a> in order to adhere to the <a href="https://italia.github.io/design-comuni-prototipi/it/kit.html#template-html">HTML templates</a> that are already provided by Designers Italia. Wordpress content types and taxonomy will be consistent with the guidelines available on the <a href="https://docs.google.com/spreadsheets/d/1bE0Ns0LsU0VDvCBT1WXZ5_yIxJU5AbUYcu_F8yMfpHQ/edit#gid=212585064">information architecture for municipalities</a> websites document.
                The Designers Italia community already created two Wordpress themes:
                <ul>
                    <li> <a href="https://github.com/italia/design-wordpress-theme">https://github.com/italia/design-wordpress-theme</a></li>
                    <li> <a href="https://github.com/italia/design-wordpress-theme-wt">https://github.com/italia/design-wordpress-theme-wt</a></li>
                </ul>
                These themes are built for general purpose public websites and they may not be entirely validated in terms of accessibility or fully up-to-date. Nevertheless, they can serve as a starting point for the municipalities theme.
                <br />
                <b>Mentor:</b> Designers or developers from the Designers Italia team.
                <br />
                <b>Expected outcome:</b> 
                A working Wordpress theme for municipalities based on the Italian design system and ready to be used by any municipality for their own website, with a clear documentation and licensing. The project outcome should aim to the quality of Designers Italia's <a href="https://github.com/italia/design-scuole-wordpress-theme">Wordpress theme for schools</a>.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li> Design systems and web development</li>
                    <li> Wordpress plugins and theming best-practices</li>
                    <li> Understanding of information architecture</li>
                </ul>
            </td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C91K0K085/">#design-cms-themes</a></td>
        </tr>
        <tr role="row" class="even" id="des3">
            <td tabindex="0">Design</td>
            <td>
                <b>A Drupal theme for municipalities</b><br /> 
                Create a Drupal theme for municipalities based on the Italian design system.
                The code will be crafted upon <a href="https://italia.github.io/bootstrap-italia/">Bootstrap Italia</a> in order to adhere to the <a href="https://italia.github.io/design-comuni-prototipi/it/kit.html#template-html">HTML templates</a> that are already provided by Designers Italia. Drupal content types and taxonomy will be consistent with the guidelines available on the <a href="https://docs.google.com/spreadsheets/d/1bE0Ns0LsU0VDvCBT1WXZ5_yIxJU5AbUYcu_F8yMfpHQ/edit#gid=212585064">information architecture for municipalities</a> websites document.
                There is already a Drupal theme for general purpose public websites that can serve as a starting point for the municipalities theme:
                <a href="https://www.drupal.org/project/bootstrap_italia">https://www.drupal.org/project/bootstrap_italia</a>.
                <br />
                <b>Mentor:</b> Designers or developers from the Designers Italia team.
                <br />
                <b>Expected outcome:</b> A working Drupal theme for municipalities based on the Italian design system and ready to be used by any municipality for their own website, with a clear documentation and licensing. The project outcome should aim to the quality of Designers Italia's <a href="https://github.com/italia/design-scuole-wordpress-theme">Wordpress theme for schools</a>.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li> Design systems and web development</li>
                    <li> Drupal plugins and theming best-practices</li>
                    <li> Understanding of information architecture</li>
                </ul>
            </td>
            <td>Medium</td>
            <td><a href="https://developersitalia.slack.com/messages/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="even" id="general">
            <td tabindex="0">General</td>
            <td>
                <b>Your own idea!!</b><br /> Something that you're totally
                excited about!<br />Do you have an awesome idea you want to
                work on with Developers Italia but that is not among the ideas
                below? That's cool. We love that! But please do us a
                favor: Get in touch with a mentor early on and make sure your
                project is realistic and within the scope of Developers Italia.
                That will spare you and us a lot of frustration.
                <br />
                <b>Mentor:</b> Propose your idea and ask who in Developers
                Italia is interested in what you want to work on and approach
                them. If you are unsure you can always ask in <a
                href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a>.
                <br />
                <b>Expected outcome:</b> To be discussed with your mentor...
                <br />
                <b>Required skills:</b>
                <ul>
                    <li> Up to you :-)</li>
                </ul>
            </td>
            <td>Up to you</td>
            <td><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
    </tbody>
</table>

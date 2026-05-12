---
title: "Google Summer of Code: information for students"
subtitle: Want to get involved with Google Summer of Code? Here are a few ideas!
lang: en
ref:
  it: /it/idee-gsoc
layout: internal-simple
image: /assets/images/comelouso-temp-img.jpg
---

## Dear GSoC Student....

first of all, welcome here! Developers Italia is very pleased to have you here.

Below you will find a list of ideas contributed by the Developers Italia community.
They are intended as basic suggestions to stimulate your thinking process. You can use them as guidelines to make sure you come up with a great proposal, but feel free to expand and add your personal spin to it.

We're happy to discuss them further, of course. If you would like to submit a proposal based on these suggestions, you might want to contact the developers first and find out more about the specific suggestion you are looking at.

**Important Note: Please remember that all Project Ideas for GSoC 2021 are meant to be ~175 hour projects, so don't add too many features to your proposal. We prefer small but manageable projects instead of proposals that try to include everything and will not be completed later in the summer.**

Keep a few more things in mind:

It's quite competitive to be accepted as a Google Summer Code student. Accepted students have usually thoroughly researched the technologies of their proposed project and have been in frequent contact with potential mentors. Just copying and pasting an idea here is not going to work. On the other hand, creating a completely new idea without first consulting potential mentors is also unlikely to work.

When writing your proposal or asking for help from the General Community of Developers Italia, don't assume that everyone here knows the ideas.

If you do not have a specific contact, you can ask questions by joining our public [Slack](https://slack.developers.italia.it/). You can get an invitation by simply visiting the link above. If you don't know who your point of contact should be, don't be shy, there's a channel called [#welcome](https://developersitalia.slack.com/messages/C8U3ZSM5M) for this one! You may see some Italian pop up from time to time (especially from guests), but we all speak English (and interact solely in it for anything related to code). Don't be afraid to ask any of your questions.

ヽ(•‿•)ノ

## Remember, this is just the start...

Well-prepared proposals from able students have an excellent chance of being selected. We consider proposals for all skill levels, ranging from simple to insane, and everything in between. Introduce yourself, and we're going to help you plan one right for you.

Remember that project descriptions are only initial ideas. You need to expand them with considerably more detail. Change the goals to suit your experience and interests.

<table id="issues_table" class="table table-striped table-bordered" cellspacing="0" width="100%" role="grid" style="width: 100%;">
    <thead>
        <tr role="row">
            <th data-priority="2" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" width="80%">Proposal</th>
            <th class="d-none d-md-table-cell" data-priority="10" tabindex="0" aria-controls="issues_table" rowspan="1" colspan="1" width="20%">Contact</th>
        </tr>
    </thead>
    <tbody>
        <tr role="row" class="odd" id="agave">
            <td>
                <h4>OSSA (Online Services Suggestion API)</h4>
                <p><b>Project:</b> API</p>
                <p><b>Difficulty:</b> Medium/Hard</p>
                <p class="d-md-none"><b>Contact:</b> <a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></p>
                <p>"<i>OSSA</i>" aims to reduce the time spent by users looking for desired online services.
                The project aspires to develop a generic and configurable API, able to suggest online services available in a catalog. Suggestions should be based on user's data, users activities, etc. without sensitive-data.
                "<i>OSSA</i>" should collect data only from completed Online Services usages, using these data for future predictions.
                Multiple service providers have to be taken into account, each with its own set of online services, but only one multi-tenant identity provider.
                No data should be stored in users' clients and all computation should be server side.</p>
                <p><b>Mentor:</b> Alessandro Atria. Ask on the <a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api channel</a> on our slack once you start having a basic idea.</p>
                <p><b>Expected outcome:</b>
                A working prototype with:</p>
                <ul>
                    <li>a silly web user interface</li>
                    <li>a set of restful methods</li>
                    <li>an example of dataset</li>
                    <li>at least three configurable Service Providers, everyone with four online services in catalog</li>
                    <li>one or more Machine Learning models to compute predictions</li>
                    <li>a training policy to periodically align Machine Learning models</li>
                </ul>
                <p><b>Required skills:</b>
                Machine/Deep Learning knowledge, Javascript, Sql/NoSql and at least one programming language suitable for AI.</p>
            </td>
            <td class="d-none d-md-table-cell"><a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="even" id="api1">
            <td>
                <h4>Implementation of several rate-limit header fields for HTTP inside renowned software products</h4>
                <p><b>Project:</b> API</p>
                <p><b>Difficulty:</b> Hard</p>
                <p class="d-md-none"><b>Contact:</b> <a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></p>
                <p>The aim of this project is to work on the new <a href="https://tools.ietf.org/id/draft-polli-ratelimit-headers-01.html">rate-limit header fields for HTTP</a> internet draft. In practice, such novelty has to be implemented in the form of plugins inside world known products, such as traefik, nginx, envoy-proxy and 3scale. As such, it will also be important to interact with the already existing communities built around those tools to ensure the code gets merged.
                </p>
                <p><b>Mentor:</b> Ask on the <a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api channel</a> on our slack once you start having a basic idea.</p>
                <p><b>Expected outcome:</b>
                Working plugins for traefik, nginx, envoy-proxy et al. implementing the rate-limit headers. The student should provide a working environment for testing the implementations.
                </p>
                <p><b>Required skills:</b></p>
                <ul>
                    <li> Golang, JS, Python, Java, C depending on the target platform</li>
                    <li> Basic Linux knowledge</li>
                    <li> Docker and CI/CD related technologies</li>
                </ul>
            </td>
            <td class="d-none d-md-table-cell"><a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></td>
        </tr>
        <tr role="row" class="odd" id="api2">
            <td>
                <h4>Implement conf API Gateway</h4>
                <p><b>Project:</b> API</p>
                <p><b>Difficulty:</b> Hard</p>
                <p class="d-md-none"><b>Contact:</b> <a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></p>
                <p>This project aims at setting up full fledged API Gateways capable of supporting a set of interoperability technologies like:</p>
                <ul>
                    <li> exposing APIs via  OpenAPI3 specifications;</li>
                    <li> returning  RateLimit header fields;</li>
                    <li> return errors conformant to RFC7807 (Problem Details for HTTP APIs).</li>
                </ul>
                <p>
                Students will study, install and setup opensource API gateways and reverse proxies like Kong, 3scale, Nginx, WSO2 ensuring that the exposed features are implemented in the more standard way.
                Where those features require implementing plugins, filters or integration components, students should do it previously contacting the gateway communities. For the ratelimit part, they will interact with students working on <a href="#api1">proposal#2</a>.
                </p>
                <p><b>Mentor:</b> Ask on the <a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api channel</a>on our slack once you start having a basic idea.</p>
                <p><b>Expected outcome:</b>
                The outcome is a docker-compose or helm chart providing a redundant setup of an API Gateway infrastructure, useful to expose APIs descibed by OAS3 specification files.
                </p>
                <p><b>Required skills:</b></p>
                <ul>
                    <li> Docker and CI/CD related technologies</li>
                    <li> HTTP protocol</li>
                    <li> Python, Java, C depending on the target platforms. </li>
                    <li> Optional: Kubernetes </li>
                </ul>
            </td>
            <td class="d-none d-md-table-cell"><a href="https://app.slack.com/client/T6C27AXE0/CDKBYTG74">#api</a></td>
        </tr>
        <tr role="row" class="even" id="des1">
            <td>
                <h4>Design system kit for React</h4>
                <p><b>Project:</b> Design</p>
                <p><b>Difficulty:</b> Medium</p>
                <p class="d-md-none"><b>Contact:</b> <a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></p>
                <p>Complete the <a href="https://github.com/italia/design-react-kit/">Designers Italia Design React Kit</a> by updating its dependencies and add/fix any missing components. Update the <a href="https://storybook.js.org/">Storybook</a> and improve documentation to make things easier for users. On a separate repository, implement a <a href="https://www.gatsbyjs.org/">Gatsby</a> template in order to ease the adoption of the kit within the public administration and spread its usage.
                </p>
                <p><b>Mentor:</b> Designers or developers from the Designers Italia team.</p>
                <p><b>Expected outcome:</b>
                A new stable version of the <a href="https://github.com/italia/design-react-kit/">Design React Kit</a>, implementing most of the components from Bootstrap Italia, and a Gatsby template that is easy to use and fully compliant with accessibility rules.
                This project can be used as a solid starting point:</p>
                <ul>
                    <li> <a href="https://github.com/italia/design-italia-gatsby-starterkit">Design Italia Gatsby Starter Kit</a> (additional details can be found on its thread on Forum Italia).</li>
                </ul>
                <p>
                <b>Required skills:</b></p>
                <ul>
                    <li> Design systems</li>
                    <li> Javascript/ES/React</li>
                    <li> Basic understanding of StorybookJS and GatsbyJS</li>
                </ul>
            </td>
            <td class="d-none d-md-table-cell"><a href="https://app.slack.com/client/T6C27AXE0/C7VPAUVB3">#design-dev</a></td>
        </tr>
        <tr role="row" class="odd" id="des2">
            <td>
                <h4>Content Readability Validator</h4>
                <p><b>Project:</b> Developers Italia</p>
                <p><b>Difficulty:</b> Hard</p>
                <p class="d-md-none"><b>Contact:</b> <a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></p>
                <p>This project aims to create a webapp that evaluates the readability of public administration contents (including the Gulpease index) and proposes changes on elements (lexical, syntactic, structural ...) that can be improved. The backend should be populated through a Machine Learning process and contain a knowledge base with data and rules used for checks and suggestions.
                </p>
                <p><b>Mentor:</b> Saverio Pulizzi / Andrea Stagi</p>
                <p><b>Expected outcome:</b>
                    A robust, tested, user friendly and production ready dockerized webapp to evaluate readability of public administration contents.
                </p>
                <p>
                <b>Required skills:</b></p>
                <ul>
                    <li>React JS</li>
                    <li>Python</li>
                    <li>Machine Learning</li>
                    <li>Docker </li>
                    <li>CI/CD technologies</li>
                </ul>
            </td>
            <td class="d-none d-md-table-cell"><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
        <tr role="row" class="even" id="general">
            <td>
                <h4>Your own idea!!</h4>
                <p><b>Project:</b> General</p>
                <p><b>Difficulty:</b> Up to you</p>
                <p class="d-md-none"><b>Contact:</b> <a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></p>
                <p>Something that you're totally
                excited about!<br />Do you have an awesome idea you want to
                work on with Developers Italia but that is not among the ideas
                below? That's cool. We love that! But please do us a
                favor: Get in touch with a mentor early on and make sure your
                project is realistic and within the scope of Developers Italia.
                That will spare you and us a lot of frustration.
                </p>
                <p><b>Mentor:</b> Propose your idea and ask who in Developers
                Italia is interested in what you want to work on and approach
                them. If you are unsure you can always ask in <a
                href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a>.
                </p>
                <p><b>Expected outcome:</b> To be discussed with your mentor...</p>
                <p><b>Required skills:</b></p>
                <ul>
                    <li> Up to you :-)</li>
                </ul>
            </td>
            <td class="d-none d-md-table-cell"><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
        </tr>
    </tbody>
</table>

## For those already in the community

If you've got more proposals, we'd love to add them here. Please contact Riccardo Iaconelli to insert your project. Alternatively, feel free to [open a pull request](https://github.com/italia/developers.italia.it) and add your project to it.

If you have more proposals, we'd love to add them here. Please contact Riccardo Iaconelli to insert your project. Alternatively, feel free to  and add your project.

**Bear in mind that these tasks should be finished in 175 hours.**

Each project in the Ideas list should include:

1. a project title/description;
2. more detailed description of the project (2-5 sentences);
3. expected outcomes;
4. skills required/preferred;
5. possible mentors.

And, if possible, an *easy, medium or hard* rating for each project.

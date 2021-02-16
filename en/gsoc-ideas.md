---
title: "Google Summer of Code: information for students"
subtitle: Want to get involved with Google Summer of Code? Here are a few ideas!
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
            <td tabindex="0">API</td>
            <td>
                <b>OSSA (Online Services Suggestion API)</b><br /> 
                "<i>OSSA</i>" aims to reduce the time spent by users looking for desired online services.
                The project aspires to develop a generic and configurable API, able to suggest online services available in a catalog. Suggestions should be based on user's data, users activities, etc. without sensitive-data.
                "<i>OSSA</i>" should collect data only from completed Online Services usages, using these data for future predictions.
                Multiple service providers have to be taken into account, each with its own set of online services, but only one multi-tenant identity provider.
                No data should be stored in users' clients and all computation should be server side.
                <br />
                <b>Mentor:</b> Alessandro Atria. Ask on the #api channel on our slack once you start having a basic idea.
                <br />
                <b>Expected outcome:</b> 
                A working prototype with:
                <ul>
                    <li>a silly web user interface</li>
                    <li>a set of restful methods</li>
                    <li>an example of dataset</li>
                    <li>at least three configurable Service Providers, everyone with four online services in catalog</li>
                    <li>one or more Machine Learning models to compute predictions</li>
                    <li>a training policy to periodically align Machine Learning models</li>
                </ul>
                <br />
                <b>Required skills:</b>
                Machine/Deep Learning knowledge, Javascript, Sql/NoSql and at least one programming language suitable for AI.
            </td>
            <td>Medium / Hard</td>
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
            <td tabindex="0">Developers Italia</td>
            <td>
                <b>Content Readability Validator</b><br /> 
                 This project aims to create a webapp that evaluates the readability of public administration contents (including the Gulpease index) and proposes changes on elements (lexical, syntactic, structural ...) that can be improved. The backend should be populated through a Machine Learning process and contain a knowledge base with data and rules used for checks and suggestions.
                <br />
                <b>Mentor:</b> Saverio Pulizzi / Andrea Stagi
                <br />
                <b>Expected outcome:</b> 
                    A robust, tested, user friendly and production ready dockerized webapp to evaluate readability of public administration contents.
                <br />
                <b>Required skills:</b>
                <ul>
                    <li>React JS</li>
                    <li>Python</li>
                    <li>Machine Learning</li>
                    <li>Docker </li>
                    <li>CI/CD technologies</li>
                </ul>
            </td>
            <td>Hard</td>
            <td><a href="https://developersitalia.slack.com/messages/C8U3ZSM5M">#welcome</a></td>
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

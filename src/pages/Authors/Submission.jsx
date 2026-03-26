import React from "react";
import Heading from "../../components/Heading";
import { useNavigate } from "react-router";

function Submission() {
  const navigate = useNavigate();
  return (
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:gap-16 gap-10 lg:py-20 py-14 px-6 items-start">
      <div className="flex flex-col gap-8 w-full text-sm poppins">
        <Heading title1="Submission" title2="Guidelines" />
        {/* <p className="poppins-italic text-lg font-medium text-gray-800">
          <span className="text-blue-theme font-bold">To be announced</span>
        </p>
        <img src="/comming_soon.png" alt="comming soon" className="mx-auto" /> */}
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Submission & Publication
          </h2>
          <div className=" text-gray-800 font-semibold">
            The <span className="text-blue-theme font-bold">Microsoft CMT</span>{" "}
            portal will be used for manuscript submission and the entire
            peer-review process. All submissions must follow the
            <span className="text-blue-theme font-bold">
              {" "}
              double-blind
            </span>{" "}
            review process, meaning authors must submit their manuscripts{" "}
            <span className="text-blue-theme font-bold">
              without including names, affiliations, or any identifying
              information
            </span>{" "}
            in the submitted paper.
            <br /> <br /> Prospective authors are invited to submit{" "}
            <span className="text-blue-theme font-bold">
              original, unpublished research papers
            </span>
            describing recent innovations, experimental results, theoretical
            developments, and practical applications related to the themes of
            the conference.
            <br /> <br />
            Submitted manuscripts must{" "}
            <span className="text-blue-theme font-bold">
              not be under review
            </span>{" "}
            or published elsewhere.
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Paper Submission Templates
          </h2>
          <div className=" text-gray-800 font-semibold">
            Authors must prepare their manuscripts using the following
            templates. <br /> <br />{" "}
            <span className="text-blue-theme font-bold">
              Microsoft Word Template (US Letter)
            </span>{" "}
            <br />
            <a
              href="https://iem-singapore-conference.s3.ap-south-1.amazonaws.com/cmic-template.docx" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
            <br /> <br />
            {/* <span className="text-blue-theme font-bold">
              Bentham Science paper template
            </span>{" "}
            <br />
            <a
              href="https://iem-singapore-conference.s3.ap-south-1.amazonaws.com/cmic-template.docx" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
            <br /> <br /> */}
            Further details about the conference themes and topics can be found
            in the{" "}
            <span className="text-blue-theme font-bold">Call for Papers</span>.
            <br /> <br />
            Call for Papers:{" "}
            <a
              href="" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Conference Brochure
          </h2>
          <div className=" text-gray-800 font-semibold">
            To download the{" "}
            <span className="text-blue-theme font-bold">
              Conference Brochure:
            </span>{" "}
            <br /> <br />
            <a
              href="#" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Publication
          </h2>
          <div className=" text-gray-800 font-semibold">
            All submitted papers will undergo a{" "}
            <span className="text-blue-theme font-bold">
              rigorous double-blind peer-review process
            </span>{" "}
            conducted by the Technical Program Committee and domain experts.
            <br /> <br /> Accepted and presented papers will be considered for
            publication as{" "}
            <span className="text-blue-theme font-bold">
              book chapters in edited volumes published by reputed international
              publishers
            </span>
            .
            <br /> <br /> Selected high-quality papers from the conference will
            be published in the following edited books:
            <br />
            <ol className="list-decimal list-outside poppins-italic text-gray-800 ml-5 flex flex-col">
              <li>
                <span className="text-blue-theme font-bold">
                  Hyperscale Edge Computing: Fundamentals, Applications and
                  Challenges
                </span>{" "}
                <br />
                Publisher: Wiley
              </li>
              <li>
                <span className="text-blue-theme font-bold">
                  Agentic AI for Autonomous Decision-Making: Next-Generation AI
                  Agents for Real-Time Analytics and Control
                </span>{" "}
                <br />
                Publisher: Bentham Science
              </li>
              <li>
                <span className="text-blue-theme font-bold">
                  Cognitive Digital Twins for Sustainable Systems: AI-Driven
                  Simulation for Environmental Resilience
                </span>{" "}
                <br />
                Publisher: Bentham Science
              </li>
              <li>
                <span className="text-blue-theme font-bold">
                  Federated Learning, AI, and Fuzzy Systems: A Synergistic
                  Approach to Smart Computing
                </span>{" "}
                <br />
                Publisher: Bentham Science
              </li>
              <li>
                <span className="text-blue-theme font-bold">
                  Human-Centered Cybersecurity: Trust, Transparency, and
                  Resilience in Digital Ecosystems
                </span>{" "}
                <br />
                Publisher: Bentham Science
              </li>
            </ol>
            <br />
            The editorial board of the conference will{" "}
            <span className="text-blue-theme font-bold">
              recommend accepted papers to the most relevant edited volume based
              on the paper's topic and track alignment
            </span>
            .
            <br /> <br />
            Authors of selected papers may be required to{" "}
            <span className="text-blue-theme font-bold">
              extend their conference papers into full-length book chapters
            </span>{" "}
            as per the guidelines of the respective publishers .
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Author Agreement Submission
          </h2>
          <div className=" text-gray-800 font-semibold">
            After receiving the{" "}
            <span className="text-blue-theme font-bold">
              paper acceptance notification
            </span>
            , authors must submit the following documents to the conference
            email: <br /> <br />
            conference email:
            <span
              className="hover:text-blue-600 cursor-pointer w-fit"
              onClick={() => navigate("#")}
            >
              [conference email here]
            </span>
            <br /> <br />
            Required documents:
            <br /> <br />
            Publishing Agreement Form (Copyright Form) –{" "}
            <a
              href="#" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
            <br />
            Permission Guidelines –{" "}
            <a
              href="#" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
            <br /> <br />
            Failure to submit these documents within the specified deadline may
            result in the{" "}
            <span className="text-blue-theme font-bold">
              exclusion of the paper from the publication process
            </span>
            .
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Mode of Presentation
          </h2>
          <div className=" text-gray-800 font-semibold">
            The conference will be conducted in a{" "}
            <span className="text-blue-theme font-bold">Hybrid Mode</span>.
            <br /> <br />
            Authors may present their accepted papers through:
            <br />
            <ul className="list-disc list-outside poppins-italic text-gray-800 ml-5 flex flex-col">
              <li>
                <span className="text-blue-theme font-bold">
                  Physical presentation
                </span>{" "}
                at the conference venue
              </li>
              <li>
                <span className="text-blue-theme font-bold">
                  Online presentation
                </span>{" "}
                through the virtual conference platform
              </li>
            </ul>
            <br />
            Authors presenting online will receive their{" "}
            <span className="text-blue-theme font-bold">
              certificates and proceedings through postal delivery or digital
              format
            </span>
            .
            <br /> <br />
            All matters related to{" "}
            <span className="text-blue-theme font-bold">
              publication, indexing, and editorial processing will remain the
              same for both presentation modes
            </span>
            .
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Presentation Template
          </h2>
          <div className=" text-gray-800 font-semibold">
            PPT Template of the Conference:{" "}
            <a
              href="#" // TODO: Update with actual LaTeX template path
              download
              className="hover:text-blue-600 w-fit"
            >
              Click here to download
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Paper Categories
          </h2>
          <div className=" text-gray-800 font-semibold">
            Regular Paper
            <br />
            <ul className="list-disc list-outside poppins-italic text-gray-800 ml-5 flex flex-col">
              <li>
                Minimum length:{" "}
                <span className="text-blue-theme font-bold">10 pages</span>
              </li>
              <li>
                Maximum length:{" "}
                <span className="text-blue-theme font-bold">
                  12 pages (2 additional pages allowed with extra charge)
                </span>
              </li>
            </ul>
            <br />
            Regular papers should present{" "}
            <span className="text-blue-theme font-bold">
              novel research contributions, innovative methodologies,
              experimental analysis, or significant theoretical developments
            </span>{" "}
            within the scope of the conference.
          </div>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl text-blue-theme-light font-bold poppins-italic pb-2">
            Review Policy
          </h2>
          <div className=" text-gray-800 font-semibold">
            The conference strictly follows the{" "}
            <span className="text-blue-theme font-bold">
              Double-Blind Review Process
            </span>
            .
            <br /> <br />
            Authors must ensure that:
            <br />
            <ul className="list-disc list-outside poppins-italic text-gray-800 ml-5 flex flex-col">
              <li>
                The manuscript does not include author names or affiliations
              </li>
              <li>Self-citations are anonymized where necessary</li>
              <li>No identifying information appears in the manuscript file</li>
            </ul>
            <br />
            Submissions not complying with the{" "}
            <span className="text-blue-theme font-bold">
              double-blind policy may be desk-rejected
            </span>
            .
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submission;

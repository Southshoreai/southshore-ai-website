import { useState, type FC } from 'react';
import { ArrowRight, CheckCircle2, ClipboardCheck, FileText, MessageCircleQuestion } from 'lucide-react';
import { Link } from 'wouter';

type Workflow = {
  id: string;
  number: string;
  title: string;
  friction: string;
  icon: typeof MessageCircleQuestion;
  stages: {
    title: string;
    description: string;
  }[];
  humanReview: string;
};

const workflows: Workflow[] = [
  {
    id: 'inquiry-follow-up',
    number: '01',
    title: 'Every inquiry gets a reply the same day.',
    friction: 'Interest gets lost in an inbox before the right person can respond.',
    icon: MessageCircleQuestion,
    stages: [
      {
        title: 'Capture the inquiry',
        description: 'Keep contact details, source, and the important context together instead of scattered through an inbox.',
      },
      {
        title: 'Route the next step',
        description: 'Make the appropriate follow-up visible to the person or team responsible for it.',
      },
      {
        title: 'Keep follow-through visible',
        description: 'See which conversations still need attention before interest disappears.',
      },
    ],
    humanReview: 'People decide how to respond and remain responsible for the relationship.',
  },
  {
    id: 'reporting',
    number: '02',
    title: 'Reporting your funders and board actually read.',
    friction: 'Updates live in too many places and are hard to turn into a clear story.',
    icon: FileText,
    stages: [
      {
        title: 'Bring approved updates together',
        description: 'Create one working view for the progress, decisions, and questions that belong in the reporting conversation.',
      },
      {
        title: 'Make the operating picture clearer',
        description: 'Surface the threads that need attention without asking leaders to rebuild the context from scratch.',
      },
      {
        title: 'Prepare a review-ready narrative',
        description: 'Shape the material into a clearer starting point for a board or funder update.',
      },
    ],
    humanReview: 'Leaders review, interpret, and approve what is ultimately shared.',
  },
  {
    id: 'trusted-answers',
    number: '03',
    title: 'Answers to the same 20 questions, without you.',
    friction: 'Staff repeatedly hunt for the same policy or process answer when work is already moving.',
    icon: ClipboardCheck,
    stages: [
      {
        title: 'Organize trusted source material',
        description: 'Bring the approved policies, procedures, and reference material into a useful structure.',
      },
      {
        title: 'Find the relevant answer',
        description: 'Make it easier to locate the right context when a recurring question comes up.',
      },
      {
        title: 'Flag gaps and uncertainty',
        description: 'Make unclear, missing, or out-of-date information visible for the right person to resolve.',
      },
    ],
    humanReview: 'The organization owns the source material and confirms what is current.',
  },
];

export const WorkflowProof: FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeWorkflow = workflows[activeIndex];
  const ActiveIcon = activeWorkflow.icon;

  return (
    <section className="workflow-proof bg-[#f2f5ef] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24" aria-labelledby="workflow-proof-heading">
      <div className="ssai-container">
        <div className="max-w-3xl">
          <p className="ssai-eyebrow">Show the work, not just the promise</p>
          <h2 id="workflow-proof-heading" className="mt-4 text-4xl font-extrabold leading-[1.04] sm:text-5xl">A clearer path from “this keeps getting in the way” to a useful next step.</h2>
          <p className="mt-5 text-lg leading-relaxed text-[#52645f]">Choose a common work bottleneck to see the kind of practical system we can shape around it. Every workflow includes a person responsible for the judgment that should stay human.</p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.76fr_1.24fr] lg:gap-7">
          <div className="workflow-proof__selector" aria-label="Illustrative workflow examples">
            {workflows.map((workflow, index) => {
              const Icon = workflow.icon;
              const isActive = index === activeIndex;

              return (
                <button
                  key={workflow.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  aria-controls="workflow-proof-detail"
                  className={`workflow-proof__selector-button ${isActive ? 'is-active' : ''}`}
                >
                  <span className="workflow-proof__selector-number" aria-hidden="true">{workflow.number}</span>
                  <span className="workflow-proof__selector-icon" aria-hidden="true"><Icon className="h-5 w-5" /></span>
                  <span className="min-w-0 text-left">
                    <span className="block text-lg font-extrabold leading-tight text-[#272d2e]">{workflow.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#596a65]">{workflow.friction}</span>
                  </span>
                  <ArrowRight className="workflow-proof__selector-arrow h-5 w-5 shrink-0" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <article id="workflow-proof-detail" className="workflow-proof__detail" aria-labelledby="workflow-proof-detail-title" key={activeWorkflow.id}>
            <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#d3dfd9] pb-6">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#136975]">Illustrative workflow {activeWorkflow.number}</p>
                <h3 id="workflow-proof-detail-title" className="mt-3 text-3xl font-extrabold leading-tight text-[#272d2e]">{activeWorkflow.title}</h3>
              </div>
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#e1f3ef] text-[#136975]" aria-hidden="true"><ActiveIcon className="h-6 w-6" /></span>
            </div>

            <ol className="workflow-proof__stages">
              {activeWorkflow.stages.map((stage, index) => (
                <li key={stage.title} className="workflow-proof__stage">
                  <span className="workflow-proof__stage-number" aria-hidden="true">0{index + 1}</span>
                  <div>
                    <h4 className="text-xl font-extrabold leading-tight text-[#272d2e]">{stage.title}</h4>
                    <p className="mt-2 text-base leading-relaxed text-[#52645f]">{stage.description}</p>
                  </div>
                  <CheckCircle2 className="workflow-proof__stage-check h-5 w-5" aria-hidden="true" />
                </li>
              ))}
            </ol>

            <div className="workflow-proof__human-review">
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-[#a44e13]">Human review &amp; judgment</p>
              <p className="mt-2 text-base font-bold leading-relaxed text-[#56361f]">{activeWorkflow.humanReview}</p>
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/services" className="ssai-button">Explore services <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/connect" className="ssai-link px-1 py-3">Bring us the work that is getting stuck <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

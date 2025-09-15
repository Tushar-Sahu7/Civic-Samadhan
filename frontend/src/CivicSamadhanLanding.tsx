'use client';

import React from 'react';
import { Accordion } from './ui/components/Accordion';
import { Avatar } from './ui/components/Avatar';
import { Badge } from './ui/components/Badge';
import { Button } from './ui/components/Button';
import { IconButton } from './ui/components/IconButton';
import { IconWithBackground } from './ui/components/IconWithBackground';
import { LinkButton } from './ui/components/LinkButton';
import { Progress } from './ui/components/Progress';
import { DefaultPageLayout } from './ui/layouts/DefaultPageLayout';
import { FeatherActivity } from '@subframe/core';
import { FeatherAlertCircle } from '@subframe/core';
import { FeatherAlertTriangle } from '@subframe/core';
import { FeatherArrowRight } from '@subframe/core';
import { FeatherCheckCircle } from '@subframe/core';
import { FeatherCheckSquare } from '@subframe/core';
import { FeatherClipboard } from '@subframe/core';
import { FeatherDroplet } from '@subframe/core';
import { FeatherGithub } from '@subframe/core';
import { FeatherLightbulb } from '@subframe/core';
import { FeatherMap } from '@subframe/core';
import { FeatherMapPin } from '@subframe/core';
import { FeatherMessageSquare } from '@subframe/core';
import { FeatherMic } from '@subframe/core';
import { FeatherMoreVertical } from '@subframe/core';
import { FeatherNavigation } from '@subframe/core';
import { FeatherRadio } from '@subframe/core';
import { FeatherShoppingBag } from '@subframe/core';
import { FeatherSlack } from '@subframe/core';
import { FeatherStar } from '@subframe/core';
import { FeatherThumbsDown } from '@subframe/core';
import { FeatherThumbsUp } from '@subframe/core';
import { FeatherTool } from '@subframe/core';
import { FeatherTwitter } from '@subframe/core';
import { FeatherUsers } from '@subframe/core';
import { FeatherYoutube } from '@subframe/core';
import { FeatherZap } from '@subframe/core';

function CivicSamadhanLanding() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex w-full flex-col items-center gap-24 py-16 shadow-lg ">
        <div className="flex w-full max-w-[1280px] flex-wrap items-center justify-between">
          <div className="flex min-w-[448px] grow shrink-0 basis-0 flex-col items-start gap-8 ">
            <div className="flex flex-col items-start gap-6">
              <div className="items-center gap-2 rounded-full px-4 py-2 inline-flex bg-gradient-to-r border border-brand-200 transition-all duration-300 cursor-pointer from-brand-500 to-purple-500">
                <IconWithBackground
                  variant="warning"
                  size="small"
                  icon={<FeatherZap />}
                />
                <span className="text-caption-bold font-caption-bold text-white">
                  AI-Powered Civic Solutions
                </span>
              </div>
              <span className="text-heading-1 font-heading-1 text-default-font">
                Fix Your Neighborhood in 30 Seconds
              </span>
              <span className="text-heading-3 font-heading-3 text-subtext-color">
                Report local issues, track progress, and join your community in
                making your city better with AI-powered insights.
              </span>
            </div>
            <div className="flex items-center gap-6">
              <Button
                className="hover:scale-105 hover:scale-105:hover hover:from-brand-600:hover hover:from-brand-600 hover:to-brand-700:hover hover:to-brand-700 hover:shadow-md:hover hover:shadow-md transition-all duration-300 shadow-sm bg-gradient-to-r from-brand-500 to-brand-600"
                size="large"
                icon={<FeatherAlertCircle />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Report an Issue Now
              </Button>
              <Button
                className="border hover:shadow-md:hover hover:shadow-md transition-all duration-300 shadow-sm border-brand-200 bg-gradient-to-r from-white"
                variant="neutral-primary"
                size="large"
                icon={<FeatherMap />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                See Issues in your area
              </Button>
            </div>
          </div>
          <div className="flex min-w-[320px] grow shrink-0 basis-0 items-center justify-center">
            <div className="flex items-start overflow-hidden rounded-2xl">
              <img
                className="h-96 grow shrink-0 basis-0 object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1711417576/shared/bsa3eonjzvhxusz9aqgr.png"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-16">
          <span className="text-heading-2 font-heading-2 text-default-font">
            How We Empower Citizen&#39;s
          </span>
          <div className="flex w-full flex-wrap items-start gap-8">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl bg-brand-100 px-8 py-8 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="large"
                icon={<FeatherMic />}
                square={true}
              />
              <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                Your Voice Matters
              </span>
              <span className="text-body font-body text-subtext-color">
                File a complaint with just one tap – text, photo, or voice.
                Every problem deserves to be heard and acted upon.
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl bg-brand-100 px-8 py-8 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="large"
                icon={<FeatherUsers />}
                square={true}
              />
              <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                Power in Numbers
              </span>
              <span className="text-body font-body text-subtext-color">
                See what others in your area are facing, and add your support
                with one click. Together, your voice becomes unstoppable.
              </span>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl bg-brand-100 px-8 py-8 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="large"
                icon={<FeatherCheckSquare />}
                square={true}
              />
              <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                Real Action, Real Results
              </span>
              <span className="text-body font-body text-subtext-color">
                From complaint to resolution – get live updates and hold
                departments accountable until your issue is completely solved.
              </span>
            </div>
          </div>
        </div>
        <span className="text-heading-2 font-heading-2 text-default-font">
          Milestones
        </span>
        <div className="flex w-full max-w-[1280px] flex-wrap gap-8 items-stretch">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-success-400 bg-success-100 px-8 py-8 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
            <div className="flex items-center gap-3">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                variant="success"
                size="medium"
                icon={<FeatherCheckCircle />}
              />
              <span className="text-heading-3 font-heading-3 text-default-font">
                10,000+ Issues Resolved
              </span>
            </div>
            <span className="text-heading-1 font-heading-1 text-default-font bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text">
              75%
            </span>
            <Progress className="h-2" value={75} />
            <span className="text-body font-body text-subtext-color">
              Faster resolution time compared to traditional methods
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-brand-400 bg-brand-100 px-8 py-8 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
            <div className="flex items-center gap-3">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="medium"
                icon={<FeatherUsers />}
              />
              <span className="text-heading-3 font-heading-3 text-default-font">
                Active Community
              </span>
            </div>
            <span className="text-heading-1 font-heading-1 text-default-font bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text">
              50K+
            </span>
            <Progress className="h-2" value={80} />
            <span className="text-body font-body text-subtext-color">
              Engaged citizens improving their neighborhoods
            </span>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-6 rounded-xl border border-solid border-warning-400 bg-warning-100 px-8 py-8 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
            <div className="flex items-center gap-3">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                variant="warning"
                size="medium"
                icon={<FeatherMapPin />}
              />
              <span className="text-heading-3 font-heading-3 text-default-font">
                Cities Covered
              </span>
            </div>
            <span className="text-heading-1 font-heading-1 text-default-font bg-gradient-to-r from-brand-600 to-brand-700 bg-clip-text">
              15+
            </span>
            <Progress className="h-2" value={60} />
            <span className="text-body font-body text-subtext-color">
              Municipalities using our platform
            </span>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-16">
          <div className="hidden items-start space-y-4 > :not([hidden]) ~ text-center">
            <span className="text-heading-2 font-heading-2 text-default-font bg-gradient-to-r from-default-font to-brand-600 bg-clip-text">
              How It Works
            </span>
          </div>
          <span className="text-heading-2 font-heading-2 text-default-font">
            How It Works
          </span>
          <div className="flex w-full flex-wrap gap-8 items-stretch">
            <div className="flex grow shrink-0 basis-0 flex-col items-center gap-6 rounded-xl px-8 py-10 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="x-large"
                icon={<FeatherClipboard />}
                square={true}
              />
              <div className="flex flex-col items-center gap-3">
                <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                  Report an Issue
                </span>
                <span className="text-body font-body text-subtext-color">
                  Submit your complaint in 30 seconds with photo and location
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center gap-6 rounded-xl px-8 py-10 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="x-large"
                icon={<FeatherActivity />}
                square={true}
              />
              <div className="flex flex-col items-center gap-3">
                <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                  Track Progress
                </span>
                <span className="text-body font-body text-subtext-color">
                  Get real-time updates as your issue is being addressed
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-center gap-6 rounded-xl px-8 py-10 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
              <IconWithBackground
                className="group:hover .group-hover:scale-105 group-hover:scale-105 transition-transform duration-300"
                size="x-large"
                icon={<FeatherCheckSquare />}
                square={true}
              />
              <div className="flex flex-col items-center gap-3">
                <span className="text-heading-3 font-heading-3 text-brand-700 transition-colors duration-300">
                  Resolution &amp; Feedback
                </span>
                <span className="text-body font-body text-subtext-color">
                  Rate the solution and help improve city services
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-16">
          <div className="flex w-full max-w-[1280px] flex-wrap gap-6 items-stretch">
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 transition-all duration-300">
              <div className="flex w-full items-center justify-between px-2 py-2">
                <div className="flex items-center gap-2">
                  <IconWithBackground
                    variant="error"
                    size="large"
                    icon={<FeatherMapPin />}
                    square={true}
                  />
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Nearby Issues
                  </span>
                </div>
                <Button
                  variant="brand-secondary"
                  size="small"
                  icon={<FeatherMapPin />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                >
                  Use My Location
                </Button>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-center justify-center overflow-hidden rounded-md border border-solid border-neutral-border">
                  <img
                    className="grow shrink-0 basis-0 rounded-md border border-solid border-neutral-border flex items-center justify-center overflow-hidden"
                    src="https://res.cloudinary.com/subframe/image/upload/v1711417576/shared/bsa3eonjzvhxusz9aqgr.png"
                  />
                </div>
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
                  <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                    <img
                      className="grow shrink-0 basis-0 self-stretch object-cover"
                      src="https://images.unsplash.com/photo-1571115764595-644a1f56a55c"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FeatherAlertTriangle className="text-body font-body text-error-600" />
                        <span className="text-heading-3 font-heading-3 text-default-font">
                          Issue #101 Large pothole on Main Street
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="error">High Priority</Badge>
                          <Badge variant="warning">In Progress</Badge>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <IconButton
                          size="small"
                          icon={<FeatherMoreVertical />}
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        />
                      </div>
                    </div>
                    <span className="text-body font-body text-subtext-color">
                      Deep pothole causing traffic hazard, multiple vehicles
                      reported damage. Requires immediate attention.
                    </span>
                    <div className="flex w-full flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FeatherUsers className="text-body font-body text-subtext-color" />
                          <div className="flex items-center gap-1">
                            <Avatar
                              size="small"
                              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                            >
                              JS
                            </Avatar>
                            <span className="text-body font-body text-subtext-color">
                              2 Staff Assigned
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          8 Complaints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMapPin className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          123 Main Street, Downtown
                        </span>
                        <div className="flex items-center gap-2">
                          <LinkButton
                            variant="brand"
                            size="small"
                            icon={<FeatherNavigation />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Get Directions
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                        Reported 2 hrs ago
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-body font-body text-subtext-color">
                          Are you facing this issue too?
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsUp />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Yes
                          </Button>
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsDown />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            No
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
                  <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                    <img
                      className="grow shrink-0 basis-0 self-stretch object-cover"
                      src="https://images.unsplash.com/photo-1572991506264-0e5eca2fa71b"
                    />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FeatherLightbulb className="text-body font-body text-warning-600" />
                        <span className="text-heading-3 font-heading-3 text-default-font">
                          Issue #89 Broken streetlight at Park Avenue
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="warning">Medium Priority</Badge>
                          <Badge>Under Review</Badge>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <IconButton
                          size="small"
                          icon={<FeatherMoreVertical />}
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        />
                      </div>
                    </div>
                    <span className="text-body font-body text-subtext-color">
                      Street light has been flickering for weeks and finally
                      went out completely. Safety concern for evening
                      pedestrians.
                    </span>
                    <div className="flex w-full flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FeatherUsers className="text-body font-body text-subtext-color" />
                          <div className="flex items-center gap-1">
                            <Avatar
                              size="small"
                              image="https://images.unsplash.com/photo-1494790108755-2616b612b950"
                            >
                              MW
                            </Avatar>
                            <span className="text-body font-body text-subtext-color">
                              1 Staff Assigned
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          3 Complaints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMapPin className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          Park Avenue &amp; 5th Street
                        </span>
                        <div className="flex items-center gap-2">
                          <LinkButton
                            variant="brand"
                            size="small"
                            icon={<FeatherNavigation />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Get Directions
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                        Reported 1 day ago
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-body font-body text-subtext-color">
                          Are you facing this issue too?
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsUp />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Yes
                          </Button>
                          <Button
                            variant="neutral-secondary"
                            icon={<FeatherThumbsDown />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            No
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-lg hover:-translate-y-1 hover:-translate-y-1:hover bg-gradient-to-br from-white transition-all duration-300">
                  <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                    <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
                      <img
                        className="grow shrink-0 basis-0 self-stretch object-cover"
                        src="https://images.unsplash.com/photo-1572991506264-0e5eca2fa71b"
                      />
                    </div>
                    <img className="grow shrink-0 basis-0 self-stretch object-cover" />
                  </div>
                  <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
                    <div className="flex w-full items-start justify-between">
                      <div className="flex items-center gap-2">
                        <FeatherDroplet className="text-body font-body text-success-600" />
                        <span className="text-heading-3 font-heading-3 text-default-font">
                          Issue #67 Water leak near bus stop
                        </span>
                        <div className="flex items-center gap-2">
                          <Badge variant="neutral">Low Priority</Badge>
                          <Badge variant="success">Resolved</Badge>
                        </div>
                      </div>
                      <div className="flex items-start justify-between">
                        <IconButton
                          size="small"
                          icon={<FeatherMoreVertical />}
                          onClick={(
                            event: React.MouseEvent<HTMLButtonElement>
                          ) => {}}
                        />
                      </div>
                    </div>
                    <span className="text-body font-body text-subtext-color">
                      Small water leak creating puddle near Central Bus Stop.
                      Issue has been successfully repaired by utilities team.
                    </span>
                    <div className="flex w-full flex-wrap items-center gap-4">
                      <div className="flex flex-wrap items-center gap-4">
                        <div className="flex items-center gap-2">
                          <FeatherUsers className="text-body font-body text-subtext-color" />
                          <div className="flex items-center gap-1">
                            <Avatar
                              size="small"
                              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                            >
                              TH
                            </Avatar>
                            <span className="text-body font-body text-subtext-color">
                              Completed by Team
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          2 Complaints
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FeatherMapPin className="text-body font-body text-subtext-color" />
                        <span className="text-body font-body text-subtext-color">
                          Central Bus Stop, Oak Street
                        </span>
                        <div className="flex items-center gap-2">
                          <LinkButton
                            variant="brand"
                            size="small"
                            icon={<FeatherNavigation />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Get Directions
                          </LinkButton>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-full items-center gap-4">
                      <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                        Reported 5 days ago
                      </span>
                      <div className="flex items-center gap-4">
                        <span className="text-body font-body text-success-600">
                          Issue resolved - How was the solution?
                        </span>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="brand-secondary"
                            icon={<FeatherStar />}
                            onClick={(
                              event: React.MouseEvent<HTMLButtonElement>
                            ) => {}}
                          >
                            Rate Solution
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="text-heading-2 font-heading-2 text-default-font">
          Testimonials
        </span>
        <div className="flex w-full max-w-[1280px] flex-col gap-6 items-stretch">
          <div className="items-start gap-6 grid grid-cols-3">
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  square={true}
                >
                  JS
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    John Smith
                  </span>
                  <Badge variant="success">Verified Resident</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;The response time has improved dramatically. Our
                neighborhood&#39;s street lighting issue was fixed within 3 days
                of reporting!&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherCheckCircle className="text-body font-body text-success-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Street Lighting Project
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1"
                  square={true}
                >
                  LM
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Lisa Martinez
                  </span>
                  <Badge variant="success">Community Leader</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;This platform has transformed how we collaborate with
                local authorities. It&#39;s transparent and efficient.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherUsers className="text-body font-body text-brand-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Community Engagement
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://res.cloudinary.com/subframe/image/upload/v1711417514/shared/ubsk7cs5hnnaj798efej.jpg"
                  square={true}
                >
                  DK
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    David Kim
                  </span>
                  <Badge variant="success">Active Citizen</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;Never thought reporting a pothole could be this easy. Got
                fixed in less than a week!&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherTool className="text-body font-body text-warning-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Road Maintenance
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1548142813-c348350df52b"
                  square={true}
                >
                  ES
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Emily Santos
                  </span>
                  <Badge variant="success">Urban Planner</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;The platform provides unprecedented insights into urban
                infrastructure challenges. It&#39;s a game-changer for city
                management.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherMap className="text-body font-body text-brand-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Urban Planning
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/fychrij7dzl8wgq2zjq9.avif"
                  square={true}
                >
                  RG
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Rachel Green
                  </span>
                  <Badge variant="success">Local Business Owner</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;As a small business owner, this platform helps me stay
                connected with local community needs and improvements.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherShoppingBag className="text-body font-body text-warning-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Local Business Impact
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch rounded-2xl border border-solid border-neutral-200 bg-white px-6 py-6 shadow-lg hover:-translate-y-0:hover hover:-translate-y-0.5 hover:-translate-y-0.5:hover transition-all duration-300">
              <div className="flex w-full items-center gap-4">
                <Avatar
                  size="large"
                  image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e"
                  square={true}
                >
                  MW
                </Avatar>
                <div className="flex flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Michael Wong
                  </span>
                  <Badge variant="success">Community Tech Advocate</Badge>
                </div>
              </div>
              <span className="text-body font-body text-subtext-color italic grow">
                &quot;Technology is bridging the gap between citizens and local
                government. This platform is proof of that.&quot;
              </span>
              <div className="flex w-full items-center justify-between">
                <FeatherRadio className="text-body font-body text-brand-500" />
                <span className="text-caption font-caption text-subtext-color">
                  Civic Technology
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
          <span className="text-heading-2 font-heading-2 text-default-font">
            Frequently Asked Questions
          </span>
          <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'How do I report an issue in my neighborhood?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      "Simply click the 'Report an Issue Now' button on the homepage. You can submit a photo, describe the problem, and specify the location in just 30 seconds.\n"
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'Is my personal information safe?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      'Absolutely. We protect your privacy and only share anonymized data with local authorities to help improve community services.\n'
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'What types of issues can I report?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      'From street lighting and road maintenance to public safety and infrastructure problems, we cover a wide range of community issues.\n'
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'How quickly are issues resolved?\n'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      "Our platform has reduced resolution times by 75%. Most issues are addressed within 1-2 weeks, and you'll receive real-time updates.\n"
                    }
                  </span>
                </div>
              </Accordion>
            </div>
            <div className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-solid border-neutral-200 bg-white px-4 py-4 transition-all duration-200">
              <Accordion
                trigger={
                  <div className="flex w-full items-center gap-2 px-3 py-2">
                    <span className="grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-default-font -tracking-[0.01em]">
                      {'Where I can track my complains?'}
                    </span>
                    <Accordion.Chevron />
                  </div>
                }
              >
                <div className="flex w-full grow shrink-0 basis-0 flex-col items-start gap-2 px-3 py-2">
                  <span className="w-full whitespace-pre-wrap font-['Inter'] text-[18px] font-[500] leading-[28px] text-subtext-color -tracking-[0.01em]">
                    {
                      'No technical skills required. Our platform is designed to be user-friendly and intuitive, allowing anyone to report issues in just a few clicks.\n'
                    }
                  </span>
                </div>
              </Accordion>
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[768px] flex-col items-center gap-6 rounded-3xl bg-default-background px-12 py-12 shadow-lg">
          <span className="text-heading-1 font-heading-1 text-default-font text-center">
            Your City Needs Your Voice
          </span>
          <span className="text-body font-body text-subtext-color text-center">
            Join thousands of citizens making their communities better, one
            report at a time
          </span>
          <Button
            className="hover:shadow-lg:hover hover:shadow-lg shadow-md transition-all duration-200"
            size="large"
            icon={<FeatherArrowRight />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Get Started Now
          </Button>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 border-t border-solid border-neutral-border bg-default-background px-6 py-12">
          <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
            <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch">
              <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-center justify-center gap-4">
                <div className="flex grow shrink-0 basis-0 flex-col items-center justify-center gap-2">
                  <img
                    className="h-12 w-12 flex-none object-cover"
                    src="https://res.cloudinary.com/subframe/image/upload/v1757931375/uploads/11326/atljsxvavonvkzgwwtmx.svg"
                  />
                  <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font text-center">
                    Civic Samadhan
                  </span>
                </div>
              </div>
              <div className="flex w-full items-center justify-center gap-2">
                <IconButton
                  icon={<FeatherTwitter />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  icon={<FeatherGithub />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  icon={<FeatherSlack />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
                <IconButton
                  icon={<FeatherYoutube />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch">
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Product
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Features
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Integrations
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Docs
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Download
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Company
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  About us
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Blog
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Customers
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Resources
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Community
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Contact
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Privacy Policy
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Terms of Service
                </span>
              </div>
              <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                  Developers
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  API
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Status
                </span>
                <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                  Github
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default CivicSamadhanLanding;

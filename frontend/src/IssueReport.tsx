'use client';

import React from 'react';
import { Avatar } from './ui/components/Avatar';
import { Badge } from './ui/components/Badge';
import { Button } from './ui/components/Button';
import { IconWithBackground } from './ui/components/IconWithBackground';
import { FeatherAlertTriangle } from '@subframe/core';
import { FeatherBarChart } from '@subframe/core';
import { FeatherCheck } from '@subframe/core';
import { FeatherChevronDown } from '@subframe/core';
import { FeatherCircle } from '@subframe/core';
import { FeatherClipboard } from '@subframe/core';
import { FeatherClock } from '@subframe/core';
import { FeatherMapPin } from '@subframe/core';
import { FeatherMousePointer2 } from '@subframe/core';
import { FeatherPhone } from '@subframe/core';
import { FeatherPrinter } from '@subframe/core';
import { FeatherTag } from '@subframe/core';
import { FeatherUserPlus } from '@subframe/core';
import { FeatherUsers } from '@subframe/core';
import { DefaultPageLayout } from './ui/layouts/DefaultPageLayout';

function IssueReport() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items-start gap-6 bg-default-background py-12 overflow-auto">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <IconWithBackground size="medium" icon={<FeatherMapPin />} />
              <span className="text-heading-2 font-heading-2 text-default-font">
                Issue #101 - Large pothole on Main Street
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="neutral-secondary"
                icon={<FeatherPrinter />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Export
              </Button>
              <Button
                icon={<FeatherMousePointer2 />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Get Direction
              </Button>
            </div>
          </div>
          <div className="flex w-full items-center justify-between rounded-md border border-solid border-neutral-border bg-default-background px-6 py-4 shadow-sm">
            <div className="flex items-center gap-2">
              <IconWithBackground variant="success" size="small" />
              <span className="text-body-bold font-body-bold text-default-font">
                Acknowledged
              </span>
            </div>
            <div className="flex h-0.5 items-start bg-success-500 flex-1 mx-4" />
            <div className="flex items-center gap-2">
              <IconWithBackground variant="success" size="small" />
              <span className="text-body-bold font-body-bold text-default-font">
                Staff Assigned
              </span>
            </div>
            <div className="flex h-0.5 items-start bg-success-500 flex-1 mx-4" />
            <div className="flex items-center gap-2">
              <IconWithBackground
                variant="warning"
                size="small"
                icon={<FeatherClock />}
              />
              <span className="text-body-bold font-body-bold text-warning-700">
                In Progress
              </span>
            </div>
            <div className="flex h-0.5 items-start bg-neutral-200 flex-1 mx-4" />
            <div className="flex items-center gap-2">
              <IconWithBackground
                variant="neutral"
                size="small"
                icon={<FeatherCircle />}
              />
              <span className="text-body font-body text-subtext-color">
                Resolved
              </span>
            </div>
          </div>
          <div className="flex h-64 w-full flex-none flex-col items-start gap-2 overflow-hidden rounded-md bg-neutral-100">
            <img
              className="w-full grow shrink-0 basis-0 object-cover"
              src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=2000&q=80"
            />
          </div>
        </div>
        <div className="flex w-full flex-wrap items-start gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Issue Details
              </span>
              <Badge
                variant="error"
                icon={<FeatherAlertTriangle />}
                iconRight={<FeatherChevronDown />}
              >
                High Priority
              </Badge>
            </div>
            <div className="flex w-full flex-col items-start gap-3 py-4">
              <div className="flex w-full items-center gap-2">
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <FeatherMapPin className="text-body font-body text-subtext-color" />
                  <span className="text-body font-body text-subtext-color">
                    Location
                  </span>
                </div>
                <span className="text-body font-body text-default-font">
                  123 Main Street, Downtown
                </span>
              </div>
              <div className="flex w-full items-center gap-2">
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <FeatherClock className="text-body font-body text-subtext-color" />
                  <span className="text-body font-body text-subtext-color">
                    Reported
                  </span>
                </div>
                <span className="text-body font-body text-default-font">
                  2 hours ago
                </span>
              </div>
              <div className="flex w-full items-center gap-2">
                <div className="flex grow shrink-0 basis-0 items-center gap-2">
                  <FeatherTag className="text-body font-body text-subtext-color" />
                  <span className="text-body font-body text-subtext-color">
                    Category
                  </span>
                </div>
                <Badge iconRight={<FeatherChevronDown />}>Road Pothole</Badge>
              </div>
              <div className="flex w-full items-center gap-2">
                <FeatherBarChart className="text-body font-body text-subtext-color" />
                <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                  Progress Status
                </span>
                <Badge
                  variant="warning"
                  icon={<FeatherClock />}
                  iconRight={<FeatherChevronDown />}
                >
                  In Progress
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Assigned Staff
              </span>
              <Button
                variant="neutral-secondary"
                size="small"
                icon={<FeatherUserPlus />}
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Assign More
              </Button>
            </div>
            <div className="flex w-full flex-col items-start gap-4 py-4">
              <div className="flex w-full items-center gap-4">
                <Avatar image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=100&q=80">
                  T
                </Avatar>
                <div className="flex grow shrink-0 basis-0 flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Tom Wilson
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Maintenance Lead
                  </span>
                </div>
                <Badge variant="success" icon={<FeatherCheck />}>
                  Primary
                </Badge>
              </div>
              <div className="flex w-full items-center gap-4">
                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg">
                  S
                </Avatar>
                <div className="flex grow shrink-0 basis-0 flex-col items-start">
                  <span className="text-body-bold font-body-bold text-default-font">
                    Sarah Chen
                  </span>
                  <span className="text-body font-body text-subtext-color">
                    Electrical Specialist
                  </span>
                </div>
                <Badge variant="neutral">Support</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start gap-6">
          <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm w-1/2">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Public Complaints
              </span>
            </div>
            <div className="flex w-full flex-col items-start">
              <div className="flex w-full items-start gap-4 border-b border-solid border-neutral-border py-4">
                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417513/shared/kwut7rhuyivweg8tmyzl.jpg">
                  J
                </Avatar>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-body-bold font-body-bold text-default-font">
                        James Thompson
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        +91 98765 43210
                      </span>
                    </div>
                    <Button
                      variant="brand-secondary"
                      icon={<FeatherPhone />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Call
                    </Button>
                  </div>
                  <span className="text-caption font-caption text-subtext-color">
                    2 hrs ago
                  </span>
                  <span className="text-body font-body text-default-font">
                    The pothole near the intersection is causing significant
                    damage to vehicles. It&#39;s a major safety hazard and needs
                    immediate attention.
                  </span>
                </div>
              </div>
              <div className="flex w-full items-start gap-4 border-b border-solid border-neutral-border py-4">
                <Avatar image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/m0kfajqpwkfief00it4v.jpg">
                  M
                </Avatar>
                <div className="flex grow shrink-0 basis-0 flex-col items-start gap-2">
                  <div className="flex w-full items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-body-bold font-body-bold text-default-font">
                        Maria Garcia
                      </span>
                      <span className="text-caption font-caption text-subtext-color">
                        +91 87654 32109
                      </span>
                    </div>
                    <Button
                      variant="brand-secondary"
                      icon={<FeatherPhone />}
                      onClick={(
                        event: React.MouseEvent<HTMLButtonElement>
                      ) => {}}
                    >
                      Call
                    </Button>
                  </div>
                  <span className="text-caption font-caption text-subtext-color">
                    3 hrs ago
                  </span>
                  <span className="text-body font-body text-default-font">
                    The road condition is terrible. This pothole is getting
                    worse and creating a dangerous situation for cyclists and
                    drivers alike.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex w-full items-center justify-between">
              <span className="text-heading-3 font-heading-3 text-default-font">
                Activity Log
              </span>
            </div>
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2">
                <IconWithBackground size="medium" icon={<FeatherClipboard />} />
                <div className="flex flex-col items-start px-2 py-2">
                  <span className="text-caption font-caption text-default-font">
                    Issue Registered
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    2 hrs
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconWithBackground
                  variant="warning"
                  size="medium"
                  icon={<FeatherAlertTriangle />}
                />
                <div className="flex flex-col items-start px-2 py-2">
                  <span className="text-caption font-caption text-default-font">
                    Priority Updated
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    1 hr
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <IconWithBackground
                  variant="success"
                  size="medium"
                  icon={<FeatherUsers />}
                />
                <div className="flex flex-col items-start px-2 py-2">
                  <span className="text-caption font-caption text-default-font">
                    Staff Assigned
                  </span>
                  <span className="text-caption font-caption text-subtext-color">
                    30 min
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default IssueReport;

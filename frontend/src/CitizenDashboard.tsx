'use client';

import React from 'react';
import { Avatar } from './ui/components/Avatar';
import { Badge } from './ui/components/Badge';
import { Button } from './ui/components/Button';
import { IconButton } from './ui/components/IconButton';
import { IconWithBackground } from './ui/components/IconWithBackground';
import { LinkButton } from './ui/components/LinkButton';
import { Progress } from './ui/components/Progress';
import { Tabs } from './ui/components/Tabs';
import { FeatherAlertTriangle } from '@subframe/core';
import { FeatherBell } from '@subframe/core';
import { FeatherCheckCircle } from '@subframe/core';
import { FeatherClock } from '@subframe/core';
import { FeatherFileText } from '@subframe/core';
import { FeatherFilter } from '@subframe/core';
import { FeatherList } from '@subframe/core';
import { FeatherMap } from '@subframe/core';
import { FeatherMapPin } from '@subframe/core';
import { FeatherMessageCircle } from '@subframe/core';
import { FeatherMessageSquare } from '@subframe/core';
import { FeatherMoreVertical } from '@subframe/core';
import { FeatherNavigation } from '@subframe/core';
import { FeatherPlusCircle } from '@subframe/core';
import { FeatherSettings } from '@subframe/core';
import { FeatherStar } from '@subframe/core';
import { FeatherThumbsDown } from '@subframe/core';
import { FeatherThumbsUp } from '@subframe/core';
import { FeatherTrash2 } from '@subframe/core';
import { FeatherUsers } from '@subframe/core';
import { FeatherZap } from '@subframe/core';
import { DefaultPageLayout } from './ui/layouts/DefaultPageLayout';

function CitizenDashboard() {
  return (
    <DefaultPageLayout>
      <div className="container max-w-none flex h-full w-full flex-col items- gap-8 bg-default-background py-12 ">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Avatar
              size="large"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a"
            >
              RS
            </Avatar>
            <div className="flex flex-col items-start gap-1">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Welcome back, Rajesh
              </span>
              <span className="text-body font-body text-subtext-color">
                Your Civic Samadhan Hub
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="neutral-secondary"
              icon={<FeatherBell />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Notifications
            </Button>
            <Button
              variant="neutral-secondary"
              icon={<FeatherSettings />}
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              Settings
            </Button>
          </div>
        </div>
        <div className="flex w-full flex-wrap items-center gap-4">
          <Button
            size="large"
            icon={<FeatherPlusCircle />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Report New Issue
          </Button>
          <Button
            variant="neutral-primary"
            size="large"
            icon={<FeatherMap />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            View Nearby Issues
          </Button>
          <Button
            variant="neutral-primary"
            size="large"
            icon={<FeatherList />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Track My Issues
          </Button>
          <Button
            variant="neutral-primary"
            size="large"
            icon={<FeatherStar />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Give Feedback
          </Button>
        </div>
        <div className="flex w-full flex-wrap gap-6 items-stretch">
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex items-center gap-2">
              <IconWithBackground size="small" icon={<FeatherFileText />} />
              <span className="text-heading-3 font-heading-3 text-default-font">
                Total Complains Filed
              </span>
            </div>
            <span className="text-heading-1 font-heading-1 text-default-font">
              12
            </span>
            <Progress className="h-2" value={75} />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex items-center gap-2">
              <IconWithBackground
                variant="success"
                size="small"
                icon={<FeatherCheckCircle />}
              />
              <span className="text-heading-3 font-heading-3 text-default-font">
                Resolved Complains
              </span>
            </div>
            <span className="text-heading-1 font-heading-1 text-default-font">
              8
            </span>
            <Progress className="h-2" value={66} />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6">
            <div className="flex items-center gap-2">
              <IconWithBackground
                variant="warning"
                size="small"
                icon={<FeatherClock />}
              />
              <span className="text-heading-3 font-heading-3 text-default-font">
                Pending Complains
              </span>
            </div>
            <span className="text-heading-1 font-heading-1 text-default-font">
              4
            </span>
            <Progress className="h-2" value={33} />
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <Tabs>
            <Tabs.Item active={true}>Active Issues (3)</Tabs.Item>
            <Tabs.Item>Resolved (8)</Tabs.Item>
            <Tabs.Item>Closed (2)</Tabs.Item>
          </Tabs>
          <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
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
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <span className="text-body font-body text-subtext-color">
                Deep pothole causing traffic hazard, multiple vehicles reported
                damage. Requires immediate attention.
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
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover"
                src="https://images.unsplash.com/photo-1515378791036-0648a814c963"
              />
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
              <div className="flex w-full items-start justify-between">
                <div className="flex items-center gap-2">
                  <FeatherZap className="text-body font-body text-warning-600" />
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Issue #102 Broken streetlight on Oak Avenue
                  </span>
                  <div className="flex items-center gap-2">
                    <Badge variant="warning">Medium Priority</Badge>
                    <Badge>Assigned</Badge>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <IconButton
                    size="small"
                    icon={<FeatherMoreVertical />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <span className="text-body font-body text-subtext-color">
                Street lamp not functioning, making area unsafe for pedestrians
                at night. Bulb replacement needed.
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
                        MK
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
                    456 Oak Avenue, Riverside
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
                  Reported 5 hrs ago
                </span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
            <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover"
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13"
              />
            </div>
            <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
              <div className="flex w-full items-start justify-between">
                <div className="flex items-center gap-2">
                  <FeatherTrash2 className="text-body font-body text-neutral-600" />
                  <span className="text-heading-3 font-heading-3 text-default-font">
                    Issue #103 Overflowing garbage bin at City Park
                  </span>
                  <div className="flex items-center gap-2">
                    <Badge variant="neutral">Low Priority</Badge>
                    <Badge variant="neutral">Scheduled</Badge>
                  </div>
                </div>
                <div className="flex items-start justify-between">
                  <IconButton
                    size="small"
                    icon={<FeatherMoreVertical />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  />
                </div>
              </div>
              <span className="text-body font-body text-subtext-color">
                Public waste bin near playground is overflowing, attracting
                pests. Regular collection schedule needed.
              </span>
              <div className="flex w-full flex-wrap items-center gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-2">
                    <FeatherUsers className="text-body font-body text-subtext-color" />
                    <Avatar
                      size="small"
                      image="https://res.cloudinary.com/subframe/image/upload/v1711417512/shared/btvntvzhdbhpulae3kzk.jpg"
                    >
                      MK
                    </Avatar>
                    <span className="text-body font-body text-subtext-color">
                      1 Staff Assigned
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                  <span className="text-body font-body text-subtext-color">
                    12 Complaints
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <FeatherMapPin className="text-body font-body text-subtext-color" />
                  <span className="text-body font-body text-subtext-color">
                    City Park, Playground Area
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
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-between">
          <span className="text-heading-3 font-heading-3 text-default-font">
            Nearby Issues
          </span>
          <Button
            variant="neutral-tertiary"
            icon={<FeatherFilter />}
            onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
          >
            Filter
          </Button>
        </div>
        <div className="flex w-full flex-col items-start gap-4 rounded-md border border-solid border-neutral-border bg-neutral-50 px-6 py-6">
          <img
            className="h-64 w-full flex-none rounded-md object-cover"
            src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
          />
          <div className="flex w-full items-center justify-between">
            <span className="text-body-bold font-body-bold text-default-font">
              5 issues reported in your area
            </span>
            <Button
              variant="neutral-tertiary"
              size="small"
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              View All
            </Button>
          </div>
        </div>
        <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
          <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
            <img
              className="grow shrink-0 basis-0 self-stretch object-cover"
              src="https://images.unsplash.com/photo-1597149406619-b2dcddbc9faf"
            />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-2">
                <FeatherAlertTriangle className="text-body font-body text-error-600" />
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Issue #104 Water leak at intersection
                </span>
                <div className="flex items-center gap-2">
                  <Badge variant="warning">Medium Priority</Badge>
                  <Badge variant="success">Resolved</Badge>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <IconButton
                  size="small"
                  icon={<FeatherMoreVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <span className="text-body font-body text-subtext-color">
              Underground pipe burst causing water to pool at intersection.
              Water department completed repairs yesterday.
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
                      TC
                    </Avatar>
                    <span className="text-body font-body text-subtext-color">
                      Water Dept Team
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FeatherMessageSquare className="text-body font-body text-subtext-color" />
                <span className="text-body font-body text-subtext-color">
                  15 Complaints
                </span>
              </div>
              <div className="flex items-center gap-2">
                <FeatherMapPin className="text-body font-body text-subtext-color" />
                <span className="text-body font-body text-subtext-color">
                  Pine St &amp; 2nd Avenue
                </span>
                <div className="flex items-center gap-2">
                  <LinkButton
                    variant="brand"
                    size="small"
                    icon={<FeatherNavigation />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Get Directions
                  </LinkButton>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4">
              <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                Reported 3 days ago
              </span>
              <div className="flex items-center gap-4">
                <span className="text-body font-body text-subtext-color">
                  Are you facing this issue too?
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-secondary"
                    icon={<FeatherThumbsUp />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    icon={<FeatherThumbsDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-start gap-6 rounded-md border border-solid border-neutral-border bg-default-background px-6 py-6 shadow-sm">
          <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
            <div className="flex h-32 w-32 flex-none items-center justify-center overflow-hidden rounded-md">
              <img
                className="grow shrink-0 basis-0 self-stretch object-cover"
                src="https://images.unsplash.com/photo-1597149406619-b2dcddbc9faf"
              />
            </div>
            <img className="grow shrink-0 basis-0 self-stretch object-cover" />
          </div>
          <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4">
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-2">
                <FeatherAlertTriangle className="text-body font-body text-error-600" />
                <span className="text-heading-3 font-heading-3 text-default-font">
                  Issue #105 Graffiti removal needed on bus stop
                </span>
                <div className="flex items-center gap-2">
                  <Badge variant="neutral">Low Priority</Badge>
                  <Badge>New</Badge>
                </div>
              </div>
              <div className="flex items-start justify-between">
                <IconButton
                  size="small"
                  icon={<FeatherMoreVertical />}
                  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                />
              </div>
            </div>
            <span className="text-body font-body text-subtext-color">
              Vandalism on public transit shelter requires cleaning.
              Non-offensive but unsightly graffiti.
            </span>
            <div className="flex w-full flex-wrap items-center gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <FeatherUsers className="text-body font-body text-subtext-color" />
                  <div className="flex items-center gap-1">
                    <Avatar size="small">N</Avatar>
                    <span className="text-body font-body text-subtext-color">
                      Unassigned
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
                  Bus Stop #47, Elm Street
                </span>
                <div className="flex items-center gap-2">
                  <LinkButton
                    variant="brand"
                    size="small"
                    icon={<FeatherNavigation />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Get Directions
                  </LinkButton>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center gap-4">
              <span className="grow shrink-0 basis-0 text-body font-body text-subtext-color">
                Reported 6 hrs ago
              </span>
              <div className="flex items-center gap-4">
                <span className="text-body font-body text-subtext-color">
                  Are you facing this issue too?
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    variant="neutral-secondary"
                    icon={<FeatherThumbsUp />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    Yes
                  </Button>
                  <Button
                    variant="neutral-secondary"
                    icon={<FeatherThumbsDown />}
                    onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
                  >
                    No
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full items-center justify-end">
          <div className="flex items-center gap-2 rounded-full border border-solid border-neutral-border bg-default-background px-4 py-2 shadow-sm">
            <FeatherMessageCircle className="text-body font-body text-brand-700" />
            <span className="text-body font-body text-brand-700">
              Need help? Chat with our AI assistant
            </span>
          </div>
        </div>
      </div>
    </DefaultPageLayout>
  );
}

export default CitizenDashboard;
